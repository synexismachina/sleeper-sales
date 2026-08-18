"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Award,
  ChevronRight,
  Hammer,
  Ruler,
  ShieldCheck,
  Truck,
  MessageCircle,
} from "lucide-react";
const whatsappNumber = "27829529150";

const whatsappMessage =
  "Hello Sleeper Sales, I would like to enquire about your timber sleepers.";

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;
const grades = [
  { name: "A+ GRADE", price: "R1900", badge: "BEST QUALITY" },
  { name: "A GRADE", price: "R1400" },
  { name: "B+ GRADE", price: "R500" },
  { name: "B GRADE", price: "R400" },
  { name: "C+ GRADE", price: "R280" },
  { name: "C- GRADE", price: "R230" },
];

const timberProducts = [
  {
    name: "KEMPAS SLEEPERS",
    image: "/images/products/kempas-sleepers.jpg",
    description: "185mm thick x 250mm wide",
    price: "R1100",
    unit: "per meter",
  },
  {
    name: "PINE SLEEPERS",
    image: "/images/products/pine-sleepers.jpg",
    description: "",
    price: "R330",
    unit: "per meter",
  },
  {
    name: "MINE SLEEPERS",
    image: "/images/products/mine-sleepers.jpg",
    description: "",
    price: "R100",
    unit: "each",
  },
  {
    name: "BRUSHED MINE SLEEPERS",
    image: "/images/products/brushed-mine-sleepers.jpg",
    description: "",
    price: "R125",
    unit: "each",
  },
];

export default function ProductsPage() {
  return (
    <main className="products-page">
      <Header />

      {/* HERO */}
      <section className="products-landing-hero">
        <div className="products-landing-overlay" />

        <div className="products-landing-hero-content">
          <div className="products-landing-copy">
            <h1>OUR PRODUCTS</h1>

            <h2>QUALITY TIMBER SLEEPERS FOR EVERY PROJECT.</h2>

            <p>
              Choose from our wide range of grades, lengths
              <br />
              and timber products.
            </p>
          </div>

          <div className="products-feature-strip">
            <ProductFeature
              icon={<Award />}
              title="PREMIUM QUALITY"
              text={
                <>
                  Grade A+ to C-
                  <br />
                  sleepers
                </>
              }
            />

            <ProductFeature
              icon={<ShieldCheck />}
              title="TREATED FOR DURABILITY"
              text={
                <>
                  Long lasting &
                  <br />
                  weather resistant
                </>
              }
            />

            <ProductFeature
              icon={<Award />}
              title="COMPETITIVE PRICES"
              text={
                <>
                  Quality timber
                  <br />
                  at the best value
                </>
              }
            />

            <ProductFeature
              icon={<Truck />}
              title="NATIONWIDE DELIVERY"
              text={
                <>
                  Reliable & on-time
                  <br />
                  delivery
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="products-landing-content">
        {/* STANDARD LENGTHS */}
        <section className="landing-section">
          <SectionTitle
            icon={<Ruler />}
            title="STANDARD LENGTHS"
            subtitle="(PER SLEEPER)"
            href="/products/all"
          />

          <div className="landing-grades">
            {grades.map((grade) => (
              <div className="landing-grade-card" key={grade.name}>
                <div className="landing-grade-top">
                  {grade.name}

                  {grade.badge && (
                    <span className="landing-grade-badge">
                      {grade.badge}
                    </span>
                  )}
                </div>

                <div className="landing-grade-price">
                  {grade.price}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TIMBER PRODUCTS */}
        <section className="landing-section">
          <SectionTitle
            icon={<Ruler />}
            title="TIMBER PRODUCTS"
            href="/products/all"
          />

          <div className="landing-timber-grid">
            {timberProducts.map((product) => (
              <a
                href="/products/all"
                className="landing-timber-card"
                key={product.name}
              >
                <div className="landing-timber-image">
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                </div>

                <div className="landing-timber-info">
                  <h3>{product.name}</h3>

                  {product.description && (
                    <p>{product.description}</p>
                  )}

                  <strong>{product.price}</strong>

                  <span>{product.unit}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* SLEEPER PLANKS */}
        <section className="landing-section">
          <SectionTitle
            icon={<Ruler />}
            title="SLEEPER PLANKS"
            subtitle="(2.1m LONG, 250mm WIDE)"
            href="/products/all"
            label="View details"
          />

          <div className="landing-planks">
            <div className="landing-plank-option">
              <div>
                <h3>INSIDE</h3>
                <p>(both sides smooth)</p>
              </div>

              <img
                src="/images/products/plank-inside.png"
                alt="Inside sleeper plank"
              />
            </div>

            <div className="landing-plank-option">
              <div>
                <h3>OUTSIDE</h3>
                <p>(one side rough, one side smooth)</p>
              </div>

              <img
                src="/images/products/plank-outside.png"
                alt="Outside sleeper plank"
              />
            </div>

            <div className="landing-plank-prices">
              <div>
                <span>25mm</span>
                <strong>R550</strong>
              </div>
              <div>
                <span>38/40mm</span>
                <strong>R700</strong>
              </div>
              <div>
                <span>55/60mm</span>
                <strong>R900</strong>
              </div>
              <div>
                <span>Skins</span>
                <strong>R400</strong>
              </div>
            </div>
          </div>
        </section>

        {/* OTHER LENGTHS & SERVICES */}
        <section className="landing-section">
          <SectionTitle
            icon={<Ruler />}
            title="OTHER LENGTHS & SERVICES"
            href="/products/all"
          />

          <div className="landing-services">
            <ServiceCard
              icon={<Ruler />}
              title="SHORT SECTIONS"
              text="Multiple lengths available"
            />

            <ServiceCard
              icon={<Ruler />}
              title="LONG SLEEPERS"
              text="A, B & C Grades available"
            />

            <ServiceCard
              icon={<Hammer />}
              title="CUTTING OF SLEEPERS"
              text="Length cuts, cross cuts & edge cuts"
            />

            <ServiceCard
              icon={<Hammer />}
              title="ADDITIONAL SERVICES"
              text="Brushing, coach screws & more"
            />

            <ServiceCard
              icon={<Truck />}
              title="DELIVERY RATES"
              text="Nationwide delivery options"
            />
          </div>
        </section>

        {/* QUOTE */}
        <section className="products-landing-quote">
          <div className="quote-copy">
            <div className="quote-icon">
              <ClipboardIcon />
            </div>

            <div>
              <h2>READY FOR A QUOTE?</h2>

              <p>
                Select your products and request a
                <br className="hidden sm:block" />
                quote. We&apos;ll get back to you shortly!
              </p>
            </div>
          </div>

          <a href="/quote" className="products-landing-quote-button">
            GET A QUOTE
            <ArrowRight size={19} />
          </a>
        </section>
      </div>

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


function ProductFeature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: React.ReactNode;
}) {
  return (
    <div className="products-feature">
      <div className="products-feature-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
}

function SectionTitle({
  icon,
  title,
  subtitle,
  href,
  label = "View all",
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  href: string;
  label?: string;
}) {
  return (
    <div className="landing-section-title">
      <div className="landing-title-left">
        <span>{icon}</span>

        <h2>{title}</h2>

        {subtitle && <small>{subtitle}</small>}
      </div>

      <a href={href}>
        {label}
        <ChevronRight size={18} />
      </a>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <a href="/products/all" className="landing-service-card">
      <div className="landing-service-icon">{icon}</div>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </a>
  );
}

function ClipboardIcon() {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="5" y="4" width="14" height="17" rx="1" />
      <path d="M9 4V2h6v2" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </svg>
  );
}