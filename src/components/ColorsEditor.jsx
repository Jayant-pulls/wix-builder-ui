import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const presetColors = [
  '#808080', '#A9A9A9', '#8B0000', '#D3D3D3', '#000000', '#556B2F', '#C0C0C0',
  '#A0522D', '#D2B48C', '#800080', '#FFD700', '#696969', '#FF8C00', '#708090',
  '#4B0082', '#8B4513', '#DC143C', '#00008B', '#008B8B', '#FAEBD7', '#FF0000',
  '#00FF00', '#FFFF00', '#9370DB', '#40E0D0', '#FFB6C1', '#FFA07A', '#778899',
  '#FFA500', '#ADD8E6', '#FFFACD', '#2F4F4F', '#FFFFF0', '#FF00FF', '#00FA9A',
  '#F5F5DC', '#000080', '#B22222', '#DB7093', '#800080', '#6A5ACD', '#4169E1',
];

const sectionKeys = ['Header', 'Footer', 'Text', 'Page Background'];
const layoutOptions = ['Layout 1', 'Layout 2', 'Layout 3', 'Layout 4', 'Layout 5'];

export default function ColorThemeCustomizer() {
  const [mainColor, setMainColor] = useState('#2f4f4f');
  const [customSections, setCustomSections] = useState(() =>
    sectionKeys.reduce((acc, key) => {
      acc[key] = { background: '#ffffff', text: '#000000' };
      return acc;
    }, {})
  );
  const [layout, setLayout] = useState('Layout 1');

  const updateSectionColor = (section, type, value) => {
    setCustomSections((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [type]: value,
      },
    }));
  };

  const headerStyle = {
    backgroundColor: customSections['Header'].background,
    color: customSections['Header'].text,
  };
  const footerStyle = {
    backgroundColor: customSections['Footer'].background,
    color: customSections['Footer'].text,
  };
  const contentStyle = {
    backgroundColor: customSections['Page Background'].background,
    color: customSections['Text'].text,
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Main Color</h2>
        <div className="grid grid-cols-7 gap-2">
          {presetColors.map((color, idx) => (
            <button
              key={idx}
              onClick={() => setMainColor(color)}
              className={`w-9 h-9 rounded-full border-2 focus:outline-none ${
                mainColor === color ? 'border-black' : 'border-gray-300'
              }`}
              style={{ backgroundColor: color }}
              aria-label={`Select main color ${color}`}
              type="button"
            />
          ))}
        </div>
      </div>

      {/* Collapsible Custom Colors Section */}
      <div className="w-full rounded-xl bg-white p-2">
        <Disclosure defaultOpen>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex w-full justify-between items-center px-4 py-2 
                bg-gray-800 text-white text-left text-sm font-semibold 
                rounded shadow mb-2 hover:bg-gray-700`}
              >
                <span>Custom Section Colors</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-700 max-h-[30vh] overflow-auto">
                {sectionKeys.map((section) => (
                  <div key={section} className="mb-4">
                    <div className="text-sm font-medium mb-1 text-gray-800">{section}</div>
                    <div className="flex gap-2 items-center">
                      <label className="text-xs">BG</label>
                      <input
                        type="color"
                        value={customSections[section].background}
                        onChange={(e) => updateSectionColor(section, 'background', e.target.value)}
                        className="w-8 h-8 border rounded"
                      />
                      <label className="text-xs">Text</label>
                      <input
                        type="color"
                        value={customSections[section].text}
                        onChange={(e) => updateSectionColor(section, 'text', e.target.value)}
                        className="w-8 h-8 border rounded"
                      />
                    </div>
                  </div>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>

      {/* Layout Options */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2 text-gray-700">Live Layout Preview</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {layoutOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setLayout(opt)}
              className={`px-3 py-1 rounded text-sm focus:outline-none ${
                layout === opt ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
              }`}
              type="button"
              aria-pressed={layout === opt}
            >
              {opt}
            </button>
          ))}
        </div>

        <div
          className="rounded shadow p-4 space-y-4 overflow-auto"
          style={{ backgroundColor: mainColor, minWidth: 0 }}
        >
          <div className="p-3 rounded" style={headerStyle}>
            <h2 className="text-lg font-bold">Header</h2>
          </div>

          {layout === 'Layout 1' && (
            <div className="p-6 rounded" style={contentStyle}>
              <p>Single column layout.</p>
            </div>
          )}
          {layout === 'Layout 2' && (
            <div className="flex gap-4 overflow-x-auto">
              <div className="w-1/3 min-w-[120px] p-4 rounded" style={contentStyle}>
                Sidebar
              </div>
              <div className="w-2/3 min-w-[200px] p-4 rounded" style={contentStyle}>
                Main Content
              </div>
            </div>
          )}
          {layout === 'Layout 3' && (
            <div className="grid grid-cols-3 gap-4 overflow-x-auto">
              <div className="col-span-2 min-w-[200px] p-4 rounded" style={contentStyle}>
                Wide Content
              </div>
              <div className="min-w-[120px] p-4 rounded" style={contentStyle}>
                Side Info
              </div>
            </div>
          )}
          {layout === 'Layout 4' && (
            <div className="grid grid-cols-2 gap-4 overflow-x-auto">
              <div className="min-w-[150px] p-4 rounded" style={contentStyle}>
                Left Block
              </div>
              <div className="min-w-[150px] p-4 rounded" style={contentStyle}>
                Right Block
              </div>
            </div>
          )}
          {layout === 'Layout 5' && (
            <div className="space-y-2">
              <div className="p-3 rounded" style={contentStyle}>
                Section 1
              </div>
              <div className="p-3 rounded" style={contentStyle}>
                Section 2
              </div>
              <div className="p-3 rounded" style={contentStyle}>
                Section 3
              </div>
            </div>
          )}

          <div className="p-3 rounded" style={footerStyle}>
            <h4 className="text-sm">Footer Area</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
