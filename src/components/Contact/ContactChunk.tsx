import { Contact } from "@/types/types";
import Link from "next/link";
import React from "react";

type Props = {
  contact: Contact;
};

const ContactChunk = ({ contact }: Props) => (
  <div className="flex flex-col">
    <h2 className="font-extrabold text-default-600">{contact.name}</h2>
    <Link href={contact.url} className="text-small text-default-500">
      {contact.urlText}
    </Link>
  </div>
);

export default ContactChunk;
