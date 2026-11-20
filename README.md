# Proposal template

The three-page proposal site (Home, Ways to work, How it goes), set up so a new client only means new text, new logos and maybe new prices.

Right now it's filled in with the Snitch proposal, so you can see how every field looks on the page.

## What changes per client

- `proposal.js` has all the client text: the name, headline, intro, "What I'd be curious about", the offers and their prices, the price note, the next step and the timing line on How it goes.
- `client/` has the three images:
  - `logo.png`, the wordmark that sits in the headline and the footer
  - `favicon.png`, the little icon in the browser tab (square, 64×64 is plenty)
  - `apple-touch-icon.png`, the icon for when someone saves the page on an iPhone (square, 180×180)

Everything else (layout, menu, the three steps on How it goes, your name in the footer) is shared and stays the same.

## Making a new proposal

1. On GitHub, open this repo and click **Use this template**, then **Create a new repository**. Name it after the client, like `acme-proposal`, and make it public so GitHub Pages can host it.
2. Replace the three images in `client/`, keeping the same file names. If the new logo isn't a PNG, change `logo.src` in `proposal.js` to match.
3. In `proposal.js`, set `logo.width` and `logo.height` to the logo's pixel size. Only the shape matters, the size on the page is fixed to the text.
4. Rewrite the text in `proposal.js`. Each field has a short note above it.
5. Prices: change `price` and `unit` on each offer. Use `from: true` for "from £1,200", and `price2` / `unit2` for a second price like a day rate. If the currency changes, update `priceNote` too.
6. To drop an offer, delete its block. To hide one from "At a glance" on Home but keep it on Ways to work, add `onHome: false`. `startWith` picks which offer shows under "Where I'd start".
7. Go to **Settings → Pages**, choose **Deploy from a branch**, then `main` and `/ (root)`. After a minute the site is at `carolinavidalf.github.io/acme-proposal`.

Before sending it, open all three pages and search `proposal.js` for the last client's name so nothing old is left in.

You can also just give Claude the job notes and the logo and ask for a new proposal from the template.

## Changing something for every proposal

Edit it here in the template, not in a client's copy. Proposals you've already sent keep their own version.

- Layout and colours: `style.css`. If you change it, bump the number in `style.css?v=1` in the three HTML files so browsers don't keep the old one.
- The three steps on How it goes: `process.html`.
- The page headings and section labels: the HTML files.
- The menu, footer and how offers are laid out: `render.js`.

The logo size is set on the image itself in `render.js`, so it stays right even if a browser has an old `style.css` cached.
