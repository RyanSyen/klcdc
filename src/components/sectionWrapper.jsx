import { motion } from "framer-motion";
import { stagger } from "framer-motion";

const SectionWrapper = (Component) =>
  function HOC() {
    return (
      <motion.section
        variants={stagger()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`relative z-0`}
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
