import React, { useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";

const items = ["messages", "notifications", "settings", "account"];

export default function AppDrawer() {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [highlight, setHighlight] = useState(null); // { x, width } or null

  // Ensure itemRefs length matches items
  itemRefs.current = items.map(
    (_, i) => itemRefs.current[i] ?? React.createRef()
  );

  // Recompute highlight position when window resizes (if currently highlighted)
  useLayoutEffect(() => {
    function handleResize() {
      if (!highlight?.index) return;
      const idx = highlight.index;
      const container = containerRef.current;
      const el = itemRefs.current[idx];
      if (!container || !el) return;
      const cRect = container.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      setHighlight({
        index: idx,
        x: r.left - cRect.left,
        width: r.width,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [highlight]);

  const onEnter = (idx) => {
    const container = containerRef.current;
    const el = itemRefs.current[idx];
    if (!container || !el) return;
    const cRect = container.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    setHighlight({
      index: idx,
      x: r.left - cRect.left,
      width: r.width,
    });
  };

  const onLeaveContainer = () => {
    setHighlight(null);
  };

  return (
    <div className="h-2/3 w-1/3 flex items-center justify-center">
      <div
        ref={containerRef}
        onMouseLeave={onLeaveContainer}
        className="relative w-[95%] h-16 flex items-center justify-between px-2 text-sm"
      >
        {/* Sliding Background */}
        {highlight && (
          <motion.div
            className="absolute h-[50%] rounded-sm bg-neutral-200"
            initial={false}
            animate={{
              x: highlight.x,
              width: highlight.width,
            }}
            transition={{ duration: 0.12, ease: "easeInOut" }}
            style={{ left: 0, pointerEvents: "none" }}
          />
        )}

        {/* Items */}
        {items.map((item, idx) => (
          <div
            key={item}
            ref={(el) => (itemRefs.current[idx] = el)}
            onMouseEnter={() => onEnter(idx)}
            className="relative z-10 px-2 py-1 rounded-sm cursor-pointer flex-0 w-24 flex items-center justify-center"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
