import { motion } from "framer-motion";

export default function WhyChooseUs({ data }) {
  const { title, items } = data;

  return (
    <section className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-8"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-700 p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="opacity-80">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
