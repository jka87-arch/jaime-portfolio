import type { Project } from '../types';
import pharmalliesThumb from '../assets/pharmallies-design-system.png';
import pharmalliesPersona from '../assets/pharmalies-persona.png';
import pharmalliesResearch from '../assets/pharmallies-research.png';
import sdlcVer1 from '../assets/sdlc-ver1.png';
import sdlcVer2 from '../assets/sdlc-ver2.png';
import forteDesign from '../assets/forte-design.png';
import forteSwot from '../assets/forte-swot.png';
import forteCompanalysis from '../assets/forte-companlaysis.png';
import forteVer1 from '../assets/forte-ver1.png';
import coquelleDesign from '../assets/coquelle-design.png';
import offscreenDesign from '../assets/offscreen-design.png';
import offscreenWireframe1 from '../assets/offscreen-wireframe1.png';
import offscreenWireframe2 from '../assets/offscreen-wirerame2.png';
import offscreenWireframe3 from '../assets/offscreen-wireframe3.png';
import offscreenExplore from '../assets/offscreen-explore.png';
import offscreenResources from '../assets/offscreen-resources.png';
import offscreenCommunity from '../assets/offscreen-community.png';
import offscreenQuiz from '../assets/offscreen-quiz.png';
import coq1 from '../assets/1.png';
import coq2 from '../assets/2.png';
import coq3 from '../assets/3.png';
import coq4 from '../assets/4.png';
import coq5 from '../assets/5.png';
import coq6 from '../assets/6.png';
import coq7 from '../assets/7.png';
import coq8 from '../assets/8.png';
import coq9 from '../assets/9.png';
import coq10 from '../assets/10.png';
import coq11 from '../assets/11.png';
import coq12 from '../assets/12.png';
import coq13 from '../assets/13.png';
import coq14 from '../assets/14.png';
import coq15 from '../assets/15.png';
import coq16 from '../assets/16.png';
import coq17 from '../assets/17.png';
import coq18 from '../assets/18.png';
import coq19 from '../assets/19.png';
import coq20 from '../assets/20.png';
import coq21 from '../assets/21.png';
import coq22 from '../assets/22.png';
import coq23 from '../assets/23.png';
import coq24 from '../assets/24.png';
import coq25 from '../assets/25.png';
import coq26 from '../assets/26.png';
import coq27 from '../assets/27.png';
import coq28 from '../assets/28.png';
import coq29 from '../assets/29.png';

