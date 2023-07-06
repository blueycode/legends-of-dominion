"use client";

import { Fade } from "react-awesome-reveal";
import IDungeon from "../interfaces/IDungeon";
import Image from "next/image";

const DungeonCard = (props: IDungeon) => {
  const { image, title, lore } = props;

  return (
    <Fade
      triggerOnce={true}
      fraction={0.6}
    >
      <div
        className="flex gap-7 items-center"
      >
        <Image
          src={image}
          height="176"
          width="176"
          alt="Land"
          className="h-44 w-44 rounded-2xl border-4 border-slate-50 shadow-2xl"
        />
        <div className="flex flex-col gap-2">
          <b className="text-xl">{title}</b>
          <div className="italic text-slate-700">{lore}</div>
        </div>
      </div>
    </Fade>
  );
}

export default DungeonCard;