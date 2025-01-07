import React from 'react';
import { Leaf } from 'lucide-react';
import { COMPANY_INFO } from '../utils/constants';
import BusinessHours from './footer/BusinessHours';
import QuickLinks from './footer/QuickLinks';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-xl font-bold">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-gray-400 mb-4">
              Creating beautiful outdoor spaces that inspire and delight. Professional landscaping
              services for residential and commercial properties.
            </p>
          </div>
          
          <QuickLinks />
          <BusinessHours />
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.fullName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;