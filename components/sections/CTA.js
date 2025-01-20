"use client";

const CTA = () => {
  return (
    <div className="relative bg-gradient-primary py-32">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
      <div className="relative container-custom text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Let&apos;s discuss how our AI solutions can help you achieve your goals
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center gap-2 bg-white text-[#2a3170] font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105 hover:bg-[#8ab4f8] hover:text-white group"
        >
          Get Started
          <svg className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CTA; 