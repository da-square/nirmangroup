const nirmaGroupDescription = `
    The Dholera Nirman Group stand as adistinguished and leading force in
the realm of Real Estate within Dholera Smart City, with its developments
strategically positioned within and along the periphery of Dholera SIR.
Renowned for it’s reliability and unwavering trustworthiness, the group has
carved out an indomitable reputation among the premier developers in the
region.
Our projects epitomize refined living. meticulously crafted to offer a
sophisticated Ambience paired with robust infrastructural development and
a wealth of modern amenities.
We prioritize secure, high-yield investments, empowering our investors with
strategic foresight and expertise to optimize their capital in Dholera’s
burgeoning Real Estate Market
A total of 245 plots available, including 7 semi-commercial and 238 residential plots
Wide 12-meter central spine entry road and 7.5-meter connecting roads within THE Regalia
project.`;

import {
  MapPin,
  BusFront,
  Building2,
  Plane,
  Waves,
  TrainTrack,
  Landmark,
} from "lucide-react";

export const projects = [
  {
    id: "the_earth",
    name: "The Earth",
    description: "A divine experience with contemporary lifestyle features.",
    nirmaGroupDescription,
    images: [
      "/images/projects/earth/logo.jpg",
      "/images/projects/earth/11.jpg",
      "/images/projects/earth/12.jpg",
      "/images/projects/earth/13.jpg",
    ],
  },
  {
    id: "the_palm_trees",
    name: "The Palm Trees",
    description: `Rising above with premium infrastructure and luxury living.`,
    nirmaGroupDescription,
    images: [
      "/images/projects/palm-trees/logo.jpg",
      "/images/projects/palm-trees/Scene 25_1.png",
    ],
  },
  {
    id: "the_velavadar_exotica",
    name: "The Velavadar Exotica",
    description: "Rising above with premium infrastructure and luxury living.",
    nirmaGroupDescription,
    images: [
      "/images/projects/velavadar-exotica/logo.jpeg",
      "/images/projects/velavadar-exotica/11.png",
      "/images/projects/velavadar-exotica/12.png",
    ],
  },
  {
    id: "the_meridian",
    name: "The Meridian",
    description:
      "Luxury with legacy. Premium living spaces designed for elegance. ",
    nirmaGroupDescription,
    images: [
      "/images/projects/meridian/logo.png",
      "/images/projects/meridian/11.jpg",
      "/images/projects/meridian/12.jpg",
      "/images/projects/meridian/13.jpg",
      "/images/projects/meridian/14.jpg",
    ],
  },
  {
    id: "the_regalia",
    name: "The Regalia",
    description:
      "Elegant living with world-class amenities for modern families.",
    nirmaGroupDescription,
    images: [
      "/images/projects/regalia/logo.png",
      "/images/projects/regalia/11.jpg",
      "/images/projects/regalia/12.jpg",
      "/images/projects/regalia/13.jpg",
      "/images/projects/regalia/14.jpg",
      "/images/projects/regalia/15.jpg",
    ],
  },
  // {
  //   name: "The Mercury Divine",
  //   description: "A divine experience with contemporary lifestyle features.",
  //   images: ["/images/projects/mercury.png"],
  // },
  // {
  //   name: "The Nova Heights",
  //   description: "Rising above with premium infrastructure and luxury living.",
  //   images: ["/images/projects/mercury-elegant.png"],
  // },
];

export const locationAdvantages = [
  {
    icon: MapPin,
    title: "In the Vicinity of 200-year-old Kamiyaladham Temple",
    description:
      "Located just 5 km away, offering proximity to the historic Kamiyaladham Temple.",
    distance: "5 KM",
  },
  {
    icon: BusFront,
    title: "Govt. Existing Road Touch Entry",
    description:
      "NA, NOC, Title clear project located near the Vadodara Bhavnagar Highway for excellent connectivity.",
    distance: "5 KM",
  },
  {
    icon: Plane,
    title: "Dholera International Airport Circle",
    description:
      "Just 10 minutes away from the upcoming Dholera International Airport Circle.",
    distance: "10 MIN",
  },
  {
    icon: Waves,
    title: "Artificial River / Canal Front",
    description:
      "A scenic 15-minute drive to the beautiful Artificial River and Canal Front area.",
    distance: "15 MIN",
  },
  {
    icon: BusFront,
    title: "Ahmedabad–Dholera Express Highway",
    description:
      "Only 10 km away from the Ahmedabad–Dholera Express Highway, ensuring smooth travel access.",
    distance: "10 KM",
  },
  {
    icon: TrainTrack,
    title: "Mono Rail Pipli Junction",
    description:
      "Situated 10 km away from the Mono Rail Pipli Junction for fast intra-city connectivity.",
    distance: "10 KM",
  },
  {
    icon: Landmark,
    title: "Dholera SIR Entry",
    description:
      "Just 15 minutes away from Dholera SIR Entry, offering strategic access to the smart city zone.",
    distance: "15 MIN",
  },
  {
    icon: Building2,
    title: "Lothal Museum",
    description:
      "15 minutes from the ancient archaeological site and museum of Lothal.",
    distance: "15 MIN",
  },
];

export const amenities = [
  { icon: "🏊‍♂️", title: "Swimming Pool" },
  { icon: "🏋️‍♀️", title: "Fitness Center" },
  { icon: "🛡️", title: "24x7 Security" },
  { icon: "🏠", title: "Club House" },
  { icon: "👶", title: "Kids Play Area" },
  { icon: "🏫", title: "International School Nearby" },
  { icon: "🏥", title: "Healthcare Facilities" },
  { icon: "🛣️", title: "Smart Road Connectivity" },
  { icon: "🚆", title: "Metro & Railway Access" },
  { icon: "🏢", title: "Commercial Plaza" },
  { icon: "♻️", title: "Waste Management System" },
  { icon: "🎭", title: "Community Event Hall" },
];
