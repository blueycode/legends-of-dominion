"use client";

import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import IJob from "../interfaces/IJob";

const JobCard = (props: IJob) => {
  const { image, name, lore, skills } = props;
  
  return (
    <Slide
      triggerOnce={true}
      direction="up"
      fraction={0.6}
    >
      <div className="flex gap-20 items-center">
        <Image
          src={image}
          height="400"
          width="400"
          alt="Job"
        />

        <div
          className="flex flex-col gap-2"
        >
          <b className="text-2xl">
            {name}
          </b>
          <div className="italic text-slate-700">
            {lore}
          </div>

          <div
            className="flex flex-col gap-5 mt-5"
          >
            <b className="text-xl">SKILLS</b>
            <div
              className="flex flex-col gap-3"
            >
              {
                skills.map((s, k) => {
                  return (
                    <div
                      key={k}
                      className="flex gap-4 items-center"
                    >
                      <Image
                        src={s.image}
                        height={64}
                        width={64}
                        alt="Skill"
                        className="h-16"
                      />
                      <span>
                        <b>{s.title}</b> {s.desc}
                      </span>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export default JobCard;