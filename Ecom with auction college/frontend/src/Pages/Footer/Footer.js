import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font bottom-0 left-0 w-full">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            to="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <span className="ml-3 text-2xl font-bold">
              <span className="text-cyan-500">Ecom</span>Bidding
            </span>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            Group G-29
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a href="https://forms.gle/tAFVqQLcPdNU1vW88" target="_blank">Want to be a Seller</a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
