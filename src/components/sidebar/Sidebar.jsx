import { useState } from "react";
import { motion } from "framer-motion";
// import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at calc(100% - 50px) 50px)", // Adjusted clipPath to start from right side
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(20px at calc(100% - 50px) 58px)", // Adjusted clipPath to end at right side
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <div className="link">
        {/* <Links /> */}
        <p onClick={() => scrollToSection("Homepage")}>Home</p>
          <p onClick={() => scrollToSection("Skill")}>Skill</p>
          <p onClick={() => scrollToSection("Contact")}>Contact Me</p>

          </div>
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
