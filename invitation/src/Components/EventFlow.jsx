import styles from "../styles/eventflow.module.css";
import Customer from "../assets/Icons/Customer";
import Bulb from "../assets/Icons/Bulb";
import Group from "../assets/Icons/Group";
import EventFlowCard from "./EventFlowCard";
import Interpreter from "../assets/Icons/Interpreter";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useStoreContext } from "../context/store";

function EventFlow() {
  const { sectionsRef } = useStoreContext();
  const isInView = useInView(sectionsRef.section3, {
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardContent = [
    {
      title: `Industry Insights & Fireside Chat (30 mins – Panel Discussion)`,
      description: `An engaging discussion featuring tech leaders, hiring managers, legal
                    experts, and entrepreneurs addressing:`,
      points: [
        `Emerging trends in tech & industry demand`,
        `Getting hired: What recruiters & hiring managers look for`,
        `Legal insights: Negotiating contracts, securing funding & intellectual
         property`,
        `Freelancing vs Full-time vs Startups – Making the right choice`,
      ],
      image: <Customer />,
    },
    {
      title: `The Skill Sprint (30 mins – Hands-on Workshop & Live Demo)`,
      description: `An interactive session focused on practical career growth strategies & skills
                    for various tech roles. Topics may include:`,
      points: [
        `Building a high-impact portfolio (Developers, Designers, Content Creators)`,
        `Breaking into Mobile/Web Dev, AI, Web3, Cybersecurity, or Data Science`,
        `Social media positioning for tech professionals & startups`,
        `Technical interview hacks & live resume reviews`,
      ],
      image: <Bulb />,
    },
    {
      title: `The Reboot Roundtable (35 mins – Coffee Break, Networking & Strategy Sessions)`,
      description: `A structured networking session where attendees split into interest-based
                    groups to gain tailored career advice. Topics include:`,
      points: [
        `How to land international remote jobs & sponsorship deals`,
        `Mock interview & resume feedback from recruiters`,
        `Freelance networking hub – Meet potential clients & partners`,
        `Tech & media collaboration – Connecting brands, content creators & software professionals`,
        `The Future of Work – AI, Automation & Digital Transformation`,
      ],
      image: <Group />,
    },
    {
      title: `The Power Pitch & Brand Showcase (25 mins – Spotlight & Closing)`,
      description: "",
      points: [
        `Showcasing sponsor brands & partner organizations (Tech companies, media agencies, software firms, etc.)`,
        `Spotlighting standout talents (Live portfolio & project showcases)`,
        `Recognizing industry contributions (Awards, grants, or special recognitions if applicable)`,
        `Closing remarks & event highlights`,
      ],
      image: <Interpreter />,
    },
  ];

  return (
    <motion.div
      className={styles.eventflow_container}
      ref={sectionsRef.section3}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <div className={styles.eventflow_content}>
        <h1 className={styles.eventflow_header}>Event Flow</h1>
        <EventFlowCard cardContent={cardContent} />
      </div>
    </motion.div>
  );
}

export default EventFlow;
