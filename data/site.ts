import type { AddOn, BeforeAfter, DetailPackage, FAQ, GalleryItem, NeedMatch, Review, Service, ServiceArea } from "@/types/site";

/** All sample copy is generic and unverified. Replace for each real client. */
export const packages: DetailPackage[] = [
  { id: "essential", name: "Essential Service", tagline: "GET STARTED", description: "An approachable solution for a straightforward service request.", idealFor: "Customers with a clear, standard need", features: ["Initial consultation", "Agreed service scope", "Clear project communication", "A straightforward next step"] },
  { id: "complete", name: "Complete Service", tagline: "MOST COMPREHENSIVE", featured: true, description: "A more comprehensive option for customers who need additional care and coordination.", idealFor: "Projects requiring broader support", features: ["Needs assessment", "Customized scope", "Coordinated delivery", "Completion review"] },
  { id: "custom", name: "Custom Project", tagline: "TAILORED TO YOU", description: "A flexible service approach for work that does not fit a standard package.", idealFor: "Unique project requests", features: ["Discovery discussion", "Custom written scope", "Clear proposed timeline", "Individual quote"] }
];
export const needMatches: NeedMatch[] = [
  {prompt:"I need help getting started",recommendation:"Essential Service",detail:"A simple starting point for standard service needs.",targetId:"essential"},
  {prompt:"I need a complete solution",recommendation:"Complete Service",detail:"A broader approach for more involved needs.",targetId:"complete"},
  {prompt:"My project is unique",recommendation:"Custom Project",detail:"Let's discuss a tailored scope.",targetId:"custom"}
];
export const services: Service[] = [
  { id:"service-one",name:"Service One",eyebrow:"CORE OFFERING",description:"Replace this example with a verified description of your main service.",image:"https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85"},
  { id:"service-two",name:"Service Two",eyebrow:"ADDITIONAL OFFERING",description:"Use this area to explain a second service and who it helps.",image:"https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?auto=format&fit=crop&w=1200&q=85"},
  { id:"service-three",name:"Service Three",eyebrow:"SPECIALIZED WORK",description:"Customize this card to fit your business's actual capabilities.",image:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"}
];
export const addOns: AddOn[] = [
  {name:"Additional Consultation",description:"Optional planning time for requests that need more discussion."},
  {name:"Priority Scheduling",description:"Example add-on — only publish if your business actually offers it."},
  {name:"Expanded Scope",description:"Discuss additional work before confirming a quote."}
];
export const beforeAfter: BeforeAfter[] = [];
export const gallery: GalleryItem[] = [];
export const serviceAreas: ServiceArea[] = [];
export const reviewThemes: string[] = [];
export const reviews: Review[] = [];
export const faqs: FAQ[] = [
  {question:"How do I request a quote?",answer:"Use the on-page request builder to outline what you need. Contact details must be configured before launch."},
  {question:"Are prices fixed?",answer:"All sample packages are illustrative. Set your business's actual prices and quote policy before publishing."},
  {question:"Where do you provide services?",answer:"Replace the demo service-area text with the verified locations your business serves."},
  {question:"Can I customize a service?",answer:"Yes. This example template includes a custom-project path. Adapt it to your actual services."}
];
