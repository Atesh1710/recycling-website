import { motion } from "framer-motion";
import AluminiumAlloyIngots from '../assets/AluminiumAlloyIngots.jpeg';
import PETPlasticGranules from '../assets/PETPlasticGranules.avif';
import FerrousNonFerrousScrap from '../assets/FerrousNonFerrousScrap.jpg';
const products = [
  { title: "Aluminium Alloy Ingots", img:AluminiumAlloyIngots },
  { title: "PET Plastic Granules", img: PETPlasticGranules },
  { title: "Ferrous/ Non ferrous scrap", img: FerrousNonFerrousScrap },
];

export default function ProductsSection() {
  return (
    <section className="py-16 bg-white text-primary">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              className="bg-gray-100 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <img src={product.img} alt={product.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
