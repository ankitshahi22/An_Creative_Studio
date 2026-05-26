import Facebook from "../component/icons/Facebook";
import LinkedIn from "../component/icons/LinkedIn";
import Youtube from "../component/icons/Youtube";

export const navbarData = [
  {
    name: "Work",
    link: "/work",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export const navbarIcon = {
  youtube: <Youtube />,
  facebook: <Facebook />,
  linkedin: <LinkedIn />,
};

export const borderClr = "border-b border-gray-300";

export const testimonials = [
  {
    name: "Pete",
    role: "CEO at COMPANY",
    text: `I've been searching for a solution like COMPANY for YEARS. So glad I finally found one!`,
  },
  {
    name: "Marina",
    role: "CEO at COMPANY",
    text: `It's so simple and intuitive, we got the team up to speed in 10 minutes.`,
  },
  {
    name: "Alex",
    role: "CEO at COMPANY",
    text: `I've never felt more organized. We work 5x faster with COMPANY.`,
  },
  {
    name: "Dan",
    role: "CEO at COMPANY",
    text: `I'm confident my team can't live without COMPANY anymore.`,
  },
];
