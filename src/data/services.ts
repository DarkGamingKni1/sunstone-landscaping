import { Flower2, Trees, Shovel, Sprout, Cloud, Home } from 'lucide-react';
import type { ServiceItem } from '../types';

export const services: ServiceItem[] = [
  {
    icon: Trees,
    title: 'Landscape Design',
    description: 'Custom landscape design solutions tailored to your property and preferences.'
  },
  {
    icon: Flower2,
    title: 'Garden Maintenance',
    description: 'Regular maintenance to keep your garden looking beautiful all year round.'
  },
  {
    icon: Shovel,
    title: 'Hardscaping',
    description: 'Professional installation of patios, walkways, and retaining walls.'
  },
  {
    icon: Sprout,
    title: 'Planting Services',
    description: 'Expert plant selection and installation for your garden.'
  },
  {
    icon: Cloud,
    title: 'Irrigation Systems',
    description: 'Installation and maintenance of efficient irrigation systems.'
  },
  {
    icon: Home,
    title: 'Outdoor Living',
    description: 'Creation of beautiful outdoor living spaces and entertainment areas.'
  }
];