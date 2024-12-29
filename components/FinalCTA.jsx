import { motion } from "framer-motion";

export default function FinalCTA({ data }) {
  const { title, subtitle, ctaText } = data;

  return (
    <section className="bg-gray-800 py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-xl mb-8 opacity-80"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
        <motion.button
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full text-white font-semibold"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {ctaText}
        </motion.button>
      </div>
    </section>
  );
}
