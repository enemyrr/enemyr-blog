import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Resume'
};

export default function ResumePage() {
  return (
    <div className="resume">
      <div className="flex items-start gap-5">
        <Image
          src="/andreas-2.png"
          alt="Andreas Enemyr"
          width={300}
          height={356}
          quality={95}
          className="w-[100px] object-cover"
        />
        <div>
          <h1 className="text-2xl font-semibold">Andreas Enemyr</h1>
          <p className="mt-1 text-sm text-zinc-500">Stockholm, Sweden</p>
          <p className="mt-1 text-sm text-zinc-500">
            <a href="mailto:andreas@enemyr.com">andreas@enemyr.com</a>
            {' · '}
            <a href="https://linkedin.com/in/andreasenemyr">LinkedIn</a>
            {' · '}
            <a href="https://github.com/enemyrr">GitHub</a>
          </p>
        </div>
      </div>

      <Section title="Profile">
        <p>
          Product lead who builds and sells. I took sajn, a Swedish e-signing
          platform, from zero to 780+ customers and ~100 paying in a year, owning
          product, compliance, and sales end to end. Before that I founded
          RIBBAN, a Shopify Partner agency, served as interim CTO for a
          healthcare company, and sold real estate. I turn
          customer problems into shipped product.
        </p>
      </Section>

      <Section title="Experience">
        <Entry
          title="Product & GTM Lead"
          org="sajn"
          period="2025 – present"
          url="https://www.sajn.se"
        >
          <p className="italic text-zinc-500">
            Swedish B2B e-signing platform owned by RIBBAN, competing with Scrive and Oneflow
          </p>
          <ul>
            <li>
              Grew sajn from 0 to 780+ customers and ~100 paying in 12 months
              (~13% free-to-paid), selling from outbound to close
            </li>
            <li>
              Own product, architecture, and go-to-market in a 3-person team
              targeting Swedish SMB and mid-market
            </li>
            <li>
              Built the eIDAS-compliant PDF signing architecture, and started
              ISO 27001 work ahead of a 2027 audit
            </li>
            <li>
              Built <ExternalLink href="https://www.kvitty.se">Kvitty</ExternalLink>,
              a bookkeeping product with BAS accounts, vouchers, and SIE export
            </li>
          </ul>
        </Entry>

        <Entry
          title="Founder"
          org="RIBBAN"
          period="2020 – present"
          url="https://ribban.co"
        >
          <p className="italic text-zinc-500">
            Stockholm-based digital product agency, official Shopify Partner
          </p>
          <ul>
            <li>
              Built the agency from zero to 50+ clients, owning pre-sales,
              technical scoping, and delivery
            </li>
            <li>
              Led project teams of up to 15 across subcontractors, designers,
              and 3D studios
            </li>
            <li>
              Delivered a Shopify Plus and Shopify Markets rollout across DACH
              and the Nordics for a Swedish D2C brand
            </li>
            <li>
              Designed and built the Shopify store for essnce, a merchant with
              200M+ SEK in GMV, from the ground up, and have run it since
            </li>
            <li>
              Architected a CRM for a business with 100M+ SEK in annual revenue
            </li>
          </ul>
        </Entry>

        <Entry
          title="Interim CTO (part-time)"
          org="Stensjö Vårdresurs"
          period="2023 – 2025"
        >
          <ul>
            <li>
              Led system development and technical project management for a
              Gothenburg healthcare company
            </li>
          </ul>
        </Entry>

        <Entry
          title="Real Estate Agent"
          org="Fastighetsbyrån"
          period="2022 – 2023"
        >
          <ul>
            <li>Sold villas and land in Gothenburg and Marstrand</li>
            <li>Most meetings booked among rookies in Västra Götaland</li>
          </ul>
        </Entry>
      </Section>

      <Section title="Selected builds">
        <ul className="text-sm text-zinc-600 [&_li]:ml-4 [&_li]:list-disc [&_li]:pl-1 space-y-1">
          <li>
            <ExternalLink href="https://cernosearch.com">Cerno</ExternalLink>:
            AI search for e-commerce that routes each query to keyword or
            semantic search
          </li>
          <li>
            <ExternalLink href="https://www.korall.ai">KORALL</ExternalLink>:
            AI product image platform, from model training UX to the generation
            pipeline
          </li>
          <li>
            <ExternalLink href="https://ribban.co/lab/quarry">Quarry</ExternalLink>:
            native macOS database client for six database engines
          </li>
          <li>
            <ExternalLink href="https://github.com/enemyrr/shortlist">shortlist</ExternalLink>:
            open-source library for dynamic tool selection in AI SDK agents
          </li>
        </ul>
      </Section>

      <Section title="Education">
        <Entry
          title="BSc Real Estate Management"
          org="Karlstad University"
          period="2018 – 2021"
        />
      </Section>

      <Section title="Skills">
        <p className="text-sm text-zinc-600">
          Compliance & e-signing (eIDAS, GDPR), B2B sales, Pre-sales,
          Technical scoping, APIs & integrations, Product strategy, UX,
          E‑commerce
        </p>
        <p className="mt-1 text-sm text-zinc-500">
          TypeScript, React, Next.js, Node.js, PostgreSQL, Swift, AWS, AI/LLMs
        </p>
        <p className="mt-1 text-sm text-zinc-500">
          Swedish (native), English (fluent)
        </p>
      </Section>

      <p className="mt-8 text-xs text-zinc-400" data-print-hide>
        Tip: Press Cmd+P to save as PDF, or download it{' '}
        <a
          href="/resume.pdf"
          className="underline decoration-zinc-400 underline-offset-2"
        >
          here
        </a>
        .
      </p>
    </div>
  );
}

function Section({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-6">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ExternalLink({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-zinc-400 underline-offset-2"
    >
      {children}
    </a>
  );
}

function Entry({
  title,
  org,
  period,
  url,
  children
}: {
  title: string;
  org: string;
  period: string;
  url?: string;
  children?: React.ReactNode;
}) {
  const orgEl = url ? <ExternalLink href={url}>{org}</ExternalLink> : org;

  return (
    <div className="mb-4">
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="font-medium">
          {title} @ {orgEl}
        </h3>
        <span className="shrink-0 text-sm text-zinc-500">{period}</span>
      </div>
      {children && (
        <div className="mt-1 text-sm text-zinc-600 [&_li]:ml-4 [&_li]:list-disc [&_li]:pl-1 [&_ul]:space-y-1">
          {children}
        </div>
      )}
    </div>
  );
}
