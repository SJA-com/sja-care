const services = [
  { name: "SJA Hospitals", desc: "Full-service, AI-integrated hospitals delivering world-class patient care with robotic surgery and smart diagnostics.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { name: "SJA Clinics", desc: "Neighborhood clinics offering accessible, everyday healthcare powered by AI-assisted diagnosis and telemedicine.", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1m-4 0h4" },
  { name: "SJA Diagnostics", desc: "AI-powered diagnostic labs with cutting-edge imaging, pathology, and genomic testing for early disease detection.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
  { name: "SJA Pharmacy", desc: "Smart pharmacy chain with AI-driven inventory, personalized medication management, and rapid home delivery.", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
  { name: "SJA Emergency", desc: "24/7 emergency care with AI-optimized response times, smart ambulances, and rapid trauma treatment.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
  { name: "SJA Wellness", desc: "Preventive health programs, mental health support, and holistic wellness centers for long-term wellbeing.", icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" },
];

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/sja-logo-circle.png" alt="SJA Logo" width="40" height="40" className="rounded-full" />
            <span className="text-lg font-bold">Care</span>
          </div>
          <a href="https://sja-thedude.github.io/sja-ecosystem" className="text-xs font-mono text-foreground/50 hover:text-red-400 transition-colors">sja.com</a>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <p className="text-red-400 text-sm font-mono mb-4 tracking-wider uppercase">Healthcare Reimagined</p>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">
            Revolutionizing<br /><span className="text-red-400">Healthcare</span>
          </h1>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto mb-8">
            AI-powered hospitals, clinics, and diagnostics delivering world-class care. From emergency response to preventive wellness — healthcare for the future.
          </p>
          <a href="#services" className="inline-block bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
            Our Services
          </a>
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red-400 text-sm font-mono mb-3 tracking-wider uppercase">What We Offer</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Our <span className="text-red-400">Services</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.name} className="rounded-xl bg-surface border border-border hover:border-red-400/30 p-6 transition-all hover:bg-surface-2">
                <div className="w-12 h-12 rounded-xl bg-red-400/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">{s.name}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our <span className="text-red-400">Mission</span></h2>
          <p className="text-foreground/60 leading-relaxed">
            SJA Care is committed to making world-class healthcare accessible to everyone. Through AI-assisted diagnostics, robotic surgery, and smart patient care systems, we are building a future where technology and compassion work hand in hand to save lives and improve wellbeing.
          </p>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-foreground/40 text-sm">
            Part of the <a href="https://sja-thedude.github.io/sja-ecosystem" className="text-red-400 hover:underline">SJA Ecosystem</a>
          </p>
          <p className="text-foreground/30 text-xs mt-2">&copy; {new Date().getFullYear()} SJA Care. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
