import Link from "next/link";

const features = [
  {
    title: "AI Search",
    description:
      "Search and explore information through a conversational interface.",
    icon: "⌕",
  },
  {
    title: "Conversational AI",
    description:
      "Ask follow-up questions and keep the context of your conversation.",
    icon: "◌",
  },
  {
    title: "Cited Sources",
    description:
      "Review available supporting sources alongside generated answers.",
    icon: "▤",
  },
  {
    title: "Focused Experience",
    description:
      "A clean interface designed around reading, searching, and continuing.",
    icon: "□",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/20">
              ◇
            </div>

            <span className="text-[17px] font-semibold tracking-tight">
              Morphic
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm text-white/60 transition hover:text-white"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="text-sm text-white/60 transition hover:text-white"
            >
              How it works
            </a>

            <a
              href="#faq"
              className="text-sm text-white/60 transition hover:text-white"
            >
              FAQ
            </a>

            <a
              href="#about"
              className="text-sm text-white/60 transition hover:text-white"
            >
              About
            </a>

            <a
              href="#resources"
              className="text-sm text-white/60 transition hover:text-white"
            >
              Blog
            </a>

            <a
              href="#resources"
              className="text-sm text-white/60 transition hover:text-white"
            >
              Docs
            </a>
          </nav>

          <div className="flex items-center gap-3">
            {/* CHANGE ONLY THIS ROUTE IF YOUR AUTH ROUTE IS DIFFERENT */}
            <Link
              href="/login"
              className="hidden rounded-lg border border-white/15 px-4 py-2 text-sm transition hover:bg-white/[0.06] sm:block"
            >
              Sign in
            </Link>

            <Link
              href="/chat"
              className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Open Chat <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-28">
          {/* LEFT */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.025] px-4 py-2 text-xs text-white/70">
              <span>✦</span>
              AI-powered search & conversation
            </div>

            <h1 className="max-w-[680px] text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[68px]">
              Search, understand,
              <br />
              and work with
              <br />
              information in one place.
            </h1>

            <p className="mt-7 max-w-[610px] text-base leading-7 text-white/55 sm:text-lg">
              Morphic brings search and conversation together in a focused
              interface for exploring information, reviewing responses, and
              continuing the conversation.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/chat"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Open Chat
                <span className="ml-2">→</span>
              </Link>

              <a
                href="#features"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-white/15 px-5 text-sm font-medium transition hover:bg-white/[0.05]"
              >
                Explore Features
              </a>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <TrustItem
                icon="ϟ"
                title="Fast interaction"
                text="Focused conversational workflow"
              />

              <TrustItem
                icon="□"
                title="Clear interface"
                text="Minimal and readable design"
              />

              <TrustItem
                icon="⌕"
                title="Sources"
                text="Review supporting information"
              />
            </div>
          </div>

          {/* CHAT PREVIEW */}
          <ChatPreview />
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="border-b border-white/10">
        <div className="mx-auto max-w-[1200px] px-5 py-20 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
              Features
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything you need to explore and understand
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/45 sm:text-base">
              A restrained interface built around search, conversation,
              information, and control.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.04]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-xl text-white/80">
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-sm font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="border-b border-white/10">
        <div className="mx-auto max-w-[1200px] px-5 py-20 lg:py-24">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
              How it works
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Simple. Clear. Conversational.
            </h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            <Step
              number="1"
              title="Ask anything"
              text="Start with a question or task in the existing Chat experience."
            />

            <Step
              number="2"
              title="Get an answer"
              text="Review the generated response and supporting information available to you."
            />

            <Step
              number="3"
              title="Explore and continue"
              text="Ask follow-up questions and continue investigating the topic."
            />
          </div>

          <div className="mt-14 flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.025] p-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">
                Ready to explore?
              </h3>

              <p className="mt-2 text-sm text-white/45">
                Open Morphic Chat and start a conversation.
              </p>
            </div>

            <Link
              href="/chat"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-black hover:bg-white/90"
            >
              Open Chat →
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT / TRANSPARENCY */}
      <section id="about" className="border-b border-white/10">
        <div className="mx-auto max-w-[900px] px-5 py-20 text-center lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
            About the experience
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Designed to stay out of the way.
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/45 sm:text-base">
            The public website uses the same restrained visual language as the
            application itself, so moving from the homepage into Chat feels
            like entering the same product rather than a separate marketing
            site.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b border-white/10">
        <div className="mx-auto max-w-[900px] px-5 py-20 lg:py-24">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Common questions
            </h2>
          </div>

          <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10">
            <Faq
              question="What is Morphic?"
              answer="Morphic is the AI search and conversation experience represented by your application."
            />

            <Faq
              question="Where does Open Chat go?"
              answer="The Open Chat buttons use the existing /chat route."
            />

            <Faq
              question="Does this homepage replace the Chat application?"
              answer="No. The homepage is only the public-facing presentation layer and keeps the existing Chat experience separate."
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="resources">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-5 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <span>◇</span>
              Morphic
            </div>

            <p className="mt-2 text-xs text-white/30">
              AI search and conversation.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/40">
            <a href="#about" className="hover:text-white">
              About
            </a>

            <a href="#resources" className="hover:text-white">
              Blog
            </a>

            <a href="#resources" className="hover:text-white">
              Docs
            </a>

            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>

          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Morphic
          </p>
        </div>
      </footer>
    </main>
  );
}

