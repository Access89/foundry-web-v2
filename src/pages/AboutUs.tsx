import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { aboutData } from "../data/aboutData";
import PartnersSection from "@/components/reusable/partners-section";

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <main className="">
      {/* Hero Section - "Who we are" */}
      <section className="container mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-16">
        <p className="text-sm uppercase tracking-wider text-zinc-500 mb-4">
          About us
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-8 max-w-4xl">
          Who we are
        </h1>
        <p className="text-lg md:text-xl text-zinc-700 leading-relaxed max-w-3xl">
          {aboutData.hero.description}
        </p>
      </section>

      {/* Services Section - "How we can help you" */}
      <section className="container mx-auto px-6 md:px-12 lg:px-24 py-16">
        <p className="text-sm uppercase tracking-wider text-zinc-500 mb-4 text-center">
          Services
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-center mb-16">
          How we can help you <span className="italic font-serif">grow</span>
        </h2>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {aboutData.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg py-4 px-4 md:px-8 hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="w-24 h-24 mb-6 flex items-center justify-center">
                <Icon icon={feature.icon} className="text-6xl text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-medium mb-4 text-zinc-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-600 leading-relaxed mb-4">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section - "Our mission" with icon */}
      <section className="container mx-auto px-6 md:px-12 lg:px-24 py-16">
        {/* Icon Badge */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
            <Icon icon="mdi:target" className="text-white text-3xl" />
          </div>
        </div>

        <p className="text-sm uppercase tracking-wider text-zinc-500 mb-4 text-center">
          Our mission
        </p>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium text-center mb-8">
            {aboutData.mission.title.replace("Our Mission", "")}
            Turning complexity into{" "}
            <span className="italic font-serif">consistent</span> growth
          </h2>

          <div className="space-y-6 text-lg text-zinc-700 leading-relaxed">
            <p>{aboutData.mission.description1}</p>
            <p>{aboutData.mission.description2}</p>
          </div>

          {/* Mission Image */}
          <div className="mt-12 rounded-2xl overflow-hidden">
            <img
              src={aboutData.mission.image}
              alt={aboutData.mission.imageAlt}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="container mx-auto px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Quote */}
            <div>
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-4xl">"</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-medium mb-6 leading-tight">
                Building the foundational layer for commerce and finance across
                Africa
              </h3>
              <p className="text-zinc-600 italic">
                {aboutData.vision.description.substring(0, 150)}...
              </p>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src={aboutData.purpose.image}
                alt={aboutData.purpose.imageAlt}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brands/Partners Section */}
      <section className="container mx-auto px-6 md:px-12 lg:px-24 py-16">
        <p className="text-sm uppercase tracking-wider text-zinc-500 mb-8 text-center">
          Trusted by businesses across Africa
        </p>
        <PartnersSection showTitle={false} />
      </section>
      {/* Get Started Section */}
      <section className="container mx-auto px-6 md:px-12 lg:px-24 py-20">
        {/* Icon Badge */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
            <Icon icon="mdi:rocket-launch" className="text-white text-3xl" />
          </div>
        </div>

        <p className="text-sm uppercase tracking-wider text-zinc-500 mb-4 text-center">
          Get started
        </p>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Let's see if we <span className="italic font-serif">can help</span>
          </h2>

          <div className="space-y-6 text-lg text-zinc-700 leading-relaxed mb-8">
            <p>
              Book a free 30-minute call. We'll look at your business and tell
              you what's not working, which platform features to focus on, and
              whether we're a good fit.
            </p>
            <p>
              If we can't show you something valuable in 30 minutes, we probably
              can't help you.
            </p>
            <p className="text-zinc-600">
              No pitch. No pressure. Just an honest conversation about whether
              Foundry can drive growth for your business.
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => navigate("/book-a-demo")}
            className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-800 transition-colors"
          >
            Book a call
          </button>
        </div>
      </section>

      {/* FAQ Section */}
    </main>
  );
}
