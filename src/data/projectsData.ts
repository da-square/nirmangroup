const projectDescription = `
    The Dholera Nirman Group stand as a distinguished and leading force in
    the realm of Real Estate within Dholera Smart City, with its developments
    strategically positioned within and along the periphery of Dholera SIR.
    Renowned for it’s reliability and unwavering trustworthiness, the group has
    carved out an indomitable reputation among the premier developers in the
    region.
    Our projects epitomize refined living. meticulously crafted to offer a
    sophisticated Ambience paired with robust infrastructural development and
    a wealth of modern amenities.
`;

const theVelavadarDescription = `The Velavadar Exotica is a premium Residential Plotting
Project located near Adhelai Circle and the DSIR Border in Village Kanatalav, District 
Bhavnagar. Spanning across a thoughtfully planned layout with 831 residential plots,
this project offers a rare blend of nature, convenience, and investment potential.
Strategically positioned just 500 meters from Dholera Smart City, The Velavadar Exotica
enjoys seamless connectivity to major growth zones, ensuring strong appreciation prospects.
The project lies in proximity to the Ahmedabad–Dholera Expressway, offering effortless access
to major cities and industrial hubs.

Location Advantages

5 minutes from the National Blackbuck Sanctuary, 
a renowned eco-tourism destination.
Only 500 meters from Dholera Smart City,
one of India’s most ambitious smart city projects.
Just 5 minutes from the Ahmedabad–Dholera Expressway,ensuring smooth connectivity.
Surrounded by major development zones — High Access Corridor, Industrial, Residential, 
Knowledge, and IT — all within 10 minutes.
With such a strategic location, The Velavadar Exotica stands as an ideal choice for 
those seeking peaceful living near nature while staying close to the future hub of growth and opportunity.`;

const theRegaliaDescription = `
The Regalia is an exclusive Residential and Semi-Commercial Plotting Project strategically
located near Dholera Smart City, Gujarat, in Village Anandpur, District Dholera.
Designed to offer a blend of peaceful living and excellent connectivity,
The Regalia presents a rare opportunity to invest in one of the fastest-developing smart
city corridors of India.

The project comprises 237 Residential Plots and 7 Semi-Commercial Plots, thoughtfully planned
with easy accessibility and future-ready infrastructure. Nestled amidst nature yet close
to major upcoming developments, The Regalia provides the perfect balance between lifestyle
comfort and long-term investment value.`;

const the606Description = `
The 606 is the first-ever pure Commercial Plotting Project near Dholera Smart City,
Gujarat, setting a new benchmark for business growth and investment potential in the region.
This landmark development offers 118 premium commercial plots strategically located on the 
100-meter wide NH751 Pipli–Vataman Highway, the main arterial route connecting Ahmedabad
with Dholera SIR.

Positioned in the high-growth corridor of Dholera, The 606 enjoys exceptional connectivity
and proximity to key infrastructure developments.
The project is located just 10 minutes from the Dholera International Cargo-cum-Passenger Airport and 
the Mono Rail Junction, ensuring seamless access for logistics, travel, and trade.
`;

const theMeridianDescription = `
The Meridian is a premium Residential and Commercial Plotting Project strategically located
near Dholera Smart City, Gujarat.The Meridian stands
as a gateway to the future of urban development.
The project comprises 84 Residential Plots and 37 Commercial Plots, thoughtfully planned along
the 100-meter wide NH751 Pipli-Vataman Highway. This prime location ensures excellent road
connectivity and smooth access to major upcoming landmarks in the region.

Situated in close proximity to the Dholera International Cargo-cum-Passenger Airport and
the Mono Rail Junction, the project offers unmatched locational advantage for both investors
and end-users. Additionally, it is located just 10 km from NMHC Lothal, an emerging tourism
and heritage hub, further enhancing the project’s value proposition.

With the Ahmedabad–Dholera Expressway offering rapid connectivity to Ahmedabad city,
The Meridian is ideally positioned for those seeking a balanced lifestyle — combining
the tranquility of nature with the promise of future-ready infrastructure.
Whether for residential living, business expansion, or long-term investment,
The Meridian at Dholera presents a remarkable opportunity to be part of Gujarat’s
most progressive growth corridor.`;

import {
  MapPin,
  BusFront,
  Building2,
  Plane,
  Waves,
  TrainTrack,
  Landmark,
  Mountain,
  Train,
  TreePine,
} from "lucide-react";

