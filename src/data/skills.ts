export interface Skill {
    category: string;
    items: string[];
  }
  
  export const skills: Skill[] = [
    {
      category: "Strategy",
      items: [
        "Strategic Planning",
        "Market Research & Analysis",
        "Data-Driven Decision Making",
        "Competitive Analysis",
        "Business Model Optimization",
        "Change Management"
      ]
    },    
    {
      category: "Product Management",
      items: [
        "Agile Methodologies",
        "Defining Product Vision & Strategy",
        "Requirement Management",
        "User Research",
        "Process Modelling",
        "Customer-Centric Product Innovation",
        "Go-to-Market Strategy",
      ]
    },    
    {
      category: "Tools",
      items: [
        "Jira / Plane",
        "Figma / Justinmind (UI/UX Design)",
        "Draw.io (Diagramming)",
        "Xmind (Mind Mapping)",
        "Slack / Microsoft Teams",
        "QA tools (JMeter, Katalon, Insomnia)",
        "Microsoft Office (PowerPoint, Word, Excel)",
        "PowerBI"
      ]
    },
    {
      category: "Technical Skills",
      items: [
        "Data Analysis & Visualization",
        "Wireframing & Prototyping",
        "A/B Testing & Experimentation",
        "SQL & Database Management",
        "Python (for data science)"
      ]
    }
    
  ];
  