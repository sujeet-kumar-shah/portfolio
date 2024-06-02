const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "",
  title: "SH.",
  logo: "public/profile-pic.png",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Sujeet kumar shah",
  role: "Software Engineer",
  description:
    "I am a driven computer science graduate with a strong foundation in software development, seeking an entry-level position to leverage my skills in coding, problem-solving, and innovative technology solutions. My hands-on experience with various web technologies and programming languages, coupled with a passion for real-time applications and cloud-based solutions, positions me to contribute effectively to dynamic development teams. I bring practical knowledge from projects involving secure communication platforms, social media management, and e-commerce solutions, underscored by a solid academic background in computer science and engineering.",
  resume: "",
  social: {
    linkedin: "https://github.com/sujeet-kumar-shah",
    github: "https://www.linkedin.com/in/sujeet-shah/",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Webchat",
    description:
      "Developed a secure cloud-based group chat and video call platform with features such as secure temporary storage, group calling, chat, and screen share. The platform is free to use. • Backend in Node. js which is support event-driven, non-blocking I/O model making Webchat well-suited for real-time chat and video call .",
    stack: ["HTML", "CSS", "Javascript", "Node js", "Web socket", "WebRTC"],
    sourceCode: "https://github.com/sujeet-kumar-shah/webchat",
    livePreview: "https://webchat-jp4n.onrender.com/",
  },
  {
    name: "Easy Share",
    description:
      "Developed a solution for uploading sharing storing data securely, allowing users to access it from anywhere using a browser using short link . Also includes functionality for converting PDF documents to Word and vice versa.",
    stack: ["EJS", "Node.js", "SQL"],
    sourceCode: "https://github.com/sujeet-kumar-shah/Easy-share",
    livePreview: "https://easy-share-8k9r.onrender.com/",
  },
  {
    name: "FEEN ECOMMERCE",
    description:
      "Aimed to provide capability of deal with high load server and single page ecommerce website using node.js, MongoDB in backend and react in frontend ",
    stack: ["React", "JavaScript", "Node.js", "MongoDB"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "c++",

  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "React",
  "shell script",
  "SQL",
  "docker",
  "Git",
  "CI/CD",
  "Linux",
  "MongoDB",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "Sujeetshah321s@gmail.com",
};

export { header, about, projects, skills, contact };
