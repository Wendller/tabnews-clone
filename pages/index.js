import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Postly — Em construção</title>
        <meta
          name="description"
          content="Postly — agregador de posts com ideias e aprendizados diários sobre vida adulta."
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <main className="wrap">
        <div className="card">
          <div className="logo">Postly</div>
          <h1>Postly está em construção</h1>
          <p className="lead">
            Em breve: um agregador de posts com ideias e aprendizados diários
            sobre a vida adulta — saúde mental, carreira, relacionamentos e mais
            houver pelo caminho. Estamos preparando um espaço simples e
            acolhedor para compartilhar experiências e reflexões.
          </p>

          <div className="meta">
            <span className="pill">🛠️ Construção</span>
            <span className="sep" />
            <small>Volte em breve — novidades chegando</small>
          </div>
        </div>
      </main>

      <style jsx>{`
        :root {
          --bg-1: #05060a;
          --bg-2: #0b1220;
          --card: #071428; /* cartão escuro */
          --card-text: #e6eef8; /* texto claro dentro do card */
          --glass: rgba(255, 255, 255, 0.03);
          --accent: #7c3aed; /* destaque roxo */
          --muted: #9aa4b2; /* texto secundário */
          --text: #e6eef8; /* texto principal */
          --subtle-border: rgba(255, 255, 255, 0.04);
        }

        .wrap {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 20px;
          background:
            radial-gradient(
              1200px 600px at 10% 10%,
              rgba(124, 58, 237, 0.06),
              transparent 10%
            ),
            linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);
          font-family:
            -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial;
          color: var(--text);
        }

        .card {
          width: 100%;
          max-width: 820px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.02),
            rgba(255, 255, 255, 0.01)
          );
          background-color: var(--card);
          color: var(--card-text);
          border: 1px solid var(--subtle-border);
          box-shadow:
            0 14px 50px rgba(2, 6, 23, 0.7),
            inset 0 1px 0 rgba(255, 255, 255, 0.02);
          padding: 48px;
          border-radius: 16px;
          text-align: center;
          backdrop-filter: blur(6px) saturate(120%);
        }

        .logo {
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--accent);
          font-size: 18px;
          margin-bottom: 12px;
        }

        h1 {
          margin: 0 0 14px 0;
          font-size: clamp(22px, 4vw, 34px);
          line-height: 1.05;
          color: var(--card-text);
        }

        .lead {
          margin: 0 auto 22px auto;
          max-width: 68ch;
          color: var(--muted);
          font-size: 16px;
        }

        .meta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 18px;
        }

        .pill {
          background: linear-gradient(
            90deg,
            rgba(124, 58, 237, 0.14),
            rgba(99, 102, 241, 0.08)
          );
          color: #fff;
          padding: 8px 12px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 13px;
          display: inline-flex;
          align-items: center;
          box-shadow: 0 8px 24px rgba(124, 58, 237, 0.06);
        }

        .sep {
          width: 1px;
          height: 18px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 1px;
        }

        small {
          color: #b8c2cf;
        }

        .pill {
          animation: pulse 3s infinite ease-in-out;
        }
        @keyframes pulse {
          0% {
            transform: translateY(0);
            box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.06);
          }
          70% {
            transform: translateY(-2px);
            box-shadow: 0 18px 40px rgba(12, 18, 34, 0.45);
          }
          100% {
            transform: translateY(0);
            box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.06);
          }
        }

        @media (max-width: 520px) {
          .card {
            padding: 28px;
          }
          .lead {
            font-size: 15px;
          }
        }
      `}</style>
    </>
  );
}
