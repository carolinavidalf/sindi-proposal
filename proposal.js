// Everything client-specific lives in this file.
// For a new proposal, change the text below and swap the three images in the client/ folder.
// Text can include simple HTML, like <a href="...">a link</a> or <em>emphasis</em>.

window.PROPOSAL = {

  // ---- The client ----
  client: "Snitch",
  tabTitle: "Working with Snitch",   // shown in the browser tab on the Home page

  // The logo sits at the end of the headline and in the footer.
  // Its size is set on the image itself, so it always matches the text height.
  // width and height are the image's real pixel size (only the ratio matters).
  logo: { src: "client/logo.png", width: 515, height: 180 },

  // ---- Home ----
  headline: "Ways we could work together on",   // the logo goes right after this

  intro: "You mentioned people mostly open Snitch to unlock an app or answer a friend's request. It's a screen-time app, so you don't want them spending time in it anyway. Most of it happens in tiny moments, like checking the pot, asking a friend for 15 more minutes, or approving someone else's request. So I'd focus on those, and on how the app feels when you use it.",

  curious: {
    opener: "One of your App Store reviews says Snitch is &ldquo;just harsh enough to actually stop you using the apps, but not so harsh that you'll delete the app.&rdquo; That balance is what I'd keep in mind for all of this.",
    items: [
      { title: "Consistency", text: "Does the app feel like one thing from screen to screen, and the same on iPhone and Android now that Android is out? And is the Figma file set up so your team can keep it that way?" },
      { title: "Flows", text: "Unlocking, begging the pot for more time, and approving a friend's request. People do it all the time, so it should take seconds." },
      { title: "Copy", text: "Your website already sounds like friends talking. I'd check the app keeps that voice in the small moments, like the reason prompt or when someone eats the pot." },
      { title: "Paying", text: "How free, solo premium and group premium come across, what happens when the 14-day trial ends, and how invite codes fit in." },
      { title: "Getting offline", text: "How the hours you save turn into plans with friends, since that's what makes it feel rewarding and not just restrictive." }
    ],
    note: "This is a first take from our call."
  },

  // Which offer shows under "Where I'd start" on Home (use its id from the list below).
  startWith: "small",

  nextStep: "If the small first project sounds good, just reply to my email and we'll find a start date. If you'd rather start with something else, tell me and we can talk it through.",

  // ---- Prices ----
  // Shown under the prices on Home and on Ways to work.
  priceNote: "Prices are in pounds and a day means around 7 hours. If something doesn't fit the budget, tell me and we'll shrink the scope.",

  // ---- Offers ----
  // group: the grey label on Ways to work. Offers with the same group sit together, in this order.
  // icon: flag, scan, layers, sliders or clock.
  // price + unit: "£1,200" + "about 2 days". from: true adds a small "from" before the price.
  // price2 + unit2: an optional second price, like a day rate.
  // homeText: optional longer text for when this offer is shown on Home.
  // onHome: false hides it from "At a glance" on Home.
  offers: [
    {
      id: "small",
      group: "Start small",
      icon: "flag",
      name: "A small first project",
      price: "£1,200", unit: "about 2 days",
      text: "Pick the one thing that matters most to you right now and we go deep on it together. We choose it after I've spent proper time in the app, so it's based on what I actually see and on what you know about your users. You get the designs and a walkthrough call where I go through everything.",
      homeText: "Pick the one thing that matters most to you right now and we go deep on it together. We choose it after I've spent time in the app, so it's based on what I actually see and on what you know about your users. You get the designs and a walkthrough call where I go through everything. It's also an easy way to see how we work together before anything bigger."
    },
    {
      id: "review",
      group: "Go bigger",
      icon: "scan",
      name: "A review of the core flows",
      price: "£1,800", unit: "about 3 days",
      text: "I go through the main flows twice, once like a brand new user and once like someone who's been using it for a while, and I look at the copy and how consistent things feel from screen to screen. You get a list of what I'd fix first and why, mockups of the top changes, and a call where I walk you through it all."
    },
    {
      id: "figma",
      group: "Go bigger",
      icon: "layers",
      name: "Figma foundations",
      price: "£1,200", from: true,
      text: "Tidying how the design is built so the app feels like one thing and your team can move faster, from components and styles to how the Figma file is organised. It's especially handy around a redesign. The size depends on what you already have, so I'd start by having a look at your current file. If you need a full design system, I'd scope it after the first project."
    },
    {
      id: "pack",
      group: "Go bigger",
      icon: "sliders",
      name: "A focused pack",
      price: "£1,200", from: true,
      onHome: false,
      text: "For after a first project, when you want to keep going one topic at a time, like a flow, the UX copy, or what helps people decide to pay. We agree the scope together and it's priced in days."
    },
    {
      id: "time",
      group: "Over time",
      icon: "clock",
      name: "By the hour or by the day",
      price: "£90", unit: "per hour",
      price2: "£600", unit2: "per day",
      text: "For smaller things as they come up, whenever you'd rather just book some time. It can also be a regular thing, like one day a week where I take one feature at a time from a rough idea to something ready to build. We check in at the end of each month and can pause or change it at any point."
    }
  ],

  // ---- How it goes ----
  // The three steps are the same for every client. This line under them changes with the offers.
  timing: "A small project is about 2 days of work, usually spread over a week or two so there's time for your feedback. A review of the core flows takes about two weeks. Both depend on how fast I can get access and feedback."
};
