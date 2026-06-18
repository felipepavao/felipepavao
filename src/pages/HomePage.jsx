/**
 * felipepavao.com — Homepage
 * Oferta Base — sales letter
 *
 * UX: Editorial / Sales Letter (livro pattern)
 * Layout: max-w-[640px] centered column, white bg
 */

const BUY_URL = '#comprar' // trocar pela URL real da plataforma

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[640px] px-5 pt-8 pb-16 md:pt-12 md:pb-24">

      {/* ── EYEBROW + H1 ── */}
      <header>
        <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.22em] text-ink-900 border-t border-b border-ink-300 py-3 text-center mb-8">
          Para Experts, Consultores, Mentores e Creators que já têm audiência
        </p>

        <h1 className="font-body text-[28px] sm:text-[42px] font-normal leading-[1.2] text-ink-900 text-center">
          "Em menos de 30 minutos você cria sua Oferta Base e começa a monetizar seus leitores e seguidores ainda hoje."
        </h1>

        {/* Foto + assinatura */}
        <div className="mt-10 flex justify-center">
          <div className="flex flex-col items-center gap-3">
            <img
              src="/felipe-pavao.webp"
              alt="Felipe Pavão"
              className="h-20 w-20 rounded-full border border-ink-200 object-cover object-top"
            />
            <span className="font-sans text-[10px] uppercase tracking-[0.12em] text-ink-500">
              Felipe Pavão
            </span>
          </div>
        </div>
      </header>

      <hr className="my-10 border-ink-200" />

      {/* ── ABERTURA ── */}
      <div className="space-y-5 font-body text-[17px] leading-[1.9] text-ink-800">
        <p>
          Você já provou que sabe chamar atenção. O que falta é uma oferta simples
          que separe quem só lê de quem está pronto para pagar.
        </p>
        <p>
          A <strong className="text-ink-900">Oferta Base</strong> é um combo de três
          GPTs e um playbook que fazem exatamente isso: constroem sua oferta, escrevem
          os e-mails e preparam tudo para vender, sem anúncios, sem equipe, sem
          depender da próxima publicação.
        </p>
      </div>

      <hr className="my-8 sm:my-12 border-ink-200" />

      {/* ── ISSO É PARA VOCÊ SE ── */}
      <div className="border-l-4 border-ink-800 bg-ink-50 pl-6 pr-5 py-5 space-y-4">
        <p className="font-body text-[17px] leading-[1.9] text-ink-800">
          Isso é para você se:
        </p>
        <ul className="space-y-3 pl-1">
          {[
            'Publica conteúdo toda semana, mas as vendas não acompanham.',
            'Sua caixa de entrada vive cheia de curiosos pedindo dica gratuita.',
            'Já tentou lives e pequenos lançamentos, atraiu likes e ficou sem fôlego para atender quem realmente importa.',
            'Quer monetizar sua lista sem criar um novo produto do zero.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 font-body text-[17px] leading-[1.8] text-ink-800">
              <span className="mt-[11px] h-1 w-3 shrink-0 bg-ink-600/70" />
              {item}
            </li>
          ))}
        </ul>
        <p className="font-body text-[17px] leading-[1.9] text-ink-800 pt-2">
          Se esse é você, continue lendo.
        </p>
      </div>

      <hr className="my-8 sm:my-12 border-ink-200" />

      {/* ── O PROBLEMA ── */}
      <h2 className="font-body text-xl md:text-2xl font-bold leading-tight text-ink-900 mb-7">
        O Problema
      </h2>

      <div className="space-y-5 font-body text-[17px] leading-[1.9] text-ink-800">
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

      {/* ── A VIRADA ── */}
      <h2 className="font-body text-xl md:text-2xl font-bold leading-tight text-ink-900 mb-7">
        A Virada
      </h2>

      <blockquote className="border-l-2 border-brand-600 pl-5 font-body text-[17px] font-semibold leading-[1.85] text-ink-900">
        Um cliente lançou a Oferta Base para a lista que já tinha. Sem anúncios, sem
        novo produto. Passou a fechar mentorias de R$ 7.000 com quem já o acompanhava
        há meses sem comprar nada.
      </blockquote>

      <hr className="my-8 sm:my-12 border-ink-200" />

      {/* ── O QUE VOCÊ VAI RECEBER ── */}
      <h2 className="font-body text-xl md:text-2xl font-bold leading-tight text-ink-900 mb-8">
        O Que Você Vai Receber
      </h2>

      <p className="font-body text-[17px] leading-[1.9] text-ink-800 mb-6">
        <strong className="text-ink-900">Oferta Base — Combo de GPTs + Playbook</strong>
      </p>

      <ul className="space-y-6 mb-10">
        {[
          ['GPT #1 — Criador de Oferta Base', 'você descreve o que já vende, ele define preço, promessa e posicionamento.'],
          ['GPT #2 — Redator de E-mails', 'gera a sequência de boas-vindas, oferta e follow-up pronta para copiar.'],
          ['GPT #3 — Carta de Vendas', 'entrega a página de vendas sem precisar de designer ou copywriter.'],
          ['Playbook de Implementação', 'como conectar tudo à sua newsletter em menos de 30 minutos.'],
        ].map(([title, desc]) => (
          <li key={title} className="flex items-start gap-3">
            <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink-600" />
            <span className="font-body text-[17px] leading-[1.85] text-ink-800">
              <strong className="text-ink-900">{title}</strong> — {desc}
            </span>
          </li>
        ))}
      </ul>

      {/* Não é */}
      <div className="rounded-lg border border-ink-200 bg-ink-50 p-6 md:p-8 space-y-4">
        <p className="font-body text-[15px] font-semibold text-ink-900">Não é:</p>
        <ul className="space-y-3">
          {[
            'Curso longo com módulos que ficam pela metade',
            'Funil caro que depende de anúncio para funcionar',
            'Template genérico que serve para qualquer nicho',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 font-body text-[17px] leading-[1.8] text-ink-700">
              <span className="mt-1 shrink-0 font-sans text-sm font-semibold text-ink-400">✕</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <hr className="my-8 sm:my-12 border-ink-200" />

      {/* ── O QUE VOCÊ SAI COM ISSO ── */}
      <h2 className="font-body text-xl md:text-2xl font-bold leading-tight text-ink-900 mb-8">
        O Que Você Sai Com Isso
      </h2>

      <ul className="space-y-6">
        {[
          ['Oferta definida em uma sessão', 'preço, promessa, posicionamento. O GPT faz as perguntas, você responde, ele entrega.'],
          ['Sequência de e-mails escrita', 'pronta para ativar na sua plataforma de newsletter.'],
          ['Carta de vendas no ar', 'sem página cara, sem design complexo.'],
          ['Lista segmentada', 'a automação separa curiosos de compradores no primeiro clique.'],
          ['Tempo de volta', 'menos energia nutrindo seguidores, mais atenção para quem já pagou.'],
          ['Escada aberta', 'quem compra a Oferta Base chega nas suas ofertas maiores com menos fricção.'],
        ].map(([title, desc]) => (
          <li key={title} className="flex items-start gap-3">
            <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink-600" />
            <span className="font-body text-[17px] leading-[1.85] text-ink-800">
              <strong className="text-ink-900">{title}</strong> — {desc}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA MID-PAGE */}
      <div className="my-12 border border-ink-300 p-7 text-center">
        <p className="font-body text-[17px] font-semibold text-ink-800 mb-5">
          R$ 49 — acesso imediato
        </p>
        <a
          href={BUY_URL}
          className="inline-flex w-full justify-center sm:w-auto items-center gap-2 bg-green-600 border border-green-600 px-8 py-4 text-[13px] font-sans font-medium uppercase tracking-[0.12em] text-white hover:bg-green-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900 focus-visible:ring-offset-2"
        >
          Compre Aqui
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <hr className="my-8 sm:my-12 border-ink-200" />

      {/* ── PARA QUEM É ── */}
      <h2 className="font-body text-xl md:text-2xl font-bold leading-tight text-ink-900 mb-7">
        Para Quem É
      </h2>

      <div className="space-y-5 font-body text-[17px] leading-[1.9] text-ink-800">
        <p>
          Experts, consultores, mentores e creators que já têm audiência, já têm
          resultados para mostrar, mas ainda dependem de um novo lançamento a cada
          mês para gerar caixa.
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
      <h2 className="font-body text-xl md:text-2xl font-bold leading-tight text-ink-900 mb-7">
        O Que Muda
      </h2>

      <div className="rounded-lg border border-ink-200 bg-gray-50 p-6 md:p-8 space-y-5">
        <p className="font-body text-[17px] font-semibold leading-[1.9] text-ink-900">
          Quando você implementa a Oferta Base e deixa a automação rodar:
        </p>
        <ul className="space-y-4 pl-1">
          {[
            ['Sua lista começa a trabalhar por você', 'cada novo leitor entra numa sequência que apresenta a oferta sem precisar que você esteja online.'],
            ['Você identifica compradores reais', 'quem clica e compra sinaliza que está pronto para subir na escada.'],
            ['Você para de criar conteúdo para vender', 'o conteúdo continua, mas a venda acontece pelo sistema, não pelo post do dia.'],
            ['Suas ofertas maiores fecham mais fácil', 'quem já pagou R$ 49 tem menos resistência para pagar R$ 2.000.'],
          ].map(([title, desc]) => (
            <li key={title} className="flex items-start gap-3 font-body text-[17px] leading-[1.85] text-ink-800">
              <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink-600" />
              <span>
                <strong className="text-ink-900">{title}</strong> — {desc}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <hr className="my-8 sm:my-12 border-ink-200" />

      {/* ── TUDO QUE VOCÊ VAI RECEBER + PRICING BOX ── */}
      <h2 className="font-body text-xl md:text-2xl font-bold leading-tight text-ink-900 mb-8">
        Tudo Que Você Vai Receber
      </h2>

      <div id="comprar" className="bg-ink-900 p-8 md:p-10">
        <ul className="space-y-3 mb-9">
          {[
            'GPT Criador de Oferta Base',
            'GPT Redator de E-mails',
            'GPT Carta de Vendas',
            'Playbook de Implementação',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 font-body text-[15px] leading-[1.7] text-ink-200">
              <span className="mt-[3px] shrink-0 font-sans font-bold text-brand-400">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="border-t border-ink-700/60 pt-8 text-center">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-3">
            Tudo isso por
          </p>
          <p className="font-body text-[76px] md:text-[92px] font-bold leading-none text-ink-50">
            R$ 49
          </p>
          <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-ink-500 mt-3 mb-8">
            Acesso imediato · Tudo digital
          </p>

          <a
            href={BUY_URL}
            className="inline-flex w-full justify-center sm:w-auto items-center gap-2 bg-green-500 border border-green-500 px-10 py-4 text-[13px] font-sans font-semibold uppercase tracking-[0.14em] text-white hover:bg-green-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900"
          >
            Compre Aqui
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

      {/* ── POR QUE R$ 49? ── */}
      <h2 className="font-body text-xl md:text-2xl font-bold leading-tight text-ink-900 mb-7">
        Por que R$ 49?
      </h2>

      <div className="space-y-5 font-body text-[17px] leading-[1.9] text-ink-800">
        <p>Porque prefiro que você implemente antes de qualquer decisão maior.</p>
        <p>
          Quem aplica e vê resultado tende a querer avançar para a consultoria. Quem
          não aplica, tudo bem também.
        </p>
        <p>
          R$ 49 é o preço justo para demonstrar o método sem pedir que você aposte
          alto antes de ver funcionar.
        </p>
      </div>

      <div className="mt-10">
        <a
          href={BUY_URL}
          className="inline-flex w-full justify-center sm:w-auto items-center gap-2 bg-green-600 border border-green-600 px-8 py-4 text-[13px] font-sans font-medium uppercase tracking-[0.12em] text-white hover:bg-green-700 transition-colors"
        >
          Compre Aqui — R$ 49
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <hr className="my-8 sm:my-12 border-ink-200" />

      {/* ── P.S. ── */}
      <div className="space-y-5 font-body text-[17px] leading-[1.9] text-ink-800 rounded-lg border border-ink-200 bg-gray-50 p-6 md:p-8">
        <p>
          <strong className="text-ink-900">P.S.</strong> Se você pulou direto para o
          final: a Oferta Base é um combo de três GPTs e um playbook que criam sua
          oferta, escrevem os e-mails e montam a carta de vendas em menos de 30
          minutos. Custa R$ 49. Se não gostar, devolvo tudo e você fica com o
          material.{' '}
          <a href={BUY_URL} className="text-brand-700 underline underline-offset-2 hover:text-brand-600 transition-colors">
            Clique aqui e comece hoje.
          </a>
        </p>
      </div>

      {/* ── ASSINATURA ── */}
      <div className="mt-10 pb-8 space-y-1">
        <p className="font-body italic text-xl text-ink-700">— Felipe Pavão</p>
        <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-ink-400">
          Consultor · felipepavao.com
        </p>
      </div>

    </main>
  )
}
