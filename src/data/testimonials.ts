export interface Testimonial {
    id: number;
    name: string;
    role: string;
    quote: string;
    company: string;
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Samuel Olatinwo",
      role: "Partnerships Manager - EMEA",
      quote: "His ability to understand user needs and translate them into product features is remarkable.",
      company: "dLocal"
    },
    {
      id: 2,
      name: "Sheriff Saliu",
      role: "Head of Innovation",
      quote: "Joshua's strategic approach to product management transformed our development process and delivered exceptional results.",
      company: "FPG Technologies & Solutions Limited"
    }
  ];