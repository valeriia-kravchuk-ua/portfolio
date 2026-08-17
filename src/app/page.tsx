export default function Home() {
  return (
      <main
          style={{
            minHeight: '100vh',
            background: '#10070D',
            color: '#FFFFFF',
            padding: '80px',
          }}
      >
        <h1 className="heading-display">
          Neue Machina — Heading
        </h1>

        <p className="text-subtitle ">
          Telegraf — Body text
        </p>

        <button className="text-small">
          Space Grotesk — UI
        </button>
      </main>
  );
}