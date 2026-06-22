/**
 * felipepavao.com — Homepage
 * Oferta Base — sales letter
 *
 * UX: Editorial / Sales Letter (livro pattern)
 * Layout: max-w-[640px] centered column, white bg
 */

const BUY_URL = 'https://pay.kiwify.com.br/kh1DUYC'
const PRICE_VALUE = 97

function createMetaEventId() {
  return typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2) + Date.now().toString(36)
}

function getMetaCookie(name) {
  if (typeof document === 'undefined') return null

  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`))
  return match ? decodeURIComponent(match[2]) : null
}

function setMetaCookie(name, value) {
  if (typeof document === 'undefined') return

  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=7776000; SameSite=Lax`
}

function getOrCreateFbp() {
  const existingFbp = getMetaCookie('_fbp')
  if (existingFbp) return existingFbp

  const fbp = `fb.1.${Date.now()}.${Math.floor(Math.random() * 1000000000)}`
  setMetaCookie('_fbp', fbp)
  return fbp
}

function getFbc() {
  if (typeof window === 'undefined') return null

  const existingFbc = getMetaCookie('_fbc')
  if (existingFbc) return existingFbc

  const fbclid = new URLSearchParams(window.location.search).get('fbclid')
  if (!fbclid) return null

  const fbc = `fb.1.${Date.now()}.${fbclid}`
  setMetaCookie('_fbc', fbc)
  return fbc
}

