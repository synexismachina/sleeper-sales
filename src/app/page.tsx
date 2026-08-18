"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Award,
  Check,
  ChevronRight,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Truck,
} from "lucide-react";

const whatsappNumber = "27829529150";

const whatsappMessage =
  "Hello Sleeper Sales, I would like to enquire about your timber sleepers.";

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const grades = [
  {
    grade: "GRADE A+",
    text: "Top quality sleepers with minimal cracks and excellent appearance.",
  },
  {
    grade: "GRADE A",
    text: "High quality sleepers with minor cracks, very durable.",
  },
  {
    grade: "GRADE B+",
    text: "Good quality sleepers with visible cracks, still very strong.",
  },
  {
    grade: "GRADE B",
    text: "Standard quality sleepers, suitable for most applications.",
  },
  {
    grade: "GRADE C+",
    text: "Budget friendly sleepers, more cracks and natural imperfections.",
  },
  {
    grade: "GRADE C-",
    text: "Economy grade sleepers, functional and cost effective.",
  },
];

const lengths = [
  "2.4m",
  "2.6m",
  "3.0m",
  "3.6m",
  "4.2m",
  "4.8m",
  "5.4m",
  "6.0m",
];

const features = [
  {
    icon: Award,
    title: "PREMIUM QUALITY",
    text: "Grade A+ to C- sleepers",
  },
  {
    icon: ShieldCheck,
    title: "TREATED FOR DURABILITY",
    text: "Long lasting & weather resistant",
  },
  {
    icon: Truck,
    title: "DELIVERY NATIONWIDE",
    text: "Reliable & on-time delivery",
  },
  {
    icon: Leaf,
    title: "SUSTAINABLE TIMBER",
    text: "Responsible & eco-friendly",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f3e6d1] text-[#321a0c]">
      <Header />

      {/* HERO */}
      <section id="home" className="hero-section relative min-h-[650px]">
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1450px] items-center px-7 py-24 md:px-12 lg:px-20">
          <div className="max-w-[650px]">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#d19a59]">
              Premium Treated Timber
            </p>

            <h1 className="display-font text-5xl font-black leading-[0.94] tracking-tight text-[#f7eddd] sm:text-6xl md:text-7xl lg:text-[78px]">
              QUALITY SLEEPERS,
              <br />
              BUILT TO LAST.
            </h1>

            <div className="my-7 h-[3px] w-[190px] bg-[#9a5d27]" />

            <p className="max-w-[540px] text-base leading-7 text-[#eee0ca] md:text-lg">
              Supplying premium quality treated timber sleepers for any
              project, big or small.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/products" className="wood-button">
                VIEW PRODUCTS
                <ChevronRight size={16} />
              </a>

              <a href="/contact" className="hero-outline-button">
                GET A QUOTE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="wood-feature-strip">
        <div className="mx-auto grid max-w-[1450px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex items-center gap-4 border-b border-white/10 px-6 py-5 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <Icon
                  size={40}
                  strokeWidth={1.4}
                  className="shrink-0 text-[#d19a59]"
                />

                <div>
                  <h3 className="display-font text-[16px] font-bold tracking-wide text-[#f1dec0]">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-xs text-[#c9b18f]">
                    {feature.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* QUICK PRICE ACCESS */}
      <section className="price-access-section">
        <div className="price-access-inner">
          <div className="price-access-copy">
            <span className="price-access-eyebrow">
              WANT THE PRICES NOW?
            </span>

            <h2>SEE ALL OUR SLEEPER PRICES</h2>

            <p>
              Skip the browsing and go straight to our full price list,
              lengths, sleeper planks, services and delivery rates.
            </p>
          </div>

          <a
            href="/products/all"
            className="price-access-button"
          >
            VIEW ALL OUR PRICES
            <span>→</span>
          </a>
        </div>
      </section>

      {/* OUR SLEEPERS */}
      <section
        id="products"
        className="paper-section relative py-20 md:py-24"
      >
        <div className="paper-noise absolute inset-0 opacity-40" />

        <div className="relative mx-auto max-w-[1300px] px-6 md:px-10">
          <SectionTitle title="OUR SLEEPERS" />

          <div className="mt-10 grid gap-8 xl:grid-cols-[190px_1fr]">
            <div>
              <h3 className="display-font text-2xl font-bold leading-tight text-[#40200e]">
                AVAILABLE IN
                <br />
                STANDARD
                <br />
                LENGTHS
              </h3>

              <div className="mt-5 flex flex-wrap gap-x-2 gap-y-2 text-sm font-medium text-[#4b2a15]">
                {lengths.map((length, index) => (
                  <span key={length}>
                    {length}

                    {index !== lengths.length - 1 && (
                      <span className="ml-2 text-[#9c6734]">|</span>
                    )}
                  </span>
                ))}
              </div>

              <a href="/products/all" className="wood-button mt-7">
                VIEW ALL PRODUCTS
              </a>
            </div>

            <div
              id="grades"
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {grades.map((item) => (
                <div key={item.grade} className="grade-card">
                  <h3 className="display-font text-xl font-bold text-[#f0d5ad]">
                    {item.grade}
                  </h3>

                  <div className="my-3 h-px w-10 bg-[#a76a31]" />

                  <p className="text-sm leading-6 text-[#ead8bd]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ABOUT PREVIEW */}
          <div
            id="about"
            className="mt-20 grid items-center gap-10 lg:grid-cols-2"
          >
            <div className="about-image h-[380px] md:h-[470px]" />

            <div className="relative">
              <div className="tree-ring absolute -right-20 -top-20 hidden h-[330px] w-[330px] rounded-full opacity-[0.12] lg:block" />

              <p className="relative text-xs font-bold uppercase tracking-[0.18em] text-[#8d5528]">
                WELCOME TO SLEEPER SALES
              </p>

              <h2 className="display-font relative mt-3 text-4xl font-black leading-tight text-[#3a1d0c] md:text-5xl">
                YOUR TRUSTED
                <br />
                SLEEPER SUPPLIER
              </h2>

              <div className="my-5 h-[3px] w-[70px] bg-[#9c5f29]" />

              <p className="relative max-w-xl text-[15px] leading-7 text-[#543822]">
                At Sleeper Sales, we pride ourselves on supplying high-quality
                treated timber sleepers that are built to withstand the test of
                time. Whether you&apos;re working on landscaping, retaining
                walls, garden projects, or construction, we have the perfect
                sleepers for you.
              </p>

              <ul className="relative mt-6 space-y-3 text-sm text-[#49301e]">
                {[
                  "Wide range of grades and lengths",
                  "Durable, treated timber for long life",
                  "Competitive prices",
                  "Excellent customer service",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check size={16} className="text-[#8c572b]" />
                    {item}
                  </li>
                ))}
              </ul>

              <a href="/about" className="wood-button relative mt-7">
                LEARN MORE ABOUT US
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section id="delivery" className="wood-delivery-section">
        <div className="mx-auto flex max-w-[1300px] flex-col items-center justify-between gap-7 px-6 py-9 md:flex-row md:px-10">
          <div className="flex items-center gap-5">
            <Truck
              size={65}
              strokeWidth={1.2}
              className="text-[#d19a59]"
            />

            <div>
              <h2 className="display-font text-2xl font-bold text-[#f0dec2]">
                NEED DELIVERY?
              </h2>

              <p className="mt-1 text-sm text-[#d0b796]">
                We deliver nationwide! Get your sleepers
                <br className="hidden sm:block" />
                delivered safely and on time.
              </p>
            </div>
          </div>

          <a href="/delivery" className="wood-outline-button">
            VIEW DELIVERY INFO
          </a>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="paper-section py-20 md:py-24">
        <div className="mx-auto max-w-[1250px] px-6 md:px-10">
          <SectionTitle title="WHY CHOOSE US" />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "EXPERIENCE",
                text: "Years of industry experience you can rely on.",
              },
              {
                icon: Award,
                title: "QUALITY ASSURED",
                text: "Only the best quality treated timber sleepers.",
              },
              {
                icon: Truck,
                title: "NATIONWIDE SUPPLY",
                text: "We supply across South Africa.",
              },
              {
                icon: MessageCircle,
                title: "CUSTOMER SATISFACTION",
                text: "Our customers are our top priority.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center border-b border-[#8f6c4d]/30 px-7 py-8 text-center last:border-b-0 md:border-r md:border-b-0 md:last:border-r-0"
                >
                  <Icon
                    size={38}
                    strokeWidth={1.3}
                    className="text-[#5a341c]"
                  />

                  <h3 className="display-font mt-4 text-lg font-bold text-[#3d210f]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-[190px] text-xs leading-5 text-[#5a4532]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="gallery" className="final-image-section">
        <div className="final-image-overlay" />

        <div className="relative z-10 mx-auto flex min-h-[330px] max-w-[1300px] items-center justify-end px-7 py-16 md:px-12">
          <div className="max-w-[480px] text-left">
            <h2 className="display-font text-5xl font-black leading-[0.9] text-[#f7eddd] md:text-6xl">
              STRONG.
              <br />
              DURABLE.
              <br />
              RELIABLE.
            </h2>

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#f1d7b1]">
              SLEEPER SALES DELIVERS.
            </p>
          </div>
        </div>
      </section>

      <Footer />

      {/* FLOATING WHATSAPP */}
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

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h2 className="display-font text-4xl font-black text-[#3b1e0c] md:text-5xl">
        {title}
      </h2>

      <div className="mx-auto mt-3 h-[3px] w-[55px] bg-[#97602e]" />
    </div>
  );
}