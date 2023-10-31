import urlShortener from "../assets/images/portfolio/urlShortener.png";
import Edgy from "../assets/images/portfolio/Edgy.jpeg";
import RestCountries from "../assets/images/portfolio/RestCountries.jpeg";
import Bankist from "../assets/images/portfolio/Bankist.jpeg";
import Compilers from "../assets/images/compilers.jpeg"

const projectsData = [
  {
    id: "compilers",
    title: "$ Eta Compiler",
    img: Compilers,
    name: "Rest Countires",
    stack: ["$ Kotlin", "$ Java"],
    src: "https://www.cs.cornell.edu/courses/cs4120/2023sp/",
    source: null,
    description:
      "We built a compiler for the Eta programming language with an Intel x86 target architechture.",
  },
  {
    id: "bankist",
    title: "$ Ethereum Bot",
    img: null,
    name: "Bankist",
    stack: ["$ Ocaml"],
    src: "https://ethereum.org/en/",
    source: "https://github.com/anikacave/ether-bot",
    description:
      "We built a trading bot for the cryptocurrency Ethereum! We calculated a variety of indicators and provided a cli for interacting with the bot.",
  },
];

export { projectsData };
