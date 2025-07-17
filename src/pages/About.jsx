import { motion } from 'framer-motion';
import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="pt-24 px-6 text-center bg-gray-900 text-white">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-bold mb-4">
          About Our Recycling Vision
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="max-w-3xl mx-auto text-lg text-gray-300">
          We revolutionize the recycling of non-ferrous metals like aluminium and copper, turning industrial waste into high-value resources that drive sustainability and circular economy.
        </motion.p>
      </section>

      {/* Background Image Section covering Our Story to Certifications */}
      <div
        className="bg-center bg-cover bg-fixed text-white"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/drnxntvrq/image/upload/v1752777977/backgroundImage_qfdjo7.jpg')"
        }}
      >
        <div className="bg-black bg-opacity-60 py-16 px-6">

          {/* Our Story */}
          <Section title="Our Story" bg="bg-transparent" textColor="text-white">
            <p>
              Founded with a passion for sustainability, our company emerged as a response to the growing environmental crisis posed by waste. By integrating cutting-edge technology like eddy current separators, X-ray sorting, and AI-driven segregation, we maximize the recovery of metals from waste streams.
            </p>
          </Section>

          {/* Mission & Vision */}
          <MissionVision />

          {/* Our Services */}
          <Section title="Our Services" bg="bg-transparent" textColor="text-white">
            <div className="flex flex-wrap justify-center gap-8">
              {services.map((service, idx) => (
                <Card key={idx} title={service.title} description={service.description} />
              ))}
            </div>
          </Section>

          {/* Our Process */}
          <Section title="Our Process" bg="bg-transparent" textColor="text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {processSteps.map((step, idx) => (
                <Card key={idx} title={step.step} description={step.description} />
              ))}
            </div>
          </Section>

          {/* Sustainability */}
          <Section title="Sustainability Commitment" bg="bg-transparent" textColor="text-white">
            <p className="max-w-3xl mx-auto">
              Our commitment to sustainability aligns with global Sustainable Development Goals (SDGs). By reducing landfill waste, minimizing carbon emissions, and promoting circular economy practices, we aim to create a greener future for coming generations.
            </p>
          </Section>

          {/* Our Team */}
          <Section title="Meet Our Team" bg="bg-transparent" textColor="text-white">
            <div className="flex flex-wrap justify-center gap-8">
              {team.map((member, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.05 }} className="bg-white p-4 rounded-lg shadow text-center w-60">
                  <img src={member.photo} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
                  <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* Testimonials */}
          <Section title="What Our Partners Say" bg="bg-transparent" textColor="text-white">
            <div className="flex flex-wrap justify-center gap-8">
              {testimonials.map((testi, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.05 }} className="bg-gray-50 p-6 rounded-lg shadow max-w-sm text-gray-800">
                  <p className="italic">"{testi.quote}"</p>
                  <p className="mt-4 text-sm font-semibold">{testi.name}, {testi.company}</p>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* Certifications */}
          <Section title="Certifications & Recognitions" bg="bg-transparent" textColor="text-white">
            <div className="flex flex-wrap justify-center gap-8">
              {certifications.map((cert, idx) => (
                <img key={idx} src={cert.image} alt={cert.name} className="w-32 h-32 object-contain" />
              ))}
            </div>
          </Section>

        </div>
      </div>

      {/* Impact / Achievements */}
      <Section title="Our Achievements"  bg="bg-gray-900" text="text-center text-white">
        <div className="flex flex-wrap justify-center gap-8">
          <StatCard number="100K+" label="Tons of Waste Processed" />
          <StatCard number="50K+" label="Carbon Credits Earned" />
          <StatCard number="200+" label="Industry Partners" />
        </div>
      </Section>

      {/* CTA */}
      <Section title="Partner with Us for a Sustainable Future">
        <button className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-xl">
          Contact Us
        </button>
      </Section>

    </PageWrapper>
  );
}

/** --- Sub Components & Data --- **/

function Section({ title, children, bg = 'bg-white', text = 'text-center', textColor = 'text-gray-800' }) {
  return (
    <section className={`py-16 px-6 ${bg} ${text} ${textColor}`}>
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-bold mb-6">
        {title}
      </motion.h2>
      {children}
    </section>
  );
}

function MissionVision() {
  return (
    <Section title="Our Mission & Vision" bg="bg-transparent" textColor="text-white">
      <div className="space-y-6 max-w-4xl mx-auto">
        <Card title="Mission" description="To transform waste into valuable resources through innovative recycling methods, reducing environmental impact and fostering a circular economy." />
        <Card title="Vision" description="To be a global leader in sustainable waste management, promoting carbon reduction, circular economy practices, and eco-friendly manufacturing solutions." />
      </div>
    </Section>
  );
}

function Card({ title, description }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-50 p-6 rounded-lg shadow-md text-gray-800">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

function StatCard({ number, label }) {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="bg-gray-800 p-6 rounded-xl shadow-md w-48">
      <h3 className="text-3xl font-bold text-emerald-400">{number}</h3>
      <p className="mt-2 text-gray-300">{label}</p>
    </motion.div>
  );
}

/** --- Static Data --- **/

const services = [
  { title: "Non-Ferrous Metal Recycling", description: "Recycling aluminium, copper, brass, and zinc using advanced segregation and refining." },
  { title: "Custom Alloying", description: "Manufacturing customized ingots tailored for automotive, aerospace, and construction industries." },
  { title: "Plastic Granules Production", description: "Recycling PET plastics into high-quality granules for manufacturing use." }
];

const processSteps = [
  { step: "1. Scrap Purchase", description: "Procure segregated scrap from municipal and industrial sources." },
  { step: "2. Sorting & Segregation", description: "Advanced sorting using Eddy currents, X-ray scans ensures purity." },
  { step: "3. Processing & Melting", description: "Metals are melted into ingots using eco-friendly techniques." },
  { step: "4. Custom Alloying", description: "Blending metals to meet specific industry needs." },
  { step: "5. Final Product", description: "High-quality ingots and granules ready for delivery." }
];

const team = [
  { name: "Rajesh Mehra", role: "Founder & CEO", photo: "https://via.placeholder.com/150" },
  { name: "Sneha Patel", role: "Head of Sustainability", photo: "https://via.placeholder.com/150" },
  { name: "Amit Kumar", role: "Chief Technology Officer", photo: "https://via.placeholder.com/150" }
];

const testimonials = [
  { quote: "Their recycling solutions have transformed our supply chain sustainability efforts.", name: "Vikas Sharma", company: "GreenTech Corp" },
  { quote: "Reliable and innovative recycling partner for our manufacturing needs.", name: "Priya Nair", company: "EcoMetals Ltd" }
];

const certifications = [
  { name: "ISO 14001 Certified", image: "https://via.placeholder.com/100x100" },
  { name: "Sustainability Excellence Award", image: "https://via.placeholder.com/100x100" },
  { name: "Eco-Friendly Practices Certified", image: "https://via.placeholder.com/100x100" }
];