function trackInitiateCheckout() {
  if (typeof window === 'undefined') return

  const eventId = createMetaEventId()
  const customData = {
    value: PRICE_VALUE,
    currency: 'BRL',
    content_name: 'Oferta Base',
    content_type: 'product',
  }

  if (window.fbq) {
    window.fbq('track', 'InitiateCheckout', customData, { eventID: eventId })
  }

  fetch('/api/pixel', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    keepalive: true,
    body: JSON.stringify({
      event_name: 'InitiateCheckout',
      event_id: eventId,
      event_source_url: window.location.href,
      fbp: getOrCreateFbp(),
      fbc: getFbc(),
      custom_data: customData,
    }),
  }).catch(() => {})
}

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[640px] px-5 pt-8 pb-16 md:pt-12 md:pb-24">

      {/* ── EYEBROW + H1 ── */}
      <header>
        <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.22em] text-ink-900 border-t border-b border-ink-300 py-3 text-center mb-8">
          Para quem já tem audiência e quer transformar em $$
        </p>

        <h1 className="font-body text-[32px] md:text-[50px] font-normal leading-[1.2] text-ink-900 text-center">
          "Em menos de 30 minutos você cria sua Oferta Base e passa a transformar audiência em $$ com GPTs"
        </h1>


      </header>

      <hr className="my-10 border-ink-200" />

      {/* ── ABERTURA ── */}
      <div className="space-y-5 font-body text-[18px] leading-[1.9] text-ink-800">
        <p>
          Você já provou que sabe chamar atenção. Só te falta uma oferta simples que transforma essa audiência em $$ com GPTs.
        </p>
        <p>
          GPT é um assistente criado dentro do ChatGPT — a IA com mais de 100 milhões de usuários que sua audiência provavelmente já usa. Você cria uma vez. Seu cliente abre no ChatGPT, responde algumas perguntas e sai com resultado na mão.
        </p>
        <p>
          Diferente de PDF que ninguém abre ou curso que fica pela metade.
        </p>
        <p>
          Eu chamo isso de <strong className="text-ink-900">Oferta Base.</strong>
        </p>
      </div>

      <hr className="my-8 sm:my-12 border-ink-200" />

      {/* ── ISSO É PARA VOCÊ SE ── */}
      <div className="border-l-4 border-ink-800 bg-ink-50 pl-6 pr-5 py-5 space-y-4">
        <p className="font-body text-[18px] leading-[1.9] text-ink-800">
          Isso é para você se:
        </p>
        <ul className="space-y-3 pl-1">
          {[
            'Publica conteúdo com consistência, mas as vendas não acompanham.',
            'Sua inbox vive cheia de curiosos pedindo dica gratuita.',
            'Já tentou lives e pequenos lançamentos, atraiu likes e ficou sem fôlego para atender quem realmente importa.',
            'Quer monetizar sua galera sem criar um novo produto do zero.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 font-body text-[18px] leading-[1.8] text-ink-800">
              <span className="mt-[11px] h-1 w-3 shrink-0 bg-ink-600/70" />
              {item}
            </li>
          ))}
        </ul>
        <p className="font-body text-[18px] leading-[1.9] text-ink-800 pt-2">
          Se esse é você, continue lendo.
        </p>
      </div>

      <hr className="my-8 sm:my-12 border-ink-200" />

      {/* ── O PROBLEMA ── */}
      <h2 className="font-body text-[26px] md:text-[36px] font-bold leading-tight text-ink-900 mb-7 text-center">
        O Problema
      </h2>

      <div className="space-y-5 font-body text-[18px] leading-[1.9] text-ink-800">
        <p>
          Quem chega até mim normalmente já tentou lives, pequenos lançamentos e
          maratonas de conteúdo orgânico.
        </p>
        <p>
          O resultado é sempre o mesmo: muito engajamento, pouco faturamento, e a
          sensação de que precisa postar ainda mais para "um dia" vender.
        </p>
        <p>
          Nesse ciclo, sobra zero tempo para servir os clientes que realmente importam.
        </p>
      </div>

      <hr className="my-8 sm:my-12 border-ink-200" />

      {/* ── DE ONDE SURGIU ── */}
      <h2 className="font-body text-[26px] md:text-[36px] font-bold leading-tight text-ink-900 mb-7 text-center">
        De Onde Surgiu
      </h2>

      <blockquote className="border-l-2 border-brand-600 pl-5 font-body text-[18px] font-semibold leading-[1.85] text-ink-900">
        Ajudei um cliente a lançar uma Oferta Base para a lista que já tinha. Sem
        anúncios, sem novo produto. Ela foi o pontapé pra fechar mentorias de 7k com
        quem já o acompanhava há meses sem comprar nada.
      </blockquote>

      <hr className="my-8 sm:my-12 border-ink-200" />

      {/* ── O QUE VOCÊ VAI RECEBER ── */}
      <h2 className="font-body text-[26px] md:text-[36px] font-bold leading-tight text-ink-900 mb-8 text-center">
        O Que Você Vai Receber
      </h2>

      <p className="font-body text-[18px] leading-[1.9] text-ink-800 mb-6">
        Neste combo você recebe:
      </p>

      <ul className="space-y-6 mb-10">
        {[
          ['GPT #1 — Estrategista de Oferta Base', 'você descreve sua expertise, ele define a estrutura da oferta, quantos GPTs criar e qual vitória rápida entregar para seu cliente;'],
          ['GPT #2 — Escritor Persuasivo', 'gera emails e posts no seu tom, prontos para enviar;'],
          ['GPT #3 — Carta de Vendas', 'entrega a página de vendas sem precisar de designer ou copywriter — pronto pra colocar no Notion ou Google Docs;'],
          ['GPT #4 — Gerador de Agentes GPT', 'a partir da estratégia definida no GPT #1, ele cria o prompt do GPT que você vai entregar como Oferta Base para seus clientes;'],
          ['Playbook de Implementação', 'o passo a passo de como usar os 4 GPTs e colocar sua Oferta Base no ar hoje.'],
        ].map(([title, desc]) => (
          <li key={title} className="flex items-start gap-3">
            <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink-600" />
            <span className="font-body text-[18px] leading-[1.85] text-ink-800">
              <strong className="text-ink-900">{title}:</strong> {desc}
            </span>
          </li>
        ))}
      </ul>

      {/* Não é */}
      <div className="rounded-lg border border-ink-200 bg-ink-50 p-6 md:p-8 space-y-4">
        <p className="font-body text-[18px] font-semibold text-ink-900">
          E que fique bem claro, isso não é:
        </p>
        <ul className="space-y-3">
          {[
            'Um curso longo com módulos que ficam pela metade;',
            'Um funil caro que depende de anúncio para funcionar;',
            'Nem template genérico que serve para qualquer nicho.',
            'Uma oferta em PDF ou planilha que o cliente baixa e esquece.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 font-body text-[18px] leading-[1.8] text-ink-700">
              <span className="mt-1 shrink-0 font-sans text-sm font-semibold text-ink-400">✕</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <hr className="my-8 sm:my-12 border-ink-200" />

      {/* ── MEU COMBO VAI TE AJUDAR A ── */}
      <h2 className="font-body text-[26px] md:text-[36px] font-bold leading-tight text-ink-900 mb-8 text-center">
        Meu Combo Vai Te Ajudar a:
      </h2>

      <ul className="space-y-6">
        {[
          ['Oferta definida em uma sessão', 'estrutura, GPTs necessários e vitória rápida do seu cliente. O GPT faz as perguntas estratégicas, você responde, ele entrega o plano;'],
          ['Sequência de e-mails/posts escrita', 'pronta para publicar;'],
          ['Carta de vendas no ar', 'sem página cara, sem design complexo;'],
          ['Lista segmentada', 'a Oferta Base separa curiosos de compradores;'],
          ['Tempo de volta', 'menos energia nutrindo seguidores, mais atenção para quem já pagou;'],
          ['Escada aberta', 'quem compra a Oferta Base chega nas suas ofertas maiores com menos fricção.'],
        ].map(([title, desc]) => (
          <li key={title} className="flex items-start gap-3">
            <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink-600" />
            <span className="font-body text-[18px] leading-[1.85] text-ink-800">
              <strong className="text-ink-900">{title}:</strong> {desc}
            </span>
          </li>
        ))}
      </ul>

      <hr className="my-8 sm:my-12 border-ink-200" />

      {/* ── PARA QUEM É ── */}
      <h2 className="font-body text-[26px] md:text-[36px] font-bold leading-tight text-ink-900 mb-7 text-center">
        Para Quem É
      </h2>

      <div className="space-y-5 font-body text-[18px] leading-[1.9] text-ink-800">
        <p>
          Para criadores, experts, consultores e mentores que já têm audiência e já têm resultados para mostrar — mas ainda não encontraram uma forma simples de transformar isso em faturamento consistente. Seja porque dependem de lançamento mensal, seja porque nunca criaram uma oferta de entrada que filtre quem realmente quer comprar.
        </p>
        <p>
          Não é para quem está construindo audiência do zero ou procura mais uma
          estratégia de crescimento orgânico.
        </p>
        <p>
          Quem tira mais proveito disso entende que{' '}
          <strong className="text-ink-900">audiência sem oferta é hobby</strong>. E
          prefere consertar isso agora do que no próximo trimestre.
        </p>
      </div>

      <hr className="my-8 sm:my-12 border-ink-200" />

      {/* ── O QUE MUDA ── */}
      <h2 className="font-body text-[26px] md:text-[36px] font-bold leading-tight text-ink-900 mb-7 text-center">
        O Que Muda
      </h2>

      <div className="rounded-lg border border-ink-200 bg-gray-50 p-6 md:p-8 space-y-5">
        <p className="font-body text-[18px] font-semibold leading-[1.9] text-ink-900">
          Quando você implementa a Oferta Base e deixa a automação rodar:
        </p>
        <ul className="space-y-4 pl-1">
          {[
            ['Sua lista começa a trabalhar por você', 'cada novo leitor entra numa sequência que apresenta a oferta sem precisar que você esteja online;'],
            ['Você identifica compradores reais', 'quem clica e compra sinaliza que está pronto para subir na escada;'],
            ['Você para de criar conteúdo para vender', 'o conteúdo continua, mas a venda acontece pelo sistema, não pelo post do dia;'],
            ['Suas ofertas maiores fecham mais fácil', 'quem já pagou alguma coisa tem menos resistência para pagar tickets como 1k, 2k e até 10k.'],
          ].map(([title, desc]) => (
            <li key={title} className="flex items-start gap-3 font-body text-[18px] leading-[1.85] text-ink-800">
              <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink-600" />
              <span>
                <strong className="text-ink-900">{title}:</strong> {desc}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <hr className="my-8 sm:my-12 border-ink-200" />

      {/* ── TUDO QUE VOCÊ VAI RECEBER + PRICING BOX ── */}
      <h2 className="font-body text-[26px] md:text-[36px] font-bold leading-tight text-ink-900 mb-8 text-center">
        Tudo Que Você Vai Receber
      </h2>

      <div id="comprar" className="bg-ink-900 p-8 md:p-10">
        <ul className="space-y-3 mb-9">
          {[
            'GPT Estrategista de Oferta Base',
            'GPT Escritor Persuasivo',
            'GPT Carta de Vendas',
            'GPT Gerador de Agentes GPT',
            'Playbook de Implementação',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 font-body text-[18px] leading-[1.7] text-ink-200">
              <span className="mt-[3px] shrink-0 font-sans font-bold text-brand-400">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="border-t border-ink-700/60 pt-8 text-center">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-1">
            Preço de estreia
          </p>
          <p className="font-body text-[56px] md:text-[76px] lg:text-[92px] font-bold leading-none text-ink-50">
            R$ 97
          </p>
          <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-ink-500 mt-3 mb-8">
            Acesso imediato · Tudo digital
          </p>

          <a
            href={BUY_URL}
            onClick={trackInitiateCheckout}
            className="inline-flex w-full justify-center sm:w-auto items-center gap-2 bg-green-500 border border-green-500 px-10 py-4 text-[13px] font-sans font-semibold uppercase tracking-[0.14em] text-white hover:bg-green-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900"
          >
            Compre e tenha acesso imediato
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>

          <p className="mt-6 font-body text-sm text-ink-50">
            Garantia total: se não gostar, me avise. Devolvo tudo e você fica com o material.
          </p>
        </div>
      </div>

      <hr className="my-8 sm:my-12 border-ink-200" />

      {/* ── POR QUE APENAS R$ 97? ── */}
      <h2 className="font-body text-[26px] md:text-[36px] font-bold leading-tight text-ink-900 mb-7 text-center">
        Por que apenas R$ 97?
      </h2>

      <div className="space-y-5 font-body text-[18px] leading-[1.9] text-ink-800">
        <p>
          Porque prefiro que você implemente antes de qualquer decisão maior.
        </p>
        <p>
          Quem aplica e vê resultado tende a querer avançar para a consultoria. Quem
          não aplica, tudo bem também.
        </p>
        <p>
          R$ 97 é o preço justo para demonstrar o método sem pedir que você aposte
          alto antes de ver funcionar.
        </p>
      </div>

      <div className="mt-10">
        <a
          href={BUY_URL}
          onClick={trackInitiateCheckout}
          className="inline-flex w-full justify-center sm:w-auto items-center gap-2 bg-green-600 border border-green-600 px-8 py-4 text-[13px] font-sans font-medium uppercase tracking-[0.12em] text-white hover:bg-green-700 transition-colors"
        >
          Compre Aqui
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <hr className="my-8 sm:my-12 border-ink-200" />

      {/* ── P.S. ── */}
      <div className="space-y-5 font-body text-[18px] leading-[1.9] text-ink-800 rounded-lg border border-ink-200 bg-gray-50 p-6 md:p-8">
        <p>
          <strong className="text-ink-900">P.S.</strong> Se você pulou direto para o
          final: a Oferta Base é a minha solução para que você filtre clientes de
          curiosos. Um combo de GPTs que define sua Oferta Base em IA, cria as ferramentas que você vai entregar para seus clientes, escreve a campanha de vendas e coloca tudo no ar em menos de 30 minutos. Custa apenas
          R$ 97. Se não gostar, devolvo tudo e você fica com o material.{' '}
          <a href={BUY_URL} onClick={trackInitiateCheckout} className="text-brand-700 underline underline-offset-2 hover:text-brand-600 transition-colors">
            Clique aqui e comece hoje.
          </a>
        </p>
      </div>

      {/* ── BIO ── */}
      <div className="mt-10 pb-8 flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-8">
        <div className="shrink-0 flex flex-col items-center gap-3">
          <img
            src="/felipe-pavao.webp"
            alt="Felipe Pavão"
            className="h-24 w-24 rounded-full border border-ink-200 object-cover object-top"
          />
          <span className="font-sans text-[10px] uppercase tracking-[0.12em] text-ink-500">
            Felipe Pavão
          </span>
        </div>
        <div className="space-y-4 font-body text-[18px] leading-[1.85] text-ink-700 text-center sm:text-left">
          <p>
            <strong className="text-ink-900">Felipe Pavão</strong> tem 8+ anos de bastidores do mercado digital e mais de R$10M em resultados gerados para clientes. Passou por todos os formatos — agência, copy, lançamentos, mentoria — até chegar numa conclusão simples: audiência sem oferta é hobby.
          </p>
          <p>
            Hoje usa GPTs pra mudar isso. Cria Ofertas Base para criadores, experts e consultores que já têm audiência mas ainda não conseguem transformar isso em faturamento consistente. Sem complexidade. Sem lançamento mensal. Sem depender do algoritmo.
          </p>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="border-t border-ink-200 pt-8 text-center font-sans text-[11px] leading-relaxed tracking-[0.08em] text-ink-400">
        <p>© 2026 Felipe Pavão — Todos os Direitos Reservados</p>
        <p className="mt-2 flex items-center justify-center gap-2">
          <a href="/politica-de-privacidade" className="hover:text-ink-700 transition-colors">
            Política de Privacidade
          </a>
          <span>·</span>
          <a href="/termos-de-uso" className="hover:text-ink-700 transition-colors">
            Termos de Uso
          </a>
        </p>
      </footer>

    </main>
  )
}