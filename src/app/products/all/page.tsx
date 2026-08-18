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

const standardGrades = [
  {
    grade: "A+ GRADE",
    price: "R1900",
    badge: "BEST QUALITY",
  },
  {
    grade: "A GRADE",
    price: "R1400",
  },
  {
    grade: "B+ GRADE",
    price: "R500",
  },
  {
    grade: "B GRADE",
    price: "R400",
  },
  {
    grade: "C+ GRADE",
    price: "R280",
  },
  {
    grade: "C- GRADE",
    price: "R230",
  },
];

const sleepers = [
  {
    name: "KEMPAS SLEEPERS",
    detail: "185mm thick × 250mm wide",
    price: "R1100 per meter",
  },
  {
    name: "PINE SLEEPERS",
    price: "R330 per meter",
  },
  {
    name: "MINE SLEEPERS",
    price: "R100 each",
  },
  {
    name: "BRUSHED MINE SLEEPERS",
    price: "R125 each",
  },
];

const shortSections = [
  ["300mm", "R285", "R114", "R75"],
  ["400mm", "R380", "R152", "R100"],
  ["500mm", "R475", "R190", "R125"],
  ["600mm", "R570", "R228", "R150"],
  ["700mm", "R665", "R266", "R175"],
  ["800mm", "R760", "R304", "R200"],
  ["1000mm", "R950", "R380", "R250"],
  ["1200mm", "R1140", "R456", "R300"],
  ["1500mm", "R1425", "R570", "R375"],
];

const longSleepers = [
  ["2400mm", "R2280", "R912", "R600"],
  ["2700mm", "R2565", "R1026", "R675"],
  ["3000mm", "R2850", "R1140", "R750"],
  ["3300mm", "R3135", "R1254", "R825"],
  ["3600mm", "R3420", "R1368", "R900"],
  ["3900mm", "R3705", "R1482", "R975"],
  ["4200mm", "R3990", "R1596", "R1050"],
];

