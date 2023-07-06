"use client";

import JoinForm from "./components/JoinForm";
import { Slide } from "react-awesome-reveal";
import IDungeon from "./interfaces/IDungeon";
import DungeonCard from "./components/DungeonCard";
import IJob from "./interfaces/IJob";
import JobCard from "./components/JobCard";

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

  const jobs: IJob[] = [
    {
      image: "/job_a.png",
      name: "EARTH WARDEN",
      lore: "A stoic and resilient warrior, is a master of harnessing the power of the earth element. Bound to the very essence of the land, they protect and uphold the balance of nature.",
      skills: [
        {
          title: "Stonewall Shield",
          desc: "Summons a mighty stone barrier, providing unyielding defense against physical attacks and deflecting projectiles.",
          image: "/skill_e.png"
        },
        {
          title: "Quakestrike",
          desc: "Unleashing their connection to the earth, the legend slams their weapon into the ground, causing a seismic shockwave that damages enemies and temporarily immobilizes them, shaking the very foundations of their adversaries' resolve.",
          image: "/skill_f.png"
        }
      ]
    },
    {
      image: "/job_b.png",
      name: "FLAME ENFORCER",
      lore: "Ignis Pyroclast, an embodiment of fiery power, harnesses the destructive force of flames as a formidable Fire Enforcer, wielding their infernal abilities to protect and purge.",
      skills: [
        {
          title: "Inferno Blast",
          desc: "The legend conjures a devastating wave of flames, engulfing enemies in a fiery conflagration, causing widespread damage over a wide area.",
          image: "/skill_b.png"
        },
        {
          title: "Flame Barrier",
          desc: "Calling upon their affinity with fire, the legend erects a scorching barrier of flames, providing both defense and offense. The barrier damages nearby foes while shielding the Flame Enforcer from harm, making it an intimidating obstacle to overcome.",
          image: "/skill_a.png"
        }
      ]
    },
    {
      image: "/job_c.png",
      name: "RADIANT HEALER",
      lore: "Radiant Healer bathes their allies in radiant light, mending their wounds and rejuvenating their spirits. This potent healing ability provides a burst of instant restoration to multiple targets.",
      skills: [
        {
          title: "Luminous Renewal",
          desc: "The legend bathes their allies in radiant light, mending their wounds and rejuvenating their spirits. This potent healing ability provides a burst of instant restoration to multiple targets.",
          image: "/skill_h.png"
        },
        {
          title: "Halo of Serenity",
          desc: "Embracing their celestial connection, the legend creates a luminous halo above their head, radiating healing energies. The halo emits a soothing aura that gradually restores the health of nearby allies over time, offering sustained healing support in the midst of battle.",
          image: "/skill_g.png"
        }
      ]
    },
    {
      image: "/job_d.png",
      name: "BRAWLER SENTINEL",
      lore: "A relentless and agile warrior, specializes in the art of hand-to-hand combat, relying on precision strikes and swift maneuvers to overpower opponents in close-quarters battles.",
      skills: [
        {
          title: "Thunderous Impact",
          desc: "Delivers a devastating punch or kick infused with raw power, generating a shockwave that ripples through the ground, stunning nearby foes and dealing significant damage.",
          image: "/skill_c.png"
        },
        {
          title: "Shadow Dance",
          desc: "Brawler Sentinel enters a state of unparalleled swiftness and fluidity. Their movements become a blur as they dodge incoming attacks with grace, allowing them to swiftly counter-attack and exploit the vulnerabilities of their opponents.",
          image: "/skill_d.png"
        }
      ]
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
        <div className="text-center italic text-slate-700">
          And much more secrets to unveil...
        </div>
      </section>

      <section
        className="flex flex-col gap-10 justify-evenly px-24 py-16 bg-slate-300"
      >
        <div>
          <Slide
            direction="left"
            triggerOnce={true}
            className="font-bold text-3xl text-center"
          >
            <p>CHOOSE</p>
          </Slide>
          <Slide
            direction="right"
            triggerOnce={true}
            className="italic text-xl text-center"
          >
            <p>JOBS THAT FIT YOUR STYLE</p>
          </Slide>
        </div>

        <div
          className="flex flex-col gap-24 py-10"
        >
          {
            jobs.map((j, k) => {
              return <JobCard key={k} {...j} />
            })
          }
        </div>

        <div className="text-center italic text-slate-700">
          These are just a few of the 20+ jobs to master!
        </div>
      </section>
    </main>
  )
}
