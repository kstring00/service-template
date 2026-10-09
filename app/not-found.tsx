import { business, phoneHref } from "@/config/business";

export default function NotFound() {
  return (
    <main className="simple-page">
      <span className="kicker">Page not found</span>
      <h1>That page isn't here.</h1>
      <p>Try the home page, or call {business.shortName} at <a href={phoneHref}>{business.phoneDisplay}</a>.</p>
      <a className="button button-primary" href="/">Back to the home page</a>
    </main>
  );
}
