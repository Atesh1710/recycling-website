import PageWrapper from "../components/PageWrapper";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";
import ProductSection from "../components/ProductSection";

export default function Home() {
  return (
    <PageWrapper>
      <div className=" pt:8 md:pt-16">
        <HomePage/>
        <AboutSection/>
        <ProductSection/>
        <Footer />
      </div>
    </PageWrapper>
  );
}
