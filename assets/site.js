(function () {
  var KEY = "familysafe-lang";
  function apply(lang) {
    document.documentElement.lang = lang === "en" ? "en" : "vi";
    document.querySelectorAll("[data-lang]").forEach(function (el) {
      el.hidden = el.getAttribute("data-lang") !== lang;
    });
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-set-lang") === lang ? "true" : "false");
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }
  function startLang() {
    try {
      var saved = localStorage.getItem(KEY);
      if (saved === "en" || saved === "vi") return saved;
    } catch (e) {}
    return ((navigator.language || "").toLowerCase().indexOf("en") === 0) ? "en" : "vi";
  }
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () { apply(btn.getAttribute("data-set-lang")); });
    });
    apply(startLang());
  });
})();
