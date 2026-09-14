
import type { Metadata } from 'next'
import {
  ArrowRight,
  Check,
  Github,
  Globe,
  Image as ImageIcon,
  Layers,
  MessageSquare,
  Search,
  Share2,
  Shield,
  Sparkles,
  Video
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Morphic — Open-source AI answer engine',
  description:
    'Morphic is a fully open-source AI answer engine with a generative UI. Search, chat, and get sourced answers with citations, image and video results, and shareable threads.'
}

// ---------------------------------------------------------------------------
// Content — kept as data so the page reads clearly and copy stays consistent
// ---------------------------------------------------------------------------

const primaryFeatures = [
  {
    title: 'Generative UI, not just text',
    description:
      'Answers render as the right interface for the question — source cards for research, a gallery for images, a player for video — instead of one long reply.',
    icon: Layers
  },
  {
    title: 'Cited, sourced answers',
    description:
      'Every answer links back to where it came from. Follow a citation to the original page in one click, and judge the source yourself.',
    icon: Shield
  },
  {
    title: 'Search the open web',
    description:
      'Morphic reads live web results before answering, so it can speak to today, not just its training data.',
    icon: Search
  }
]

const secondaryFeatures = [
  {
    title: 'Image & video search',
    description: 'Pull in visual results alongside written answers when a picture explains it faster.',
    icon: ImageIcon
  },
  {
    title: 'Follow-up aware',
    description: 'Ask a follow-up and Morphic keeps the thread of what you were actually asking.',
    icon: MessageSquare
  },
  {
    title: 'Shareable threads',
    description:
      'Turn any conversation into a link. Send a research thread the way you would send a doc.',
    icon: Share2
  },
  {
    title: 'Bring your own model',
    description: 'Works with OpenAI, Anthropic, Google, and local models through Ollama — pick what fits your budget.',
    icon: Sparkles
  },
  {
    title: 'Self-host anywhere',
    description: 'Deploy on Vercel or Docker in minutes. Your data, your infrastructure, your rules.',
    icon: Globe
  },
  {
    title: 'Open source, always',
    description: 'The full source is on GitHub under MIT. Read it, fork it, or send a pull request.',
    icon: Github
  }
]

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Self-host Morphic with your own API key and pay only the provider for usage.',
    cta: 'Deploy your own',
    href: '#',
    features: [
      'Full source code, MIT licensed',
      'Bring your own AI provider key',
      'Unlimited local usage',
      'Community support on GitHub'
    ]
  },
  {
    name: 'Pro',
    price: '$12',
    period: '/ month',
    description:
      'A hosted instance with search included, so there is nothing to configure.',
    cta: 'Start free trial',
    href: '#',
    highlighted: true,
    features: [
      'Everything in Free',
      'Hosted — no setup required',
      'Search API usage included',
      'Priority response times',
      'Shareable public thread links'
    ]
  },
  {
    name: 'Team',
    price: '$29',
    period: '/ user / month',
    description: 'Shared workspaces and admin controls for teams researching together.',
    cta: 'Talk to us',
    href: '#',
    features: [
      'Everything in Pro',
      'Shared team workspace',
      'Centralized billing',
      'Admin & usage controls',
      'SSO on request'
    ]
  }
]

const faqs = [
  {
    q: 'Is Morphic actually free to use?',
    a:
      'Yes. The self-hosted version is free and open source under the MIT license — you only pay your AI provider (OpenAI, Anthropic, Google, or a local model) for the requests you make. The Pro and Team plans exist for people who would rather not run their own infrastructure.'
  },
  {
    q: 'What is the difference between Morphic and a regular chatbot?',
    a: 'Most chatbots return one long block of text. Morphic decides what shape an answer should take — a set of cited sources, an image grid, a video, or a short written answer — and renders that instead, so answers are easier to scan and verify.'
  },
  {
    q: 'Can I use my own AI provider?',
    a: 'Yes. Morphic supports OpenAI, Anthropic, Google, Vercel AI Gateway, OpenAI-compatible APIs, and local models through Ollama. You choose the model per conversation.'
  },
  {
    q: 'Can I self-host it?',
    a: 'Morphic is designed to be self-hosted. Deploy it to Vercel in a few clicks, or run it with Docker Compose, which also sets up Postgres, Redis, and SearXNG for you automatically.'
  },
  {
    q: 'Do you store my conversations?',
    a: 'On a self-hosted instance, your data stays on your own infrastructure. On hosted Pro and Team plans, conversations are stored so you can revisit them, and you can delete any thread permanently at any time.'
  }
]

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <LogoStrip />
        <PrimaryFeatures />
        <ProductPreview />
        <SecondaryFeatures />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}

