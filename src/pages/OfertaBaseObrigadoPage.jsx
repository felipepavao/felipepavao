/**
 * felipepavao.com/oferta-base-obrigado
 * Página de entrega — Oferta Base
 *
 * Estilo: contracorrente/workshop-proximo-passo-obrigado
 */

const entregaveis = [
  { num: '01', label: 'Playbook de Implementação',             url: '#playbook' },
  { num: '02', label: 'GPT #1 — Estrategista de Oferta Base', url: '#gpt-01' },
  { num: '03', label: 'GPT #2 — Escritor Persuasivo',         url: '#gpt-02' },
  { num: '04', label: 'GPT #3 — Carta de Vendas',             url: '#gpt-03' },
  { num: '05', label: 'GPT #4 — Gerador de Agentes GPT',      url: '#gpt-04' },
]

export default function OfertaBaseObrigadoPage() {
  return (
    <>
      {/* ── HEADER ESCURO ── */}
      <header className="w-full pt-8 md:pt-12 pb-10 px-5 bg-zinc-900 border-b border-white/10">
        <div className="mx-auto max-w-[860px] text-center">
          <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.22em] border-t border-b border-white/20 py-3 text-center mb-8 text-green-400">
            Oferta Base
          </p>
          <h1 className="font-sans text-[32px] sm:text-[48px] md:text-[60px] font-extrabold leading-[1.1] text-white tracking-[-0.03em]">
            Transforme Audiência em $$<br className="hidden sm:block" /> com GPTs
          </h1>
        </div>
      </header>

      {/* ── BODY ── */}
      <main className="mx-auto max-w-[640px] px-5 pt-[52px] md:pt-[60px] pb-16 md:pb-24">

        {/* CONFIRMAÇÃO */}
        <div className="space-y-5 font-sans text-[17px] md:text-[19px] leading-[1.9] text-ink-800">
          <p className="text-center text-[22px] font-bold leading-[1.5] text-ink-900">
            Compra confirmada.
          </p>
          <p>Tudo que você precisa para criar sua Oferta Base está aqui embaixo.</p>
          <p>Comece pelo Playbook. Ele mostra o passo a passo completo. Depois siga a ordem dos GPTs — cada um usa o que o anterior entregou.</p>
        </div>

        <hr className="my-10 border-ink-200" />

        {/* ENTREGÁVEIS */}
        <h2 className="font-sans text-xl md:text-2xl font-extrabold leading-[1.2] text-ink-900 mb-6">
          Acesse seus materiais:
        </h2>

        <div className="space-y-3">
          {entregaveis.map(({ num, label, url }) => (
            <a
              key={num}
              href={url}
              className="flex items-center justify-between w-full border border-ink-300 bg-white px-6 py-4 font-sans text-[16px] text-ink-900 hover:bg-gray-50 hover:border-ink-500 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900 focus-visible:ring-offset-2"
            >
              <div className="flex items-center gap-4">
                <span className="font-sans text-[11px] font-semibold tracking-[0.08em] text-ink-400">{num}</span>
                <span className="font-semibold">{label}</span>
              </div>
              <svg className="h-4 w-4 text-ink-400 group-hover:text-ink-700 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>

        <hr className="my-10 border-ink-200" />

        {/* ASSINATURA */}
        <div className="space-y-1 pb-4">
          <p className="font-sans italic text-xl text-ink-700">— Felipe Pavão</p>
          <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-ink-400">felipepavao.com</p>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-ink-200 py-6 px-5">
        <div className="mx-auto max-w-[640px] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-[11px] text-ink-400">© 2026 Felipe Pavão — Todos os Direitos Reservados</p>
          <div className="flex items-center gap-4">
            <a href="/politica-de-privacidade" className="font-sans text-[11px] text-ink-400 hover:text-ink-600 transition-colors">Política de Privacidade</a>
            <span className="text-ink-300">·</span>
            <a href="/termos-de-uso" className="font-sans text-[11px] text-ink-400 hover:text-ink-600 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </>
  )
}
