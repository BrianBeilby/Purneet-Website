import React from 'react';
import { FaPhone, FaClock, FaFacebookF, FaTwitter, FaYoutube, FaCommentDots, FaBars, FaArrowRight } from 'react-icons/fa';


export default function Home() {
  return (
    <div id="top">
      <header className="header">
        <div className="header-bottom bg-white shadow-md py-4">
          <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="logo text-2xl font-bold">Barber<span className="text-gray-600">Hair Salon</span></a>
            <nav className="navbar">
              <ul className="navbar-list flex space-x-6">
                <li className="navbar-item"><a href="#home" className="navbar-link text-gray-800 hover:text-blue-500">Home</a></li>
                <li className="navbar-item"><a href="#services" className="navbar-link text-gray-800 hover:text-blue-500">Services</a></li>
                <li className="navbar-item"><a href="#pricing" className="navbar-link text-gray-800 hover:text-blue-500">Pricing</a></li>
                <li className="navbar-item"><a href="#gallery" className="navbar-link text-gray-800 hover:text-blue-500">Gallery</a></li>
                <li className="navbar-item"><a href="#appointment" className="navbar-link text-gray-800 hover:text-blue-500">Appointment</a></li>
                <li className="navbar-item"><a href="#" className="navbar-link text-gray-800 hover:text-blue-500">Contact</a></li>
              </ul>
            </nav>
            <a href="#" className="btn bg-blue-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-600">
              <span>Appointment</span>
              <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <main>
        <article>
          <section id="home" className="section hero bg-cover bg-center" style={{ backgroundImage: "url('./assets/images/hero-banner.jpg')" }}>
            <div className="container mx-auto text-center py-24">
              <h1 className="text-4xl font-bold text-white">Barbers & Hair Cutting</h1>
              <p className="text-lg text-white mt-4">Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua suspendisse ultrices gravida</p>
              <a href="#" className="btn bg-blue-500 text-white px-4 py-2 rounded-md mt-6 inline-flex items-center">
                <span>Explore Our Services</span>
                <FaArrowRight aria-hidden="true" />
              </a>
            </div>
          </section>

          <section id="services" className="section service py-24">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center">Service We Provide</h2>
              <p className="text-center text-gray-600 mt-4">Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <li className="service-card bg-white p-6 rounded-md shadow-md text-center">
                  <div className="card-icon text-4xl text-blue-500 mb-4"><i className="flaticon-salon"></i></div>
                  <h3 className="text-2xl font-bold mb-2"><a href="#" className="card-title">Hair Cutting Style</a></h3>
                  <p className="text-gray-600 mb-4">Sit amet consectetur adipisci elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <a href="#" className="card-btn text-blue-500"><FaArrowRight aria-hidden="true" /></a>
                </li>
                {/* Repeat service cards for other services */}
              </ul>
            </div>
          </section>

          <section id="pricing" className="section pricing bg-cover bg-center py-24" style={{ backgroundImage: "url('./assets/images/pricing-bg.jpg')" }}>
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold">Awesome Pricing Plan</h2>
              <p className="text-gray-600 mt-4">Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse</p>
              <div className="pricing-tab-container mt-12">
                <ul className="tab-filter flex justify-center space-x-6 mb-12">
                  <li><button className="filter-btn active text-blue-500" data-filter-btn="all"><i className="flaticon-beauty-salon"></i><p>All Pricing</p></button></li>
                  <li><button className="filter-btn text-gray-800" data-filter-btn="beauty-spa"><i className="flaticon-relax"></i><p>Beauty & Spa</p></button></li>
                  {/* Repeat filter buttons for other categories */}
                </ul>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <li data-filter="shaving" className="pricing-card bg-white p-6 rounded-md shadow-md">
                    <figure className="card-banner mb-4"><img src="./assets/images/pricing-1.jpg" alt="Hair Cutting & Fitting" className="w-24 h-24 rounded-full mx-auto" /></figure>
                    <div className="wrapper text-center">
                      <h3 className="text-2xl font-bold mb-2">Hair Cutting & Fitting</h3>
                      <p className="text-gray-600 mb-4">Clean & simple 30-40 minutes</p>s
                      <data className="card-price text-xl font-bold" value="89">$89</data>
                    </div>
                  </li>
                  {/* Repeat pricing cards for other services */}
                </ul>
              </div>
            </div>
          </section>

          <section id="gallery" className="section gallery py-24">
            <div className="container mx-auto">
              <div className="title-wrapper flex justify-between items-center mb-12">
                <div>
                  <h2 className="text-3xl font-bold">Latest Photo Gallery</h2>
                  <p className="text-gray-600 mt-4">Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore magna aliqua suspendisse</p>
                </div>
                <a href="#" className="btn bg-blue-500 text-white px-4 py-2 rounded-md inline-flex items-center">
                  <span>Explore More Gallery</span>
                  <FaArrowRight aria-hidden="true" />
                </a>
              </div>
              {/* Add your gallery content here */}
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
