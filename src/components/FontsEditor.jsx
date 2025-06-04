import React, { useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const fontOptions = [
  'Caladea', 'Bitter', 'Poppins', 'Brawler', 'Roboto',
  'Rokkitt', 'Rubik', 'Enriqueta', 'Fira Sans', 'Lato',
  'Open Sans', 'Montserrat', 'Oswald', 'Merriweather',
  'Nunito', 'Raleway', 'Ubuntu', 'PT Sans', 'Dancing Script',
  'Indie Flower', 'Work Sans', 'Playfair Display', 'Josefin Sans',
  'Muli', 'Quicksand', 'Lora', 'Pacifico', 'Archivo',
  'Comfortaa', 'Arvo', 'Bebas Neue', 'Cairo', 'Exo 2',
];


const fontSections = [
  'Top Menu Fonts',
  'Header Fonts',
  'Content Fonts',
  'Custom Fonts',
  'Typography',
];

const loadFonts = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href =
    'https://fonts.googleapis.com/css2?' +
    fontOptions.map((font) => `family=${font.replace(/ /g, '+')}`).join('&') +
    '&display=swap';
  document.head.appendChild(link);
};


export default function FontEditor() {
  const [fonts, setFonts] = useState(() =>
    fontSections.reduce((acc, section) => {
      acc[section] = 'Caladea';
      return acc;
    }, {})
  );
  const [search, setSearch] = useState('');
  const [activeSection, setActiveSection] = useState(fontSections[0]);

  useEffect(() => {
    loadFonts();
  }, []);

  const filteredFonts = fontOptions.filter((font) =>
    font.toLowerCase().includes(search.toLowerCase())
  );

  const handleFontSelect = (font) => {
    setFonts((prev) => ({
      ...prev,
      [activeSection]: font,
    }));
  };

  return (
    <div className="h-full p-4 bg-gray-800 text-white space-y-4 overflow-y-auto">
      {/* Title */}
      <div className="text-2xl font-semibold">Custom</div>

      {/* Tip Box */}
      <div className="bg-yellow-100 text-yellow-900 text-sm rounded-md p-4 shadow">
        <strong>Tip:</strong> To keep your design smooth and clean, do not use more than 2–3 different fonts.
      </div>

      {/* Collapsible Font Sections */}
      {fontSections.map((section) => (
        <Disclosure key={section} defaultOpen={section === 'Top Menu Fonts'}>
          {({ open }) => (
            <div className="bg-white rounded-md shadow overflow-hidden">
              <Disclosure.Button
                className="flex justify-between items-center w-full px-4 py-2 text-sm font-semibold bg-gray-800 text-white hover:bg-gray-700"
                onClick={() => setActiveSection(section)}
              >
                <span>{section}</span>
                <ChevronUpIcon className={`${open ? 'rotate-180' : ''} h-5 w-5`} />
              </Disclosure.Button>

              <Disclosure.Panel className="bg-gray-100 text-gray-800 p-4">
                <div className="mb-2 text-sm">
                  <strong>Selected:</strong>{' '}
                  <span className="italic" style={{ fontFamily: fonts[section] }}>
                    {fonts[section]}
                  </span>
                </div>

                <input
                  type="text"
                  placeholder="Search Fonts"
                  className="w-full px-3 py-2 mb-3 rounded bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-64 overflow-y-auto">
                  {filteredFonts.map((font) => (
                    <div
                      key={font}
                      onClick={() => handleFontSelect(font)}
                      className={`cursor-pointer p-2 rounded bg-white border hover:bg-gray-200 relative text-center`}
                      style={{ fontFamily: `'${font}', sans-serif` }}
                    >
                      {font}
                      {fonts[section] === font && (
                        <CheckCircleIcon className="absolute top-1 right-1 h-5 w-5 text-green-500" />
                      )}
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
