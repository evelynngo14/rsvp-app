"use server";
import postgres from "postgres";
import { RSVPFormSchema } from "@/app/lib/schemas/rsvp";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function createRSVP(formData: FormData) {
  //convert FormData => plain object
  const data = Object.fromEntries(formData.entries());
  //validate and parse with zod
  const parsed = RSVPFormSchema.parse(data);
  console.log("RSVP recieved:", parsed);

  const submissionDate = new Date().toISOString();

  await sql`
    INSERT INTO rsvps (first_name, last_name, email, phone_num, attending, guests, message, event_date, submission_date)
    VALUES (${parsed.firstName}, ${parsed.lastName}, ${parsed.email}, ${parsed.phoneNum}, ${parsed.attending}, ${parsed.guests}, ${parsed.message}, ${parsed.eventDate}, ${submissionDate})
    RETURNING *
  `;

  revalidatePath("/dashboard/create-form");
  redirect("/dashboard");
}
