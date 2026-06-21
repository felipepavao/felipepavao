/**
 * felipepavao.com/oferta-base-pesquisa
 * Pesquisa pós-compra — Oferta Base
 *
 * 4 steps + progress bar. Ao enviar, salva no Airtable via /api/pesquisa
 * e redireciona para /oferta-base-obrigado.
 */

import { useState } from 'react'

const REDIRECT_URL = '/oferta-base-obrigado'

const q1Options = [
  { value: 'audiencia-sem-faturamento', label: 'Tenho audiência, publico bastante, mas o faturamento não acompanha' },
  { value: 'tentei-tudo',               label: 'Já tentei lançamento, lives, conteúdo orgânico — e continuo no mesmo lugar' },
  { value: 'vendas-inconsistentes',     label: 'Vendo às vezes, mas não tem consistência. Dependo de picos' },
  { value: 'comecando',                 label: 'Estou começando a monetizar e quero fazer do jeito certo desde o início' },
  { value: 'outro',                     label: 'Outro. Qual?' },
]

const q2Options = [
  { value: 'audiencia-em-dinheiro',    label: 'Transformar minha audiência em faturamento de verdade, não só curtidas' },
  { value: 'sem-lancamento',           label: 'Ter uma oferta simples que funcione sem lançamento mensal' },
  { value: 'sem-algoritmo',            label: 'Parar de depender de algoritmo e construir algo previsível' },
  { value: 'testar-novo-modelo',       label: 'Testar um jeito novo de monetizar sem criar produto do zero' },
  { value: 'outro',                    label: 'Outro. Qual?' },
]

const q3Options = [
  { value: 'nao-sei-criar-oferta',     label: 'Não sei criar uma oferta que meu público queira comprar' },
  { value: 'nao-sei-vender',           label: 'Sei o que oferecer mas não sei vender sem parecer chato' },
  { value: 'conversao-baixa',          label: 'Tenho produto mas a conversão é baixa — não sei o que consertar' },
  { value: 'audiencia-pulverizada',    label: 'Audiência pulverizada — seguidores de vários lugares que não convertem' },
  { value: 'primeira-venda',           label: 'Nunca vendi nada online. Quero a primeira venda' },
  { value: 'outro',                    label: 'Outro. Qual?' },
]

function RadioGroup({ name, options, selected, onSelect, outroValue, onOutroChange }) {
  return (
    <div className="space-y-2">
      {options.map(({ value, label }) => (
        <label
          key={value}
          className={`flex items-start gap-4 border px-6 py-4 cursor-pointer transition-colors ${
            selected === value
              ? 'border-ink-900 bg-gray-50'
              : 'border-ink-200 hover:border-ink-400 hover:bg-gray-50'
          }`}
        >
          <span className="mt-[3px] shrink-0 h-4 w-4 rounded-full border border-ink-300 flex items-center justify-center transition-colors">
            {selected === value && (
              <span className="h-2 w-2 rounded-full bg-ink-900" />
            )}
          </span>
          <span className="font-sans text-[16px] md:text-[17px] leading-[1.7] text-ink-800">{label}</span>
          <input
            type="radio"
            name={name}
            value={value}
            checked={selected === value}
            onChange={() => onSelect(value)}
            className="sr-only"
          />
        </label>
      ))}
      {selected === 'outro' && (
        <input
          type="text"
          placeholder="Pode falar..."
          maxLength={500}
          value={outroValue}
          onChange={(e) => onOutroChange(e.target.value)}
          className="w-full border border-ink-200 focus:border-ink-900 px-5 py-3 font-sans text-[16px] text-ink-900 focus:outline-none transition-colors placeholder:text-ink-400"
        />
      )}
    </div>
  )
}

function NavButtons({ onBack, onNext, nextLabel = 'Próxima pergunta', disabled = false }) {
  return (
    <div className={`mt-2 flex ${onBack ? 'items-center justify-between gap-4' : 'justify-end'}`}>
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-4 text-[13px] font-sans font-semibold uppercase tracking-[0.14em] text-ink-500 hover:text-ink-900 transition-colors cursor-pointer"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
          Anterior
        </button>
      )}
      <button
        type="button"
        onClick={onNext}
        disabled={disabled}
        className="inline-flex items-center gap-2 bg-ink-900 border border-ink-900 px-8 py-4 text-[13px] font-sans font-semibold uppercase tracking-[0.14em] text-white hover:bg-ink-700 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {nextLabel}
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
      </button>
    </div>
  )
}

