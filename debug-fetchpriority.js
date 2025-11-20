(() => {
  // Setter trap: logs when code sets fetchPriority attribute on an IMG
  (function installSetterTrap(){
    const orig = Element.prototype.setAttribute;
    Element.prototype.setAttribute = function(name, value) {
      try {
        if ((name === "fetchPriority" || name === "fetchpriority") && this.tagName === "IMG") {
          console.group("fetchPriority being set on IMG");
          console.log({ outerHTML: this.outerHTML, src: this.currentSrc || this.src, name, value });
          console.trace();
          console.groupEnd();
        }
      } catch (e) {}
      return orig.apply(this, arguments);
    };
    console.log("fetchPriority setter trap installed — refresh to catch transient sets.");
  })();

  // MutationObserver backup: logs when the attribute appears on an existing node
  (function installObserver(){
    const obs = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "attributes" && (m.attributeName === "fetchPriority" || m.attributeName === "fetchpriority")) {
          const el = m.target;
          console.group("fetchPriority appeared via MutationObserver");
          console.log({ outerHTML: el.outerHTML, src: el.currentSrc || el.src });
          console.trace();
          console.groupEnd();
        }
      }
    });
    obs.observe(document.documentElement, { subtree: true, childList: true, attributes: true, attributeFilter: ["fetchPriority","fetchpriority"] });
    console.log("MutationObserver installed — refresh to catch attribute addition during hydration.");
  })();
})();
