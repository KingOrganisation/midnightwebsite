export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center p-10">

      <div className="glass rounded-3xl p-10 w-full max-w-3xl">

        <h1 className="text-4xl font-bold mb-6">
          Candidature Staff
        </h1>

        <form className="space-y-5">

          <input
            className="w-full p-4 rounded-xl bg-black/30"
            placeholder="Nome Discord"
          />

          <textarea
            className="w-full p-4 rounded-xl bg-black/30 h-40"
            placeholder="Perché dovremmo sceglierti?"
          />

          <button className="bg-purple-600 px-6 py-4 rounded-xl">
            Invia candidatura
          </button>

        </form>
      </div>
    </main>
  );
}