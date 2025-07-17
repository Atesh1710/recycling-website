import { motion } from 'framer-motion';
import Slider from "react-slick";
import PageWrapper from "../components/PageWrapper";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Products() {
  const productImages = [
    { src: "https://images.unsplash.com/photo-1681108212545-04cabe9cf771?q=80&w=687&auto=format&fit=crop", title: "Aluminium Ingots" },
    { src: "https://cliffton-trading.com/wp-content/uploads/2024/07/copper-ignots-11.jpg", title: "Copper Ingots" },
    { src: "https://cdn.shopify.com/s/files/1/0593/4235/6578/files/plastic-granules.jpg?v=1743757159", title: "Plastic Granules" },
    { src: "https://jayjalaramext.com/images/products/1684170965.jpg", title: "Brass Ingots" },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <PageWrapper>
      {/* Hero Banner */}
      <section className="pt-24 px-4 sm:px-6 text-center bg-gray-900 text-white relative overflow-hidden">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="text-4xl font-bold mb-4"
        >
          Our Premium Products
        </motion.h1>
        <p className="text-gray-300 mb-8">Explore sustainable, high-quality materials crafted for diverse industries.</p>

        <motion.div
          animate={{ x: ['100%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          className="absolute bottom-4 w-full text-center text-emerald-400 text-lg"
        >
          Delivering Quality. Building Sustainability. Shaping the Future.
        </motion.div>
      </section>

      {/* Carousel */}
      <section className="py-12 px-4 sm:px-6">
        <Slider {...carouselSettings}>
          {productImages.map((product, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className="px-4">
              <img 
                src={product.src} 
                alt={product.title} 
                className="mx-auto rounded-lg shadow-md max-w-full h-64 object-cover"
              />
              <h3 className="text-xl text-center mt-4 font-semibold">{product.title}</h3>
            </motion.div>
          ))}
        </Slider>
      </section>

      {/* Product Grid */}
      <section className="py-12 px-4 sm:px-6 bg-gray-100 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="text-3xl font-bold mb-10"
        >
          Explore Our Range
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {productImages.map((product, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ scale: 1.05 }} 
              className="bg-white rounded-lg shadow-md p-4"
            >
              <img 
                src={product.src} 
                alt={product.title} 
                className="rounded-md mb-4 w-full h-48 object-cover"
              />
              <h4 className="text-lg font-semibold">{product.title}</h4>
              <p className="text-sm text-gray-600 mt-2">High purity, durable, and eco-friendly. Tailored for industrial use cases.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 sm:px-6 bg-emerald-600 text-center text-white">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Ready to Source Sustainable Materials?
        </motion.h2>
        <p className="mb-6">Contact us today to discuss your requirements and get customized solutions tailored to your industry.</p>
        <button className="bg-white text-emerald-600 font-semibold py-2 px-6 rounded-xl hover:bg-gray-200">
          Get in Touch
        </button>
      </section>
    </PageWrapper>
  );
}
