import React from "react";
import Image from "next/image";
import { dashboardURL } from "utils/constants";

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <Image
        src={`${dashboardURL}${picture?.formats.thumbnail.url}`}
        width={50}
        height={50}
        alt={picture.caption}
        className="object-cover w-12 h-12 rounded-full grayscale"
      />
      <div className="text-xl font-bold ml-4">{name}</div>
    </div>
  );
}