export const projects = [
  {
    id: "the_meridian",
    name: "The Meridian",
    description:
      "Luxury with legacy. Premium living spaces designed for elegance. ",
    projectDescription: theMeridianDescription,
    locationAdvantages: [10, 11, 7, 1, 4, 9, 8],
    amenities: [4, 17, 5, 6, 7, 3, 25, 26],
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
    nirmaGroupDescription: theRegaliaDescription,
    locationAdvantages: [1, 2, 14, 10, 5, 7, 4, 8, 9, 15, 16],
    amenities: [4, 16, 17, 5, 7, 15],
    images: [
      "/images/projects/regalia/logo.png",
      "/images/projects/regalia/11.jpg",
      "/images/projects/regalia/12.jpg",
      "/images/projects/regalia/13.jpg",
      "/images/projects/regalia/14.jpg",
      "/images/projects/regalia/15.jpg",
    ],
  },
  {
    id: "the_606",
    name: "The 606",
    description:
      "Elegant living with world-class amenities for modern families.",
    projectDescription: the606Description,
    locationAdvantages: [10, 11, 7, 1, 4, 9, 8],
    amenities: [4, 17, 5, 6, 7, 3],
    images: [
      "/images/projects/606/logo.png",
    ],
  },
  {
    id: "the_velavadar_exotica",
    name: "The Velavadar Exotica",
    description: "Rising above with premium infrastructure and luxury living.",
    projectDescription: theVelavadarDescription,
    amenities: [4, 18, 5, 7, 19, 20, 21, 22, 6, 23, 24],
    locationAdvantages: [16, 17, 18, 19, 20],
    images: [
      "/images/projects/velavadar-exotica/logo.jpeg",
      "/images/projects/velavadar-exotica/11.png",
      "/images/projects/velavadar-exotica/12.png",
    ],
  },
  {
    id: "the_earth",
    name: "The Earth",
    description: "A divine experience with contemporary lifestyle features.",
    projectDescription: projectDescription,
    locationAdvantages: [10, 11, 7, 1, 4, 9, 8],
    amenities: [4, 17, 5, 6, 7, 3],
    images: [
      "/images/projects/earth/logo.jpg",
      "/images/projects/earth/11.jpg",
      "/images/projects/earth/12.jpg",
      "/images/projects/earth/13.jpg",
    ],
  },
];

export const locationAdvantages = [
  {
    id: 1,
    icon: Plane,
    title: "Dholera International Cargo cum Passenger Airport",
    description:
      "Just 10 minutes away from the Dholera International Cargo cum Passenger Airport.",
    distance: "10 MIN",
  },
  {
    id: 2,
    icon: BusFront,
    title: "Govt. Existing Road Touch Entry",
    description:
      "NA, NOC, Title clear project located near the Vadodara Bhavnagar Highway for excellent connectivity.",
    distance: "5 KM",
  },
  {
    id: 3,
    icon: Plane,
    title: "Dholera International Airport Circle",
    description:
      "Just 5 minutes away from the Dholera International Airport Circle.",
    distance: "5 MIN",
  },
  {
    id: 4,
    icon: Waves,
    title: "Artificial River / Canal Front",
    description:
      "A scenic 10-minute drive to the beautiful Artificial River and Canal Front area.",
    distance: "10 MIN",
  },
  {
    id: 5,
    icon: BusFront,
    title: "Ahmedabad–Dholera Express Highway",
    description:
      "Only 10 minutes away from the Ahmedabad–Dholera Express Highway, ensuring smooth travel access.",
    distance: "10 minutes",
  },
  {
    id: 7,
    icon: TrainTrack,
    title: "Mono Rail Pipli Junction",
    description:
      "Situated 10 minutes away from the Mono Rail Pipli Junction for fast intra-city connectivity.",
    distance: "10 minutes",
  },
  {
    id: 8,
    icon: Landmark,
    title: "Dholera SIR Entry",
    description:
      "Just 10 minutes away from Dholera Smart City Entry, offering strategic access to the smart city zone.",
    distance: "10 MIN",
  },
  {
    id: 9,
    icon: Building2,
    title: "Lothal Museum",
    description:
      "15 minutes from the National Maritime Heritage Complex - LOTHAL.",
    distance: "15 MIN",
  },
  {
    id: 10,
    icon: BusFront,
    title: "NH 751",
    description: "National highway NH 751 road access society entry.",
    distance: "5 MIN",
  },
  {
    id: 11,
    icon: MapPin,
    title: "NE8 and NH751",
    description:
      "Located at intersection of two major national highways NE8 and NH751.",
    distance: "5 MIN",
  },
  {
    id: 12,
    icon: TrainTrack,
    title: "Mono Rail Junction RRTS",
    description:
      "5 minutes away from the Mono Rail Junction RRTS for fast intra-city connectivity.",
    distance: "5 MIN",
  },
  {
    id: 13,
    icon: MapPin,
    title: "In the Vicinity of 200-year-old Kamiyaladham Temple",
    description:
      "Located just 5 minutes away, offering proximity to the historic Kamiyaladham Temple.",
    distance: "5 minutes",
  },
  {
    id: 14,
    icon: Building2,
    title: "Ahmedabad City",
    description:
      "Approximately 70 km away, providing easy access to Gujarat’s business hub and metro connectivity.",
    distance: "70 KM",
  },
  {
    id: 15,
    icon: Landmark,
    title: "Vadodara City",
    description:
      "Around 150 km from the project, connecting to Vadodara through major highways and express routes.",
    distance: "150 KM",
  },
  {
    id: 16,
    icon: MapPin,
    title: "Just 10 mins from Adhilai Circle",
    description:
      "Easily accessible location just 10 minutes from the central Adhilai Circle, ensuring convenient connectivity.",
    distance: "10 minutes",
  },
  {
    id: 17,
    icon: Mountain,
    title: "Only 5 mins from Blackbuck Sanctuary",
    description:
      "Experience nature up close — just 5 minutes from the serene and protected Blackbuck Sanctuary.",
    distance: "5 minutes",
  },
  {
    id: 18,
    icon: Building2,
    title: "Zero km / just 700 meters from Dholera Smart City",
    description:
      "Strategically positioned within 700 meters of Dholera Smart City, offering direct access to India’s first greenfield smart region.",
    distance: "700 meters",
  },
  {
    id: 19,
    icon: Train,
    title: "Surrounded by all major zones within 10 mins",
    description:
      "Well-connected to key zones including the High Access Corridor, Industrial Zone, and more — all within a 10-minute radius.",
    distance: "10 minutes",
  },
  {
    id: 20,
    icon: TreePine,
    title: "Perfect balance of nature & future development",
    description:
      "Enjoy the best of both worlds — surrounded by greenery while being at the heart of Dholera’s modern development corridor.",
  },
];

