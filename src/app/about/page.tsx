"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Check,
  CalendarDays,
  CloudRain,
  Bug,
  MessageCircle,
  Truck,
} from "lucide-react";

const whatsappNumber = "27829529150";

const whatsappMessage =
  "Hello Sleeper Sales, I would like to enquire about your timber sleepers.";

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f3e6d1] text-[#321a0c]">
      <Header />

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-overlay" />

        <div className="about-hero-inner">
          <div className="about-hero-copy">
            <h1>ABOUT US</h1>

            <h2>QUALITY TIMBER SLEEPERS YOU CAN TRUST.</h2>

            <p>
              We supply premium quality treated timber sleepers
              <br className="hidden sm:block" />
              for any project, big or small.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="about-paper-section">
        <div className="about-top-grid">
          {/* WHO WE ARE */}
          <div className="about-text-block">
            <h2>WHO WE ARE</h2>

            <p>
              Sleeper Sales is a leading supplier of high quality treated
              timber sleepers in South Africa. With years of experience in
              the timber industry, we have built a reputation for supplying
              durable, reliable and cost effective timber solutions for a
              wide range of applications.
            </p>

            <p>
              We pride ourselves on our commitment to quality, excellent
              service and competitive pricing. Whether you are a homeowner,
              contractor, landscaper or developer – we have the right
              products and expertise to meet your needs.
            </p>
          </div>

          {/* OUR TIMBER SLEEPERS */}
          <div className="about-text-block">
            <h2>OUR TIMBER SLEEPERS</h2>

            <p>
              All our sleepers are pressure treated to SABS standards to
              ensure maximum durability and resistance against rot, insect
              attack and harsh weather conditions. We stock a wide range of
              grades, lengths and sizes to suit every project and budget.
            </p>

            <div className="about-features">
              <AboutFeature
                icon={<ShieldFeatureIcon />}
                title="PREMIUM QUALITY"
                text="Pressure treated for long lasting performance"
              />

              <AboutFeature
                icon={<CloudRain size={30} />}
                title="WEATHER RESISTANT"
                text="Built to withstand South African conditions"
              />

              <AboutFeature
                icon={<Bug size={30} />}
                title="INSECT & ROT RESISTANT"
                text="Protected against termites, decay and fungus"
              />

              <AboutFeature
                icon={<CalendarDays size={30} />}
                title="LONG LASTING"
                text="Extended lifespan for peace of mind and value"
              />
            </div>
          </div>

          {/* IMAGE */}
          <div className="about-main-image">
            <img
              src="/images/about/about-timber.jpg"
              alt="Sleeper Sales timber sleepers"
            />
          </div>
        </div>

        {/* LOWER GRID */}
        <div className="about-divider" />

        <div className="about-lower-grid">
          {/* APPLICATIONS */}
          <div className="about-text-block">
            <h2>OUR APPLICATIONS</h2>

            <p>
              Our timber sleepers are versatile and used in a variety of
              residential, commercial and industrial projects.
            </p>

            <div className="about-check-columns">
              <ul>
                <li>
                  <Check size={15} />
                  Retaining Walls
                </li>
                <li>
                  <Check size={15} />
                  Landscaping
                </li>
                <li>
                  <Check size={15} />
                  Garden Projects
                </li>
              </ul>

              <ul>
                <li>
                  <Check size={15} />
                  Fencing
                </li>
                <li>
                  <Check size={15} />
                  Path Edging
                </li>
                <li>
                  <Check size={15} />
                  Structural & Decorative Use
                </li>
              </ul>
            </div>
          </div>

          {/* WHY CHOOSE US */}
          <div className="about-text-block">
            <h2>WHY CHOOSE US?</h2>

            <ul className="about-why-list">
              <li>
                <Check size={15} />
                Wide range of grades, lengths and sizes
              </li>
              <li>
                <Check size={15} />
                Consistent quality and SABS treated timber
              </li>
              <li>
                <Check size={15} />
                Competitive prices
              </li>
              <li>
                <Check size={15} />
                Reliable and on-time delivery
              </li>
              <li>
                <Check size={15} />
                Friendly, knowledgeable service
              </li>
            </ul>
          </div>

          {/* MISSION */}
          <div className="about-mission">
            <span className="about-quote-mark">“</span>

            <h2>OUR MISSION</h2>

            <p>
              To supply premium quality timber sleepers with integrity,
              consistency and exceptional service – helping our customers
              build better, stronger and longer lasting projects.
            </p>
          </div>

          {/* DELIVERY */}
          <div className="about-text-block">
            <h2>DELIVERY NATIONWIDE</h2>

            <p>
              We deliver throughout Gauteng and surrounding areas. Reliable
              and on-time delivery to keep your project on track.
            </p>

            <Truck
              size={78}
              strokeWidth={1.3}
              className="mt-6 text-[#4a2917]"
            />
          </div>
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

function AboutFeature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="about-feature">
      <div className="about-feature-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
}

function ShieldFeatureIcon() {
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M12 3l7 3v5c0 4.7-2.8 8.3-7 10-4.2-1.7-7-5.3-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}