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
          width={100}
          height={100}
          className="object-cover"
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
          10+ years of creating digital products. I care about why we build
          something a certain way -- the product decisions, the UX, the
          strategy. I love selling things I genuinely believe in. I've designed
          systems end-to-end for signing platforms, AI tools, CRMs managing
          businesses with 100M+ SEK in revenue, and a Shopify store with 200M+
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
          <ul>
            <li>
              Designed the entire system architecture, UX, and product strategy
              from scratch
            </li>
            <li>
              Shaped the signing experience to replace the print-scan-email
              era with AI-driven contract workflows
            </li>
          </ul>
        </Entry>

        <Entry
          title="Founder"
          org="RIBBAN"
          period="2020 -- present"
          url="https://ribban.co"
        >
          <ul>
            <li>
              Founded and grew the agency from zero -- sales, client
              relationships, and product direction for every project.
              Official Shopify Partner.
            </li>
            <li>
              Designed CRM systems for businesses managing 100M+ SEK in revenue
              and a Shopify store generating 200M+ SEK in sales
            </li>
            <li>
              Shipped products across 17+ markets: ESSNCE, Nineteen Student,
              GULD.com, Matpriskollen, EventTjanster
            </li>
            <li>
              Built <a href="https://www.korall.ai" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2">KORALL</a>, an AI product image platform -- from model
              training UX to the generation pipeline, solving how existing AI
              tools mangle text and branding
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
        Tip: Press Cmd+P to save as PDF.
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
