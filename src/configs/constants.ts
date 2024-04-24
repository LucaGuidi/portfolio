export const SKILLS: Skill[] = [
  {
    name: "HTML",
    src: "/assets/html5.png",
  },
  {
    name: "CSS",
    src: "/assets/css.png",
  },
  {
    name: "JavaScript",
    src: "/assets/JavaScript.png",
  },
  {
    name: "TypeScript",
    src: "/assets/Typescript.png",
  },
  {
    name: "Dart",
    src: "/assets/Dart.png",
  },
  {
    name: "Flutter",
    src: "/assets/flutter.png",
  },
  {
    name: "Angular",
    src: "/assets/Angular.png",
  },
  {
    name: "Git",
    src: "/assets/Git.png",
  },
  {
    name: "Bootstrap",
    src: "/assets/Bootstrap.png",
  },
  {
    name: "React",
    src: "/assets/react.png",
  },
  {
    name: "OutSystems",
    src: "/assets/outsystems.png",
  },
];

interface Skill {
  name: string;
  src: string;
}

export const EXPERIENCE: ExperienceNode[] = [
  {
    title: "Engineering Ingegneria Informatica S.p.A",
    info: "Multichannel Development (Web/App) - Apprenticeship (mar 2023 - today)",
    description: [
      "Got better and better at Flutter, learned best practices and advanced features. I got my First Certification - Associate Reactive Developer (OutSystems 11).",
      "Learned Angular and OutSystems",
      "Worked on my first Web project. Decided to learn more about Web development on my own and started learning React",
    ],
  },
  {
    title: "Engineering Ingegneria Informatica S.p.A",
    info: "Solutions Developer - Stage (sep 2022 - feb 2023)",
    description: [
      "Learned Flutter & Dart framework",
      "Worked on my first production app - GLS. Learned about versioning, git, REST Apis and Clean Architecture. I was able to develop easy features on my own",
    ],
  },
  {
    title: "ITT Enrico Fermi",
    info: "IT and Telecommunications (sep 2017 - jul 2022)",
    description: [
      "I attended school for 5 years",
      "I got a scholarship",
      "I graduated with 92/100",
    ],
  },
];

interface ExperienceNode {
  title: string;
  info: string;
  description: string[];
}
