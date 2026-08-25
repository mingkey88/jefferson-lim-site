export const SITE = {
  name: "Jefferson Lim",
  url: "https://jefferson-lim.com",
  tagline: "Financial Consultant, Singapore",
};

export const NAV = [
  { label: "About Me", href: "/" },
  { label: "My Services", href: "/services" },
  { label: "My Resources", href: "/resources" },
  { label: "Contact Me", href: "/contact" },
];

export const CONTACT = {
  name: "Jefferson Lim",
  role: "Financial Consultant",
  agency: "Lee Jue Rong & Associates",
  agencyNote: "An agency unit of Prudential Assurance Company Singapore",
  addressLines: [
    "1 Pasir Panjang Road",
    "#05-01V Labrador Tower",
    "Singapore 118497",
  ],
  phone: "+65 9298 8326",
  phoneHref: "tel:+6592988326",
  email: "jeffersonlwn@pruadviser.com.sg",
  emailHref: "mailto:jeffersonlwn@pruadviser.com.sg",
  whatsappHref: "https://wa.me/6592988326",
  ecardUrl: "https://sgnamecard.com.sg/prudential/c/8ml5lUcl60zy",
};

/**
 * Only profiles with a confirmed URL are rendered. Jefferson's Facebook page
 * is named in the brief as "Jefferson Lim" but no URL was supplied, so it is
 * held back rather than shipped as a link to facebook.com — a dead link in the
 * footer, and a bad entity signal if it reached the schema's sameAs.
 */
export const SOCIAL = [
  { label: "Instagram", handle: "limjefferson", href: "https://www.instagram.com/limjefferson" },
  {
    label: "LinkedIn",
    handle: "jefferson-lim",
    href: "https://sg.linkedin.com/in/jefferson-lim-a3230626",
  },
];

/** Named in the client brief but still missing a URL. */
export const SOCIAL_PENDING = [{ label: "Facebook", handle: "Jefferson Lim" }];

/**
 * Copy still awaiting Prudential compliance sign-off. Anything listed here
 * renders with a visible "awaiting approval" treatment so it can never be
 * mistaken for finished copy on a live page.
 */
export const PENDING = {
  approvalCode: true,
  testimonial: true,
};
