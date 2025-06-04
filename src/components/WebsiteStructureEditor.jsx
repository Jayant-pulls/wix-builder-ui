import React, { useState } from "react";

const layouts = [
  { id: 1, name: "Classic" },
  { id: 2, name: "Centered" },
  { id: 3, name: "Sidebar" },
  { id: 4, name: "Minimal" },
];

export default function WebsiteEditor() {
  const [activeTab, setActiveTab] = useState("Structures");
  const [selectedLayout, setSelectedLayout] = useState("Classic");
  const structure = ["Home", "About", "Services", "Contact"];

  // Desktop Settings
  const [menuSize, setMenuSize] = useState("Big");
  const [fontStyle, setFontStyle] = useState("Bold");
  const [linkStyle, setLinkStyle] = useState("Underline");
  const [fontSize, setFontSize] = useState(14);
  const [spaceBetweenPages, setSpaceBetweenPages] = useState(3);
  const [pageWidth, setPageWidth] = useState(600); // px for preview width
  const [letterSpacing, setLetterSpacing] = useState(1);

  // Mobile Settings
  const [mobileWidth, setMobileWidth] = useState(80);
  const [mobileFontSize, setMobileFontSize] = useState(14);
  const [mobileLetterSpacing, setMobileLetterSpacing] = useState(1);
  const [mobileWordSpacing, setMobileWordSpacing] = useState(1);
  const [mobileLineHeight, setMobileLineHeight] = useState(1.5);
  const [mobileGap, setMobileGap] = useState(8);
  const [mobilePaddingTB, setMobilePaddingTB] = useState(16);
  const [mobilePaddingLR, setMobilePaddingLR] = useState(16);

  const [isStructureOpen, setStructureOpen] = useState(true);
  const [isMobileOpen, setMobileOpen] = useState(false);

  const handleSave = () => {
    console.log("Saved Settings:", {
      selectedLayout,
      menuSize,
      fontStyle,
      linkStyle,
      fontSize,
      spaceBetweenPages,
      pageWidth,
      letterSpacing,
      mobileWidth,
      mobileFontSize,
      mobileLetterSpacing,
      mobileWordSpacing,
      mobileLineHeight,
      mobileGap,
      mobilePaddingTB,
      mobilePaddingLR,
    });
  };

  // Computed styles for preview
  const fontWeight = fontStyle === "Bold" ? "font-bold" : fontStyle === "Italic" ? "italic" : "font-normal";
  const linkDecoration =
    linkStyle === "Underline" ? "underline" : linkStyle === "Italic" ? "italic" : "no-underline";

  const letterSp = `${letterSpacing}px`;
  const gap = `${spaceBetweenPages}px`;
  const width = `${pageWidth}px`;

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-white dark:bg-gray-900 rounded-md shadow-md text-gray-900 dark:text-white">
      {/* Tabs */}
      <div className="flex border-b border-gray-300 dark:border-gray-700 mb-4">
        {["Structures", "Custom"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-semibold ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 dark:text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Based on Tab */}
      {activeTab === "Structures" && (
        <>
          {/* Layout Selection */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Choose a Layout</label>
            <div className="flex flex-col space-y-4">
              {layouts.map((layout) => (
                <button
                  key={layout.id}
                  onClick={() => setSelectedLayout(layout.name)}
                  className={`p-4 rounded border text-left ${
                    selectedLayout === layout.name
                      ? "border-blue-600 ring-2 ring-blue-300 bg-blue-50 dark:bg-blue-900"
                      : "border-gray-300 bg-gray-50 dark:bg-gray-800"
                  }`}
                >
                  <div className="font-semibold text-lg">{layout.name}</div>
                  <div className="text-sm mt-1 text-gray-600 dark:text-gray-300">
                    {layout.name === "Classic" &&
                      "Logo left, horizontal menu right"}
                    {layout.name === "Centered" &&
                      "Logo center, menu below centered"}
                    {layout.name === "Sidebar" &&
                      "Vertical sidebar menu on left"}
                    {layout.name === "Minimal" &&
                      "Logo and hamburger menu only"}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Settings Accordion */}
          <div className="mb-6 border rounded-md border-gray-300 dark:border-gray-700">
            <button
              onClick={() => setStructureOpen(!isStructureOpen)}
              className="w-full flex justify-between items-center p-3 bg-gray-100 dark:bg-gray-800 font-medium text-left"
            >
              Website Structure Editor
              <span>{isStructureOpen ? "−" : "+"}</span>
            </button>
            {isStructureOpen && (
              <div className="p-4 space-y-4">
                <div>
                  <label className="block font-medium">Minimum Menu Size</label>
                  <select
                    value={menuSize}
                    onChange={(e) => setMenuSize(e.target.value)}
                    className="w-full p-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Big</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium">Header Font Style</label>
                  <select
                    value={fontStyle}
                    onChange={(e) => setFontStyle(e.target.value)}
                    className="w-full p-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option>Normal</option>
                    <option>Bold</option>
                    <option>Italic</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium">Header Link Style</label>
                  <select
                    value={linkStyle}
                    onChange={(e) => setLinkStyle(e.target.value)}
                    className="w-full p-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option>None</option>
                    <option>Underline</option>
                    <option>Italic</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium">Header Font Size</label>
                  <input
                    type="range"
                    min={10}
                    max={30}
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="text-right text-sm">{fontSize}px</div>
                </div>
                <div>
                  <label className="block font-medium">Space Between Pages</label>
                  <input
                    type="range"
                    min={0}
                    max={20}
                    value={spaceBetweenPages}
                    onChange={(e) => setSpaceBetweenPages(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="text-right text-sm">{spaceBetweenPages}px</div>
                </div>
                <div>
                  <label className="block font-medium">Page Width (Preview)</label>
                  <input
                    type="range"
                    min={300}
                    max={900}
                    value={pageWidth}
                    onChange={(e) => setPageWidth(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="text-right text-sm">{pageWidth}px</div>
                </div>
                <div>
                  <label className="block font-medium">Letter Spacing</label>
                  <input
                    type="range"
                    min={0}
                    max={10}
                    value={letterSpacing}
                    onChange={(e) => setLetterSpacing(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="text-right text-sm">{letterSpacing}px</div>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Preview */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Desktop Preview</h3>

            {selectedLayout === "Sidebar" ? (
              <div
                className="border rounded p-6 bg-gray-50 dark:bg-gray-800 flex"
                style={{ width }}
              >
                <nav
                  className={`flex flex-col justify-start ${fontWeight}`}
                  style={{ fontSize: `${fontSize}px`, letterSpacing: letterSp, gap }}
                >
                  <div className="mb-8 font-bold text-xl">Logo</div>
                  <ul className="flex flex-col space-y-2">
                    {structure.map((item) => (
                      <li
                        key={item}
                        className={`cursor-pointer hover:text-blue-600 ${linkDecoration} ${
                          menuSize === "Small"
                            ? "text-sm px-2"
                            : menuSize === "Medium"
                            ? "text-base px-3"
                            : "text-lg px-4"
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </nav>
                <main className="flex-1 ml-6 text-gray-700 dark:text-gray-300">
                  <h2 className="text-xl font-semibold mb-4">Page Content</h2>
                  <p>This is where your page content would be.</p>
                </main>
              </div>
            ) : (
              <div
                className={`border rounded p-6 bg-gray-50 dark:bg-gray-800 flex flex-col items-center ${
                  selectedLayout === "Centered" ? "text-center" : "text-left"
                }`}
                style={{ width }}
              >
                <header
                  className={`flex ${
                    selectedLayout === "Centered" ? "flex-col space-y-2" : "justify-between"
                  } items-center w-full mb-6 ${fontWeight}`}
                  style={{ fontSize: `${fontSize}px`, letterSpacing: letterSp }}
                >
                  <div className="font-bold text-xl">Logo</div>
                  {selectedLayout !== "Minimal" && (
                    <nav
                      className={`flex ${
                        selectedLayout === "Centered" ? "justify-center w-full" : "space-x-6"
                      }`}
                    >
                      {structure.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className={`cursor-pointer hover:text-blue-600 ${linkDecoration} ${
                            menuSize === "Small"
                              ? "text-sm"
                              : menuSize === "Medium"
                              ? "text-base"
                              : "text-lg"
                          }`}
                        >
                          {item}
                        </a>
                      ))}
                    </nav>
                  )}
                  {selectedLayout === "Minimal" && (
                    <button className="p-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                      ☰
                    </button>
                  )}
                </header>
                <main className="flex-1 w-full text-gray-700 dark:text-gray-300">
                  <h2 className="text-xl font-semibold mb-4">Page Content</h2>
                  <p>This is where your page content would be.</p>
                </main>
              </div>
            )}
          </div>
        </>
      )}

      {/* Custom Tab */}
      {activeTab === "Custom" && (
        <>
          {/* Mobile Settings Accordion */}
          <div className="mb-4 border rounded-md border-gray-300 dark:border-gray-700">
            <button
              onClick={() => setMobileOpen(!isMobileOpen)}
              className="w-full flex justify-between items-center p-3 bg-gray-100 dark:bg-gray-800 font-medium text-left"
            >
              Mobile Menu Design
              <span>{isMobileOpen ? "−" : "+"}</span>
            </button>
            {isMobileOpen && (
              <div className="p-4 space-y-4">
                <Slider label="Menu Width" value={mobileWidth} setValue={setMobileWidth} unit="%" min={50} max={100} />
                <Slider label="Font Size" value={mobileFontSize} setValue={setMobileFontSize} unit="px" min={10} max={30} />
                <Slider label="Letter Spacing" value={mobileLetterSpacing} setValue={setMobileLetterSpacing} unit="px" />
                <Slider label="Word Spacing" value={mobileWordSpacing} setValue={setMobileWordSpacing} unit="px" />
                <Slider label="Line Height" value={mobileLineHeight} setValue={setMobileLineHeight} unit="em" min={1} max={3} step={0.1} />
                <Slider label="Gap Between Links" value={mobileGap} setValue={setMobileGap} unit="px" min={0} max={30} />
                <Slider label="Padding Top/Bottom" value={mobilePaddingTB} setValue={setMobilePaddingTB} unit="px" min={0} max={50} />
                <Slider label="Padding Left/Right" value={mobilePaddingLR} setValue={setMobilePaddingLR} unit="px" min={0} max={50} />
              </div>
            )}
          </div>
        </>
      )}

      <button
        onClick={handleSave}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-500"
      >
        Save Settings
      </button>
    </div>
  );
}

// Reusable Slider component
const Slider = ({ label, value, setValue, unit = "px", min = 0, max = 20, step = 1 }) => (
  <div>
    <label className="block font-medium">{label}</label>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
      className="w-full"
    />
    <div className="text-right text-sm">
      {value}
      {unit}
    </div>
  </div>
);
