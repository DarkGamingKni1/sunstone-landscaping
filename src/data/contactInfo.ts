import { MapPin, Phone, Mail, Clock, X } from 'lucide-react';
import type { ContactInfo } from '../types';

export const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    title: 'Address',
    content: '62 Page Drive, Well ON L3C 6E4, Canada',
    link: 'https://maps.google.com/?q=62+Page+Drive,Well+ON+L3C+6E4,Canada'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '613-672-3398',
    link: 'tel:613-672-3398'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@sunstonelandscaping.net',
    link: 'mailto:contact@sunstonelandscaping.net'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon-Fri: 9:00 AM - 5:00 PM\nSat-Sun: Closed'
  },
  {
    icon: X,
    title: 'X.com',
    content: '@SunStone_LTD',
    link: 'https://x.com/SunStone_LTD'
  }
];