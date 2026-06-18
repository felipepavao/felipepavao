/**
 * felipepavao.com — Homepage
 *
 * Design: Editorial / Sales Letter
 * Layout: max-w-[640px] centered column, white bg
 * Typography: Lora (body), Cormorant Garamond (display), Inter (labels)
 *
 * Content: placeholder — to be filled in.
 */

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[640px] px-5 pt-8 pb-16 md:pt-12 md:pb-24">

      {/* ── HEADER ── */}
      <header>
        <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.22em] text-ink-900 border-t border-b border-ink-300 py-3 text-center mb-8">
          {/* eyebrow — ex: "Consultor · Escritor · Professor" */}
          &nbsp;
        </p>

        <h1 className="font-body text-[30px] sm:text-5xl font-normal leading-[1.15] text-ink-900 text-center">
          {/* headline principal */}
          &nbsp;
        </h1>

        {/* Foto + assinatura */}
        <div className="mt-10 flex justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="h-24 w-24 rounded-full border border-ink-200 bg-ink-100" />
            <span className="font-sans text-[10px] uppercase tracking-[0.12em] text-ink-500">
              Felipe Pavão
            </span>
          </div>
        </div>
      </header>

      <hr className="my-10 border-ink-200" />

      {/* ── ABERTURA ── */}
      <div className="space-y-5 font-body text-[17px] leading-[1.9] text-ink-800">
        {/* parágrafos de abertura */}
        <Placeholder lines={4} />
      </div>

      <hr className="my-8 sm:my-12 border-ink-200" />

      {/* ── SEÇÃO 1 ── */}
      <h2 className="font-body text-xl md:text-2xl font-bold leading-tight text-ink-900 mb-7">
        {/* título seção */}
        &nbsp;
      </h2>

      <div className="space-y-5 font-body text-[17px] leading-[1.9] text-ink-800">
        <Placeholder lines={3} />
      </div>

      {/* callout box */}
      <div className="mt-10 border-l-4 border-ink-800 bg-ink-50 pl-6 pr-5 py-5 space-y-3">
        <Placeholder lines={2} />
      </div>

      <hr className="my-8 sm:my-12 border-ink-200" />

      {/* ── SEÇÃO 2 ── */}
      <h2 className="font-body text-xl md:text-2xl font-bold leading-tight text-ink-900 mb-7">
        &nbsp;
      </h2>

      <div className="space-y-5 font-body text-[17px] leading-[1.9] text-ink-800">
        <Placeholder lines={4} />
      </div>

      <blockquote className="my-10 border-l-2 border-brand-600 pl-5 font-body text-[17px] font-semibold leading-[1.85] text-ink-900">
        {/* quote de destaque */}
        &nbsp;
      </blockquote>

      <hr className="my-8 sm:my-12 border-ink-200" />

      {/* ── SEÇÃO 3 ── */}
      <h2 className="font-body text-xl md:text-2xl font-bold leading-tight text-ink-900 mb-7">
        &nbsp;
      </h2>

      <div className="rounded-lg border border-ink-200 bg-gray-50 p-6 md:p-8 space-y-4">
        <Placeholder lines={3} />
      </div>

      <hr className="my-8 sm:my-12 border-ink-200" />

      {/* ── CTA / CONTATO ── */}
      <div className="bg-ink-900 p-8 md:p-10 text-center">
        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-6">
          {/* label acima do CTA */}
          &nbsp;
        </p>
        <a
          href="#"
          className="inline-flex w-full justify-center sm:w-auto items-center gap-2 bg-ink-50 border border-ink-50 px-10 py-4 text-[13px] font-sans font-semibold uppercase tracking-[0.14em] text-ink-900 hover:bg-ink-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900"
        >
          {/* texto do botão */}
          —
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <hr className="my-8 sm:my-12 border-ink-200" />

      {/* ── ASSINATURA ── */}
      <div className="pb-8 space-y-1">
        <p className="font-body italic text-xl text-ink-700">— Felipe Pavão</p>
        <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-ink-400">
          {/* subtítulo */}
          &nbsp;
        </p>
      </div>

    </main>
  )
}

/**
 * Placeholder visual — linhas de esqueleto enquanto o conteúdo não chega.
 * Remove quando preencher o texto real.
 */
function Placeholder({ lines = 3 }) {
  return (
    <div className="space-y-3 animate-pulse">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 rounded bg-ink-200"
          style={{ width: i === lines - 1 ? '60%' : '100%' }}
        />
      ))}
    </div>
  )
}
