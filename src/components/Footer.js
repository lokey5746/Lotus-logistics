import React from "react";
import logo from "../assets/img/logo.png";
import playstore from "../assets/img/playstore.png";
import appstore from "../assets/img/appstore.png";

function Footer() {
  return (
    <footer className="bg-footer">
      <div className="md:max-w-6xl mx-auto w-full py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-white">
          <div className="flex flex-col items-center space-y-4">
            <figure>
              <img src={logo} alt="" />
            </figure>
            <p className="text-center text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-xl font-semibold">Our Services</h2>
            <ul className="text-sm space-y-3">
              <li>Sea Freight</li>
              <li>Air Freight</li>
              <li>Warehousing</li>
              <li>Courier</li>
              <li>Land Freight</li>
            </ul>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <ul className="text-sm space-y-3 text-center">
              <li>(+977) 1234 5678</li>
              <li>www.lotuslogistics.com</li>
              <li>info@lotuslogistics.com</li>
            </ul>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-xl font-semibold text-center">
              Lotus Logistic App Coming soon!
            </h2>
            <ul className="text-sm space-y-3">
              <li className="bg-black px-8 py-3 rounded-md shadow-md">
                <a href="" className="flex items-center space-x-3">
                  <img src={playstore} alt="" />
                  <div>
                    <p>Get it on</p>
                    <p className="text-2xl">Google Play</p>
                  </div>
                </a>
              </li>
              <li className="bg-black px-8 py-3 rounded-md shadow-md">
                <a href="" className="flex items-center space-x-3">
                  <img src={appstore} alt="" />
                  <div>
                    <p>Get it on</p>
                    <p className="text-2xl">App Store</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
