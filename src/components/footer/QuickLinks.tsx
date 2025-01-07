import React from 'react';

const QuickLinks = () => {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-gray-400 hover:text-emerald-500 transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;