export interface ContactInfo {
  icon: React.ComponentType;
  title: string;
  content: string;
  link?: string;
}

export interface ServiceItem {
  icon: React.ComponentType;
  title: string;
  description: string;
}

export interface GalleryImage {
  url: string;
  title: string;
}

export interface NavLink {
  name: string;
  to: string;
}