import { motion } from 'framer-motion';

const GlitchDivider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="my-12 md:my-16"
    >
      <div className="glitch-line" />
    </motion.div>
  );
};

export default GlitchDivider;
