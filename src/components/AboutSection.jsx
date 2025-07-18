import { motion } from "framer-motion"; 
import { useState } from "react";
import AboutImage from '../assets/AboutImage.jpeg'; 

export default function AboutSection() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(prev => !prev);
  };

  return (
    <section className="py-16 bg-gray-100 text-primary">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        
        <motion.img
          src={AboutImage}
          alt="Iron Casting"
          className="rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-4">
            We are a leading manufacturer of high-quality iron castings, delivering precision engineering and durable solutions for industrial needs since 2022.
          </p>

          {showMore && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gray-700 text-sm bg-white p-4 rounded-lg shadow-inner mb-4"
            >
              Keeping in mind the environmental challenges we face daily and their negative implications on our dearest planet Earth, as in our rich Vedic culture, we consider Earth as God or deity. We pray to the earth in our shlokas, that's why our founder Mr. Dhyey Patel always wanted to do what is right and sustainable along with developing society. 
              <br /><br />
              Based in the cleanest city in India, Indore, we already have state-of-the-art MSW sorting and segregating methods. However, there were more challenges such as industrial waste and consumer scrap from industrial areas and nearby small towns lacking recycling infrastructure. We saw the opportunity and started our technology-enabled recycling unit with the goal of giving back to society what is truly theirs.
              <br /><br />
              Since inception in 2022, our company has been recycling metal and PET plastic using advanced technology to reduce manual labor in this traditionally labor-intensive industry. With technology-driven sorting, segregation, and melting, we've achieved profitability in our initial years.
              <br /><br />
              Starting with 10 TPD processing capacity, we now process 30-35 TPD. Under Mr. Dhyey Patel's leadership, we deliberately engage in R&D, consistently enhancing our processes to increase output and return greater value to society.
            </motion.div>
          )}

          <button 
            onClick={handleToggle}
            className="bg-accent text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
          >
            {showMore ? 'Show Less' : 'Learn More'}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
