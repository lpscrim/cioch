import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Useful Links | Cioch Outdoor Clothing",
  description: "Links to mountain guides, rescue teams, accommodation, and outdoor activities on the Isle of Skye and beyond.",
};

export default function Links() {
  return (
    <div className="px-6 text-text-secondary">
      <h2 className="text-3xl font-bold text-secondary sm:text-4xl text-center mt-10 mb-15">
        Useful Links
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        <div>
          <Section title="Local Mountain Guides" >
            <ExternalLink href="https://www.guidingonskye.co.uk">
              Guiding on Skye (George Yeomans)
            </ExternalLink>
            <ExternalLink href="https://www.blavenguiding.co.uk">
              Blaven Guiding (Richard &#39;Paddy&#39; McGuire)
            </ExternalLink>
            <ExternalLink href="https://www.skyeguides.co.uk">
              Mike Lates Skye Guides
            </ExternalLink>
          </Section>

          <Section title="Fort William Guides">
            <ExternalLink href="https://www.westcoast-mountainguides.co.uk">
              West Coast Mountain Guides (Alan Kimber)
            </ExternalLink>
          </Section>

          <Section title="Mountain Rescue Teams">
            <ExternalLink href="https://www.cmrt.org.uk">
              Cairngorm Mountain Rescue Team
            </ExternalLink>
          </Section>

          <Section title="Equipment">
            <ExternalLink href="https://www.campersbackpack.com">
              Campersbackpack.com
            </ExternalLink>
          </Section>

          <Section title="Information About Skye &amp; Lochalsh">
            <ExternalLink href="https://www.skye.co.uk">
              Skye &amp; Lochalsh - Official Website
            </ExternalLink>
            <ExternalLink href="https://www.visithighlands.com">
              Visit Highlands
            </ExternalLink>
            <ExternalLink href="https://www.uplandpaths.co.uk">
              Skye &amp; Lochalsh Footpath Initiative
            </ExternalLink>
          </Section>
        </div>
        <div>
           <Section title="Walking Holidays">
            <ExternalLink href="https://www.scotmountain.co.uk">
              Mountain Innovations
            </ExternalLink>
          </Section>

          <Section title="Graphic &amp; Web Design">
            <ExternalLink href="https://www.pelican-design.com">
              Pelican Design Consultants
            </ExternalLink>
          </Section>

          <Section title="Virtual Reality Tour &amp; 3D Product Shots">
            <ExternalLink href="https://www.eyeconvista.co.uk">
              eyeCon Vista Ltd.
            </ExternalLink>
          </Section>

          <Section title="Funding &amp; Assistance">
            <ExternalLink href="https://www.hie.co.uk/sale">
              Skye &amp; Lochalsh Enterprise
            </ExternalLink>
          </Section>

          <Section title="Accommodation">
            <ExternalLink href="https://www.scottishhighlandholidays.co.uk">
              North West Scotland
            </ExternalLink>
            <ExternalLink href="https://www.skyebasecamp.co.uk">
              Skye Basecamp, Broadford
            </ExternalLink>
            <ExternalLink href="https://www.taighmhuirne.co.uk/">
              Taigh Mhuirne, Portree
            </ExternalLink>
          </Section>

          <Section title="Things to do">
            <ExternalLink href="https://www.skyemusic.co.uk">
              Isle of Skye Accordion &amp; Fiddle Club
            </ExternalLink>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <ul className="list-disc list-inside space-y-1">{children}</ul>
    </div>
  );
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary underline hover:text-text transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
