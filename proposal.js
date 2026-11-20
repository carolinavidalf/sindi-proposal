// Everything client-specific lives in this file.
// For a new proposal, change the text below and swap the three images in the client/ folder.
// Text can include simple HTML, like <a href="...">a link</a> or <em>emphasis</em>.

window.PROPOSAL = {

  // ---- The client ----
  client: "Sindi",
  tabTitle: "Working with Sindi",   // shown in the browser tab on the Home page

  // The logo sits at the end of the headline and in the footer.
  // Its size is set on the image itself, so it always matches the text height.
  // width and height are the image's real pixel size (only the ratio matters).
  logo: { src: "client/logo.png", width: 332, height: 92, headlineHeight: 0.82, headlineOffset: -0.06 },

  // ---- Home ----
  headline: "How I'd work with",   // the logo goes right after this

  intro: "Sindi is live and people use it every day, so this isn't about a big redesign. It's about picking up tickets, thinking the flow through, and handing back screens that are ready to build. Here's how that would go with me, a few things I noticed on your site, and some work that's close to what you need.",

  curious: {
    opener: "Your referral tracking page says &ldquo;No calls. No guessing.&rdquo; That's pretty much the bar I'd hold every screen to.",
    items: [
      { title: "Two sides, one referral", text: "The dentist sending a referral often doesn't even have an account. They just fill in the form on the specialist's website, while the specialist lives in the dashboard. I'd be curious how the sender finds out what happened next without picking up the phone, and how that feels on mobile." },
      { title: "Phase and status", text: "Every case has a phase (Accepted, Consultation, Treatment...) and a status (Scheduled, Unscheduled, Elapsed...). When an office manager is handling 300+ referrals, what jumps out first? I'd want the cases that need someone today to be impossible to miss." },
      { title: "Free to Pro", text: "General dentists can send referrals for free with no time limit, and Pro adds things like patient texting, big CBCT files, custom forms and analytics. Since you're focused on product-led growth, I'd be curious where in the app people first run into those, and whether it feels useful or like a wall." }
    ],
    note: "This is just from your public site and the job post, I haven't seen the app yet."
  },

  // Which offer shows under "Where I'd start" on Home (use its id from the list below).
  startWith: "ticket",

  nextStep: "If this sounds like a fit, reply on Contra and we can do a quick call. My answers to your three questions and my rate are in my application, and you can see more of my work on <a href=\"https://contra.com/carolina_fernandes_5ggrp9rx\">my Contra profile</a>.",

  // ---- Prices ----
  // Left empty on purpose: the rate is in the Contra application, so no prices on this page.
  priceNote: "",

  // ---- Offers ----
  // Used here as the content blocks, with no prices (price is left empty, so nothing shows).
  // group: the grey label on Ways to work. Offers with the same group sit together, in this order.
  // icon: flag, scan, layers, sliders or clock.
  offers: [
    {
      id: "ticket",
      group: "How a ticket goes",
      icon: "flag",
      name: "From a ticket to build-ready screens",
      price: "",
      text: "You send me a GitHub ticket, or we have a quick chat about it. I work out the flow first (who's doing this, what they need, the edge cases), then design it in Figma inside your design system so it's ready to build. If there's more than one good way to do it, I show you the options and why, and you make the call. I build in Cursor and Claude Code too, so I know what makes a design easy to hand over.",
      homeText: "You send me a GitHub ticket, or we have a quick chat about it. I work out the flow first, then design it in Figma inside your design system so it's ready to build. If there's more than one good way to do it, I show you the options and why, and you make the call. Most things would take hours or a couple of days, not weeks."
    },
    {
      id: "catchswim",
      group: "Work that's close to this",
      icon: "layers",
      name: "Catch Swim, a design system made for Claude Code",
      price: "",
      text: "Catch Swim is a swim training app I'm working with right now. I redesigned the app and built the whole design system so the founder can build it himself with Claude Code, and change the design on his own, fast and without breaking it. It's not live yet, but it's really close to how you work, with an engineer building from what I design."
    },
    {
      id: "pipeline",
      group: "Work that's close to this",
      icon: "scan",
      name: "A sourcing pipeline someone uses every day",
      price: "",
      text: "For a recruiter client I built a candidate sourcing pipeline in Clay. It's an internal tool, but she's in it every day, so I owned both how it works and how it reads. UX: instead of keyword searches, it looks where strong people already show up (conference talks, GitHub, X), checks each person against her rules, and has a Status column so the table <em>is</em> her pipeline. UI: I split the AI output into Verdict, Summary and Most relevant project, moved the verdict to the far left, hid the columns that only exist to build each row, and gave every match one link to the proof."
    },
    {
      id: "me",
      group: "About me",
      icon: "sliders",
      name: "Product design and design systems",
      price: "",
      text: "5+ years in product design and design systems. I've also been designing and teaching at Memorisely for around five years, including their AI design engineer bootcamp, where we reverse-engineer real apps into design systems."
    },
    {
      id: "time",
      group: "About me",
      icon: "clock",
      name: "10 hours a week, on your mornings",
      price: "",
      text: "I'm in Lisbon, so I can overlap with your mornings Pacific time for calls and quick back and forth, and keep going on tickets after that. Happy to start December 1."
    }
  ],

  // ---- How it goes ----
  // The three steps are the same for every client. This line under them changes with the offers.
  timing: "Most tickets take hours or a couple of days, depending on the size and how fast I get answers. Bigger flows I'd split into smaller pieces so you see progress early."
};
