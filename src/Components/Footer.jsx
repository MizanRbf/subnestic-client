import React from "react";
import { FaFacebook, FaLinkedin, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className=" bg-lime-950 text-white p-10">
      <div className="flex justify-between mb-10 max-w-[1200px] mx-auto">
        {/* Title & Description */}
        <nav className="items-start *:space-y-2">
          <h2 className="text-left mb-6">Subnestic</h2>
          {/* Contact Us */}
          <nav className="*:text-left *:text-xs *:md:text-sm">
            <p className="flex items-start gap-2">
              <FaLocationDot />
              16 sector,Cantonment,
              <br /> Uttara-1209 ,Dhaka-1214
            </p>
            <p className="flex items-center gap-2">
              <FaWhatsapp />
              +880-1319444554
            </p>
            <p className="flex items-center gap-2">
              <IoMail />
              mailus@gmail.com
            </p>
          </nav>
        </nav>
        {/* Page Routes */}
        <nav className="flex flex-col *:text-sm space-y-2 text-left">
          <h4 className="underline">Quick Links</h4>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/testimonials" className="link link-hover">
            Testimonials
          </Link>
          <Link to="/newsLetter" className="link link-hover">
            NewsLetter
          </Link>
          <Link to="/myProfile" className="link link-hover">
            My Profile
          </Link>
          <Link to="/orderHistory" className="link link-hover">
            Order History
          </Link>
        </nav>
        <nav className="flex flex-col *:text-sm *:space-y-2 text-left">
          <ul className="*:hover:underline">
            <h4 className="underline">Legal</h4>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">License</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">All Right Reserved</a>
            </li>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </nav>

        {/* Social Icon */}
        <nav className="flex flex-col justify-end gap-3">
          <ul className="flex text-xl md:text-2xl w-full justify-start space-x-4">
            <li>
              <a
                className="hover:text-primary"
                href="https://www.facebook.com/"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="https://x.com/">
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a
                className="hover:text-primary"
                href="https://www.linkedin.com/"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>

          {/* form */}
          <form className="w-full">
            <div className="join">
              <input
                type="text"
                placeholder="Email for NewsLetter"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </form>
        </nav>
      </div>
      <div className="text-xs md:text-sm">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Subnestic .com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