// ---------------------------------------------------------------------------
// Header
// ---------------------------------------------------------------------------

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <MorphicMark className="h-5 w-5" />
          <span className="text-[15px] font-medium tracking-tight">Morphic</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#pricing" className="transition-colors hover:text-foreground">
            Pricing
          </a>
          <a href="#faq" className="transition-colors hover:text-foreground">
            FAQ
          </a>
          <a
            href="https://github.com/miurla/morphic"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/chat"
            className="hidden rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            Sign in
          </Link>
          <Link
            href="/chat"
            className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3.5 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Open chat
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </header>
  )
}

// ---------------------------------------------------------------------------
// Hero — left-aligned, the live input is the hero element (not a gradient blob)
// ---------------------------------------------------------------------------

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Open source · MIT licensed
          </div>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
            An answer engine that shows its work
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Morphic searches the live web, then renders the answer as the
            right interface for the question — sourced, cited, and built to
            self-host on your own infrastructure.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/chat"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Try Morphic free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://github.com/miurla/morphic"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              <Github className="h-4 w-4" />
              View source
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required · Self-host free forever
          </p>
        </div>

        <HeroPreview />
      </div>
    </section>
  )
}

// A quiet, static mock of the actual chat input — mirrors the real product
// instead of an abstract illustration or gradient blob.
function HeroPreview() {
  return (
    <div className="relative">
      <div className="rounded-xl border border-border bg-card shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </div>
        <div className="space-y-4 p-5">
          <div className="ml-auto max-w-[80%] rounded-lg bg-muted px-3.5 py-2 text-sm">
            What changed in the EU AI Act this year?
          </div>

          <div className="space-y-2.5">
            <div className="flex flex-wrap gap-2">
              {['europa.eu', 'reuters.com', 'euractiv.com'].map(src => (
                <span
                  key={src}
                  className="rounded-md border border-border px-2 py-1 text-xs text-muted-foreground"
                >
                  {src}
                </span>
              ))}
            </div>
            <div className="space-y-1.5">
              <div className="h-2.5 w-full rounded-full bg-muted" />
              <div className="h-2.5 w-[92%] rounded-full bg-muted" />
              <div className="h-2.5 w-[70%] rounded-full bg-muted" />
            </div>
          </div>
        </div>
        <div className="border-t border-border p-3">
          <div className="flex items-center justify-between rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground">
            Ask a follow-up
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
      <div
        aria-hidden
        className="absolute -inset-x-6 -bottom-6 -top-6 -z-10 rounded-2xl bg-gradient-to-b from-transparent to-muted/40"
      />
    </div>
  )
}

// ---------------------------------------------------------------------------
// Logo strip — credibility without claiming fake customer logos
// ---------------------------------------------------------------------------

