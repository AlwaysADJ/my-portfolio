export interface Project {
  id: number;
  type: "product" | "project";
  title: string;
  description: string;
  features?: string[];
  skills?: string[]; // Relevant for projects
  impact: string;
  role: string;
  overviewImages?: string[];
  imageUrl?: string;
  overview: string;
  relatedProducts?: [],
  associatedProjects?: Project[]; // Links projects to products or vice versa
  highlights?: string[]; // Key highlights for products
  assets?: {
    flowcharts?: Array<{ imageUrl: string; description?: string; assetType: string }>;
    mindmaps?: Array<{ imageUrl: string; description?: string; assetType: string }>;
    other?: Array<{ imageUrl: string; description?: string; assetType: string }>;
  };
  additionalSections?: Array<{
    title: string;
    content: string;
    images?: string[];
  }>;
}


export const projects: Project[] = [
  {
    id: 1,
    type: "product",
    title: "Payment Cards",
    description:
      "Oversaw the portfolio of over 11 million debit, credit and prepaid cards, ensuring customer-centric functionality with key focus on customer satisfaction, revenue maximization, cost optimization, and ecosystem play.",
    skills: ["Business Management", "Innovation", "Negotiation", "Stakeholder Management"],
    impact:
      "Improved business's understanding of customers' needs, helping to enhance customer experiences while increasing revenue at a reduced cost and risk.",
    role: "Product Manager",
    imageUrl: "../img/payment-cards.jpeg",
    overview:
      "FirstBank payment cards provide secure and scalable payment options for customers accross multiple segment, including High Networth Individuals, Mid Affluent, Lower Affluent, and mass market, with a focus on convenience and global standards compliance. While managing the payment card business, I leveraged strategic planning, market insights, and stakeholder collaboration to develop and optimize product strategies, resulting in revenue growth and market expansion. Major achievements are highlighted in the Key highlight section below.",
    overviewImages: [
      "../img/all-payment-cards.png"
    ],
    highlights: [
      "Deployed FirstBank Virtual Cards on FirstMobile and FirstMonie App, expanding digital payment options and enhancing user convenience.",
      "Managed over 11 million payment cards, significantly boosting FirstBank's card base.",
      "Increased Mastercard market share from 25% to 45% within a year through strategic initiatives.",
      "Played a key role in introducing Nigeria's first Visa Multi-Currency Card, setting a new industry standard.",
      "Executed the 'Free Fuel Friday' campaign in collaboration with Oando Plc, resulting in a 5% increase in transaction volume and a 15% rise in transaction value.",
      "Achieved a 346% growth in the Staff Credit Card variant within six months through targeted strategies.",
      "Implemented an instant card issuance solution, reducing card production costs by 44%.",
      "Designed and enforced a card spend policy, increasing the cross-border transaction limit to $5,000.",
      "Integrated DCC (Dynamic Currency Conversion) transaction markup, contributing to a projected 12% revenue growth.",
      "Enhanced credit and prepaid card authorization success rates, improving transaction reliability."
    ],
    associatedProjects: [
      {
        id: 102,
        type: "project",
        title: "FirstBank Virtual Cards",
        description:
          "Launched virtual cards for secure digital payments through FirstMobile and FirstMonie apps, expanding digital payment solutions in Nigeria.",
        skills: ["Digital Payments", "Card Issuance", "App Development", "Product Launch"],
        impact:
          "Increased the bank's payment card base by 20% and enhanced customer experience with instant digital card issuance.",
        role: "Product Manager",
        imageUrl: "../img/virtual-card.png",
        overview:
          "The Instant Card Issuance Solution enabled real-time debit card issuance at branches, revolutionizing customer service.",
      },
      {
        id: 104,
        type: "project",
        title: "Instant Card Issuance Solution",
        description:
          "Implemented real-time debit card issuance to enhance customer satisfaction and reduce production costs.",
        skills: ["Process Optimization", "Cost Reduction", "Card Issuance Technology"],
        impact:
          "Reduced card issuance time and cut personalization costs by 44%.",
        role: "Product Manager",
        imageUrl: "../img/instant-card-issuance.jpg",
        overview:
          "The Instant Card Issuance Solution enabled real-time debit card issuance at branches, revolutionizing customer service.",
      },
      {
        id: 104,
        type: "project",
        title: "Summer Campaigns",
        description:
          "Championed the initiative to improve product adoption and usage, enabling seamless travel experience while promoting cross-border transactions,",
        skills: ["Process Optimization", "Cost Reduction", "Card Issuance Technology"],
        impact:
          "Grew FX income and adoption of various card products that support cross-border transactions.",
        role: "Product Manager",
        imageUrl: "../img/summer-campaign.jpg",
        overview:
          "The Instant Card Issuance Solution enabled real-time debit card issuance at branches, revolutionizing customer service.",
      },
      {
        id: 105,
        type: "project",
        title: "Free Fuel Friday",
        description:
          "Participated actively in a collaborative campaign with Oando Plc and Verve International to enhance customer engagement through rewards.",
        skills: ["Process Optimization", "Cost Reduction", "Card Issuance Technology"],
        impact:
          "Resulted in 5% increase in transaction volume and a 15% rise in transaction value.",
        role: "Product Manager",
        imageUrl: "../img/free-fuel.jpg",
        overview:
          "The Instant Card Issuance Solution enabled real-time debit card issuance at branches, revolutionizing customer service.",
      }
    ],
    additionalSections: [
      {
        title: "Other Initiatives I worked On",
        content: "Working with the team, I implemented other several initiatives including card-in-control functionalities on FirstMobile to enable customers manage their payment cards on mobile banking application, co-branding partnership with Shell, Forte Oil, and other organizations. I managed credit card processor and reviewed existing SLA, leading to cost reduction on credit card producs. Additionally, leveraging my analytical skills, I championed the Card Business Budget Analysis, making cost and revenue predictions based on existing data, proposed business initiatives, and changing customer behaviour and needs.",
        images: [
          "../img/co-branded-cards.png",
          "../img/card-control.png",
          "../img/budgeting.jpeg",
          "../img/negotiation.jpg"
        ]
      }
    ],
    assets: {
      mindmaps: [
        {
          assetType: "Migration Project Mindmap",
          imageUrl: "../img/migration-plan-mindmap.png",
          description: "Migration of users from a less stable wallet card to a loadble and reusable prepaid card to to address reconciliation and loading challenges"
        }
      ],
      other: [
        {
          assetType: "Migration Project Mindmap",
          imageUrl: "../img/virtual-card-process.png",
          description: "Migration of users from a less stable wallet card to a loadble and reusable prepaid card to to address reconciliation and loading challenges"
        }
      ]
    },
  },
  {
    id: 1,
    type: "project",
    title: "Host-to-Host Solution",
    description:
      "Implemented a seamless payment integration system across 3 African countries, enabling real-time transactions and data exchange between multiple financial institutions.",
    skills: ["Payment Integration", "Cross-border Transactions", "API Development", "Project Management"],
    impact:
      "Enhanced cross-border transaction efficiency, reducing processing time by 30% and improving financial institutions' interoperability.",
    role: "Product and Project Manager",
    imageUrl: "../img/host-to-host.png",
    overview:
      "Host-to-Host Solution integrates multiple financial institutions into a single platform, facilitating secure and fast payment processing.",
    assets: {
      flowcharts: [
        {
          assetType: "Flowchart",
          imageUrl: "../img/host-to-host-architecture.png",
          description: "Flowchart showcasing the architecture of the Host-to-Host solution."
        }
      ],
    },
    additionalSections: [
      {
        title: "Challenges & Solutions",
        content: "Dealt with network connectivity issues in remote areas by optimizing for intermittent connections.",
      },
      {
        title: "Solution Architecture",
        content: "The solution uses secure protocols to connect multiple financial institutions and ensure data integrity during transactions.",
        images: ["../img/host-to-host-architecture.png"]
      },
    ]
  },
  {
    id: 3,
    type: "product",
    title: "CivisHealth Solution - HMIS",
    description:
      "Led the implementation of Health Management Information System (HMIS) for medical institutions, centralizing patient records and optimizing hospital processes.",
    skills: ["Business Model Definition", "Agile Methodologies", "Health IT"],
    impact:
      "Improved operational efficiency and patient care delivery across multiple hospitals.",
    role: "Product Manager",
    imageUrl: "../img/civishealth.png",
    overview:
      "CivisHealth Solution is a comprehensive HMIS platform with features like patient management, diagnostic tracking, inventory management, and AI integration.",
    assets: {
      flowcharts: [
        {
          assetType: "Flowchart",
          imageUrl: "../img/civis-flowchart.png",
          description: "Flowchart showcasing CivisHealth functionalities."
        }
      ],
    },
    additionalSections: [
      {
        title: "CivisHealth Overview",
        content: "CivisHealth Solution centralizes patient records, improves hospital processes, and integrates AI for better decision-making.",
        images: [
          "../img/civishealth-overview.png"
        ]
      }
    ]
  },
  {
    id: 1,
    type: "product",
    title: "Visa Credit Cards (Naira and Dollar Denominated)",
    description:
      "Managed a suite of Visa Credit Cards offering convenient and secure payment solutions for both local and international transactions.",
    skills: ["Digital Payments", "Card Issuance", "App Development", "Product Launch"],
    impact:
      "Increased credit card transaction revenue by 35% and grew the customer base by 20%.",
    role: "Product Manager",
    imageUrl: "../img/visa-credit-card.png",
    overview:
      "The Visa Credit Card portfolio included enhanced features such as dynamic spending limits, fraud prevention measures, and multi-currency functionality.",
    highlights: [
      "Improved product adoption with innovative marketing strategies.",
      "Collaborated with global partners to deliver seamless payment experiences.",
    ],
    associatedProjects: [
      {
        id: 101,
        type: "project",
        title: "Visa Multi-Currency Card Launch",
        description:
          "Successfully launched a multi-currency card enabling seamless international transactions for cardholders in Nigeria.",
        skills: ["Product Launch", "Customer Experience Design", "Stakeholder Engagement"],
        impact:
          "Boosted cross-border transaction volumes and customer satisfaction.",
        role: "Product Manager",
        imageUrl: "../img/visa-multi-currency.png",
        overview:
          "The Visa Multi-Currency Card offers customers the ability to transact in multiple currencies with competitive rates and enhanced security.",
      }
    ],
    additionalSections: [
      {
        title: "Card Features",
        content: "The Visa Credit Card offers features such as dynamic spending limits, fraud prevention, and multi-currency functionality.",
        images: [
          "../img/visa-credit-card-features.png"
        ]
      }
    ]
  },
  {
    id: 5,
    type: "project",
    title: "IBM Middleware Assessment Project",
    description:
      "Led the assessment and integration of IBM Middleware solutions for improving system scalability, data integration, and application performance across enterprise-level systems.",
    skills: ["System Integration", "Middleware Solutions", "Enterprise Architecture", "Project Management"],
    impact:
      "Enhanced system performance, reduced integration time by 25%, and streamlined data management processes, resulting in improved overall system efficiency.",
    role: "Project Manager",
    imageUrl: "../img/ibm-middleware.jpg",
    overview:
      "The IBM Middleware Assessment Project involved evaluating and implementing IBM Middleware solutions to optimize and integrate enterprise-level systems, ensuring enhanced scalability and data flow.",
    assets: {
      flowcharts: [
        {
          assetType: "Flowchart",
          imageUrl: "../img/ibm-middleware-architecture.png",
          description: "Flowchart illustrating the architecture and integration process of the IBM Middleware solution."
        }
      ],
    },
    additionalSections: [
      {
        title: "Integration Strategy",
        content: "The project focused on evaluating middleware technologies and integrating them with existing enterprise applications to optimize scalability and data management.",
        images: ["../img/ibm-middleware-architecture.png"]
      },
      {
        title: "Challenges & Solutions",
        content: "Addressed issues with system bottlenecks by implementing middleware solutions that facilitated better data exchange between applications and improved system throughput.",
      }
    ]
  },
  {
    id: 6,
    type: "project",
    title: "FirstBank Virtual Cards",
    description:
      "Launched virtual cards for secure digital payments through FirstMobile and FirstMonie apps, expanding digital payment solutions in Nigeria.",
    skills: ["Digital Payments", "Card Issuance", "App Development", "Product Launch"],
    impact:
      "Increased the bank's payment card base by 20% and enhanced customer experience with instant digital card issuance.",
    role: "Project Lead",
    imageUrl: "../img/virtual-cards.jpg",
    overview:
      "The virtual card solution enables users to make secure online payments, offering features like immediate card issuance and enhanced security.",
    assets: {
      flowcharts: [
        {
          assetType: "Flowchart",
          imageUrl: "../img/virtual-cards-launch.png",
          description: "Flowchart showing the product launch and card issuance process."
        }
      ],
    },
    additionalSections: [
      {
        title: "Product Launch",
        content: "The virtual card product was designed to cater to the growing need for secure online transactions in the Nigerian market.",
        images: ["../img/virtual-cards-launch.png"]
      },
      {
        title: "Market Impact",
        content: "The product saw a 15% increase in active cardholders within 3 months of launch.",
      }
    ]
  },
  {
    id: 7,
    type: "project",
    title: "Visa Multi-Currency Card",
    description:
      "Introduced Visa Multi-Currency Cards to facilitate easy international transactions in multiple currencies, without conversion fees.",
    skills: ["Product Development", "Foreign Exchange", "Multi-currency Payments", "Market Penetration"],
    impact:
      "Enabled customers to save on foreign exchange fees and helped Visa expand its presence in Nigeria.",
    role: "Product Manager",
    imageUrl: "../img/visa-multi-currency.jpg",
    overview:
      "Visa Multi-Currency Cards provide customers with the ability to make payments in multiple currencies while avoiding foreign exchange conversion fees.",
    assets: {
      flowcharts: [
        {
          assetType: "Flowchart",
          imageUrl: "../img/visa-multi-currency-design.png",
          description: "Flowchart showing the multi-currency card product design and features."
        }
      ],
    },
    additionalSections: [
      {
        title: "Product Design & Development",
        content: "The card was developed to provide customers with a convenient solution for international payments.",
        images: ["../img/visa-multi-currency-design.png"]
      },
      {
        title: "Customer Feedback",
        content: "Customers praised the card for its ease of use and competitive exchange rates.",
      }
    ]
  }
];