export default function OfertaBasePesquisaPage() {
  const [step, setStep] = useState(0) // 0–3
  const [submitted, setSubmitted] = useState(false)
  const [countdown, setCountdown] = useState(10)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const [q1, setQ1]           = useState('')
  const [q1Outro, setQ1Outro] = useState('')
  const [q2, setQ2]           = useState('')
  const [q2Outro, setQ2Outro] = useState('')
  const [q3, setQ3]           = useState('')
  const [q3Outro, setQ3Outro] = useState('')
  const [email, setEmail]     = useState('')
  const [q4, setQ4]           = useState('')

  const totalSteps = 4
  const progress   = ((step + 1) / totalSteps) * 100

  function next() {
    setError('')
    setStep((s) => Math.min(s + 1, totalSteps - 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function back() {
    setError('')
    setStep((s) => Math.max(s - 1, 0))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function handleSubmit() {
    if (!email.trim()) {
      setError('Informe seu email para continuar.')
      return
    }
    setError('')
    setSubmitting(true)

    try {
      await fetch('/api/pesquisa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ q1, q1_outro: q1Outro, q2, q2_outro: q2Outro, q3, q3_outro: q3Outro, email, q4 }),
      })
    } catch (_) {
      // falha silenciosa — não bloquear acesso ao material
    }

    setSubmitting(false)
    setSubmitted(true)

    // countdown e redirect
    let count = 10
    const interval = setInterval(() => {
      count -= 1
      setCountdown(count)
      if (count <= 0) {
        clearInterval(interval)
        window.location.href = REDIRECT_URL
      }
    }, 1000)
  }

  return (
    <>
      {/* ── HEADER ESCURO ── */}
      <header className="w-full pt-8 md:pt-12 pb-10 px-5 bg-zinc-900 border-b border-white/10">
        <div className="mx-auto max-w-[860px] text-center">
          <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.22em] border-t border-b border-white/20 py-3 text-center mb-8 text-green-400">
            Oferta Base
          </p>
          <h1 className="font-sans text-[28px] sm:text-[40px] md:text-[52px] font-extrabold leading-[1.1] text-white tracking-[-0.03em]">
            Conta um pouco sobre você
          </h1>
          <p className="mt-5 mx-auto max-w-[520px] font-sans text-[17px] leading-[1.6] text-white/60">
            3 perguntas rápidas. Suas respostas me ajudam a entender melhor quem está do outro lado.
          </p>
        </div>
      </header>

      {/* ── BODY ── */}
      <main className="mx-auto max-w-[640px] px-5 pt-[48px] md:pt-[56px] pb-16 md:pb-24">

        {/* SUCCESS STATE */}
        {submitted ? (
          <div className="space-y-6 font-body text-[18px] leading-[1.9] text-ink-800 py-4">
            <p className="text-center text-[26px] font-bold leading-[1.3] text-ink-900">Recebido.</p>
            <p>Obrigado por compartilhar. Isso me ajuda a entender melhor quem você é e o que você precisa.</p>
            <hr className="border-ink-200" />
            <div className="space-y-4">
              <p className="font-sans text-[17px] text-ink-600">
                Seus materiais estão prontos. Em <strong className="text-ink-900">{countdown}</strong> segundos você será redirecionado.
              </p>
              <a
                href={REDIRECT_URL}
                className="inline-flex items-center gap-2 bg-green-500 border border-green-500 px-8 py-4 text-[13px] font-sans font-semibold uppercase tracking-[0.14em] text-white hover:bg-green-600 transition-colors"
              >
                Acessar materiais agora
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        ) : (
          <>
            {/* PROGRESS */}
            <div className="mb-8 md:mb-10">
              <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-ink-400 mb-3">
                Pergunta {step + 1} de {totalSteps}
              </p>
              <div className="h-px bg-ink-100 w-full overflow-hidden">
                <div
                  className="h-full bg-ink-900 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* STEP 1 */}
            {step === 0 && (
              <div className="space-y-6">
                <h2 className="font-sans text-xl md:text-2xl font-extrabold leading-[1.25] text-ink-900">
                  O que melhor descreve sua situação agora?
                </h2>
                <RadioGroup
                  name="q1"
                  options={q1Options}
                  selected={q1}
                  onSelect={setQ1}
                  outroValue={q1Outro}
                  onOutroChange={setQ1Outro}
                />
                {error && <p className="font-sans text-[14px] text-red-600">{error}</p>}
                <NavButtons
                  onNext={() => { if (!q1) { setError('Selecione uma opção para continuar.'); return } next() }}
                  disabled={!q1}
                />
              </div>
            )}

            {/* STEP 2 */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="font-sans text-xl md:text-2xl font-extrabold leading-[1.25] text-ink-900">
                  O que você quer resolver com a Oferta Base?
                </h2>
                <RadioGroup
                  name="q2"
                  options={q2Options}
                  selected={q2}
                  onSelect={setQ2}
                  outroValue={q2Outro}
                  onOutroChange={setQ2Outro}
                />
                {error && <p className="font-sans text-[14px] text-red-600">{error}</p>}
                <NavButtons
                  onBack={back}
                  onNext={() => { if (!q2) { setError('Selecione uma opção para continuar.'); return } next() }}
                  disabled={!q2}
                />
              </div>
            )}

            {/* STEP 3 */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="font-sans text-xl md:text-2xl font-extrabold leading-[1.25] text-ink-900">
                  O que trava suas vendas hoje?
                </h2>
                <RadioGroup
                  name="q3"
                  options={q3Options}
                  selected={q3}
                  onSelect={setQ3}
                  outroValue={q3Outro}
                  onOutroChange={setQ3Outro}
                />
                {error && <p className="font-sans text-[14px] text-red-600">{error}</p>}
                <NavButtons
                  onBack={back}
                  onNext={() => { if (!q3) { setError('Selecione uma opção para continuar.'); return } next() }}
                  disabled={!q3}
                />
              </div>
            )}

            {/* STEP 4 — email + livre */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="font-sans text-xl md:text-2xl font-extrabold leading-[1.25] text-ink-900">
                  Tem mais alguma coisa que queira compartilhar?
                </h2>

                <div className="space-y-1">
                  <label htmlFor="q-email" className="font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-500">
                    Seu email
                  </label>
                  <input
                    type="email"
                    id="q-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="voce@exemplo.com"
                    maxLength={320}
                    className="w-full border border-ink-200 focus:border-ink-900 px-5 py-3 font-sans text-[16px] text-ink-900 focus:outline-none transition-colors placeholder:text-ink-400"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="q4" className="font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-500">
                    Mensagem <span className="normal-case tracking-normal font-normal text-ink-400">(opcional)</span>
                  </label>
                  <textarea
                    id="q4"
                    rows={6}
                    maxLength={2000}
                    value={q4}
                    onChange={(e) => setQ4(e.target.value)}
                    placeholder="Compartilhe o que quiser."
                    className="w-full border border-ink-200 focus:border-ink-900 px-5 py-4 font-sans text-[16px] leading-[1.7] text-ink-800 focus:outline-none resize-none transition-colors placeholder:text-ink-400"
                  />
                </div>

                {error && <p className="font-sans text-[14px] text-red-600">{error}</p>}

                <div className="mt-2 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={back}
                    className="inline-flex items-center gap-2 px-6 py-4 text-[13px] font-sans font-semibold uppercase tracking-[0.14em] text-ink-500 hover:text-ink-900 transition-colors cursor-pointer"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
                    Anterior
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="inline-flex items-center gap-2 bg-green-500 border border-green-500 px-8 py-4 text-[13px] font-sans font-semibold uppercase tracking-[0.14em] text-white hover:bg-green-600 transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Enviando...' : 'Enviar'}
                    {!submitting && (
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                    )}
                  </button>
                </div>
              </div>
            )}
          </>
        )}
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