function LogoStrip() {
  const items = [
    'OpenAI',
    'Anthropic',
    'Google Gemini',
    'Ollama',
    'Vercel',
    'SearXNG'
  ]
  return (
    <section className="border-y border-border/60 bg-muted/20 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-5 text-center text-xs text-muted-foreground">
          Works with the model and search providers you already use
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-medium text-muted-foreground/80">
          {items.map(item => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Primary features — three, but unevenly weighted, not identical cards
// ---------------------------------------------------------------------------

function PrimaryFeatures() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Built to answer, not just autocomplete
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Most chat tools guess from memory. Morphic checks the web first,
          then decides how the answer should look.
        </p>
      </div>

      <div className="mt-14 grid gap-x-8 gap-y-12 lg:grid-cols-3">
        {primaryFeatures.map((feature, i) => (
          <div key={feature.title} className={i === 0 ? 'lg:col-span-1' : ''}>
            <feature.icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
            <h3 className="mt-5 text-lg font-medium">{feature.title}</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Product preview band — video/image search visual proof
// ---------------------------------------------------------------------------

function ProductPreview() {
  return (
    <section className="border-y border-border/60 bg-muted/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            One thread, every kind of result
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Ask about a product launch and get sourced text. Ask what
            something looks like and get an image grid. Ask for a
            walkthrough and get video results — all inside the same
            conversation, without switching tools.
          </p>
          <ul className="mt-6 space-y-3 text-[15px]">
            <li className="flex items-start gap-2.5">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
              <span className="text-muted-foreground">Inline citations you can click through to the source</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
              <span className="text-muted-foreground">Image and video results woven into the answer</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
              <span className="text-muted-foreground">Follow-up questions keep full context of the thread</span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 rounded-xl border border-border bg-card p-4">
            <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
              <Search className="h-3.5 w-3.5" />
              Sources
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full rounded-full bg-muted" />
              <div className="h-2 w-[85%] rounded-full bg-muted" />
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <ImageIcon className="h-4 w-4 text-muted-foreground" />
            <div className="mt-3 aspect-square rounded-lg bg-muted" />
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <Video className="h-4 w-4 text-muted-foreground" />
            <div className="mt-3 aspect-square rounded-lg bg-muted" />
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Secondary features — denser grid, six items
// ---------------------------------------------------------------------------

function SecondaryFeatures() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
        Everything around the answer
      </h2>

      <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {secondaryFeatures.map(feature => (
          <div key={feature.title} className="flex gap-4">
            <feature.icon className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" strokeWidth={1.5} />
            <div>
              <h3 className="text-[15px] font-medium">{feature.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Pricing
// ---------------------------------------------------------------------------

function Pricing() {
  return (
    <section id="pricing" className="border-t border-border/60 bg-muted/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Run it yourself, or let us host it
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Morphic&rsquo;s code is free forever. Paid plans exist for people
            who would rather not manage servers, API keys, and search
            infrastructure themselves.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-xl border p-6 ${
                plan.highlighted
                  ? 'border-foreground/20 bg-card ring-1 ring-foreground/10'
                  : 'border-border bg-card'
              }`}
            >
              {plan.highlighted && (
                <span className="mb-4 inline-block w-fit rounded-full bg-foreground px-2.5 py-0.5 text-xs font-medium text-background">
                  Most popular
                </span>
              )}
              <h3 className="text-base font-medium">{plan.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-semibold tracking-tight">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`mt-8 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition-opacity hover:opacity-90 ${
                  plan.highlighted
                    ? 'bg-foreground text-background'
                    : 'border border-border bg-transparent text-foreground'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Provider API usage (OpenAI, Anthropic, etc.) is billed separately by
          your chosen provider when self-hosting.
        </p>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// FAQ — plain accordion via <details>, no client JS required
// ---------------------------------------------------------------------------

function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Questions people ask before switching
      </h2>

      <div className="mt-10 divide-y divide-border border-t border-border">
        {faqs.map(item => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium">
              {item.q}
              <span className="shrink-0 text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Final CTA
// ---------------------------------------------------------------------------

function FinalCta() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Ask something real. See what Morphic finds.
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/chat"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Try Morphic free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="https://github.com/miurla/morphic"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Github className="h-4 w-4" />
            Deploy your own
          </a>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <div>
            <div className="flex items-center gap-2">
              <MorphicMark className="h-5 w-5" />
              <span className="text-[15px] font-medium tracking-tight">Morphic</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              An open-source AI answer engine with a generative UI.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h4 className="text-sm font-medium">Product</h4>
              <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground">Features</a></li>
                <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
                <li><Link href="/chat" className="hover:text-foreground">Open chat</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium">Resources</h4>
              <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                <li><a href="https://github.com/miurla/morphic" target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a></li>
                <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-foreground">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-foreground">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Morphic. MIT licensed.</span>
          <span>Built on Next.js, Vercel AI SDK, and shadcn/ui.</span>
        </div>
      </div>
    </footer>
  )
}

// ---------------------------------------------------------------------------
// Small mark used in header/footer — plain geometric shape, no stock icon
// ---------------------------------------------------------------------------

function MorphicMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="6" className="fill-foreground" />
      <path
        d="M7 15.5V8.5L12 13L17 8.5V15.5"
        stroke="hsl(var(--background))"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
