import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import XLogo from '../icons/XLogo';
import { COMPANY_INFO } from '../../utils/constants';

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, content, link }) => (
  <div className="flex items-start">
    <div className="text-emerald-600 mt-1 flex-shrink-0">
      {icon}
    </div>
    <div className="ml-4">
      <h4 className="text-lg font-medium text-gray-900">{title}</h4>
      {link ? (
        <a
          href={link}
          className="text-gray-600 hover:text-emerald-600 transition-colors"
          target={title === 'Address' ? "_blank" : undefined}
          rel="noopener noreferrer"
        >
          {content}
        </a>
      ) : (
        <p className="text-gray-600 whitespace-pre-line">{content}</p>
      )}
    </div>
  </div>
);

const ContactInfo = () => {
  const contactItems = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      content: COMPANY_INFO.address,
      link: `https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address)}`
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      content: COMPANY_INFO.phone,
      link: `tel:${COMPANY_INFO.phone}`
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: COMPANY_INFO.email,
      link: `mailto:${COMPANY_INFO.email}`
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Business Hours',
      content: `Mon-Fri: ${COMPANY_INFO.businessHours.weekdays}\nSat-Sun: ${COMPANY_INFO.businessHours.weekend}`
    },
    {
      icon: <XLogo />,
      title: 'X',
      content: COMPANY_INFO.social.x.handle,
      link: COMPANY_INFO.social.x.url
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <ContactItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;