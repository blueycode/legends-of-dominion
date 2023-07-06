"use client";

import JoinForm from "./components/JoinForm";
import { Slide } from "react-awesome-reveal";
import IDungeon from "./interfaces/IDungeon";
import DungeonCard from "./components/DungeonCard";

export default function Home() {
  const dungeons: IDungeon[] = [
    {
      image: "/land1.PNG",
      title: "MYSTIC'S REFUGE",
      lore: "A hidden sanctuary where powerful mages gather, protecting ancient artifacts and studying forbidden arcane arts."
    },
    {
      image: "/land2.PNG",
      title: "FUNGAL FIELDS",
      lore: "In the expansive plains, colossal mushroom houses rise, sheltering a peaceful community of nature-worshipping druids and whimsical forest creatures."
    },
    {
      image: "/land3.PNG",
      title: "CELESTIAL STRONGHOLD",
      lore: "Atop ethereal floating cliffs, the Celestial Stronghold stands, a majestic fortress housing enlightened sages and guardians of ancient celestial knowledge."
    },
    {
      image: "/land4.PNG",
      title: "SHADOW'S EMBRACE",
      lore: "A forbidden realm veiled in darkness, home to secretive assassins who train in deadly arts and plan covert operations."
    }
  ];

  return (
    <main className="flex flex-col text-slate-900 bg-slate-200">
      <section className="flex h-fit bg-castle-bg bg-no-repeat bg-cover px-24 py-8">
        <JoinForm />
      </section>

      <section
        className="flex flex-col gap-10 justify-evenly px-24 py-16"
      >
        <div>
          <Slide
            direction="left"
            triggerOnce={true}
            className="font-bold text-3xl text-center"
          >
            <p>EXPLORE</p>
          </Slide>
          <Slide
            direction="right"
            triggerOnce={true}
            className="italic text-xl text-center"
          >
            <p>FORGOTTEN LANDS</p>
          </Slide>
        </div>
        <div className="grid grid-cols-2 gap-24">
          {
            dungeons.map((d, k) => {
              return <DungeonCard key={k} {...d} />
            })
          }
        </div>
      </section>
    </main>
  )
}
