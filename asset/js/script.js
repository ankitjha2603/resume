console.log("this is script.js (ankitjha2603.github.io)");

const skill_you_do = [
  "Web Development",
  "Full-Stack Development",
  "Web Scraping",
  "Web crawling",
];
const skills = [
  "python",
  "HTML5",
  "CSS3",
  "Javascript",
  "jQuery",
  "Search Engine Optimization (SEO)",
  "Search Engine Marketing (SEM)",
  "Markdown",
  "SCSS",
  "SASS",
  "Machine Learning",
  "C",
  "C++"
  "Data Structures",
  "Php",
  "Node.js",
];
const library = ["Flask", "Scikit-Learn", "Selenium", "Beautiful Soup"];
const frameworks = ["Django", "Laravel", "React.js", "Express"];
const tool = [
  "PhpMyAdmin",
  "Docker",
  "Docker swarm",
  "Adobe XD",
  "Bootstrap",
  "git",
  "Microsoft Visual Studio Code",
  "GitHub",
];
append(
  ".skill-badges",
  ...skills.map((ele) => newElement("badge", ele, "span"))
);
append(
  ".lib-framework-badges",
  ...[...library, ...frameworks].map((ele) => newElement("badge", ele, "span"))
);
append(".tools-badges", ...tool.map((ele) => newElement("badge", ele, "span")));
