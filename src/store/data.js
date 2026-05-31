import Facebook from "../component/icons/Facebook";
import LinkedIn from "../component/icons/LinkedIn";
import Youtube from "../component/icons/Youtube";
import { Clock, MapPin, Phone } from "lucide-react";

export const showPopupClasses =
  "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 border border-[#e8e8e8] bg-white text-[#111] text-sm shadow-sm w-[90%] sm:w-fit";

export const borderClr = "border-b border-[#2a2a2a]";

export const linksData = [
  { name: "Work", link: "/work" },
  { name: "Services", link: "/services" },
  { name: "Pricing", link: "/pricing" },
  { name: "Contact", link: "/contact" },
];

export const navbarIcon = {
  youtube: <Youtube />,
  facebook: <Facebook />,
  linkedin: <LinkedIn />,
};

export const testimonials = [
  {
    name: "Sujan Dhakal",
    role: "Learning Nepal — YouTube",
    text: "Instrumental in elevating our visual content. The quality of work is consistently above what you'd expect.",
  },
  {
    name: "Abishek Malla Thakuri",
    role: "Awesome Nepali Gyan",
    text: "Professional, creative, and reliable. They understood what we needed and delivered without back-and-forth.",
  },
  {
    name: "Roshan Thapa",
    role: "Noobie Gamer",
    text: "The motion graphics work is genuinely next level. Our channel grew significantly after the rebrand.",
  },
  {
    name: "Supesh Man Shrestha",
    role: "Hungry Hetauda",
    text: "Consistently high-quality designs delivered on time. They treat every project like it matters.",
  },
  {
    name: "Suman Adhikari",
    role: "DSLR & Lens Shop Nepal",
    text: "They understood our vision without us having to explain it twice. Rare find.",
  },
];

export const footerData = [
  { icon: <Phone size={14} />, text: "+977 9845839985" },
  { icon: <MapPin size={14} />, text: "Hetauda, Nepal" },
  { icon: <Clock size={14} />, text: "Sun – Fri · 9:00 AM – 5:00 PM NPT" },
];

export const SERVICES = [
  {
    name: "Graphic Design",
    description:
      "Visuals that communicate your brand clearly and stop the scroll.",
    items: [
      "Brand Identity & Logo Design",
      "Print & Digital Marketing Collateral",
      "Social Media & Web Graphics",
      "Packaging Design",
    ],
  },
  {
    name: "Video Editing",
    description:
      "Professional storytelling cut for the format — long-form, short-form, or cinematic.",
    items: [
      "Corporate & Explainer Videos",
      "Social Media & Promotional Content",
      "Event & Highlight Reels",
      "Color Grading & Sound Design",
    ],
  },
  {
    name: "Motion Graphics",
    description:
      "Animation that brings your messaging to life and holds attention.",
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
    type: "tiered",
    featured: false,
    tiers: [
      {
        label: "Basic",
        price: "NPR 1,500",
        desc: "Flyers, Posters, Social Media Posts. 1–2 Revisions. JPG + PNG.",
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
    retainerNote: "Interested in a custom retainer?",
    cta: "Inquire →",
  },
  {
    name: "Motion Graphics",
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
