# PRODUCT.md — Jefferson Lim

## What this is

The personal practice site for **Jefferson Lim**, a financial consultant with **Lee Jue Rong & Associates**, an agency unit of **Prudential Assurance Company Singapore**.

It is a credibility-and-contact surface, not a product. A visitor arrives from a name card, a QR code, a LinkedIn profile, or a referral, and needs to decide within about a minute whether this is someone they would trust with their family's money. Then they need an easy way to start a conversation.

## The unique mechanism

Jefferson spent his whole corporate career **inside** finance — auditor, financial controller, capital raiser, and finally the person who built the finance department of a new Singapore public hospital from nothing. He advises now from the operator's side of the desk, not the salesperson's.

The hospital-finance chapter is the differentiator: he has watched, at close range, what a medical crisis does to a family's finances. That is why his planning integrates **financial, legal and healthcare** decisions rather than treating them as three separate errands.

## Audience

Singapore residents, roughly 35–60, with dependents and something to protect. Healthcare professionals are an over-represented and well-understood segment, but the practice is deliberately **not** limited to them — Jefferson's stated position is that financial planning is for everyone, not just the wealthy.

The real scene: someone reading on a phone, at night, after a parent's diagnosis or a colleague's death has made them realise nothing is in place.

## What the visitor must believe

1. This person understands money at a professional depth, not a sales-script depth.
2. He will explain things in plain language and will not rush me.
3. Starting a conversation costs me nothing and commits me to nothing.

## Primary action

Submit the contact form, or call / email directly. Everything on the site funnels to **Contact Me**.

## Site structure (client-specified)

Four visible pages. **About Me is the landing page** — there is no separate home route.

| Route | Nav label | Job |
|---|---|---|
| `/` | About Me | Who he is, why he does this, why he can be trusted |
| `/services` | My Services | The five planning pillars, plus the estate-planning specialism |
| `/resources` | My Resources | Two reference frameworks clients can read for themselves |
| `/contact` | Contact Me | Form, direct details, social, location |
| `/ad-personal` | *(unlinked)* | Standalone landing page for paid/ad traffic |

## The five service pillars (client copy)

Framed under **"Peace of Mind — All Plans in Place"** with the sign-off **"Plan Today, Enjoyed Tomorrow"**:

1. **Financial Goals Defined** — clarity creates confidence
2. **Budget Managed** — the foundation of financial peace of mind
3. **Protection Secured** — stability during uncertain times
4. **Investment Growing** — money working over time
5. **Retirement Planned** — freedom to live on your own terms

Estate planning (Wills, LPA, AMD, ACP, trusts, cross-border, business succession) is Jefferson's deep specialism and sits **beneath** the five pillars, not instead of them.

## Career facts (verified, from existing site copy)

- Business development at a construction firm, then four years in audit
- Financial Controller, Korean ocean-park resort development outside Seoul — helped raise ~USD 500 million in bonds through the Singapore market
- Capital raising for an industrial and residential park development, Vietnam
- Singapore telecommunications sector
- Singapore public healthcare — built a new public hospital's finance function from the ground up
- Retired from corporate life after the hospital opened; became a consultant

## Contact truth

- **Jefferson Lim**, Financial Consultant
- Lee Jue Rong & Associates — an agency unit of Prudential Assurance Company Singapore
- 1 Pasir Panjang Road, #05-01V Labrador Tower, Singapore 118497
- Mobile: **9298 8326** (`tel:+6592988326`)
- Email: **jeffersonlwn@pruadviser.com.sg**
- Facebook: Jefferson Lim · Instagram: limjefferson · LinkedIn: `sg.linkedin.com/in/jefferson-lim-a3230626`

## Brand commitments (pinned by client — not open to redesign)

- **Dark blue ground, golden headings, white body text.** Stated verbatim in the client's design brief.
- **Pill-shaped gold navigation** with a circular monogram mark, as drawn in the client's mockup.
- Four nav labels, in order: About Me · My Services · My Resources · Contact Me.

## Constraints

- **Regulated financial services.** Every factual claim, testimonial, and disclosure is subject to Prudential compliance review. Nothing may be invented: no fabricated testimonials, no performance figures, no client names, no capability claims.
- Any placeholder awaiting compliance sign-off must be **visibly marked** as such, never dressed up as finished copy.
- Static site (Astro, no server). The contact form needs a real host-side handler before launch.

## Open items requiring Jefferson

- Testimonial quote + attributor (compliance-reviewed)
- Prudential advertising reference / approval code for the footer and the two resource frameworks
- Intro video (optional)
- Confirmed Facebook and Instagram profile URLs
