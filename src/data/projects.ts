export interface Project {
  id: number;
  title: string;
  description: string;
  skills: string[];
  impact: string;
  role: string;
  imageUrl?: string;
  overview: string;
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
    title: "CivisHealth Solution - HMIS",
    description:
      "Led the implementation of Health Management Information System for medical institutions, centralizing patient medical records to improve patient care and operational efficiency.",
    skills: ["Business Model Definition","Project Management", "Agile Methodologies", "Health IT"],
    impact:
      "Enhanced operational efficiency and patient care delivery across multiple hospitals.",
    role: "Project Manager",
    imageUrl: "../img/civishealth.png",
    overview:
      "Civis Health Solution is a robust hospital management system that centralizes healthcare information and optimizes hospital processes, offering real-time updates and powerful features like Patient Management, Diagnostic Tracking, Inventory Managment, Renenue Cycle Management, Auto-bill Generation, Queue Management, Admission Management, Business Intelligence and AI Integration .",
    additionalSections: [
      {
        title: "",
        content: "",
        images: [
          "../img/civis-patient-summary.png"
        ]
      }
    ],
    assets: {
      flowcharts: [
        {
          assetType: "Flowchart",
          imageUrl: "../img/civis-flowchart.png",
          description: "Flowchart illustrating some functionalities on Civis Health Solution."
        }
      ],
      mindmaps: [
        {
          assetType: "Mindmap",
          imageUrl: "../img/civis-health-mindmap.png",
          description: "Mindmap showing the components and relationships in Civis Health."
        }
      ]
    }
  },
  {
    id: 2,
    title: "Host-to-Host Integration Across Africa",
    description:
      "Deployed secure and efficient host-to-host integration for payment systems across five African countries.",
    skills: ["Integration Design", "Payment Solutions", "Cross-Border Operations"],
    impact:
      "Streamlined transaction processes, improved security, and reduced operational latency for financial institutions.",
    role: "Project Manager",
    imageUrl: "../img/host-to-host.png",
    overview:
      "The project involved the integration of multiple payment systems across African countries, ensuring secure and fast transactions through host-to-host communication protocols.",
    assets: {
      flowcharts: [
        {
          assetType: "Flowchart",
          imageUrl: "../img/host-to-host-flowchart.png",
          description: "Flowchart demonstrating the secure transaction process in host-to-host integration."
        }
      ],
      mindmaps: [
        {
          assetType: "Mindmap",
          imageUrl: "../img/host-to-host-mindmap.png",
          description: "Mindmap of the payment system architecture and integration."
        }
      ]
    }
  },
  {
    id: 3,
    title: "IBM Middleware Assessment Project",
    description:
      "A project to assess and optimize the technology gaps in the integration software of a top Nigerian bank.",
    skills: ["Integration", "Cloud Computing", "IBM Products", "Security", "Business Continuity"],
    impact:
      "Improved high availability and optimized integration processes, enhancing operational efficiency.",
    role: "Project Manager",
    imageUrl: "../img/esb.jpg",
    overview:
      "This project assessed and optimized middleware technology for a Nigerian bank, focusing on improving integration, high availability, and security.",
    assets: {
      flowcharts: [
        {
          assetType: "Solution Architecture",
          imageUrl: "../img/ibm-assessment-architecture.png",
          description: "Solution architecture for integrating middleware and optimizing system performance."
        }
      ]
    }
  },
  {
    id: 4,
    title: "CivisMobile",
    description:
      "Developed CivisMobile, a mobile extension of the Civis Health Solution, offering healthcare providers and patients easy access to medical records, consultations, and appointment scheduling.",
    skills: ["Mobile App Development", "Healthcare IT", "User Experience Design"],
    impact:
      "Enabled improved patient engagement and streamlined access to healthcare services through mobile technology.",
    role: "Product Manager",
    imageUrl: "../img/civis-mobile.png",
    overview:
      "CivisMobile is a mobile application designed to complement the Civis Health Solution, providing healthcare professionals and patients with an easy-to-use platform for managing appointments, viewing medical records, and accessing health-related information anytime, anywhere.",
    assets: {
      flowcharts: [
        {
          assetType: "Solution Architecture",
          imageUrl: "../img/civis-mobile-architecture.png",
          description: "The architecture of CivisMobile, showing how it integrates with Civis Health."
        }
      ],
      mindmaps: [
        {
          assetType: "User Interface Design",
          imageUrl: "../img/civis-mobile-ui-design.png",
          description: "UI design of the CivisMobile app, showcasing the user-friendly interface."
        }
      ]
    }
  }
];
