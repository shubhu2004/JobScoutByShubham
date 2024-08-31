// eslint-disable-next-line no-unused-vars
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Job Scout</h2>
            <p className="text-sm">© 2024 JobScout Pvt.Ltd. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/" className="hover:text-gray-400" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82V14.706H9.692v-3.578h3.128V8.408c0-3.1 1.893-4.787 4.657-4.787 1.325 0 2.463.1 2.794.144v3.238l-1.918.001c-1.503 0-1.794.715-1.794 1.762v2.31h3.587l-.468 3.578h-3.119V24h6.116C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.407 0 22.676 0z" /></svg>
            </a>
            <a href="https://github.com/shubhu2004" className="hover:text-gray-400" aria-label="GitHub">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.627 0-12 5.373-12 12 0 5.304 3.438 9.801 8.205 11.387.6.111.82-.261.82-.577 0-.287-.011-1.243-.017-2.244-3.338.724-4.043-1.604-4.043-1.604-.546-1.384-1.333-1.754-1.333-1.754-1.086-.743.083-.728.083-.728 1.202.085 1.834 1.233 1.834 1.233 1.067 1.83 2.8 1.301 3.48.995.108-.774.418-1.301.76-1.601-2.665-.303-5.467-1.333-5.467-5.933 0-1.313.467-2.384 1.236-3.22-.124-.303-.536-1.527.117-3.176 0 0 1.007-.322 3.303 1.227a11.54 11.54 0 013.003-.403c1.017.004 2.042.138 3.003.403 2.296-1.549 3.303-1.227 3.303-1.227.653 1.649.241 2.873.118 3.176.77.836 1.236 1.907 1.236 3.22 0 4.608-2.807 5.63-5.475 5.926.431.371.815 1.102.815 2.222 0 1.606-.014 2.896-.014 3.287 0 .316.218.694.825.577C20.565 22.1 24 17.503 24 12.297c0-6.627-5.373-12-12-12z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/thakurshubham2004/" className="hover:text-gray-400" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
