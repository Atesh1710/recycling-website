import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <section className="pt-24 px-6 text-center">
        <h1 className="text-4xl font-bold text-accent mb-6">About Us</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          IronCast Co. is a leading provider of premium iron casting solutions with decades of expertise.
        </p>
      </section>
    </PageWrapper>
  );
}
