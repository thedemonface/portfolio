const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Recognition",
    link: "#recognition",
  },
];

const words = [
  { text: "Products", imgPath: "/images/ideas.svg" },
  { text: "Roadmaps", imgPath: "/images/concepts.svg" },
  { text: "Releases", imgPath: "/images/designs.svg" },
  { text: "Teams", imgPath: "/images/code.svg" },
  { text: "Products", imgPath: "/images/ideas.svg" },
  { text: "Roadmaps", imgPath: "/images/concepts.svg" },
  { text: "Releases", imgPath: "/images/designs.svg" },
  { text: "Teams", imgPath: "/images/code.svg" },
];

const counterItems = [
  { text: "5.5+", label: "Years of Experience" },
  { text: "25–30", label: "Cross-functional team members" },
  { text: "15+", label: "Projects Delivered" },
  { text: "25+", label: "Change Requests" },
  { value: 95, suffix: "%", label: "User Satisfaction" },
];

const logoIconsList = [
  { name: "AWS", imgPath: "/images/logos/aws.svg" },
  { name: "Azure", imgPath: "/images/logos/azure.svg" },
  { name: "Jira", imgPath: "/images/logos/jira.svg" },
  { name: "Confluence", imgPath: "/images/logos/confluence.svg" },
  { name: "Figma", imgPath: "/images/logos/figma.svg" },
  { name: "Terraform", imgPath: "/images/logos/terraform.svg" },
  { name: "Google Cloud", imgPath: "/images/logos/googlecloud.svg" },
  { name: "PostgreSQL", imgPath: "/images/logos/postgresql.svg" },
];

const abilities = [
  {
    imgPath: "/images/chat.png",
    title: "Stakeholder Management",
    desc: "Aligning clients, vendors, and delivery teams so scope, cost, and priorities stay clear.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "SLA-driven execution from change requests through production, with releases that land on schedule.",
  },
  {
    imgPath: "/images/seo.png",
    title: "Agile Delivery",
    desc: "Sprint planning, backlog grooming, reviews, and release planning tracked in Jira.",
  },
];

const skillGroups = [
  {
    name: "Tools and Platforms",
    logos: [{ src: "/images/logos/jira.svg", alt: "Jira" }],
    items: [
      "Jira",
      "Confluence",
      "Figma",
      "SQL",
      "Google Workspace",
      "Microsoft Teams",
    ],
  },
  {
    name: "Prioritization and Metrics",
    logos: [{ src: "/images/logos/agile.svg", alt: "Agile and Scrum" }],
    items: [
      "Agile",
      "Scrum",
      "SAFe",
      "Kanban",
      "RICE",
      "MoSCoW",
      "Kano Model",
      "DAU / MAU",
      "Retention and Churn",
    ],
  },
  {
    name: "Product Management",
    logos: [{ src: "/images/logos/product.svg", alt: "Product management" }],
    items: [
      "Roadmap and Strategy",
      "PRDs and FRDs",
      "User Stories",
      "Go-to-Market",
      "OKRs",
      "Business Case",
    ],
  },
  {
    name: "AI",
    logos: [
      { src: "/images/logos/cursor.svg", alt: "Cursor" },
      { src: "/images/logos/claude.svg", alt: "Claude" },
    ],
    items: ["Cursor", "Claude", "Claude Code", "ChatGPT", "Figma Make"],
  },
  {
    name: "Cloud",
    logos: [{ src: "/images/logos/aws.svg", alt: "AWS" }],
    items: [
      "AWS S3, Lambda, ECS, EKS",
      "SNS, SQS, Textract",
      "Global Accelerator",
      "CloudWatch",
      "Terraform",
      "Azure AI",
      "Vertex AI",
    ],
  },
];

