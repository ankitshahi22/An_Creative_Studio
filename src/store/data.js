import Facebook from "../component/icons/Facebook";
import LinkedIn from "../component/icons/LinkedIn";
import Youtube from "../component/icons/Youtube";
import Users from "../component/icons/Users";
import RocketIcon from "../component/icons/RocketIcon";
import ChartLine from "../component/icons/ChartLine";
import { Award, Clock, Heart, MapPin, Phone } from "lucide-react";

export const showPopupClasses =
  "fixed bottom-2 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-3 py-2 rounded-full border border-[rgba(255,255,255,0.12)] bg-black/70 text-[#f0ece4] text-sm shadow-lg transition-all duration-300 w-[60%] sm:w-fit mb-15";

export const workClasses =
  "flex items-center gap-1 w-fit mx-auto border border-gray-500 px-2 py-1 rounded-md mb-10 text-sm hover:bg-black/30 hover:text-white font-semibold shadow-lg";

export const linksData = [
  {
    name: "Work",
    link: "/work",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Pricing",
    link: "/pricing",
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

export const SERVICES = [
  {
    name: "Graphic Design",
    emoji: "🎨",
    description:
      "Visuals that clearly communicate your brand identity and hook your audience instantly.",
    color: "text-green-400",
    dotColor: "bg-green-400",
    items: [
      "Brand Identity & Logo Design",
      "Print & Digital Marketing Collateral",
      "Social Media & Web Graphics",
      "Packaging Design",
    ],
  },
  {
    name: "Video Editing",
    emoji: "🎬",
    description:
      "Professional storytelling that captivates and converts, tailored for modern formats.",
    color: "text-orange-400",
    dotColor: "bg-orange-400",
    items: [
      "Corporate & Explainer Videos",
      "Social Media & Promotional Content",
      "Event & Highlight Reels",
      "Color Grading & Sound Design",
    ],
  },
  {
    name: "Motion Graphics",
    emoji: "✨",
    description:
      "Dynamic animations that elevate your core messaging and bring content to life.",
    color: "text-purple-400",
    dotColor: "bg-purple-400",
    items: [
      "Animated Logos & Intros",
      "Explainer & Infographic Videos",
      "Dynamic Typography",
      "Branding Integration",
    ],
  },
];

export const PLANS = [
  {
    name: "Graphic Design",
    emoji: "🎨",
    type: "tiered",
    featured: false,
    tiers: [
      {
        label: "Basic",
        price: "NPR 1,500",
        desc: "Flyers, Posters, Social Media Posts. 1-2 Revisions. JPG + PNG",
      },
      {
        label: "Standard",
        price: "NPR 3,000",
        desc: "Business Cards, Carousels, Ad Banners. 3 Revisions. Source Files.",
      },
      {
        label: "Pro",
        price: "NPR 6,000+",
        desc: "Brand Kit, Logo, Packaging. 5 Revisions. Full Asset Pack.",
      },
    ],
    addons: [
      { label: "Logo Design", price: "NPR 3,000–5,000" },
      { label: "Thumbnails", price: "NPR 1,000 each" },
      { label: "Complete Branding", price: "From NPR 15,000" },
    ],
    cta: "Get Started",
  },
  {
    name: "Video Editing",
    emoji: "🎬",
    type: "services",
    featured: true,
    services: [
      { label: "TikTok / IG Reels", price: "NPR 2,500+" },
      { label: "YouTube Shorts", price: "NPR 3,000+" },
      { label: "YouTube Long-Form", price: "NPR 6,000+" },
      { label: "Promos / Trailers", price: "NPR 8,000+" },
      { label: "Cinematic Editing", price: "NPR 12,000+" },
      { label: "Brand Production", price: "Custom Quote", custom: true },
    ],
    retainerNote: "Interested in custom retainer?",
    cta: "Inquire →",
  },
  {
    name: "Motion Graphics",
    emoji: "🎥",
    type: "services",
    featured: false,
    services: [
      { label: "Text Animation", price: "NPR 2,299–6,999" },
      { label: "Logo Animation", price: "NPR 4,599–12,799" },
      { label: "Intro / Outro", price: "NPR 6,299–15,399" },
      { label: "Explainer Animation", price: "NPR 12,799–36,299" },
    ],
    addons: [
      { label: "Extra Revision", price: "NPR 500" },
      { label: "Source Files", price: "NPR 1,000" },
      { label: "Express Delivery", price: "+30%" },
    ],
    cta: "Get Started",
  },
];

export const RETAINERS = [
  {
    label: "Design Only",
    price: "NPR 20,000/mo",
    sub: "12 Posts / Month",
  },
  {
    label: "Video + Design",
    price: "NPR 45,000/mo",
    sub: "8 Videos + 20 Graphics",
  },
];
