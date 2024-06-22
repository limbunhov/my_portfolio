import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.span
          className="name"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Lim Bunhov
        </motion.span>
        <div className="category">
          <p onClick={() => scrollToSection("Homepage")}>Home</p>
          <p onClick={() => scrollToSection("Skill")}>Skill</p>
          <p onClick={() => scrollToSection("Contact")}>Contact Me</p>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