const expCards = [
  {
    review:
      "Leading delivery for a cross-functional team of 25–30 across product, cloud, and AI workstreams.",
    mark: "MB",
    logo: "/images/companies/mindbowser.png",
    company: "MindBowser Inc",
    location: "Pune",
    title: "Project Manager / Product Manager",
    date: "June 2025 – Present",
    responsibilities: [
      "Managed a cross-functional team of 25–30 across multiple projects, from requirement gathering through production deployment.",
      "Used Cursor and Claude Code mid-sprint to build a prototype a client needed.",
      "Led sprint planning, backlog grooming, reviews, retrospectives, and client demos, and shipped builds at the end of each sprint.",
      "Delivered 25+ change requests through client communication, feature recommendations, cost estimation, and scope negotiation.",
      "Led KickSnap Phase 3 from the US into Japan and Hong Kong. Shoppers discover sneakers across brands, compare prices, and buy on the retailer site. They can share pairs with each other and use AR try-on by opening the camera and scanning a foot. Added WeChat and LINE, plus data pipelines across 14 platforms.",
      "Directed AWS infrastructure across Dev, QA, Staging, and Production with Terraform and ECS, and delivered Global Accelerator for regional users.",
      "Delivered a Microsoft 365 and QuickBooks dashboard that uses Azure AI to flag important email, and Vertex AI patient summaries generated from SmartForms.",
      "Delivered RainyDay Parents for Brooklyn and Manhattan, with a community board, activity map, parent groups, and messaging, live on the App Store and Google Play. Partnered with UI/UX in Figma on layout, placement, and user flow.",
      "Delivered EnnoaAI, a HIPAA-compliant platform for dental and clinical practices. Practice admins and professionals run multi-location practices, adaptive medical-history forms, and AI analysis reports before treatment. Super admins manage practices, subscriptions, billing, and coupons.",
    ],
  },
  {
    review:
      "Reduced delivery time by 10% and issue resolution time by 30%, with 100% of campaigns shipped on time.",
    mark: "TCS",
    logo: "/images/companies/tcs.jpg",
    logoClass: "bg-white",
    company: "Tata Consultancy Services",
    location: "Mumbai",
    title: "Project Manager & Scrum Master",
    date: "May 2022 – March 2025",
    responsibilities: [
      "Optimized Agile workflows and cut delivery time by 10% through sprint planning, backlog refinement, and sprint reviews.",
      "Boosted customer retention by 20% by refining data segmentation for email and SMS campaigns using SQL, Power Query, and Excel.",
      "Led the Communication team across three critical applications, with Jira used for sprint tracking, story prioritization, and release planning.",
      "Delivered 100% of campaigns on time with 95% user satisfaction by streamlining testing and SLA-driven support.",
      "Reduced issue resolution time by 30%, resolved 90% of issues within SLA, and kept 24/7 business support in place.",
    ],
  },
  {
    review:
      "Ran web and mobile delivery with cross-functional Agile teams and held 100% on-time delivery within SLAs.",
    mark: "ANT",
    note: "Ants Innovations is a software company.",
    company: "Ants Innovations Inc",
    location: "Mumbai",
    title: "Junior Project Coordinator",
    date: "February 2021 – May 2022",
    responsibilities: [
      "Managed the product development lifecycle across web and mobile projects and led Agile teams to 100% on-time delivery within defined SLAs.",
      "Implemented IT process improvements in Jira, improving team efficiency and service quality.",
    ],
  },
];

const highlights = [
  {
    kind: "Certification",
    name: "Project Management",
    href: "https://drive.google.com/file/d/1287ImHKddii_V2fESRPNzGEpbpWGJClU/view?usp=sharing",
  },
  {
    kind: "Certification",
    name: "Agile Scrum and Kanban",
    href: "https://drive.google.com/file/d/1_a3WWMe9hRBnP7sjgz8dab_kgyn3b4a9/view?usp=sharing",
  },
  {
    kind: "Certification",
    name: "Change Management",
    href: "https://drive.google.com/file/d/18Pm8K7a7uuowfjJPqIjUhCKimjAO9mjh/view?usp=sharing",
  },
  {
    kind: "Certification",
    name: "Scrum Product Owner",
    href: "https://drive.google.com/file/d/1px9AP4V_AVKZD1O0Sk7csuVU8lfjdXE0/view?usp=sharing",
  },
  {
    kind: "Certification",
    name: "Jira and Confluence",
    href: "https://drive.google.com/file/d/13un_JcZKI0IjrgWgTXwpc87U0RzRyzey/view?usp=sharing",
  },
  {
    kind: "Certification",
    name: "Managing Teams",
    href: "https://drive.google.com/file/d/18dKk-6JOzBwfZXoS04D0uasWIQ4zFI8N/view?usp=sharing",
  },
  {
    kind: "Award",
    name: "Elevate Wings Award",
    href: "https://drive.google.com/file/d/11wmQYYU6XNkI-fZnqWWGoSl4-DvGSQnT/view?usp=sharing",
    review:
      "Led the migration of applications from iBank to Colo and Yotta Server, including the upgrade.",
  },
  {
    kind: "Award",
    name: "On-the-Spot Award",
    href: "https://drive.google.com/file/d/15VHO26p6LKjyOzbT4txBQGYtRu0xFJ_8/view?usp=sharing",
    review:
      "Zero escalations during 34 months of on-site client service, and executed the Disaster Recovery Drill three times.",
  },
];

