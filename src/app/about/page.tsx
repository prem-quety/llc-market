export default function AboutPage() {
  return (
    <section className="container-padded py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">
          About LLC Market
        </h1>
        <p className="mt-6 text-lg text-neutral-700">
          We designed LLC Market for businesses that value clarity, compliance,
          and customer trust. This demo storefront showcases a premium corporate
          aesthetic you can adapt for services or product listings. The layout
          favors readability, confident whitespace, and quiet animations that
          whisper “we’re legit.”
        </p>
        <p className="mt-4 text-neutral-700">
          The stack is modern and boring on purpose: Next.js for performance and
          routing, Tailwind for consistent design, and a small component kit
          that keeps things elegant without bloat. Replace the placeholder copy
          with your offer, wire a form or CRM, and you’re ready for prospects.
        </p>
      </div>
    </section>
  );
}
