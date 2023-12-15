import React from "react";
import contacts from "../../constants/contacts.json";
import ContactChunk from "./ContactChunk";

const ContactCard = () => (
  <div className="flex flex-col gap-4">
    {contacts.map((contact, index) => (
      <ContactChunk key={index} contact={contact} />
    ))}
  </div>
);

export default ContactCard;