export default function AllProductsPage() {
  return (
    <main className="min-h-screen bg-[#f3e6d1] text-[#321a0c]">

      <Header />

      {/* PAGE HERO */}
      <section className="relative overflow-hidden bg-[#2a1106]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage:
              "url('/images/products/products-hero.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d9a15c]">
            SLEEPER SALES
          </p>

          <h1 className="display-font mt-3 text-5xl font-black uppercase leading-none text-[#f8f0e3] md:text-7xl">
            ALL PRODUCTS
          </h1>

          <div className="mt-5 h-[3px] w-[70px] bg-[#c38a49]" />

          <p className="mt-5 max-w-xl text-base leading-7 text-[#ead8bd] md:text-lg">
            Explore our full range of timber sleepers, sleeper planks,
            sections, cutting services and delivery options.
          </p>
        </div>
      </section>

      {/* PRODUCT CONTENT */}
      <section className="bg-[#f3e6d1] px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-[1250px]">

          {/* STANDARD LENGTHS */}
          <ProductTitle title="STANDARD LENGTHS" />

          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {standardGrades.map((item) => (
              <div
                key={item.grade}
                className="overflow-hidden rounded border border-[#cdb493]"
              >
                <div className="relative bg-[#32170a] px-2 py-3 text-center">
                  <h3 className="display-font text-sm font-bold text-[#f5dfbf] md:text-base">
                    {item.grade}
                  </h3>

                  {item.badge && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#c38a49] px-2 py-0.5 text-[8px] font-bold text-white">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="bg-[#f7eee2] px-3 py-5 text-center">
                  <p className="text-lg font-bold text-[#321a0c]">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* SLEEPERS */}
          <ProductTitle title="SLEEPERS" />

          <div className="overflow-hidden rounded border border-[#d8c5ac]">
            {sleepers.map((item) => (
              <div
                key={item.name}
                className="flex flex-col gap-2 border-b border-[#d8c5ac] px-5 py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-bold text-[#321a0c]">
                    {item.name}
                  </h3>

                  {item.detail && (
                    <span className="ml-2 text-xs text-[#6c4b31]">
                      ({item.detail})
                    </span>
                  )}
                </div>

                <strong className="text-sm text-[#321a0c]">
                  {item.price}
                </strong>
              </div>
            ))}
          </div>

          {/* SLEEPER PLANKS */}
          <ProductTitle title="SLEEPER PLANKS" />

          <div className="grid gap-5 md:grid-cols-3">
            <ProductCard
              title="INSIDE"
              subtitle="Both sides smooth"
            />

            <ProductCard
              title="OUTSIDE"
              subtitle="One side rough, one side smooth"
            />

            <div className="rounded border border-[#d8c5ac] bg-[#f7eee2]">
              {[
                ["25mm", "R550"],
                ["38/40mm", "R700"],
                ["55/60mm", "R900"],
                ["Skins", "R400"],
              ].map(([size, price]) => (
                <div
                  key={size}
                  className="flex justify-between border-b border-[#d8c5ac] px-5 py-3 last:border-0"
                >
                  <span className="font-bold">{size}</span>
                  <strong>{price}</strong>
                </div>
              ))}
            </div>
          </div>

          {/* SHORT SECTIONS */}
          <ProductTitle title="OTHER LENGTHS — SHORT SECTIONS" />

          <PriceTable
            headers={[
              "LENGTH",
              "A GRADE (R950 PER METER)",
              "B GRADE (R380 PER METER)",
              "C GRADE (R250 PER METER)",
            ]}
            rows={shortSections}
          />

          {/* LONG SLEEPERS */}
          <ProductTitle title="LONG SLEEPERS" />

          <PriceTable
            headers={[
              "LENGTH",
              "A GRADE (R950 PER METER)",
              "B GRADE (R380 PER METER)",
              "C GRADE (R250 PER METER)",
            ]}
            rows={longSleepers}
          />

          {/* SERVICES */}
          <div className="mt-14 grid gap-6 lg:grid-cols-2">

            <ServiceBox
              title="CUTTING OF SLEEPERS & PLANKS"
              items={[
                ["Length Cuts", "R130 per meter"],
                ["Full Sleepers", "R40 per cut"],
                ["Planks", "R25 per cut"],
                ["Full sleepers — edge cuts", "R95 per side"],
                ["Planks — edge cuts", "R35 per side"],
              ]}
            />

            <div className="space-y-6">

              <ServiceBox
                title="ADDITIONAL SLEEPERS"
                items={[
                  ["Coach Screws", "R30 each"],
                  ["Brushing Full Sleepers", "R85 per meter"],
                  ["Brushing Planks", "R55 per meter"],
                ]}
              />

              <ServiceBox
                title="DELIVERY RATES"
                items={[
                  ["Centurion", "R850"],
                  ["PTA / Midrand", "R990"],
                  ["JHB & PTA North", "R1400"],
                  ["JHB South / Rand", "R1600"],
                ]}
              />

            </div>
          </div>

          {/* QUOTE CTA */}
          <section className="mt-14 overflow-hidden rounded border border-[#9b6732] bg-[#2a1106]">
            <div className="flex flex-col items-center justify-between gap-6 px-6 py-8 text-center md:flex-row md:px-10 md:text-left">
              <div>
                <h2 className="display-font text-3xl font-bold text-[#edbd76]">
                  READY FOR A QUOTE?
                </h2>

                <p className="mt-2 text-sm text-[#ead8bd]">
                  Select your products and request a quote.
                  We&apos;ll get back to you shortly!
                </p>
              </div>

              <a
                href="/contact"
                className="wood-button whitespace-nowrap"
              >
                GET A QUOTE
              </a>
            </div>
          </section>

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

function ProductTitle({ title }: { title: string }) {
  return (
    <div className="mb-6 mt-12 flex items-center gap-4">
      <div className="h-[3px] w-10 bg-[#97602e]" />

      <h2 className="display-font text-2xl font-black uppercase text-[#3b1e0c] md:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function ProductCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="rounded border border-[#d8c5ac] bg-[#f7eee2] p-6">
      <h3 className="display-font text-xl font-bold text-[#3b1e0c]">
        {title}
      </h3>

      <p className="mt-2 text-sm text-[#5d402a]">
        {subtitle}
      </p>

      <div className="mt-6 h-24 rounded bg-[#8b5528]/20" />
    </div>
  );
}

function PriceTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded border border-[#d8c5ac]">
      <table className="w-full min-w-[700px] border-collapse text-sm">
        <thead>
          <tr className="bg-[#32170a] text-[#f5dfbf]">
            {headers.map((header) => (
              <th
                key={header}
                className="border-r border-[#8b5a30] px-3 py-3 text-left text-xs font-bold last:border-r-0"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="border-b border-[#d8c5ac] last:border-b-0"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-3 py-2 text-center text-[#321a0c]"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ServiceBox({
  title,
  items,
}: {
  title: string;
  items: string[][];
}) {
  return (
    <div className="rounded border border-[#d8c5ac] bg-[#f7eee2] p-5">
      <h3 className="display-font text-xl font-bold text-[#3b1e0c]">
        {title}
      </h3>

      <div className="mt-4">
        {items.map(([label, price]) => (
          <div
            key={label}
            className="flex justify-between gap-5 border-b border-[#d8c5ac] py-3 last:border-b-0"
          >
            <span>{label}</span>
            <strong className="whitespace-nowrap">{price}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}