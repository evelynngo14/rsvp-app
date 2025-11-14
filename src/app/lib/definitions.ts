export type RSVP = {
  event_id: string;
  host_id: string;
  date: string;
  event_date: string;
  invites: number;
  location: string;
};

export type RSVPForm = {
  event_id: string;
  attendee_id: string;
  date: string;
  event_date: string;
  location: string;
  rsvp_status: "yes" | "no" | "maybe";
};

export type Attendee = {
  attendee_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
};

export type Host = {
  host_id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone_number: string;
  username: string;
  password: string;
  events: string[];
};

export type Event = {
  event_id: string;
  host_id: string;
  invites: number;
  attendees: number;
};
