import { business } from "@/config/business";

/** Small persistent credit shown only on concept builds. Hidden on client sites. */
export function ConceptTag() {
  if (business.mode !== "concept") return null;
  return (
    <a className="concept-tag" href={business.concept.tagUrl} target="_blank" rel="noreferrer">
      {business.concept.tagText}
    </a>
  );
}
