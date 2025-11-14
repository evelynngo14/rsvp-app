import { z } from "zod";

export const RSVPFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().optional(),
  email: z.string().email("Invalid email"),
  phoneNum: z.string().regex(/^\+?[0-9]{7,15}$/, "Invalid phone number"),
  attending: z.enum(["yes", "no", "maybe"]),
  guests: z.coerce.number().min(0).default(0),
  message: z.string().optional(),
  eventDate: z.string(),
  date: z.string(),
});
