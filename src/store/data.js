import Facebook from "../component/icons/Facebook";
import LinkedIn from "../component/icons/LinkedIn";
import Youtube from "../component/icons/Youtube";
import Users from "../component/icons/Users";
import RocketIcon from "../component/icons/RocketIcon";
import ChartLine from "../component/icons/ChartLine";
import { Award, Clock, Heart, MapPin, Phone } from "lucide-react";

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
    name: "Sujan Dhakal",
    role: "Learning Nepal(Youtube)",
    text: "“Instrumental in elevating our visual content.”",
  },
  {
    name: "Abishek Malla Thakuri",
    role: "Awesome Nepali Gyan",
    text: "“Professional, creative, and reliable.”",
  },
  {
    name: "Roshan Thapa",
    role: "Noobie Gamer",
    text: "“Motion graphics are next level.”",
  },
  {
    name: "Supesh Man Shrestha",
    role: "Hungry Hetauda",
    text: "“Consistently high-quality designs.”",
  },
  {
    name: "Suman Adhikari",
    role: "DSLR & Lens Shop Nepal",
    text: "“Understood our vision perfectly.”",
  },
];

export const chooseUsDataTitle = [
  {
    title: "Why Choose Us",
    description:
      "We build bold, fresh designs and videos that command attention. Every pixel. Every frame. Sharp and intentional. 2M+ Views Views Generated High performance analytics generating global brand conversions.",
  },
];

export const chooseUsContent = [
  {
    label: "2M+ Views",
    title: "Views Generated",
    description:
      "High performance analytics generating global brand conversions.",
    icon: <ChartLine />,
  },
  {
    label: "8+ Years",
    title: "Experience Portfolio",
    description:
      "Comprehensive tenure delivering flawless agency quality projects.",
    icon: <Award />,
  },
  {
    label: "98% Client Satisfaction",
    title: "Client Satisfaction",
    description: "Exceptional feedback criteria from all partners.",
    icon: <Heart />,
  },
  {
    label: "100+ Creators",
    title: "Creators Worldwide",
    description: "Unifying visual identity assets globally.",
    icon: <Users />,
  },
  {
    label: "500K+ Subscriber",
    title: "Subscriber Collabs",
    description: "Strategic partnership with top tier channels.",
    icon: <RocketIcon />,
  },
];

export const footerData = [
  {
    icon: <Phone />,
    text: "+977 9845839985",
  },
  {
    icon: <MapPin />,
    text: "Hetauda, 📍Nepal",
  },
  {
    icon: <Clock />,
    text: "Sun – Fri | 9:00 AM – 5:00 PM",
  },
];
