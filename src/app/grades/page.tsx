"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  CalendarDays,
  Check,
  CloudRain,
  Droplets,
  Bug,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const whatsappNumber = "27829529150";

const whatsappMessage =
  "Hello Sleeper Sales, I would like to enquire about your timber sleepers.";

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const grades = [
  {
    name: "A+ GRADE",
    price: "R1900",
    description:
      "Top quality sleepers with minimal cracks and excellent appearance. Our highest grade for maximum strength and durability.",
    bestFor: [
      "Premium landscaping",
      "Retaining walls",
      "High end projects",
      "Long lasting structures",
    ],
    image: "/images/grades/grade-a-plus.jpg",
  },
  {
    name: "A GRADE",
    price: "R1400",
    description:
      "High quality sleepers with minor cracks, very durable and reliable for most applications.",
    bestFor: [
      "Landscaping",
      "Garden projects",
      "Retaining walls",
      "General construction",
    ],
    image: "/images/grades/grade-a.jpg",
  },
  {
    name: "B+ GRADE",
    price: "R500",
    description:
      "Good quality sleepers with visible cracks, still very strong and suitable for many uses.",
    bestFor: [
      "General landscaping",
      "Fencing",
      "Garden structures",
      "Cost effective builds",
    ],
    image: "/images/grades/grade-b-plus.jpg",
  },
  {
    name: "B GRADE",
    price: "R400",
    description:
      "Standard quality sleepers with more cracks, suitable for most general applications.",
    bestFor: [
      "Boundary walls",
      "Fencing",
      "Path edging",
      "Budget projects",
    ],
    image: "/images/grades/grade-b.jpg",
  },
  {
    name: "C+ GRADE",
    price: "R280",
    description:
      "Budget friendly sleepers with cracks and natural imperfections, practical and cost effective.",
    bestFor: [
      "Low cost projects",
      "Temporary structures",
      "Garden borders",
      "Non-structural use",
    ],
    image: "/images/grades/grade-c-plus.jpg",
  },
  {
    name: "C- GRADE",
    price: "R230",
    description:
      "Economy grade sleepers with functional use and cost effective for non-structural projects.",
    bestFor: [
      "Temporary use",
      "Non-structural projects",
      "Fillers and packing",
      "Low budget solutions",
    ],
    image: "/images/grades/grade-c-minus.jpg",
  },
];

export default function GradesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f3e6d1] text-[#321a0c]">
      <Header />

      {/* HERO */}
      <section className="relative min-h-[330px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/grades/grades-hero.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto flex min-h-[330px] max-w-[1450px] items-center px-7 py-16 md:px-12 lg:px-20">
          <div className="max-w-[650px]">
            <h1 className="display-font text-5xl font-black leading-[0.95] text-[#f7eddd] sm:text-6xl md:text-7xl">
              OUR GRADES
            </h1>

            <div className="my-5 h-[3px] w-[100px] bg-[#c38a49]" />

            <p className="max-w-[600px] text-base leading-7 text-[#eee0ca] md:text-lg">
              We stock a wide range of treated timber sleepers,
              graded to suit every application and budget.
            </p>
          </div>
        </div>
      </section>

      {/* GRADES */}
      <section className="paper-section px-5 py-5 md:px-8 md:py-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {grades.map((grade) => (
              <article
                key={grade.name}
                className="overflow-hidden rounded border border-[#bda487] bg-[#f7ead8] shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative bg-[#32170a] px-3 py-3 text-center">
                  <h2 className="display-font text-xl font-bold text-[#f5e4ca]">
                    {grade.name}
                  </h2>
                </div>

                <div className="h-[150px] overflow-hidden bg-[#6d3c1b]">
                  <img
                    src={grade.image}
                    alt={`${grade.name} timber sleepers`}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="flex min-h-[315px] flex-col px-4 py-4">
                  <p className="text-[12px] leading-[1.5] text-[#382519]">
                    {grade.description}
                  </p>

                  <div className="mt-5">
                    <h3 className="text-sm font-bold text-[#321a0c]">
                      Best for:
                    </h3>

                    <ul className="mt-2 space-y-1.5">
                      {grade.bestFor.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-[11px] leading-4 text-[#382519]"
                        >
                          <Check
                            size={13}
                            strokeWidth={3}
                            className="mt-[1px] shrink-0 text-[#8b5528]"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-[#32170a] px-3 py-3 text-center">
                  <p className="display-font text-2xl font-black text-[#f5e4ca]">
                    {grade.price}
                  </p>

                  <p className="mt-1 text-[9px] uppercase tracking-wide text-[#ead8bd]">
                    PER SLEEPER (STANDARD LENGTH)
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VIEW ALL PRICES CTA */}
      <section className="px-5 pb-7 md:px-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="grades-price-cta">
            <div className="grades-price-cta-content">
              <div className="grades-price-cta-icon">
                <PriceTagIcon />
              </div>

              <div>
                <p className="grades-price-cta-eyebrow">
                  COMPARE OUR FULL RANGE
                </p>

                <h2>WANT TO SEE ALL OUR PRICES?</h2>

                <p className="grades-price-cta-text">
                  View our complete sleeper prices, lengths, planks,
                  short sections, long sleepers and additional services.
                </p>
              </div>
            </div>

            <a
              href="/products/all"
              className="grades-price-cta-button"
            >
              VIEW ALL OUR PRICES
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* TREATED FOR DURABILITY */}
      <section className="px-5 pb-6 md:px-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="wood-dark rounded border border-[#8c5b2e]/50 px-5 py-5 md:px-8">
            <div className="grid gap-7 md:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
              <div className="flex items-center gap-4">
                <ShieldCheck
                  size={55}
                  strokeWidth={1.4}
                  className="shrink-0 text-[#d19a59]"
                />

                <div>
                  <h2 className="display-font text-2xl font-bold text-[#d19a59]">
                    TREATED FOR DURABILITY
                  </h2>

                  <p className="mt-1 text-xs leading-5 text-[#ead8bd]">
                    All our sleepers are treated to resist rot,
                    insect attack and harsh weather for long
                    lasting performance.
                  </p>
                </div>
              </div>

              <Feature
                icon={<Droplets size={30} />}
                title="Pressure Treated"
                text="Penetrative treatment for maximum protection"
              />

              <Feature
                icon={<CloudRain size={30} />}
                title="Weather Resistant"
                text="Built to withstand South African conditions"
              />

              <Feature
                icon={<Bug size={30} />}
                title="Insect & Rot Resistant"
                text="Protected against rot, termites & decay"
              />

              <Feature
                icon={<CalendarDays size={30} />}
                title="Long Lasting"
                text="Extended lifespan for peace of mind"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

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
    </main>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="shrink-0 text-[#d19a59]">
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-bold text-[#edc48d]">
          {title}
        </h3>

        <p className="mt-1 text-[10px] leading-4 text-[#d7c2a5]">
          {text}
        </p>
      </div>
    </div>
  );
}

function PriceTagIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M20 13l-7 7-9-9V4h7l9 9z" />
      <circle cx="7" cy="7" r="1.5" />
      <path d="M13 8h4M13 11h3M13 14h2" />
    </svg>
  );
}