/* ----------------------------- */
/* CHAT PREVIEW */
/* ----------------------------- */

function ChatPreview() {
  return (
    <div className="[perspective:1400px]">
      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          border
          border-white/15
          bg-[#080808]
          shadow-[0_40px_120px_rgba(0,0,0,0.65)]
          transition-transform
          duration-500
          hover:[transform:rotateX(2deg)_rotateY(-3deg)_translateY(-4px)]
        "
      >
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_55%)]" />

        {/* WINDOW BAR */}
        <div className="relative flex h-11 items-center justify-between border-b border-white/10 px-4">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md border border-white/15 text-[10px]">
              ◇
            </span>

            <span className="text-xs font-semibold">Morphic</span>
          </div>

          <div className="flex gap-3 text-xs text-white/40">
            <span>☼</span>
            <span>◉</span>
          </div>
        </div>

        {/* APP */}
        <div className="grid min-h-[390px] grid-cols-[155px_1fr]">
          {/* SIDEBAR */}
          <aside className="border-r border-white/10 p-3">
            <button
              type="button"
              className="mb-4 h-8 w-full rounded-md border border-white/15 text-[11px] text-white/75"
            >
              + New Chat
            </button>

            <div className="space-y-1 text-[11px]">
              <PreviewItem active label="⌂  Home" />
              <PreviewItem label="⌕  Search" />
              <PreviewItem label="▤  Library" />
              <PreviewItem label="◷  History" />
            </div>

            <div className="my-4 border-t border-white/10" />

            <p className="mb-2 text-[9px] uppercase tracking-[0.15em] text-white/25">
              Today
            </p>

            <div className="space-y-1 text-[10px] text-white/40">
              <div className="truncate rounded-md bg-white/[0.06] px-2 py-1.5 text-white/75">
                Quantum computing expla...
              </div>

              <div className="truncate px-2 py-1.5">
                Best practices for react...
              </div>

              <div className="truncate px-2 py-1.5">
                How does photosynthesis...
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-4 text-[10px] text-white/35">
              ◉ Guest User
            </div>
          </aside>

          {/* CONVERSATION */}
          <section className="flex min-w-0 flex-col">
            <div className="flex-1 space-y-5 p-5">
              <div className="ml-auto max-w-[75%] rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-[11px] leading-5">
                Explain quantum computing in simple terms.
              </div>

              <div className="max-w-[88%] rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <div className="flex gap-3">
                  <span className="text-white/60">✦</span>

                  <p className="text-[11px] leading-5 text-white/70">
                    Quantum computing uses quantum bits, or qubits, to process
                    information differently from classical computers.
                  </p>
                </div>

                <div className="mt-4 border-t border-white/10 pt-3">
                  <p className="text-[10px] font-medium text-white/70">
                    Sources
                  </p>

                  <div className="mt-2 space-y-2">
                    <div className="rounded-md border border-white/10 px-3 py-2 text-[10px] text-white/45">
                      IBM Quantum Computing Basics
                    </div>

                    <div className="rounded-md border border-white/10 px-3 py-2 text-[10px] text-white/45">
                      Introduction to Quantum Computing
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 p-3">
              <div className="flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2">
                <span className="flex-1 text-[11px] text-white/25">
                  Ask anything...
                </span>

                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-black"
                >
                  →
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- */
/* SMALL COMPONENTS */
/* ----------------------------- */

function TrustItem({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.03]">
        {icon}
      </div>

      <div>
        <p className="text-xs font-medium">{title}</p>

        <p className="mt-1 text-[11px] text-white/35">{text}</p>
      </div>
    </div>
  );
}

function PreviewItem({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-md px-2 py-1.5 ${
        active
          ? "bg-white/[0.06] text-white/90"
          : "text-white/45"
      }`}
    >
      {label}
    </div>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div>
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-sm font-semibold">
        {number}
      </div>

      <h3 className="mt-5 text-lg font-semibold">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-white/45">{text}</p>
    </div>
  );
}

function Faq({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group p-5">
      <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
        {question}

        <span className="text-white/35 transition group-open:rotate-45">
          +
        </span>
      </summary>

      <p className="mt-4 max-w-3xl text-sm leading-6 text-white/45">
        {answer}
      </p>
    </details>
  );
}
