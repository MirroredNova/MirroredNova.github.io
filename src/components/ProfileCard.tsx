import { User } from "@nextui-org/react";
import React from "react";

const ProfileCard = () => (
  <User
    name="Nate Wiltzius"
    description="Highly Functional Full Stack Developer"
    avatarProps={{
      src: "/avatar.jpg",
      className: "w-16 h-16",
    }}
  />
);

export default ProfileCard;
