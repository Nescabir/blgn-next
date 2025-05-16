import IProjects from "./IProjects";
import { projectType } from "./projectType.enum";
import FACEIT from "public/faceit13h.png";
import BLGN from "public/BLGN.jpg";
import ITP from "public/ITP.jpg";
import hltvbot from "public/hltvbot.jpg";
import EGC from "public/EGC.jpg";
import csharp from "public/csharp.jpg";
import php from "public/php.jpg";
import html from "public/html.jpg";
import bouncingballs from "public/bouncingballs.jpg";
import myhud from "public/myhud.png";

export const projects: IProjects[] = [
  {
    name: "MyHUD",
    description: "MyHUD is a simple and easy to use HUD for CS2",
    image: myhud.src,
    link: "https://myhud.app/",
    type: projectType.PERSONAL,
    date: [new Date("2024-05-01")],
  },
  {
    name: "Portfolio v2",
    description: "Same portfolio, but using NextJS",
    image: BLGN.src,
    link: "https://github.com/Nescabir/blgn-next",
    type: projectType.PERSONAL,
    date: [new Date("2021-01-01")],
  },
  {
    name: "FACEIT 13H",
    description: "FACEIT random team name generator",
    image: FACEIT.src,
    link: "https://github.com/Nescabir/faceit13h",
    type: projectType.PERSONAL,
    date: [new Date("2021-01-01")],
  },
  {
    name: "Portfolio",
    description:
      "First React project, redesign and remake of my portfolio (this porfolio)",
    image: BLGN.src,
    link: "https://github.com/Nescabir/blgn",
    type: projectType.PERSONAL,
    date: [new Date("2021-01-01")],
  },
  {
    name: "<IS THIS PROGRESS>",
    description: "World of Warcraft guild's website using Ruby on Rails",
    image: ITP.src,
    link: "https://isthisprogress.fr/",
    type: projectType.PERSONAL,
    date: [new Date("2020-01-01")],
  },
  {
    name: "HLTVBot",
    description: "Discord BOT developed with discord.js library",
    image: hltvbot.src,
    link: "https://github.com/Nescabir/HLTVBot",
    type: projectType.PERSONAL,
    date: [new Date("2019-01-01")],
  },
  {
    name: "PPE4",
    description: "Front-end app using Ruby on Rails and previous API",
    image: EGC.src,
    link: "https://github.com/Nescabir/PPE4",
    type: projectType.SCHOOL,
    date: [new Date("2019-01-01")],
  },
  {
    name: "PPE3",
    description: "Winform application using C# and previous API",
    image: csharp.src,
    link: "https://github.com/Nescabir/PPE3",
    type: projectType.SCHOOL,
    date: [new Date("2018-01-01"), new Date("2019-01-01")],
  },
  {
    name: "EG Corp. API",
    description: "REST API based using Symfony and Swagger",
    image: EGC.src,
    link: "https://github.com/Nescabir/API-REST-EGC",
    type: projectType.SCHOOL,
    date: [new Date("2018-01-01"), new Date("2019-01-01")],
  },
  {
    name: "PPE2",
    description: "Jingle contest website based using PHP",
    image: php.src,
    link: "https://github.com/Nescabir/PPE2",
    type: projectType.SCHOOL,
    date: [new Date("2018-01-01")],
  },
  {
    name: "PPE1",
    description: "Static single page website for a fake museum",
    image: html.src,
    link: "https://github.com/Nescabir/PPE1",
    type: projectType.SCHOOL,
    date: [new Date("2017-01-01")],
  },
  {
    name: "Bouncing Balls",
    description: "Simple ball movement on Processing",
    image: bouncingballs.src,
    link: "https://gist.github.com/Nescabir/661877531bafd884093433cf03eef441",
    type: projectType.PERSONAL,
    date: [new Date("2017-01-01")],
  },
];