export const projects: Project[] = [
  {
    slug: 'pharmaallies',
    title: 'PharmAllies SOP Redesign',
    subtitle: 'Transforming a 76-page document into an intuitive enterprise experience',
    oneLiner: 'I led a 6-person team to redesign a complex SOP system that reduced cognitive load and improved usability for healthcare stakeholders.',
    category: 'design',
    context: 'Professional',
    tags: ['UX Design', 'Market Research', 'Information Architecture', 'Team Lead'],
    year: 2025,
    thumbnail: pharmalliesThumb,
    heroImage: pharmalliesThumb,
    role: 'UXD Extern, Team Lead',
    overview: 'PharmAllies needed to overhaul their standard operating procedure system, which had grown into an unwieldy 76-page document that field users could barely navigate.',
    challenge: 'Starting with a fragmented information architecture, limited researcher access, and a 10-week deadline, the team had to transform a compliance-heavy document into an interactive, accessible experience.',
    process: [
      {
        heading: 'Discovery & Stakeholder Interviews',
        body: 'We conducted structured interviews with 14 stakeholders across roles to map pain points and mental models around the existing SOP system.',
      },
      {
        heading: 'Information Architecture Mapping',
        body: 'Using card sorting and tree testing, we restructured the content hierarchy from a linear document into modular, interactive interface.',
      },
      {
        heading: 'Prototype & Iteration',
        body: 'Built interactive Figma prototypes tested across two rounds of usability sessions, iterating on navigation patterns and content density.',
      },
      {
        heading: 'Clear Communication & Leadership',
        body: 'Led a team of 4 UX designers across an agile sprint, coordinating with stakeholders to deliver an interactive interface redesign through structured weekly communication.',
      },
    ],
    outcomes: [
      '100% on-time delivery across all milestones using agile methodology',
      'Mid-fidelity prototype used in executive stakeholder presentation',
      'Facilitated weekly meeting with stakeholders and internal team members and delegated team responsibilities',
    ],
    nextSteps: 'The next phase involves high-fidelity iteration of iniital prototypes. The project remains confidential and to be completed',
    media: [
      { src: pharmalliesPersona, caption: 'User Persona — Dean Miller, Field Sales Representative' },
      { src: pharmalliesResearch, caption: 'Stakeholder Research Synthesis & Pain Point Mapping' },
      { src: sdlcVer1, caption: 'SDLC SOP Redesign — Version 1 Mid-Fidelity Prototype' },
      { src: sdlcVer2, caption: 'SDLC SOP Redesign — Version 2 Iterated Prototype' },
    ],
  },
  {
    slug: 'forte',
    title: 'Forte Product Design',
    subtitle: 'Building the new generation of the ever-converging world of technology & fashion',
    oneLiner: 'I designed end-to-end UI for a new AI fashion IOS application, accelerating product development and stakeholder alignment at a seed-stage startup.',
    category: 'design',
    context: 'Professional',
    tags: ['AI Design', 'Startup', 'UX Design', 'UX Research'],
    year: 2025,
    thumbnail: forteDesign,
    heroImage: forteDesign,
    role: 'Product Design Intern',
    overview: 'Forte is a seed-stage startup building an AI-powered fashion tool. I joined as the sole product design intern and owned end-to-end UI development for core application features.',
    challenge: 'No existing design system, a small cross-functional team, and the need to move from concept to investor-ready prototype in under 3 months.',
    process: [
      {
        heading: 'Market & Competitive Research',
        body: 'Conducted SWOT analysis and competitive landscape mapping across 12 direct and indirect competitors to identify positioning opportunities.',
      },
      {
        heading: 'User Surveys & Synthesis',
        body: 'Ran user surveys with 40+ participants and synthesized insights to identify core behavioral patterns and high-value feature opportunities.',
      },
      {
        heading: 'UI Design & Prototyping',
        body: 'Built functional Figma prototypes for all core flows, establishing a component library that reduced engineering handoff friction.',
      },
      {
        heading: 'Cost Model Development and Funding Research',
        body: 'Created a comprehensive cost model spanning production, regulatory compliance, overhead, and third-party integration to scope the full investment required to bring the product to market, informing funding strategy and resource allocation decisions.',
      },
    ],
    outcomes: [
      'Full application UI delivered in 8 weeks',
      'Prototypes used directly in investor pitch materials',
      'Component library adopted by engineering team',
    ],
    media: [
      { src: forteSwot, caption: 'SWOT Analysis — Competitive Landscape Review' },
      { src: forteCompanalysis, caption: 'Competitive Analysis Across 12 Direct & Indirect Competitors' },
      { src: forteVer1, caption: 'Forte App UI — Version 1 Prototype' },
    ],
  },
  {
    slug: 'coequelle',
    title: 'Coquélle Co. Brand Strategy & Go-to-Market',
    subtitle: 'Cofounder leading brand identity, market strategy, and GTM design for a next gen beauty startup',
    oneLiner: 'As CMO and Head of Marketing, I built the full brand identity, customer strategy, and go-to-market system for OvO: a sustainable antimicrobial beauty sponge targeting a $1B market.',
    category: 'strategy',
    context: 'Academic',
    tags: ['GTM Strategy', 'Market Research', 'Pitch Material Design'],
    year: 2026,
    thumbnail: coquelleDesign,
    heroImage: coquelleDesign,
    role: 'Co-Founder, Head of Marketing + Brand Design',
    overview: 'Coquélle Co. is a women-led beauty startup I co-founded with three industry professionals as a part of the Rutgers Masters of Business and Science Program. As Head of Marketing + Brand Design, I owned brand identity, consumer research, competitive positioning, and the full go-to-market strategy for OvO: a cosmetic sponge with a structural inner core that solves the hygiene and waste crisis conventional sponges have ignored for decades.',
    challenge: 'Building a brand compelling enough to earn trust from professional MUAs first, then scale to Gen Z mass-market consumers across DTC, Amazon FBA, and pro distributor channels. Doing so without sacrificing brand integrity at any tier, and with clear strategic intent.',
    process: [
      {
        heading: 'Market Research & Competitive Analysis',
        body: 'Led primary and secondary research across the $1B beauty sponge category. Conducted TAM/SAM/SOM analysis ($970M TAM, $164M SAM, ~$12M SOM Years 1–3), competitor case studies on BeautyBlender, RealTechniques, and EcoTools, and synthesized Mintel, IBISWorld, and other data sources to identify Coquélle\'s whitespace: the hygiene gap every major player is ignoring and every consumer is just dealing with.',
      },
      {
        heading: '3-Tiered Customer Strategy',
        body: 'Designed a sequenced customer acquisition model: Pro MUA early adopters (16,884 artists nationally) → Celeb Makeup Gurus and microinfluencers under 150K as market shifters → the Hygienic Consumer, a health-conscious 18–35-year-old spending ~$9,500/year on beauty. Mapped channel strategy to each tier: trade seeding, influencer PR, then TikTok/Instagram mass launch.',
      },
      {
        heading: 'Go-to-Market Strategy',
        body: 'Developed a five-phase sequential GTM plan: IP and legal, product development, domestic manufacturing via TaikiUSA, 3PL fulfillment through Pro\'s in Levittown PA, and launch/growth. Defined channel mix at launch: 50% Amazon FBA (discovery volume), 40% DTC Shopify (brand ownership), 10% professional distributor (credibility seeding).',
      },
    ],
    outcomes: [
      'Investor-grade business plan and pitch deck authored and presented to angel investors as Rutgers MBS Capstone',
      'Full brand identity and voice system developed and ready for commercial launch',
      'Three-tier customer model and influencer seeding strategy designed for Year 2–3 launch activation',
    ],
    media: [
      { src: coq1, caption: 'Slide 1' },
      { src: coq2, caption: 'Slide 2' },
      { src: coq3, caption: 'Slide 3' },
      { src: coq4, caption: 'Slide 4' },
      { src: coq5, caption: 'Slide 5' },
      { src: coq6, caption: 'Slide 6' },
      { src: coq7, caption: 'Slide 7' },
      { src: coq8, caption: 'Slide 8' },
      { src: coq9, caption: 'Slide 9' },
      { src: coq10, caption: 'Slide 10' },
      { src: coq11, caption: 'Slide 11' },
      { src: coq12, caption: 'Slide 12' },
      { src: coq13, caption: 'Slide 13' },
      { src: coq14, caption: 'Slide 14' },
      { src: coq15, caption: 'Slide 15' },
      { src: coq16, caption: 'Slide 16' },
      { src: coq17, caption: 'Slide 17' },
      { src: coq18, caption: 'Slide 18' },
      { src: coq19, caption: 'Slide 19' },
      { src: coq20, caption: 'Slide 20' },
      { src: coq21, caption: 'Slide 21' },
      { src: coq22, caption: 'Slide 22' },
      { src: coq23, caption: 'Slide 23' },
      { src: coq24, caption: 'Slide 24' },
      { src: coq25, caption: 'Slide 25' },
      { src: coq26, caption: 'Slide 26' },
      { src: coq27, caption: 'Slide 27' },
      { src: coq28, caption: 'Slide 28' },
      { src: coq29, caption: 'Slide 29' },
    ],
  },
  {
    slug: 'off-screen',
    title: 'Off Screen Hobby Discovery Platform',
    subtitle: 'A full-stack web platform encouraging people to step away from screens',
    oneLiner: 'We designed and built a multi-page hobby discovery platform featuring a TypeScript personality quiz, Bootstrap filter system, and a complete custom CSS design system.',
    category: 'development',
    context: 'Academic',
    tags: ['Web Design', 'HTML/CSS', 'Vibe Coding', 'Brand Design'],
    year: 2025,
    thumbnail: offscreenDesign,
    heroImage: offscreenDesign,
    role: 'Team Designer & Developer',
    overview: 'Off Screen is a academic project created under the Professional Science MBS Program at Rutgers University. We created Unplug Co., a concept platform built to help people discover offline hobbies and third-space communities.',
    challenge: 'Building a complete multi-page site with a functional quiz engine, filter sidebar, and design system — solo, from scratch, in TypeScript and vanilla CSS.',
    process: [
      {
        heading: 'UX Research & Personas',
        body: 'Conducted competitive analysis of hobby discovery platforms and built UX personas and journey maps for the core user segments.',
      },
      {
        heading: 'TypeScript Quiz Engine',
        body: 'Built a branching personality quiz in TypeScript with OOP patterns, mapping user responses to curated hobby recommendations.',
      },
      {
        heading: 'Design System & Build',
        body: 'Created a complete custom color system and CSS architecture, then built out the explore page with Bootstrap filter sidebar and hobby cards.',
      },
    ],
    outcomes: [
      'Multi-page site created using React, leveraging vibe coding skills',
      'TypeScript quiz with 6 hobby categories and branching logic',
      'Custom CSS design system',
    ],
    media: [
      { src: offscreenWireframe1, caption: 'Wireframe — Version 1' },
      { src: offscreenWireframe2, caption: 'Wireframe — Version 2' },
      { src: offscreenWireframe3, caption: 'Wireframe — Version 3' },
      { src: offscreenExplore, caption: 'Explore Page' },
      { src: offscreenResources, caption: 'Resources Page' },
      { src: offscreenCommunity, caption: 'Community Page' },
      { src: offscreenQuiz, caption: 'Quiz Page' },
    ],
  },
];
