import { Link } from "react-router-dom";
import { FiInstagram, FiTwitter, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-border-soft bg-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* BRAND */}
          <div>
            <h3 className="text-lg font-medium mb-4">
              AURORA
            </h3>
            <p className="text-sm text-text-muted max-w-sm">
              Calm, minimal essentials designed to bring balance and comfort
              into your everyday lifestyle.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-sm font-medium mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <Link to="/" className="hover:text-text-main transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-text-main transition">
                  My account
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-text-main transition">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-medium mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-text-muted">
              <p className="flex items-center gap-2">
                <FiMail size={14} />
                support@aurora.com
              </p>
              <div className="flex gap-4 mt-4">
                <FiInstagram className="cursor-pointer hover:text-text-main transition" />
                <FiTwitter className="cursor-pointer hover:text-text-main transition" />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-border-soft mt-12 pt-6 flex flex-col sm:flex-row justify-between text-sm text-text-muted">
          <p>© {new Date().getFullYear()} AURORA. All rights reserved.</p>
          <p>Designed & built with calm ✦</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