export const amenities = [
  { id: 1, icon: "🏊‍♂️", title: "Swimming Pool" },
  { id: 2, icon: "🏋️‍♀️", title: "Fitness Center" },
  { id: 3, icon: "🛡️", title: "24x7 Security" },
  { id: 4, icon: "🏠", title: "Club House" },
  { id: 5, icon: "👶", title: "Children's Park" },
  { id: 6, icon: "🧘‍♂️", title: "Yoga Park" },
  { id: 7, icon: "👴", title: "Senior Citizen Park" },
  { id: 8, icon: "🏫", title: "International School Nearby" },
  { id: 9, icon: "🏥", title: "Healthcare Facilities" },
  { id: 10, icon: "🛣️", title: "Smart Road Connectivity" },
  { id: 11, icon: "🚆", title: "Metro & Railway Access" },
  { id: 12, icon: "🏢", title: "Commercial Plaza" },
  { id: 13, icon: "♻️", title: "Waste Management System" },
  { id: 14, icon: "🎭", title: "Community Event Hall" },
  {
    id: 15,
    icon: "🌳",
    title: "Landscape Garden",
    description:
      "Manicured landscaped gardens with walking paths, seating pockets, ambient lighting and native planting for a calm, green retreat.",
  },
  {
    id: 16,
    icon: "🏏",
    title: "Sports Zone",
    description:
      "Dedicated area for outdoor sports like cricket, badminton, and basketball for an active lifestyle.",
  },
  {
    id: 17,
    icon: "🏋️",
    title: "Gymnasium",
    description:
      "Fully equipped modern gymnasium with cardio and strength training facilities.",
  },
  {
    id: 18,
    icon: "🎉",
    title: "Party Lawn",
    description:
      "Spacious open area perfect for celebrations, events, and gatherings amidst lush greenery.",
  },
  {
    id: 19,
    icon: "🏸",
    title: "Badminton Court",
    description:
      "Outdoor badminton courts designed for fitness and fun with smooth flooring and proper lighting.",
  },
  {
    id: 20,
    icon: "🏏",
    title: "Box Cricket",
    description:
      "Compact turf cricket zone for quick matches and community tournaments.",
  },
  {
    id: 21,
    icon: "⛱️",
    title: "Gazebo",
    description:
      "Shaded seating areas ideal for relaxation and social interaction in landscaped surroundings.",
  },
  {
    id: 22,
    icon: "🏞️",
    title: "Lake",
    description:
      "Beautiful natural lake area offering serene views and a peaceful ambiance for walks.",
  },
  {
    id: 23,
    icon: "🏃‍♂️",
    title: "Jogging Track",
    description:
      "Dedicated jogging and walking path with greenery on both sides for daily fitness routines.",
  },
  {
    id: 24,
    icon: "🚗",
    title: "Parking Spaces",
    description:
      "Ample covered and open parking areas designed for residents and visitors.",
  },
  { id: 25, icon: "🛣️", title: "Internal Wide Road (12 & 9 mtr)" },
  { id: 26, icon: "🛕", title: "Temple" },
];
