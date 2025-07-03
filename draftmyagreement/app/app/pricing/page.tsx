export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-8">
      <h1 className="text-5xl font-bold text-blue-700 mb-4">DraftMyAgreement</h1>
      <p className="text-lg text-gray-600 max-w-xl mb-6">
        AI-powered contract drafting tool for lawyers, startups, and businesses. Simple, fast, and accurate.
      </p>
      <div className="space-x-4">
        <a
          href="/pricing"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          See Pricing
        </a>
        <a
          href="/about"
          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-300 transition"
        >
          Learn More
        </a>
      </div>
    </main>
  )
}
