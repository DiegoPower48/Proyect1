import { motion } from "framer-motion";

export default function Pricing({ data }) {
  const { title, plans } = data;

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
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-700 p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold mb-4">${plan.price}</p>
              <ul className="mb-4">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="mb-1">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full text-white font-semibold">
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
