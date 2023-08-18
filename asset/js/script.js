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
  "3D Web development",
  "SCSS/SASS",
  "Javascript",
  "SEO/SEM",
  "SQL",
  "Machine Learning",
  "Firebase",
  "DSA",
  "Php",
  "Node.js",
];
const library_frameworks = [
  "Three.js",
  "Cannon.js",
  "YUKA",
  "Dat-gui",
  "Flask",
  "jQuery",
  "Scikit-Learn",
  "Selenium",
  "tkinter",
  "Beautiful Soup",
  "Django",
  "Laravel",
  "React.js"
];
const tool = [
  "PhpMyAdmin",
  "Docker/Docker swarm",
  "Adobe XD",
  "Bootstrap",
  "Git & GitHub",
  "Google Analytics"
];
append(
  ".tech-badges",
  ...skills.map((ele) => newElement("badge", ele, "span"))
);
append(
  ".lib-framework-badges",
  ...library_frameworks.map((ele) => newElement("badge", ele, "span"))
);

append(".tools-badges", ...tool.map((ele) => newElement("badge", ele, "span")));
