// Fills the pages from proposal.js. You shouldn't need to edit this file.
(function () {
  var P = window.PROPOSAL;
  var page = document.body.getAttribute("data-page");

  var ICONS = {
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
    scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="m16 16-1.9-1.9"/>',
    layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/>',
    sliders: '<line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'
  };

  function attr(s) { return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;"); }
  function fill(id, html) { var el = document.getElementById(id); if (el) el.innerHTML = html; }

  // The logo's size is set right on the image, so it doesn't depend on style.css being fresh.
  function logo(style) {
    var l = P.logo;
    return '<img src="' + attr(l.src) + '" alt="' + attr(P.client) + '" width="' + l.width + '" height="' + l.height + '" style="' + style + '">';
  }
  var LOGO_HEADLINE = "height:1.15em;width:auto;vertical-align:-0.18em;margin-left:0.05em";
  var LOGO_FOOTER = "height:20px;width:auto;align-self:center;display:block";

  function priceHtml(o) {
    var s = (o.from ? "<small>from</small> " : "") + o.price + (o.unit ? " <small>" + o.unit + "</small>" : "");
    if (o.price2) s += " · " + o.price2 + (o.unit2 ? " <small>" + o.unit2 + "</small>" : "");
    return s;
  }

  function offerHtml(o, text) {
    var icon = ICONS[o.icon] || ICONS.flag;
    return '<div class="way"><div class="way-head"><div class="name">' +
      '<svg class="ic" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + icon + '</svg>' +
      o.name + '</div><div class="price">' + priceHtml(o) + '</div></div>' +
      '<p class="desc">' + text + '</p></div>';
  }

  // Menu and footer, same on every page
  var nav = [["index.html", "Home", "home"], ["ways.html", "Ways to work", "ways"], ["process.html", "How it goes", "process"]];
  fill("menu", nav.map(function (n) {
    return '<a href="' + n[0] + '"' + (n[2] === page ? ' aria-current="page"' : "") + ">" + n[1] + "</a>";
  }).join(""));
  fill("footer", "<span>Caro Fernandes</span>" + logo(LOGO_FOOTER));

  if (page === "home") {
    if (P.tabTitle) document.title = P.tabTitle;
    fill("headline", P.headline + " " + logo(LOGO_HEADLINE));
    fill("intro", P.intro);
    fill("curious",
      "<p>" + P.curious.opener + "</p>" +
      P.curious.items.map(function (i) {
        return '<div class="item"><h2>' + i.title + "</h2><p>" + i.text + "</p></div>";
      }).join("") +
      (P.curious.note ? '<p class="fine">' + P.curious.note + "</p>" : ""));
    fill("glance", P.offers.filter(function (o) { return o.onHome !== false; }).map(function (o) {
      return '<a href="ways.html"><span>' + o.name + '</span><span class="p">' + priceHtml(o) + "</span></a>";
    }).join(""));
    fill("price-note", P.priceNote);
    var start = P.offers.filter(function (o) { return o.id === P.startWith; })[0] || P.offers[0];
    fill("start", offerHtml(start, start.homeText || start.text) +
      '<p class="fine"><a href="ways.html">See all the ways to work together</a></p>');
    fill("next-step", P.nextStep);
  }

  if (page === "ways") {
    var groups = [];
    P.offers.forEach(function (o) {
      var g = groups.filter(function (x) { return x.name === o.group; })[0];
      if (!g) { g = { name: o.group, offers: [] }; groups.push(g); }
      g.offers.push(o);
    });
    fill("ways", groups.map(function (g, i) {
      var last = i === groups.length - 1;
      return '<section class="row' + (i === 0 ? " first" : "") + '"><div class="label">' + g.name + "</div><div>" +
        g.offers.map(function (o) { return offerHtml(o, o.text); }).join("") +
        (last ? '<p class="fine">' + P.priceNote + "</p>" : "") +
        "</div></section>";
    }).join(""));
  }

  if (page === "process") {
    fill("timing", P.timing);
    fill("next-step", P.nextStep);
  }
})();
