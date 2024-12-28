import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" bg-indigo-900 text-white ">
      <div className="flex justify-between items-center p-12 gap-8">
      <div className="flex justify-between gap-10 text-md ">
        <ul >
          <li className="text-2xl font-bold">Company</li><br />
          <li>About</li>
          <li>Blog</li>
          <li>How it Works</li>
        </ul>

        <ul className="">
          <li className="text-2xl font-bold">Products</li><br />
          <li>About</li>
          <li>Blog</li>
          <li>How it Works</li>
        </ul>
      </div>

      <div>
        <ul className="flex flex-row gap-2">
          <li><FaXTwitter /></li>
          <li><FaFacebook /></li>
          <li><FaSquareInstagram /></li>
          <li><FaLinkedin /></li>
          <li><FaYoutube /></li>
        </ul>
        <p>Terms and conditions</p>
        <p><span>&copy; 2024. All Rigths Reserved</span></p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
