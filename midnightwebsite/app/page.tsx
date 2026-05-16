import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function HomePage() {

  return (
    <main>

      <Navbar />

      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-32">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="glass rounded-3xl p-8">
            <h3 className="text-3xl font-bold mb-4">
              Community
            </h3>

            <p className="text-white/70">
              Eventi, gaming, networking,
              AI e supporto quotidiano.
            </p>
          </div>

          <div className="glass rounded-3xl p-8">
            <h3 className="text-3xl font-bold mb-4">
              Partnership
            </h3>

            <p className="text-white/70">
              Sistema partnership avanzato
              integrato con Discord.
            </p>
          </div>

          <div className="glass rounded-3xl p-8">
            <h3 className="text-3xl font-bold mb-4">
              MidNight AI
            </h3>

            <p className="text-white/70">
              Automazioni, AI tools
              e funzionalità premium.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}