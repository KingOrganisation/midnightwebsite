export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center p-10">

      <div className="glass rounded-3xl p-10 w-full max-w-3xl">

        <h1 className="text-4xl font-bold mb-6">
          Suggerimenti
        </h1>

        <textarea
          className="w-full p-4 rounded-xl bg-black/30 h-40"
          placeholder="Scrivi il tuo suggerimento..."
        />

      </div>
    </main>
  );
}