import { nanoid } from "nanoid";
import moon from "../../assets/destination/image-moon.webp";
import europa from "../../assets/destination/image-europa.webp";
import mars from "../../assets/destination/image-mars.webp";
import titan from "../../assets/destination/image-titan.webp";

export const destinationData = [
  {
    id: nanoid(),
    img: moon,
    title: "MOON",
    info: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travelTime: "3 days",
  },

  {
    id: nanoid(),
    img: mars,
    title: "MARS",
    info: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. km",
    travelTime: "9 months",
  },

  {
    id: nanoid(),
    img: europa,
    title: "EUROPA",
    info: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin..",
    distance: "628 MIL. km",
    travelTime: "3 years",
  },

  {
    id: nanoid(),
    img: titan,
    title: "TITAN",
    info: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. km",
    travelTime: "7 years",
  },
];
