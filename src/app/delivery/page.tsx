"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Check,
  Clock3,
  Info,
  Layers3,
  MapPin,
  MessageCircle,
  MessageSquare,
  ShieldCheck,
  Truck,
} from "lucide-react";

const whatsappNumber = "27829529150";

const whatsappMessage =
  "Hello Sleeper Sales, I would like to enquire about delivery.";

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const deliveryRates = [
  {
    area: "CENTURION",
    price: "R850",
  },
  {
    area: "PTA / MIDRAND",
    price: "R990",
  },
  {
    area: "JHB & PTA NORTH",
    price: "R1400",
  },
  {
    area: "JHB SOUTH / RAND",
    price: "R1600",
  },
  {
    area: "OUTSIDE GAUTENG",
    price: "CONTACT US",
    note: "FOR A QUOTE",
  },
];

const benefits = [
  {
    icon: Clock3,
    title: "ON-TIME DELIVERY",
    text: "We value your time and ensure prompt delivery for every order.",
  },
  {
    icon: ShieldCheck,
    title: "SAFE & SECURE",
    text: "Our sleepers are carefully loaded, transported and unloaded with care.",
  },
  {
    icon: MapPin,
    title: "WIDE COVERAGE",
    text: "Delivering across Gauteng and surrounding areas nationwide.",
  },
  {
    icon: Layers3,
    title: "ANY SIZE ORDER",
    text: "From small quantities to bulk orders, we’ve got you covered.",
  },
  {
    icon: MessageSquare,
    title: "GREAT SERVICE",
    text: "Friendly, professional service from order to delivery.",
  },
];

export default function DeliveryPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f3e6d1] text-[#321a0c]">
      <Header />

      {/* HERO */}
      <section className="delivery-reference-hero">
        <div className="delivery-reference-overlay" />

        <div className="delivery-reference-hero-inner">
          <div className="delivery-reference-hero-copy">
            <h1>DELIVERY NATIONWIDE</h1>

            <h2>RELIABLE. ON-TIME. EVERY TIME.</h2>

            <p>
              We deliver premium quality treated timber sleepers throughout
              Gauteng and surrounding areas. No matter the size of your project,
              we&apos;ll make sure your order arrives safely and on time.
            </p>
          </div>
        </div>
      </section>

      {/* DELIVERY AREAS & RATES */}
      <section className="delivery-reference-content">
        <div className="delivery-reference-heading">
          <div className="delivery-heading-line" />

          <div className="delivery-heading-title">
            <Truck size={35} strokeWidth={1.8} />
            <h2>DELIVERY AREAS &amp; RATES</h2>
          </div>

          <div className="delivery-heading-line" />
        </div>

        <div className="delivery-rates-grid">
          {deliveryRates.map((item) => (
            <div className="delivery-rate-box" key={item.area}>
              <div className="delivery-rate-top">{item.area}</div>

              <div className="delivery-rate-body">
                <MapPin className="delivery-location-icon" />

                {item.price === "CONTACT US" ? (
                  <div className="delivery-contact-price">
                    <strong>CONTACT US</strong>
                    <span>{item.note}</span>
                  </div>
                ) : (
                  <strong>{item.price}</strong>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="delivery-rate-note">
          <div className="delivery-info-icon">
            <Info size={17} />
          </div>

          <p>
            Delivery rates are based on standard truck deliveries. For large
            orders or special requirements, please contact us for a customised
            delivery solution.
          </p>
        </div>

        {/* WHY CHOOSE */}
        <section className="delivery-why-box">
          <h2>WHY CHOOSE OUR DELIVERY SERVICE?</h2>

          <div className="delivery-benefits-grid">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div className="delivery-benefit-item" key={benefit.title}>
                  <div className="delivery-benefit-icon">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* QUOTE CTA */}
        <section className="delivery-reference-cta">
          <div className="delivery-reference-cta-icon">
            <ClipboardIcon />
          </div>

          <div className="delivery-reference-cta-copy">
            <h2>NEED A DELIVERY QUOTE?</h2>

            <p>
              Get in touch with us today for a fast and
              <br className="hidden sm:block" />
              accurate delivery quote for your order.
            </p>
          </div>

          <a href="/contact" className="delivery-reference-cta-button">
            GET A QUOTE
            <span>→</span>
          </a>
        </section>
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

function ClipboardIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="5" y="4" width="14" height="17" rx="1" />
      <path d="M9 4V2h6v2" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </svg>
  );
}