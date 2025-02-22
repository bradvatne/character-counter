import Image from "next/image";
import React from "react";

type StatContainerProps = {
  count: number;
  label: string;
  color: string;
  image: string;
};

const StatContainer = ({ count, label, color, image }: StatContainerProps) => {
  return (
    <div className={` w-full ${color} rounded-[12px] relative overflow-hidden`}>
      <div className="flex justify-between">
        <div className="flex flex-col pl-[16px] justify-center align-middle gap-[8px]">
          <p className="text-preset-1-mobile">{count}</p>
          <p className="text-preset-3">{label}</p>
        </div>
        <Image
          src={image}
          alt="Design Graphic"
          width={150}
          height={150}
          className="justify-self-end"
        />
      </div>
    </div>
  );
};

export default StatContainer;
