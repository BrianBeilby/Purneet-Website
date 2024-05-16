"use client";
import React from "react";
import {
  FaPhone,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaCommentDots,
  FaBars,
  FaArrowRight,
  FaSpotify,
} from "react-icons/fa";
import { SiItunes } from "react-icons/si";
import { PiApplePodcastsLogoLight } from "react-icons/pi";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div id="top">
      {/* <header className="header">
        <div className="header-bottom bg-white shadow-md py-4">
          <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="logo text-2xl font-bold">
              Barber<span className="text-gray-600">Hair Salon</span>
            </a>
            <nav className="navbar">
              <ul className="navbar-list flex space-x-6">
                <li className="navbar-item">
                  <a
                    href="#home"
                    className="navbar-link text-gray-800 hover:text-blue-500"
                  >
                    Home
                  </a>
                </li>
                <li className="navbar-item">
                  <a
                    href="#services"
                    className="navbar-link text-gray-800 hover:text-blue-500"
                  >
                    Services
                  </a>
                </li>
                <li className="navbar-item">
                  <a
                    href="#pricing"
                    className="navbar-link text-gray-800 hover:text-blue-500"
                  >
                    Pricing
                  </a>
                </li>
                <li className="navbar-item">
                  <a
                    href="#gallery"
                    className="navbar-link text-gray-800 hover:text-blue-500"
                  >
                    Gallery
                  </a>
                </li>
                <li className="navbar-item">
                  <a
                    href="#appointment"
                    className="navbar-link text-gray-800 hover:text-blue-500"
                  >
                    Appointment
                  </a>
                </li>
                <li className="navbar-item">
                  <a
                    href="#"
                    className="navbar-link text-gray-800 hover:text-blue-500"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <a
              href="#"
              className="btn bg-blue-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-600"
            >
              <span>Appointment</span>
              <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </header> */}

      <div>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-r from-orange-400 to-purple-800 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">The Purneet Podcast</h1>
            <p className="text-xl mb-8">
              Please stop what you&apos;re doing and watch this podcast right
              now.
            </p>
            <div className="flex justify-center space-x-4">
              <a title="Itunes" className="text-3xl hover:text-gray-500" href="#">
                <SiItunes />
              </a>
              <a title="Spotify" className="text-3xl hover:text-gray-500" href="#">
                <FaSpotify />
              </a>
              <a title="Youtube" className="text-3xl hover:text-gray-500" href="#">
                <FaYoutube />
              </a>
              <a title="Apple Podcasts" className="text-3xl hover:text-gray-500" href="#">
                <PiApplePodcastsLogoLight />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-black">Podcast Episodes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-xl font-bold">Episode 143</h3>
                <p>WordPress vs Wix & the Fight Against Fake News</p>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-xl font-bold">Episode 143</h3>
                <p>WordPress vs Wix & the Fight Against Fake News</p>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-xl font-bold">Episode 143</h3>
                <p>WordPress vs Wix & the Fight Against Fake News</p>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-xl font-bold">Episode 143</h3>
                <p>WordPress vs Wix & the Fight Against Fake News</p>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-xl font-bold">Episode 143</h3>
                <p>WordPress vs Wix & the Fight Against Fake News</p>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-xl font-bold">Episode 143</h3>
                <p>WordPress vs Wix & the Fight Against Fake News</p>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-xl font-bold">Episode 143</h3>
                <p>WordPress vs Wix & the Fight Against Fake News</p>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-xl font-bold">Episode 143</h3>
                <p>WordPress vs Wix & the Fight Against Fake News</p>
              </div>
              <div className="bg-gray-900 p-4 rounded">
                <h3 className="text-xl font-bold">Episode 143</h3>
                <p>WordPress vs Wix & the Fight Against Fake News</p>
              </div>
              {/* Add more episodes here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
