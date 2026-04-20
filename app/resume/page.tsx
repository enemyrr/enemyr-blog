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
          10+ years of shipping digital products. I care about why we build
          something a certain way -- the product decisions, the UX, the
          strategy. I love selling things I genuinely believe in. I've designed
          systems end-to-end for signing platforms, AI tools, CRMs managing
          businesses with 100M+ SEK in revenue, and Shopify stores with 200M+
          SEK in sales. Code is just the tool.
        </p>
      </Section>

      <Section title="Experience">
        <Entry
          title="Product Lead"
          org="sajn"
          period="2025 -- present"
          url="https://www.sajn.se"
        >
          <p className="italic text-zinc-500">
            Swedish B2B e-signing platform competing with Scrive and Oneflow
          </p>
          <ul>
            <li>
              Grew sajn to 150+ paying customers across Swedish SMB and mid-market segments, running sales cycles end-to-end from outbound through close
            </li>
            <li>
              Own product strategy, architecture, and go-to-market for a B2B
              SaaS targeting Nordic mid-market
            </li>
            <li>
              Lead ISO 27001 and eIDAS compliance work, including PDF
              signing architecture and enterprise security requirements
            </li>
          </ul>
        </Entry>

        <Entry
          title="Founder"
          org="RIBBAN"
          period="2020 -- present"
          url="https://ribban.co"
        >
          <p className="italic text-zinc-500">
            Stockholm-based digital product agency, official Shopify Partner
          </p>
          <ul>
            <li>
              Built and scaled a Shopify-focused agency from zero, leading
              pre-sales, technical scoping, and delivery across 20+ client
              engagements
            </li>
            <li>
              Delivered Shopify Plus implementations including international
              expansion via Shopify Markets for a Swedish D2C brand launching
              across DACH and Nordic regions
            </li>
            <li>
              Architected a CRM handling 100M+ SEK in annual revenue and
              advised a Shopify merchant generating 200M+ SEK in GMV
            </li>
            <li>
              Client portfolio spans D2C, B2B, marketplace, and media verticals
              across Nordic and international markets
            </li>
            <li>
              Built <a href="https://www.korall.ai" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2">KORALL</a>, an AI product image platform, from model
              training UX to the generation pipeline
            </li>
          </ul>
        </Entry>

        <Entry
          title="Real Estate Agent"
          org="Fastighetsbyran"
          period="2020 -- 2022"
        >
          <ul>
            <li>Sold villas and land in Gothenburg and Marstrand</li>
            <li>Most meetings booked among rookies in Vastra Gotaland</li>
            <li>Licensed real estate agent -- high-stakes negotiations and client relationships</li>
          </ul>
        </Entry>
      </Section>

      <Section title="Education">
        <Entry
          title="BSc Real Estate Management"
          org="Karlstad University"
          period="2018 -- 2021"
        />
      </Section>

      <Section title="Skills">
        <p className="text-sm text-zinc-600">
          Technical Discovery & Scoping, API Design & Integrations,
          Pre-sales, System Design, Product Strategy, UX, E-commerce,
          Shopify, SaaS, B2B
        </p>
        <p className="mt-1 text-sm text-zinc-500">
          TypeScript, React, Next.js, Node.js, PostgreSQL, REST/GraphQL, AWS, AI/LLMs
        </p>
        <p className="mt-1 text-sm text-zinc-500">
          Swedish (native), English (fluent)
        </p>
      </Section>

      <p className="mt-8 text-xs text-zinc-400" data-print-hide>
        Tip: Press Cmd+P to save as PDF -- or download it{' '}
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
  const orgEl = url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-zinc-400 underline-offset-2"
    >
      {org}
    </a>
  ) : (
    org
  );

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
