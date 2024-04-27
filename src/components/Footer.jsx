import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="text-white px-8 py-12" style={{ paddingBottom: '0.5rem', backgroundColor: 'rgb(9 9 9)' }}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0" style={{ padding: '0rem 4rem' }}>
        <div className="lg:w-1/4 text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul>
            <li className="mb-2 underline cursor-pointer">About Netflix</li>
            <li className="mb-2 underline cursor-pointer">Investor Relations</li>
            <li className="mb-2 underline cursor-pointer">Jobs</li>
            <li className="mb-2 underline cursor-pointer">Press Center</li>
          </ul>
        </div>
        <div className="lg:w-1/4 text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">Help</h3>
          <ul>
            <li className="mb-2 underline cursor-pointer">Help Center</li>
            <li className="mb-2 underline cursor-pointer">Account</li>
            <li className="mb-2 underline cursor-pointer">Redeem Gift Cards</li>
            <li className="mb-2 underline cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div className="lg:w-1/4 text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">Legal & Privacy</h3>
          <ul>
            <li className="mb-2 underline cursor-pointer">Terms of Use</li>
            <li className="mb-2 underline cursor-pointer">Privacy Statement</li>
            <li className="mb-2 underline cursor-pointer">Cookie Preferences</li>
            <li className="mb-2 underline cursor-pointer">Corporate Information</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 py-6 mt-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p>{`Copyright © ${currentYear} Netflix, Inc.`}</p>
          <ul className="flex mt-6 lg:mt-0 gap-6">
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Terms</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;