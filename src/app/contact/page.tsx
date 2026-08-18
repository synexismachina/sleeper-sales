"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Check,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import { FormEvent, useState } from "react";

const whatsappNumber = "27829529150";

const whatsappMessage =
  "Hello Sleeper Sales, I would like to enquire about your timber sleepers.";

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const FORM_NAME = "sleeper-sales-quote";

const sleeperTypes = [
  "Pine Sleepers",
  "Kempas Sleepers",
  "Mine Sleepers",
];

const grades = [
  "A+ Grade",
  "A Grade",
  "B+ Grade",
  "B Grade",
  "C+ Grade",
  "C- Grade",
];

const services = [
  "Cutting (Length / Cross / Edge)",
  "Brushing",
  "Coach Screws",
  "Delivery",
];

const quantities = [
  "1–5 sleepers",
  "6–10 sleepers",
  "11–20 sleepers",
  "21–50 sleepers",
  "51–100 sleepers",
  "100+ sleepers",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitting(true);
    setSubmitted(false);
    setSubmitError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.set("form-name", FORM_NAME);

    const encodedData = new URLSearchParams();

    formData.forEach((value, key) => {
      encodedData.append(key, value.toString());
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodedData.toString(),
      });

      if (!response.ok) {
        throw new Error("Netlify submission failed.");
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error("Netlify form error:", error);

      setSubmitError(
        "We could not send your request. Please try again or contact us on WhatsApp."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="contact-page">
      <Header />

      {/* HERO */}
      <section className="contact-reference-hero">
        <div className="contact-reference-overlay" />

        <div className="contact-reference-hero-inner">
          <div className="contact-reference-copy">
            <h1>CONTACT US</h1>

            <h2>WE&apos;RE HERE TO HELP.</h2>

            <p>
              Have a question, need a quote or want to discuss your
              <br className="hidden sm:block" />
              project? Get in touch with our team today.
            </p>
          </div>

          <div className="contact-hero-features">
            <ContactHeroFeature
              icon={<Phone />}
              title="EXPERT ADVICE"
              text="Our team is ready to help you find the right solution for your project."
            />

            <ContactHeroFeature
              icon={<Clock3 />}
              title="FAST RESPONSE"
              text="We respond quickly to all enquiries and quote requests."
            />

            <ContactHeroFeature
              icon={<TagIcon />}
              title="COMPETITIVE PRICES"
              text="Quality timber sleepers at the best prices."
            />

            <ContactHeroFeature
              icon={<Truck />}
              title="NATIONWIDE SERVICE"
              text="We deliver throughout Gauteng and surrounding areas."
            />
          </div>
        </div>
      </section>

      {/* MAIN CONTACT AREA */}
      <section className="contact-reference-content">
        <div className="contact-main-grid">
          {/* FORM */}
          <div className="contact-form-column">
            <div className="contact-section-heading">
              <ClipboardIcon />

              <div>
                <h2>REQUEST A QUOTE</h2>

                <p>
                  Fill in the form below and we&apos;ll get back to you with a
                  customised quote.
                </p>
              </div>
            </div>

            <form
              name={FORM_NAME}
              method="POST"
              onSubmit={handleSubmit}
              className="quote-form"
            >
              <input
                type="hidden"
                name="form-name"
                value={FORM_NAME}
              />

              <input
                type="hidden"
                name="subject"
                value="New Sleeper Sales Quote Request"
              />

              {/* HONEYPOT */}
              <div className="netlify-honeypot">
                <label>
                  Don&apos;t fill this out if you&apos;re human:
                  <input
                    name="bot-field"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              {/* STEPS */}
              <div className="quote-steps">
                <div className="quote-step active">
                  <span>1</span>
                  <strong>PRODUCT DETAILS</strong>
                </div>

                <ArrowRight size={16} />

                <div className="quote-step">
                  <span>2</span>
                  <strong>YOUR DETAILS</strong>
                </div>

                <ArrowRight size={16} />

                <div className="quote-step">
                  <span>3</span>
                  <strong>PROJECT DETAILS</strong>
                </div>

                <ArrowRight size={16} />

                <div className="quote-step">
                  <span>4</span>
                  <strong>REVIEW &amp; SUBMIT</strong>
                </div>
              </div>

              {/* PRODUCT DETAILS */}
              <div className="form-section-label">
                PRODUCT DETAILS
              </div>

              <div className="form-grid form-grid-4">
                <FormField label="Product Type" required>
                  <select
                    name="productType"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select product type
                    </option>

                    {sleeperTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </FormField>

                <FormField label="Grade" required>
                  <select
                    name="grade"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select grade
                    </option>

                    {grades.map((grade) => (
                      <option key={grade} value={grade}>
                        {grade}
                      </option>
                    ))}
                  </select>
                </FormField>

                <FormField label="Length / Size" required>
                  <select
                    name="length"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select size
                    </option>

                    <option value="2.4m">2.4m</option>
                    <option value="2.6m">2.6m</option>
                    <option value="3.0m">3.0m</option>
                    <option value="3.6m">3.6m</option>
                    <option value="4.2m">4.2m</option>
                    <option value="4.8m">4.8m</option>
                    <option value="5.4m">5.4m</option>
                    <option value="6.0m">6.0m</option>
                    <option value="Other / Custom">
                      Other / Custom
                    </option>
                  </select>
                </FormField>

                <FormField label="Quantity" required>
                  <select
                    name="quantity"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select quantity
                    </option>

                    {quantities.map((quantity) => (
                      <option key={quantity} value={quantity}>
                        {quantity}
                      </option>
                    ))}
                  </select>
                </FormField>
              </div>

              {/* SERVICES */}
              <div className="form-field full-width-field">
                <label>Additional Services (Optional)</label>

                <div className="service-checkboxes">
                  {services.map((service) => (
                    <label
                      className="service-checkbox"
                      key={service}
                    >
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                      />

                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* YOUR DETAILS */}
              <div className="form-section-label">
                YOUR DETAILS
              </div>

              <div className="form-grid form-grid-2">
                <FormField label="Full Name" required>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                  />
                </FormField>

                <FormField label="Phone Number" required>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="071 123 4567"
                    autoComplete="tel"
                    required
                  />
                </FormField>

                <FormField label="Email Address" required>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </FormField>

                <FormField label="Company / Business">
                  <input
                    type="text"
                    name="company"
                    placeholder="Optional"
                    autoComplete="organization"
                  />
                </FormField>
              </div>

              {/* PROJECT & DELIVERY */}
              <div className="form-section-label">
                PROJECT &amp; DELIVERY DETAILS
              </div>

              <div className="form-grid form-grid-2">
                <FormField
                  label="Delivery Area / Suburb"
                  required
                >
                  <input
                    type="text"
                    name="deliveryArea"
                    placeholder="e.g. Centurion"
                    required
                  />
                </FormField>

                <FormField label="Preferred Delivery Date">
                  <input
                    type="date"
                    name="deliveryDate"
                  />
                </FormField>

                <FormField label="Project Type">
                  <select
                    name="projectType"
                    defaultValue=""
                  >
                    <option value="">
                      Select project type
                    </option>

                    <option value="Landscaping">
                      Landscaping
                    </option>

                    <option value="Retaining Walls">
                      Retaining Walls
                    </option>

                    <option value="Fencing">
                      Fencing
                    </option>

                    <option value="Garden Project">
                      Garden Project
                    </option>

                    <option value="Construction">
                      Construction
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </FormField>

                <FormField label="Delivery Required?">
                  <select
                    name="deliveryRequired"
                    defaultValue="Yes"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </FormField>
              </div>

              {/* NOTES */}
              <div className="form-field full-width-field">
                <label>
                  Additional Notes / Requirements
                </label>

                <textarea
                  name="notes"
                  placeholder="Tell us about your project, exact quantities, special sizes, access requirements or anything else we should know..."
                  rows={5}
                />
              </div>

              {/* SUBMISSION */}
              <div className="form-actions">
                {submitted && (
                  <div className="form-success">
                    <Check size={18} />
                    Your quote request has been sent successfully.
                  </div>
                )}

                {submitError && (
                  <div className="form-error">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  className="wood-button"
                  disabled={submitting}
                >
                  {submitting
                    ? "SENDING..."
                    : "SUBMIT QUOTE REQUEST"}

                  {!submitting && <ArrowRight size={17} />}
                </button>
              </div>
            </form>
          </div>

          {/* SIDEBAR */}
          <aside className="contact-sidebar">
            <div className="contact-info-card">
              <h2>
                <Phone size={27} />
                CONTACT INFORMATION
              </h2>

              <div className="contact-info-list">
                <a href="tel:0126645808">
                  <Phone size={19} />
                  <span>012 664 5808</span>
                </a>

                <a href="tel:0829529150">
                  <Phone size={19} />
                  <span>082 952 9150</span>
                </a>

                <a href="mailto:jaymel@mweb.co.za">
                  <Mail size={19} />
                  <span>jaymel@mweb.co.za</span>
                </a>

                <a href="mailto:Sleepersoultionsza@gmail.com">
                  <Mail size={19} />
                  <span>Sleepersoultionsza@gmail.com</span>
                </a>

                <div>
                  <MapPin size={19} />

                  <span>
                    Sleeper Sales CC
                    <br />
                    Police Station
                    <br />
                    253 Basden Ave
                    <br />
                    Highlands, Lyttelton
                    <br />
                    Centurion, 2157
                  </span>
                </div>

                <div>
                  <Clock3 size={19} />

                  <span>
                    Monday - Friday: 7:30am - 4:30pm
                    <br />
                    Saturday: 8:00am - 12:00pm
                  </span>
                </div>
              </div>
            </div>

            {/* WHATSAPP */}
            <div className="contact-whatsapp-card">
              <div className="contact-whatsapp-icon">
                <MessageCircle size={31} />
              </div>

              <div>
                <h2>CHAT WITH US ON WHATSAPP</h2>

                <p>
                  Get quick answers to your questions
                  <br className="hidden sm:block" />
                  or request a quote via WhatsApp.
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-whatsapp-button"
              >
                <MessageCircle size={22} />
                CHAT ON WHATSAPP
              </a>
            </div>
          </aside>
        </div>

        {/* BENEFITS */}
        <div className="contact-benefits">
          <ContactBenefit
            icon={<ClipboardIcon />}
            title="FREE QUOTES"
            text="No obligation quotes on all enquiries."
          />

          <ContactBenefit
            icon={<Wrench size={34} />}
            title="CUSTOM SOLUTIONS"
            text="Tailored solutions for your specific needs."
          />

          <ContactBenefit
            icon={<ShieldCheck size={34} />}
            title="QUALITY GUARANTEED"
            text="Premium quality timber sleeper products."
          />

          <ContactBenefit
            icon={<Truck size={34} />}
            title="ON-TIME DELIVERY"
            text="Reliable delivery when you need it."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FormField({
  label,
  required = false,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="form-field">
      <label>
        {label}
        {required ? <span> *</span> : null}
      </label>

      {children}
    </div>
  );
}

function ContactHeroFeature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="contact-hero-feature">
      <div className="contact-hero-feature-icon">
        {icon}
      </div>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function ContactBenefit({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="contact-benefit">
      <div className="contact-benefit-icon">
        {icon}
      </div>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function ClipboardIcon() {
  return (
    <svg
      width="45"
      height="45"
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

function TagIcon() {
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M20 13l-7 7-9-9V4h7l9 9z" />
      <circle cx="7" cy="7" r="1.5" />
    </svg>
  );
}