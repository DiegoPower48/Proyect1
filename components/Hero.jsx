import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero({ data }) {
  const { headline, subheadline, ctaText, imagePath } = data;

  return (
    <motion.section
      className="relative flex flex-col items-center justify-center text-center bg-gray-800 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-extrabold mb-4">{headline}</h1>
        <p className="text-xl mb-8 opacity-80">{subheadline}</p>
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full text-white font-semibold">
          {ctaText}
        </button>
      </div>

      <div className="mt-8">
        <Image
          src={imagePath}
          alt="Hero Graphic"
          width={600}
          height={400}
          priority
          className="mx-auto"
        />
      </div>
    </motion.section>
  );
}