const projects = [
  {
    title: "RainyDay",
    eyebrow: "MindBowser · Parenting community",
    headline:
      "A neighborhood app that helps parents in Brooklyn and Manhattan find activities, share locally, and talk to each other",
    href: "https://www.rainydayparents.com/",
    image: "/images/projects/rainyday/community.png",
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.rainydayparents&hl=en_IN",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/rainyday-parents/id6757477995",
      },
      {
        label: "Website",
        href: "https://www.rainydayparents.com/",
      },
    ],
    screenshots: [
      {
        src: "/images/projects/rainyday/community.png",
        alt: "RainyDay community board in South Slope",
      },
      {
        src: "/images/projects/rainyday/activities-map.png",
        alt: "RainyDay activities map around Park Slope and Barclays Center",
      },
      {
        src: "/images/projects/rainyday/activity-filters.png",
        alt: "RainyDay activity filters for distance, date, time, age, and category",
      },
      {
        src: "/images/projects/rainyday/activity-detail.png",
        alt: "RainyDay activity page for a children's soccer session in Brooklyn",
      },
      {
        src: "/images/projects/rainyday/parent-group.png",
        alt: "RainyDay parent group conversation",
      },
      {
        src: "/images/projects/rainyday/group-chat.png",
        alt: "RainyDay parent group chat with photo sharing",
      },
    ],
    summary:
      "Led delivery of RainyDay Parents, a local parenting app for Brooklyn and Manhattan. Parents use one place for a community board, a map of nearby children's activities with filters for age, date, distance, and indoor or outdoor, curated parent groups, and direct messaging. The app is live on Google Play and the App Store.",
  },
  {
    title: "KickSnap",
    eyebrow: "MindBowser · Phase 3",
    headline:
      "A sneaker discovery platform for finding pairs, comparing prices, and trying them on in AR",
    href: "https://kicksnap.app/",
    image: "/images/projects/kicksnap/home-japan.png",
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/search?q=kicksnap&c=apps&hl=en_IN",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/in/app/kicksnap/id6450046203",
      },
      {
        label: "kicksnap.app",
        href: "https://kicksnap.app/",
      },
    ],
    screenshots: [
      {
        src: "/images/projects/kicksnap/welcome.png",
        alt: "KickSnap welcome screen in Traditional Chinese, with WeChat, Google, and Apple sign-in",
      },
      {
        src: "/images/projects/kicksnap/create-account.png",
        alt: "KickSnap account creation in Traditional Chinese",
      },
      {
        src: "/images/projects/kicksnap/onboarding-1.png",
        alt: "KickSnap onboarding asking the user to photograph a sneaker",
      },
      {
        src: "/images/projects/kicksnap/onboarding-2.png",
        alt: "KickSnap onboarding camera guidance",
      },
      {
        src: "/images/projects/kicksnap/onboarding-3.png",
        alt: "KickSnap onboarding showing how a photo is matched to a sneaker",
      },
      {
        src: "/images/projects/kicksnap/home-japan.png",
        alt: "KickSnap Japan home with capture, upload, text search, and browse",
      },
      {
        src: "/images/projects/kicksnap/explore.png",
        alt: "KickSnap explore grid of sneakers from several brands",
      },
      {
        src: "/images/projects/kicksnap/compare-prices.png",
        alt: "KickSnap Japan results comparing sneaker prices",
      },
      {
        src: "/images/projects/kicksnap/ar-scan.png",
        alt: "KickSnap AR try-on with the camera ready to scan the feet",
      },
      {
        src: "/images/projects/kicksnap/ar-tryon.png",
        alt: "KickSnap AR try-on showing a sneaker placed on the user's feet",
      },
      {
        src: "/images/projects/kicksnap/ar-puma.png",
        alt: "KickSnap AR try-on of another sneaker with search",
      },
      {
        src: "/images/projects/kicksnap/connections.png",
        alt: "KickSnap Sneakerheads connection requests",
      },
      {
        src: "/images/projects/kicksnap/connected.png",
        alt: "KickSnap confirmation that two people are now connected",
      },
      {
        src: "/images/projects/kicksnap/search-people.png",
        alt: "KickSnap search for people to follow",
      },
      {
        src: "/images/projects/kicksnap/search-recent.png",
        alt: "KickSnap recent user searches",
      },
    ],
    summary:
      "Led KickSnap V3, a sneaker discovery platform. People find sneakers from different brands, compare prices, and continue to the seller’s site to buy. They can share pairs with each other. AR try-on opens the camera so someone can scan a foot and see the shoe on it. Phase 3 took the product from the US to Japan and Hong Kong, with region-specific screens, WeChat and LINE, and retailer data across 14 platforms.",
  },
  {
    title: "EnnoaAI",
    eyebrow: "MindBowser · Dental and clinical practices",
    headline:
      "A HIPAA-compliant platform that shows a patient's medical risk before treatment begins",
    href: "https://app.ennoa.ai",
    image: "/images/projects/ennoaai/risk-insight.png",
    links: [
      {
        label: "app.ennoa.ai",
        href: "https://app.ennoa.ai",
      },
    ],
    screenshots: [
      {
        src: "/images/projects/ennoaai/risk-insight.png",
        alt: "EnnoaAI sign in, with the message that the platform understands a patient's medical risk before treatment",
      },
      {
        src: "/images/projects/ennoaai/dashboard.jpg",
        alt: "EnnoaAI dashboard with practices, patients, revenue, and analysis reports generated",
      },
      {
        src: "/images/projects/ennoaai/patients.jpg",
        alt: "EnnoaAI patient management with alerts, reminders, and each patient's form status",
      },
      {
        src: "/images/projects/ennoaai/analysis.jpg",
        alt: "EnnoaAI analysis report with an elevated advisory and treatment considerations",
      },
      {
        src: "/images/projects/ennoaai/summary.jpg",
        alt: "EnnoaAI medical history summary for conditions such as hypertension and atrial fibrillation",
      },
    ],
    summary:
      "Led delivery of EnnoaAI, a HIPAA-compliant SaaS platform for dental and clinical practices. Practice admins onboard a practice, add locations, invite staff, and follow a dashboard of alerts, reminders, patient growth, and analysis reports. Professional users manage patients and medical-history forms that adapt as conditions, medications, and risks come up. Each history is versioned, and AI turns it into a concise analysis report before treatment. Patients can complete the form from a shared link. Super admins oversee practices, subscription plans, billing, coupons, and corporate plans. Appointment reminders go out seven days ahead by email and SMS.",
  },
  {
    title: "Moto OS",
    eyebrow: "Founder · Pune · August 2026 – Present",
    headline:
      "A cockpit operating system that brings maps, calls, and music onto an Indian motorcycle display",
    href: "https://moto-os.netlify.app",
    cluster: true,
    links: [
      {
        label: "Website",
        href: "https://moto-os.netlify.app",
      },
    ],
    summary:
      "Founded Moto OS with a co-founder: a TFT cluster app and an Android and iOS companion that put Google Maps navigation, calls, and music on the bike. The working prototype, built with Cursor and Claude, shows navigation, music, calls, speed, gear, RPM, and range. Pitched to Royal Enfield product and technology leadership, and their feedback is moving the product from Android toward embedded clusters. Now talking with Indian two-wheeler manufacturers about licensing Moto OS as an SDK, and raising a pre-seed round with mobility investors.",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  highlights,
  projects,
  skillGroups,
  navLinks,
};
