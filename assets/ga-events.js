(function () {
  "use strict";

  function send(name, params) {
    try {
      if (typeof window.gtag !== "function") return;
      window.gtag("event", name, Object.assign({ transport_type: "beacon" }, params || {}));
    } catch (_) {
      /* analytics must never block navigation */
    }
  }

  function linkText(el) {
    var text = (el.textContent || "").replace(/\s+/g, " ").trim();
    return text ? text.slice(0, 100) : undefined;
  }

  function onClick(event) {
    var target = event.target;
    if (!target || typeof target.closest !== "function") return;
    var anchor = target.closest("a[href]");
    if (!anchor) return;
    var href = anchor.href || "";
    if (!href) return;

    var params = { link_url: href };
    var text = linkText(anchor);
    if (text) params.link_text = text;

    if (/buy\.stripe\.com/i.test(href)) {
      send("premium_skill_click", params);
      return;
    }
    if (/amazon\.com|amzn\.to/i.test(href)) {
      send("book_click", params);
    }
  }

  if (typeof document !== "undefined") {
    document.addEventListener("click", onClick, true);
  }
})();
