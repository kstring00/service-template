"use client";

import { useCallback, useId, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { imageAttrs } from "@/lib/images";
import { track } from "@/lib/tracking";
import type { BeforeAfterPair } from "@/types/site";

const MIN = 4;
const MAX = 96;

/**
 * Before/after comparison. Pointer drag anywhere on the image, keyboard arrows
 * on the handle, and a screen-reader label describing how much of the "after"
 * is showing. Both images render without JavaScript (after is simply clipped).
 */
export function BeforeAfterSlider({ pair, eager = false }: { pair: BeforeAfterPair; eager?: boolean }) {
  const [position, setPosition] = useState(50);
  const frameRef = useRef<HTMLDivElement>(null);
  const tracked = useRef(false);
  const labelId = useId();

  const before = imageAttrs(pair.before, "(min-width: 900px) 60vw, 100vw");
  const after = imageAttrs(pair.after, "(min-width: 900px) 60vw, 100vw");

  const recordInteraction = useCallback(() => {
    if (tracked.current) return;
    tracked.current = true;
    track("slider_interaction", { pair: pair.id });
  }, [pair.id]);

  const moveTo = useCallback((clientX: number) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(MAX, Math.max(MIN, pct)));
  }, []);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    moveTo(event.clientX);
    recordInteraction();
  };
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.buttons === 0 && event.pointerType === "mouse") return;
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
    moveTo(event.clientX);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = event.shiftKey ? 10 : 2;
    let next = position;
    if (event.key === "ArrowLeft" || event.key === "ArrowDown") next = position - step;
    else if (event.key === "ArrowRight" || event.key === "ArrowUp") next = position + step;
    else if (event.key === "Home") next = MIN;
    else if (event.key === "End") next = MAX;
    else return;
    event.preventDefault();
    setPosition(Math.min(MAX, Math.max(MIN, next)));
    recordInteraction();
  };

  const afterPct = Math.round(position);

  return (
    <figure className="ba">
      <div
        className="ba-frame"
        ref={frameRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        style={{ ["--pos" as string]: `${position}%` }}
      >
        <img className="ba-img ba-img-before" {...before} alt={pair.beforeAlt} loading={eager ? "eager" : "lazy"} decoding="async" draggable={false} />
        <img className="ba-img ba-img-after" {...after} alt={pair.afterAlt} loading={eager ? "eager" : "lazy"} decoding="async" draggable={false} />
        <span className="ba-tag ba-tag-before" aria-hidden="true">Before</span>
        <span className="ba-tag ba-tag-after" aria-hidden="true">After</span>
        <div
          className="ba-handle"
          role="slider"
          tabIndex={0}
          aria-labelledby={labelId}
          aria-valuemin={MIN}
          aria-valuemax={MAX}
          aria-valuenow={afterPct}
          aria-valuetext={`${afterPct}% after, ${100 - afterPct}% before`}
          aria-orientation="horizontal"
          onKeyDown={onKeyDown}
        >
          <span className="ba-grip" aria-hidden="true">
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 1 1 7l6 6M15 1l6 6-6 6" /></svg>
          </span>
        </div>
      </div>
      <figcaption className="ba-caption">
        <strong id={labelId}>{pair.label}</strong>
        <span>{pair.caption}</span>
      </figcaption>
    </figure>
  );
}
