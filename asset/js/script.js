console.log("this is script.js (ankitjha2603.github.io)");
const soft_skill = ["Problem solving", "Critical thinking"];
const skill_you_do = [
  "Web Development",
  "Full-Stack Development",
  "Web Scraping",
  "Web crawling",
];
const skills = [
  "Python",
  "HTML & CSS",
  "SCSS/SASS",
  "Javascript",
  "jQuery",
  "SEO/SEM",
  "Java",
  "Machine Learning",
  "C",
  "C++",
  "DSA",
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
  "Git & GitHub",
  "Google Analytics",
  "SEMrush",
  "Ahrefs",
];
append(
  ".tech-badges",
  ...skills.map((ele) => newElement("badge", ele, "span"))
);
append(
  ".lib-framework-badges",
  ...library.map((ele) => newElement("badge", ele, "span")),
  ...frameworks.map((ele) => newElement("badge", ele, "span"))
);

append(".tools-badges", ...tool.map((ele) => newElement("badge", ele, "span")));
