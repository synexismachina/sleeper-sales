"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

const whatsappNumber = "27829529150";

const whatsappMessage =
  "Hello Sleeper Sales, I would like to enquire about your timber sleepers.";

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const projects = [
  {
    title: "FLOORING",
    image: "/images/gallery/retaining-walls.jpg",
  },
  {
    title: "SLEEPER GATE",
    image: "/images/gallery/stairways-steps.jpg",
  },
  {
    title: "GARDEN TABLE",
    image: "/images/gallery/raised-garden-beds.jpg",
  },
  {
    title: "STAIRS",
    image: "/images/gallery/entertainment-areas.jpg",
  },
  {
    title: "POOL FLOORING",
    image: "/images/gallery/fencing.jpg",
  },
  {
    title: "GARDEN BENCH",
    image: "/images/gallery/garden-edging.jpg",
  },
  {
    title: "GATE",
    image: "/images/gallery/driveways.jpg",
  },
  {
    title: "LANDSCAPING FEATURES",
    image: "/images/gallery/landscaping-features.jpg",
  },
  {
    title: "DECORATIVE",
    image: "/images/gallery/water-features.jpg",
  },
  {
    title: "DECORATIVE USES",
    image: "/images/gallery/decorative-uses.jpg",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f3e6d1] text-[#321a0c]">
      <Header />

      {/* HERO */}
      <section className="gallery-hero">
        <div className="gallery-hero-overlay" />

        <div className="gallery-hero-inner">
          <div>
            <h1>GALLERY</h1>

            <h2>SEE OUR SLEEPERS IN ACTION.</h2>

            <p>
              Explore a variety of completed projects using our
              <br className="hidden sm:block" />
              high quality treated timber sleepers.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY CONTENT */}
      <section className="gallery-content">
        <div className="gallery-heading">
          <div className="gallery-heading-left">
            <span className="gallery-camera-icon">◉</span>

            <h2>SLEEPER PROJECTS &amp; IDEAS</h2>
          </div>

          <p>
            Our timber sleepers are versatile and perfect for a wide range of
            applications.
          </p>
        </div>

        <div className="gallery-grid">
          {projects.map((project) => (
            <article className="gallery-card" key={project.title}>
              <div className="gallery-card-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="gallery-card-title">
                {project.title}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHATSAPP */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-wrapper"
        aria-label="Chat with Sleeper Sales on WhatsApp"
      >
        <div className="whatsapp-tooltip">
          <strong>CHAT WITH US ON WHATSAPP</strong>
          <span>Chat directly with our sales team.</span>
        </div>

        <div className="whatsapp-button">
          <MessageCircle size={25} strokeWidth={2.2} />
        </div>
      </a>

      <Footer />
    </main>
  );
}