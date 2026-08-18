import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="sleeper-footer">
      <div className="sleeper-footer-inner">

        {/* BRAND */}
        <div className="sleeper-footer-brand">
          <a href="/">
            <img
              src="/images/logo/sleeper-sales-logo.png"
              alt="Sleeper Sales"
            />
          </a>

          <p>
            Supplying premium quality treated
            <br />
            timber sleepers for all your projects,
            <br />
            big or small.
          </p>

          <div className="sleeper-footer-socials">
            <a
              href="https://www.facebook.com/railwaysleepersales/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <span className="facebook-symbol">f</span>
            </a>

            <a
              href="https://wa.me/27729529150?text=Hi%20Sleeper%20Sales,%20I%20would%20like%20to%20chat%20with%20sales."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <span className="whatsapp-symbol">◔</span>
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="sleeper-footer-column">
          <h3>QUICK LINKS</h3>

          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/grades">Grades</a>
          <a href="/about">About Us</a>
          <a href="/gallery">Gallery</a>
          <a href="/delivery">Delivery</a>
          <a href="/contact">Contact Us</a>
        </div>

        {/* PRODUCTS */}
        <div className="sleeper-footer-column">
          <h3>PRODUCTS</h3>

          <a href="/products/all">2.4m Sleepers</a>
          <a href="/products/all">2.6m Sleepers</a>
          <a href="/products/all">3.0m Sleepers</a>
          <a href="/products/all">3.6m Sleepers</a>
          <a href="/products/all">4.2m Sleepers</a>
          <a href="/products/all">4.8m Sleepers</a>
          <a href="/products/all">5.4m Sleepers</a>
          <a href="/products/all">6.0m Sleepers</a>
        </div>

        {/* GRADES */}
        <div className="sleeper-footer-column">
          <h3>GRADES</h3>

          <a href="/grades">Grade A+</a>
          <a href="/grades">Grade A</a>
          <a href="/grades">Grade B+</a>
          <a href="/grades">Grade B</a>
          <a href="/grades">Grade C+</a>
          <a href="/grades">Grade C-</a>
        </div>

        {/* CONTACT */}
        <div className="sleeper-footer-column sleeper-footer-contact">
          <h3>CONTACT US</h3>

          <a href="tel:0126645808">
            <Phone />
            <span>012 664 5808</span>
          </a>

          <a href="tel:0829529150">
            <Phone />
            <span>082 952 9150</span>
          </a>

          <a href="mailto:jaymel@mweb.co.za">
            <Mail />
            <span>jaymel@mweb.co.za</span>
          </a>

          <a href="mailto:Sleepersoultionsza@gmail.com">
            <Mail />
            <span>Sleepersoultionsza@gmail.com</span>
          </a>

          <div>
            <MapPin />
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
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="sleeper-footer-bottom">
        <span>© 2026 Sleeper Sales. All Rights Reserved.</span>
        <span>Designed by Your Web Partner</span>
      </div>
    </footer>
  );
}