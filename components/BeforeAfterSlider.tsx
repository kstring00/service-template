"use client";

import { useState } from "react";
import type { BeforeAfter } from "@/types/site";

export function BeforeAfterSlider({ item }: { item: BeforeAfter }) {
  const [position, setPosition] = useState(52);

  return (
    <div className="ba-card">
      <div className="ba-visual">
        <img className="ba-image ba-before" src={item.before} alt={`Before: ${item.title}`} />
        <div className="ba-after-wrap" style={{ width: `${position}%` }}>
          <img className="ba-image ba-after" src={item.after} alt={`After: ${item.title}`} />
        </div>
        <div className="ba-divider" style={{ left: `${position}%` }} aria-hidden="true"><span>↔</span></div>
        <span className="ba-label ba-label-before">Before</span>
        <span className="ba-label ba-label-after">After</span>
        <input
          className="ba-range"
          type="range"
          min="8"
          max="92"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Drag to compare before and after"
        />
      </div>
      <div className="ba-copy">
        <span className="kicker">{item.category}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
