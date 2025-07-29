"use client";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaymentIcon from "@mui/icons-material/Payment";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Container } from "@mui/material";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white pt-12 pb-6">
      {/* Top Subscription Bar */}
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 3,
        }}
      >
        <p className="text-sm text-gray-300 text-center md:text-left max-w-md">
          🎁 Get exclusive coupons, savings, and hot deals straight to your inbox.
        </p>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md border border-gray-400 text-sm w-full md:w-auto text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-300 transition">
            Subscribe
          </button>
        </div>
      </Container>

      {/* Middle Section */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 text-sm text-gray-400">
          <div>
            <h3 className="font-bold text-white mb-3">SUPPORT</h3>
            <ul className="space-y-2">
              <li>Track Order</li>
              <li>Returns & Exchange</li>
              <li>FAQs</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-3">COMPANY</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Career</li>
              <li>Collaboration</li>
              <li>Media</li>
              <li>Sitare Nation</li>
              <li>Blog</li>
              <li>Sitemap</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-3">STORES NEAR ME</h3>
            <ul className="space-y-2">
              <li>Udaipur</li>
              <li>Lucknow</li>
              <li>Ahmedabad</li>
              <li>Kota</li>
              <li>Mirzapur</li>
              <li>Bhilwara</li>
              <li>More...</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-3">LOCATION</h3>
            <p className="text-gray-400 leading-relaxed">
              support@Dinar-exchange.com
              <br />
              Techno Park California
              <br />
              IT Zone, USA – 313002
            </p>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col gap-4">
            <div>
              <h3 className="font-bold text-white mb-2">FOLLOW US</h3>
              <div className="flex gap-3 text-white text-2xl">
                <InstagramIcon />
                <FacebookIcon />
                <TwitterIcon />
                <YouTubeIcon />
                <PinterestIcon />
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white mb-2 mt-4">SECURE PAYMENTS</h3>
              <div className="flex gap-3 text-white text-xl">
                <CreditCardIcon />
                <PaymentIcon />
                <AccountBalanceIcon />
                <CreditCardIcon />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Section */}
      <Container maxWidth="lg">
        <div className="text-center text-xs text-gray-500 mt-10">
          © {new Date().getFullYear()} Sitare Wargi Folks Pvt Ltd. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
