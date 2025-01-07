import React from 'react';
import { COMPANY_INFO } from '../../utils/constants';

const BusinessHours = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
      <ul className="space-y-2 text-gray-400">
        <li>Monday: {COMPANY_INFO.businessHours.weekdays}</li>
        <li>Tuesday: {COMPANY_INFO.businessHours.weekdays}</li>
        <li>Wednesday: {COMPANY_INFO.businessHours.weekdays}</li>
        <li>Thursday: {COMPANY_INFO.businessHours.weekdays}</li>
        <li>Friday: {COMPANY_INFO.businessHours.weekdays}</li>
        <li>Saturday: {COMPANY_INFO.businessHours.weekend}</li>
        <li>Sunday: {COMPANY_INFO.businessHours.weekend}</li>
      </ul>
    </div>
  );
};

export default BusinessHours;