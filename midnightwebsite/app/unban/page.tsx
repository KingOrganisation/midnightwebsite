export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center p-10">

      <div className="glass rounded-3xl p-10 w-full max-w-3xl">

        <h1 className="text-4xl font-bold mb-6">
          Richiesta Unban
        </h1>

        <form className="space-y-5">

          <textarea
            className="w-full p-4 rounded-xl bg-black/30 h-40"
            placeholder="Spiega perché vuoi essere sbannato"
          />

          <button className="bg-cyan-600 px-6 py-4 rounded-xl">
            Invia richiesta
          </button>

        </form>
      </div>
    </main>
  );
}