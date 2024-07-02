import { nanoid } from "nanoid";
import img1 from "../../assets/crew/image-douglas-hurley.png";
import img2 from "../../assets/crew/image-mark-shuttleworth.png";
import img3 from "../../assets/crew/image-victor-glover.png";
import img4 from "../../assets/crew/image-anousheh-ansari.png";

export const crewData = [
  {
    id: nanoid(),
    img: img1,
    job: "Commander",
    name: "Douglas Hurley",
    info: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    id: nanoid(),
    img: img2,
    job: "Mission Specialist ",
    name: "MARK SHUTTLEWORTH",
    info: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    id: nanoid(),
    img: img3,
    job: "PILOT",
    name: "Victor Glover",
    info: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  },
  {
    id: nanoid(),
    img: img4,
    job: "Flight Engineer",
    name: "Anousheh Ansari",
    info: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
  },
];
