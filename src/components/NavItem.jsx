import React, { useState, useRef, useEffect } from "react";
import SidePanel from "./SidePanel";
import FontsEditor from "./FontsEditor";
import ColorsEditor from "./ColorsEditor";
import FooterEditor from "./FooterEditor";
import HeaderEditor from "./HeaderEditor";
import WebsiteStructureEditor from "./WebsiteStructureEditor";

export default function NavItem({ label }) {
  const hasDropdown = label === "Design";
  const [open, setOpen] = useState(false);
  const [panelItem, setPanelItem] = useState(null);
  const ref = useRef();

  const dropdownItems = {
    Design: ["Colors", "Fonts", "Header", "Footer", "Website Structure"],
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubItemClick = (item) => {
    setPanelItem(item);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-3 py-2 text-white font-semibold hover:text-yellow-400 focus:outline-none"
      >
        {label}
        {hasDropdown && <span className="text-xs">▼</span>}
      </button>

      {/* Dropdown for desktop, full-screen overlay for mobile */}
      {hasDropdown && open && (
        <div>
          {/* Desktop dropdown */}
          <div className="hidden sm:block absolute left-0 mt-2 w-56 bg-slate-800 text-white rounded shadow-lg z-10 overflow-hidden">
            {dropdownItems[label].map((item) => (
              <button
                key={item}
                onClick={() => handleSubItemClick(item)}
                className="w-full text-left px-4 py-2 hover:bg-slate-700 cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile dropdown as full-screen panel */}
          <div className="sm:hidden fixed inset-0 bg-black bg-opacity-60 z-40 flex justify-center items-start pt-20">
            <div className="bg-slate-800 text-white rounded-lg shadow-xl w-11/12 max-w-sm">
              <div className="flex justify-between items-center px-4 py-3 border-b border-slate-700">
                <span className="text-lg font-semibold">{label}</span>
                <button onClick={() => setOpen(false)} className="text-sm hover:text-red-400">✕</button>
              </div>
              {dropdownItems[label].map((item) => (
                <button
                  key={item}
                  onClick={() => handleSubItemClick(item)}
                  className="w-full text-left px-4 py-3 hover:bg-slate-700 cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Side Panel for each dropdown item */}
      {panelItem && (
        <SidePanel title={panelItem} onClose={() => setPanelItem(null)}>
          {panelItem === "Fonts" && <FontsEditor />}
          {panelItem === "Colors" && <ColorsEditor />}
          {panelItem === "Header" && <HeaderEditor />}
          {panelItem === "Footer" && <FooterEditor />}
          {panelItem === "Website Structure" && <WebsiteStructureEditor />}
        </SidePanel>
      )}
    </div>
  );
}
