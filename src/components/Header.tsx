"use client";

import { Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* TOP CONTACT BAR */}
      <div className="wood-dark sleeper-topbar">
        <div className="sleeper-topbar-inner">
          <div className="sleeper-contact-items">
            <a href="tel:0126645808">
              <Phone size={12} />
              <span>012 664 5808</span>
            </a>

            <a href="mailto:jaymel@mweb.co.za">
              <Mail size={12} />
              <span>jaymel@mweb.co.za</span>
            </a>

            <a
  href="https://www.facebook.com/railwaysleepersales/"
  target="_blank"
  rel="noopener noreferrer"
  className="sleeper-facebook"
  aria-label="Facebook"
>
  <span className="facebook-symbol">f</span>
</a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header className="wood-header sleeper-header">
        <div className="sleeper-header-inner">

          {/* LOGO */}
          <a href="/" className="sleeper-header-logo">
            <img
              src="/images/logo/sleeper-sales-logo.png"
              alt="Sleeper Sales"
            />
          </a>

          {/* DESKTOP NAV */}
          <nav className="sleeper-desktop-nav">
            <a href="/">HOME</a>

            <a href="/products" className="active">
              PRODUCTS
            </a>

            <a href="/grades">GRADES</a>

            <a href="/about">ABOUT US</a>

            <a href="/gallery">GALLERY</a>

            <a href="/delivery">DELIVERY</a>

            <a href="/contact">CONTACT US</a>
          </nav>

          {/* QUOTE */}
          <a
            href="/quote"
            className="wood-outline-button sleeper-quote"
          >
            GET A QUOTE
          </a>

          {/* MOBILE BURGER */}
          <button
            type="button"
            className="sleeper-mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open navigation menu"
          >
            {menuOpen ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="sleeper-mobile-menu">
            <nav>
              <a href="/" onClick={() => setMenuOpen(false)}>
                HOME
              </a>

              <a
                href="/products"
                className="active"
                onClick={() => setMenuOpen(false)}
              >
                PRODUCTS
              </a>

              <a href="/grades" onClick={() => setMenuOpen(false)}>
                GRADES
              </a>

              <a href="/about" onClick={() => setMenuOpen(false)}>
                ABOUT US
              </a>

              <a href="/gallery" onClick={() => setMenuOpen(false)}>
                GALLERY
              </a>

              <a href="/delivery" onClick={() => setMenuOpen(false)}>
                DELIVERY
              </a>

              <a href="/contact" onClick={() => setMenuOpen(false)}>
                CONTACT US
              </a>

              <a
                href="/quote"
                className="sleeper-mobile-quote"
                onClick={() => setMenuOpen(false)}
              >
                GET A QUOTE
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}