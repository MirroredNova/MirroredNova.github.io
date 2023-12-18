import React from "react";
import Link from "next/link";
import contacts from "../../constants/contacts.json";
import ContactChunk from "./ContactChunk";

const ContactCard = () => (
  <div className="flex flex-col gap-4">
    <p className="text-default-500">
      Feel free to reach out to me with any business inquiries, or take some
      time to browse my social media links and public projects.
    </p>
    {contacts.map((contact, index) => (
      <ContactChunk key={index} contact={contact} />
    ))}
    <Link
      href="/NateWiltzius_FrontendResume.pdf"
      className="font-extrabold text-default-600"
    >
      Official Resume Link
    </Link>
  </div>
);

export default ContactCard;
