
import { SkillGroup, Project, Certification, Education, Experience } from './types';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Front-End Skills",
    skills: [
      { name: "CSS3", percentage: 80 },
      { name: "JavaScript", percentage: 25 },
      { name: "Responsive Design", percentage: 75 },
      { name: "UI/UX", percentage: 20 },
    ]
  },
  {
    category: "Programming Skills",
    skills: [
      { name: "Python", percentage: 45 },
      { name: "C / Embedded C", percentage: 50 },
      { name: "C++", percentage: 35 },
    ]
  },
  {
    category: "Cyber Security Skills",
    skills: [
      { name: "Fundamentals", percentage: 10 },
      { name: "Networking", percentage: 10 },
      { name: "Linux", percentage: 5 },
      { name: "Web Security", percentage: 5 },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Smart Street Light System",
    description: "Developed an automated system using Arduino and PIR motion sensors. Implemented dynamic lighting control where lights dim during low activity to reduce energy consumption.",
    tech: ["Arduino", "PIR Sensors", "Embedded C"],
    link: "https://github.com/nithyatm",
    role: "Lead Developer",
    category: "embedded"
  },
  {
    title: "Baby Monitoring System",
    description: "Utilized Wireless Sensor Network (WSN) technology to track temperature, moisture, and movement in real-time with automated alerts via mobile/web interface.",
    tech: ["WSN", "Arduino", "IoT"],
    link: "https://github.com/nithyatm",
    role: "Project Lead",
    category: "iot"
  },
  {
    title: "YouTube Clone",
    description: "Designed and developed a responsive front-end replica of YouTube using HTML and CSS, featuring a structured layout and intuitive navigation.",
    tech: ["HTML", "CSS"],
    link: "https://github.com/nithyatm",
    role: "Frontend Developer",
    category: "web"
  },
  {
    title: "Interactive Dashboard",
    description: "Responsive dashboard with dynamic data displays for Sales, Income, and Expenses. Includes a light/dark mode toggle and dynamically populated 'Recent Orders' table.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/nithyatm",
    role: "Developer",
    category: "dashboard"
  }
];

export const INTERNSHIP: Experience = {
  role: "IoT using Arduino Intern",
  company: "Abeyaantrix Davangere",
  location: "Davangere, Karnataka",
  period: "Internship",
  description: [
    "Developed an IoT-based smart system using Arduino to collect sensor data (temperature, humidity, motion).",
    "Implemented sensor integration and data transmission to a remote server for real-time monitoring and automation."
  ]
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Python Programming",
    issuer: "IBM | Cognitive Class"
  },
  {
    title: "Embedded IoT with Arduino",
    issuer: "Abeyaantrix SoftLab"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "M.Tech in Cyber Security",
    institution: "REVA Academy (RACE), REVA University",
    status: "Pursuing",
    current: true
  },
  {
    degree: "B.E in Electronics and Communication",
    institution: "Sri Taralabalu Institute of Technology",
    status: "2021-2025",
    year: "2021-2025"
  },
  {
    degree: "Pre-University (PCMC)",
    institution: "Acharya PU College",
    status: "2020-2021",
    year: "2020-2021"
  },
  {
    degree: "SSLC",
    institution: "St Tresa English Medium School",
    status: "2019",
    year: "2019"
  }
];
