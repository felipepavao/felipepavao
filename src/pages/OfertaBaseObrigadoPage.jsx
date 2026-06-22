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
        <div className="space-y-5 font-body text-[18px] leading-[1.9] text-ink-800">
          <p className="text-center text-[22px] font-bold leading-[1.5] text-ink-900">
            Compra confirmada.
          </p>
          <p>Tudo que você precisa para criar sua Oferta Base está aqui embaixo.</p>
          <p>Comece pelo Playbook. Ele mostra o passo a passo completo. Depois siga a ordem dos GPTs — cada um usa o que o anterior entregou.</p>
        </div>

        <hr className="my-10 border-ink-200" />

        {/* ENTREGÁVEIS */}
        <h2 className="font-body text-[26px] md:text-[36px] font-bold leading-tight text-ink-900 mb-6">
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

        {/* BÔNUS — REVISÃO */}
        <div className="border-l-4 border-ink-800 pl-6 space-y-4">
          <p className="font-sans text-[13px] uppercase tracking-[0.18em] text-ink-500">Bônus — Primeiros 50 Compradores</p>
          <p className="font-body text-[18px] font-semibold leading-[1.85] text-ink-900">Revisão da Campanha por Vídeo</p>
          <div className="space-y-3 font-body text-[18px] leading-[1.9] text-ink-700">
            <p>Você montou sua campanha com os GPTs. Agora é só me mandar pra eu revisar antes de enviar pra sua audiência.</p>
            <p>É uma revisão por comprador, pra manter o processo rápido e bem feito.</p>
            <p>Como funciona:</p>
            <ol className="space-y-2 pl-1">
              {[
                'Use os GPTs pra gerar sua oferta, campanha e carta de vendas.',
                'Coloque tudo num Google Doc com acesso liberado pra quem tem o link.',
                'Me manda o link pelo WhatsApp.',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-sans text-[13px] font-semibold tracking-[0.08em] text-ink-400 shrink-0 mt-[3px]">{String(i + 1).padStart(2, '0')}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p>Em até 48 horas você recebe minha revisão em vídeo.</p>
          </div>
          <a
            href="https://wa.me/5521983695365"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 border border-green-500 px-8 py-4 text-[13px] font-sans font-semibold uppercase tracking-[0.14em] text-white hover:bg-green-600 transition-colors"
          >
            Mandar minha campanha para revisão
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </a>
        </div>

        <hr className="my-10 border-ink-200" />

        {/* ASSINATURA */}
        <div className="space-y-1 pb-4">
          <p className="font-body italic text-xl text-ink-700">— Felipe Pavão</p>
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
