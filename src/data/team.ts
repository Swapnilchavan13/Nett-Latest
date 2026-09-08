export type TeamMember = {
  name: string;
  designation: string;
  bio: string;
  /** Portrait URL — omitted when the person has no photo on file. */
  photo?: string;
  emission2025: number;
  offset2025: number;
};

export const TEAM: TeamMember[] = [
  {
    name: "Varun Hooja",
    designation: "Co-Founder",
    photo: "https://iili.io/q5bP1pV.jpg",
    bio: "Varun Hooja is the Co-Founder and plays a key role in shaping the organization's vision and growth strategy. He contributes to business development, partnerships, and sustainability initiatives, ensuring alignment with the organization's climate action objectives.",
    emission2025: 11.6,
    offset2025: 12.2,
  },
  {
    name: "Priyanka Giri Shiknis",
    designation: "Board of Directors",
    photo: "https://iili.io/q5mBwzB.jpg",
    bio: "Priyanka Giri Shiknis serves as a Board of Directors, contributing to strategic decision-making, governance, and organizational oversight. She supports the leadership team by providing guidance on long-term vision, policy alignment, and sustainable growth of climate-focused initiatives.",
    emission2025: 10.5,
    offset2025: 11.7,
  },
  {
    name: "Gautam Shiknis",
    designation: "Founder & Chairman",
    photo:
      "https://media.licdn.com/dms/image/v2/C4D03AQGwwJl0D_-OPw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1636129095656?e=2147483647&v=beta&t=CsmI_HoWJCNFGS3WuQ1kpdLpCaEFYqH6snv6_kyKZsc",
    bio: "Gautam Shiknis is the architect of the NettZero Suite and its hands-on driving force. He brings nearly 30 years of entrepreneurial experience to this venture and has been a Climate Champion for over 20 years. Actively involved in greenhouse gas (GHG) accounting since 2008, Gautam combines strategic vision with on-ground execution to advance credible climate action and sustainability solutions. Under his leadership, the organization focuses on delivering transparent, data-driven climate solutions that enable measurable progress toward carbon neutrality. Gautam plays a key role in advancing initiatives related to carbon accounting, sustainability platforms, and biochar-based carbon removal. His approach emphasizes practical implementation, scalability, and long-term environmental impact.",
    emission2025: 14.2,
    offset2025: 15.8,
  },
  {
    name: "Rutuja Gaikwad",
    designation: "Research Analyst & Data Manager",
    photo: "https://iili.io/q5mKRRV.jpg",
    bio: "Rutuja Gaikwad works as a Research Analyst and Data Manager, supporting sustainability and climate initiatives through in-depth research, structured data management, and accurate documentation. She plays a key role in managing emissions data, supporting reports, and ensuring data integrity for GHG accounting and impact assessments.",
    emission2025: 8.5,
    offset2025: 9.2,
  },
  {
    name: "Vidhi Gaur",
    designation: "GHG Assessor",
    photo: "https://iili.io/q5bQNVI.jpg",
    bio: "Vidhi Gaur is a GHG Assessor with expertise in greenhouse gas accounting and emissions assessment. She supports projects and clients by conducting accurate emissions calculations, ensuring compliance with relevant standards, and contributing to transparent and reliable sustainability reporting.",
    emission2025: 9.4,
    offset2025: 9.8,
  },
  {
    name: "Swapnil Chavan",
    designation: "Full Stack Engineer",
    photo: "https://iili.io/q5bDybf.jpg",
    bio: "Swapnil Chavan is a Full Stack Engineer responsible for developing, maintaining, and optimizing the organization's digital platforms. He ensures smooth system functionality, scalability, and user-friendly interfaces, supporting the technical backbone of sustainability and climate-focused digital solutions.",
    emission2025: 9.9,
    offset2025: 11.4,
  },
  {
    name: "Bhanchad",
    designation: "Field Officer",
    photo: "https://i.ibb.co/LDWdXN78/Bhanchand.jpg",
    bio: "Bhanchad works as a Field Officer, supporting on-ground farmer engagement and data collection activities. He collects and verifies farmer information in the field and maintains accurate records through the organization's digital application, helping ensure reliable data for project monitoring and implementation.",
    emission2025: 6.8,
    offset2025: 7.4,
  },
  {
    name: "Arun Singh",
    designation: "Field Officer",
    photo: "https://i.ibb.co/hFPfDKxb/Arun-Singh.jpg",
    bio: "Arun Singh works as a Field Officer, coordinating directly with farmers and supporting field-level data collection. He helps gather accurate farmer and agricultural information and ensures that records are properly maintained and updated through the organization's digital application.",
    emission2025: 7.2,
    offset2025: 8.1,
  },
  {
    name: "Jay Kumar Sharma",
    designation: "Field Officer",
    photo: "https://i.ibb.co/bgPWxJQK/Jay-kumar-sharma.jpg",
    bio: "Jay Kumar Sharma is a Field Officer responsible for supporting farmer data collection and maintaining accurate field records. He works closely with farmers on the ground, verifies information, and keeps project data updated through the organization's mobile application.",
    emission2025: 6.5,
    offset2025: 7.1,
  },
  {
    name: "Amit Tiwari",
    designation: "Field Officer",
    photo: "https://i.ibb.co/hRFMyrXP/Amit-tiwari.jpg",
    bio: "Amit Tiwari works as a Field Officer, supporting farmer outreach and on-ground data collection. His responsibilities include gathering and verifying farmer information, maintaining digital records, and ensuring that field data is accurately captured in the organization's application.",
    emission2025: 8.1,
    offset2025: 8.9,
  },
  {
    name: "Hiramani Yadav",
    photo: "https://i.ibb.co/kg4y3JG4/Whats-App-Image-2026-09-07-at-3-29-05-PM.jpg",
    designation: "Field Officer",
    bio: "Hiramani Yadav works as a Field Officer, supporting farmer engagement and field-level data collection activities. She helps collect accurate information from farmers, maintain project records, and ensure that field data is regularly updated through the organization's digital application.",
    emission2025: 7.4,
    offset2025: 8.0,
  },
  {
    name: "Gaurav Singh",
    designation: "Field Officer",
    photo: "https://i.ibb.co/jZ8mkkNM/Gaurav-singh.jpg",
    bio: "Gaurav Singh is a Field Officer involved in farmer data collection and field-level coordination. He works directly with farmers to gather and verify information while maintaining accurate and up-to-date records through the organization's digital application.",
    emission2025: 8.6,
    offset2025: 8.9,
  },
  {
    name: "Mulendra Kumar",
    designation: "Field Officer",
    photo: "https://i.ibb.co/FkyTCWQt/Mulendra-yadav.jpg",
    bio: "Mulendra Kumar works as a Field Officer, supporting on-ground farmer engagement and project data collection. He is responsible for gathering farmer information, verifying field records, and maintaining accurate data through the organization's mobile application.",
    emission2025: 6.9,
    offset2025: 7.5,
  },
  {
    name: "Shree Prakash",
    designation: "Field Officer",
    photo: "https://i.ibb.co/MkDSrk9t/Shree-prakash.jpg",
    bio: "Shree Prakash is a Field Officer who supports farmer outreach, field surveys, and data collection. He helps ensure that farmer information is accurately recorded and regularly maintained in the organization's digital application, contributing to effective project monitoring.",
    emission2025: 7.7,
    offset2025: 8.3,
  },
  {
    name: "Nitesh Dubey",
    designation: "Field Officer",
    photo: "https://i.ibb.co/GvkKcKdQ/Nitesh-dubey.jpg",
    bio: "Nitesh Dubey works as a Field Officer, assisting with farmer data collection and field-level coordination. He engages with farmers, verifies collected information, and maintains accurate digital records through the organization's application to support smooth project implementation.",
    emission2025: 8.3,
    offset2025: 8.7,
  },
  {
    name: "Varun Singh",
    designation: "Field Officer",
    photo: "https://i.ibb.co/Y4BBbHc0/Varun-singh.jpg",
    bio: "Varun Singh is a Field Officer responsible for supporting farmer engagement and maintaining accurate field data. He collects and verifies farmer information and ensures that records are consistently updated in the organization's digital application.",
    emission2025: 7.0,
    offset2025: 7.8,
  },
  {
    name: "Sunil Chaudhary",
    designation: "Field Officer",
    photo: "https://i.ibb.co/XR7f6zC/Sunil-Chaudhary.jpg",
    bio: "Sunil Chaudhary works as a Field Officer, supporting field operations through farmer engagement and systematic data collection. He helps gather accurate information from farmers, verify field records, and maintain updated data through the organization's digital application.",
    emission2025: 8.4,
    offset2025: 8.8,
  },
  {
    name: "Ram Kumar",
    designation: "Field Officer",
    photo: "https://i.ibb.co/PZM3jxcR/Ram-kumar.jpg",
    bio: "Ram Kumar is a Field Officer supporting farmer outreach, data collection, and field-level project activities. He works directly with farmers to collect and verify information while ensuring that records are accurately maintained through the organization's digital application.",
    emission2025: 6.6,
    offset2025: 7.3,
  },
  {
    name: "Ankit Singh",
    designation: "Supervisor – Operations",
    bio: "Ankit Singh supports operational execution by supervising field activities and assisting with coordination across teams. His role ensures timely implementation, process adherence, and effective management of day-to-day operational requirements.",
    emission2025: 8.2,
    offset2025: 9.2,
  },
  {
    name: "Mukesh Kevad",
    designation: "Supervisor – Operations",
    bio: "Mukesh Kevad works as a Supervisor in Operations, overseeing on-ground activities, coordinating teams, and ensuring smooth execution of projects. He plays a key role in maintaining operational efficiency, quality control, and adherence to processes across field operations.",
    emission2025: 8.1,
    offset2025: 9.2,
  },
  {
    name: "Neelesh Kevat",
    designation: "Biochar Producer",
    photo: "https://i.postimg.cc/3wY0Xnv6/img123.jpg",
    bio: "Neelesh Kevat is a Biochar Producer involved in sustainable biochar production processes that support carbon sequestration and climate-positive outcomes. He contributes to biomass conversion activities and on-ground production efforts aligned with long-term environmental impact goals.",
    emission2025: 6.9,
    offset2025: 7.5,
  },
  {
    name: "Pratyusha Priyanka",
    designation: "District Owner & Biochar Producer",
    photo:
      "https://i.postimg.cc/zf8HC0g6/Whats-App-Image-2026-01-06-at-4-48-48-PM.jpg",
    bio: "Pratyusha Priyanka is a District Owner and Biochar Producer, actively involved in decentralized biochar production and sustainable waste-to-resource initiatives. She supports local climate action by managing district-level operations and contributing to carbon sequestration through biochar projects.",
    emission2025: 6.5,
    offset2025: 7.3,
  },
  {
    name: "Rajeev Singh",
    designation: "District Owner & Biochar Producer",
    photo:
      "https://i.postimg.cc/C5q2Vj4p/Whats-App-Image-2026-01-06-at-5-05-52-PM.jpg",
    bio: "Rajeev Singh oversees district-level biochar production operations, contributing to sustainable agriculture and carbon removal initiatives. His role focuses on implementation, coordination, and ensuring efficient biochar production aligned with environmental and climate goals.",
    emission2025: 6.8,
    offset2025: 7.6,
  },
  {
    name: "Sanjay Singh Rajput",
    designation: "Biochar Producer",
    photo:
      "https://i.postimg.cc/5tbQBnCD/Whats-App-Image-2026-01-06-at-5-09-30-PM.jpg",
    bio: "Sanjay Singh is a Biochar Producer involved in sustainable biochar production processes that support carbon sequestration and climate-positive outcomes. He contributes to biomass conversion activities and on-ground production efforts aligned with long-term environmental impact goals.",
    emission2025: 6.7,
    offset2025: 7.4,
  },
  {
    name: "Vishal Kashyap",
    designation: "Biochar Producer",
    photo:
      "https://i.postimg.cc/43P7BV65/Whats-App-Image-2026-01-06-at-5-29-20-PM.jpg",
    bio: "Vishal Kashyap is a Biochar Producer involved in sustainable biochar production processes. He contributes to climate mitigation efforts by supporting biomass conversion, production activities, and initiatives focused on long-term carbon sequestration.",
    emission2025: 7.9,
    offset2025: 8.8,
  },
];

/** How many profiles show before "View full team". */
export const TEAM_INITIAL_COUNT = 9;

export const TEAM_TOTALS = {
  members: TEAM.length,
  emitted: TEAM.reduce((s, m) => s + m.emission2025, 0),
  offset: TEAM.reduce((s, m) => s + m.offset2025, 0),
};

export const FARMER_NETWORK = {
  eyebrow: "Plus",
  headline: "An on-ground network of over 25,000+ farmers and rapidly growing",
  note: "Spread across Madhya Pradesh, Himachal Pradesh, Uttar Pradesh and Uttarakhand",
};