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
    name: "Ajay Miglani",
    designation: "Director & Board of Advisors",
    photo:
      "https://media.licdn.com/dms/image/v2/C4E03AQHZ1zRs1qTD6w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1570609000549?e=2147483647&v=beta&t=dX_T-imBCJpfxeV6JTXAKIG3DGhcVYxxyfYvDa8pEVU",
    bio: "Ajay Miglani is a senior professional with extensive experience in leadership, strategy, and advisory roles. As Director and Board Advisor, he provides strategic guidance, governance oversight, and industry insights to support the organization's long-term vision and growth.",
    emission2025: 11.2,
    offset2025: 12.4,
  },
  {
    name: "Ankit Singh",
    designation: "Supervisor – Operations",
    bio: "Ankit Singh supports operational execution by supervising field activities and assisting with coordination across teams. His role ensures timely implementation, process adherence, and effective management of day-to-day operational requirements.",
    emission2025: 8.2,
    offset2025: 9.2,
  },
  {
    name: "Deepak Kumar Kushwaha",
    designation: "Intern",
    bio: "Deepak Kumar Kushwaha is researching CSR as a tool to restore depleted soil organic carbon in Indian agricultural landscapes. His work evaluates how corporate initiatives can promote regenerative agriculture, improve soil fertility, and contribute to long-term environmental sustainability.",
    emission2025: 0.0,
    offset2025: 0.0,
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
    name: "Harsh Bharti",
    designation: "Intern",
    bio: "Harsh Bharti is developing a macro framework for the use of biomass as a fuel in Indian industry. His project examines policy, economic viability, and environmental impact, aiming to reduce fossil fuel dependence and promote sustainable energy adoption.",
    emission2025: 0.0,
    offset2025: 0.0,
  },
  {
    name: "Lohit Verma",
    designation: "Intern",
    bio: "Lohit Verma is analyzing the challenges in mobilizing farmer networks for biomass rehabilitation. His research focuses on logistical, financial, and awareness barriers, while identifying strategies to improve participation and promote sustainable biomass management.",
    emission2025: 0.0,
    offset2025: 0.0,
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
    name: "Priyanka Giri Shiknis",
    designation: "Board of Directors",
    photo: "https://iili.io/q5mBwzB.jpg",
    bio: "Priyanka Giri Shiknis serves as a Board of Directors, contributing to strategic decision-making, governance, and organizational oversight. She supports the leadership team by providing guidance on long-term vision, policy alignment, and sustainable growth of climate-focused initiatives.",
    emission2025: 10.5,
    offset2025: 11.7,
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
    name: "Rutuja Gaikwad",
    designation: "Research Analyst & Data Manager",
    photo: "https://iili.io/q5mKRRV.jpg",
    bio: "Rutuja Gaikwad works as a Research Analyst and Data Manager, supporting sustainability and climate initiatives through in-depth research, structured data management, and accurate documentation. She plays a key role in managing emissions data, supporting reports, and ensuring data integrity for GHG accounting and impact assessments.",
    emission2025: 8.5,
    offset2025: 9.2,
  },
  {
    name: "Sapna Bisht",
    designation: "Head of ClimeSchool",
    photo: "https://iili.io/q5mJ7dN.png",
    bio: "Sapna Bisht leads ClimeSchool, focusing on climate education, capacity building, and knowledge dissemination. She plays a pivotal role in designing learning programs, training modules, and awareness initiatives that empower individuals and organizations to understand climate action, sustainability practices, and carbon management.",
    emission2025: 10.3,
    offset2025: 11.6,
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
    name: "Swapnil Chavan",
    designation: "Full Stack Engineer",
    photo: "https://iili.io/q5bDybf.jpg",
    bio: "Swapnil Chavan is a Full Stack Engineer responsible for developing, maintaining, and optimizing the organization's digital platforms. He ensures smooth system functionality, scalability, and user-friendly interfaces, supporting the technical backbone of sustainability and climate-focused digital solutions.",
    emission2025: 9.9,
    offset2025: 11.4,
  },
  {
    name: "Urfi Ali",
    designation: "Intern",
    bio: "Urfi Ali is working on applying B2B2C financing models for carbon credits in Indian corporate and services sectors. The project focuses on enabling carbon-neutral supply chains, addressing Scope 3 emissions, and encouraging stakeholder participation in decarbonization.",
    emission2025: 0.0,
    offset2025: 0.0,
  },
  {
    name: "Varun Hooja",
    designation: "Co-Founder",
    photo: "https://iili.io/q5bP1pV.jpg",
    bio: "Varun Hooja is the Co-Founder and plays a key role in shaping the organization's vision and growth strategy. He contributes to business development, partnerships, and sustainability initiatives, ensuring alignment with the organization's climate action objectives.",
    emission2025: 11.6,
    offset2025: 12.2,
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
