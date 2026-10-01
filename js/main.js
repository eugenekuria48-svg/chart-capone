// Chart Capone - Main JS
(function () {
  const WHATSAPP_NUMBER = "254748021671"; // 0748021671 in international format

  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  // Sticky navbar
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    });
  }

  // Mobile menu
  if (toggle && mobileMenu) {
    toggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
      document.body.style.overflow = mobileMenu.classList.contains("open") ? "hidden" : "";
    });
    mobileMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  // FAQ accordion
  document.querySelectorAll(".faq-q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      const isOpen = answer.classList.contains("open");
      document.querySelectorAll(".faq-a").forEach((a) => a.classList.remove("open"));
      if (!isOpen) answer.classList.add("open");
    });
  });

  // Form → WhatsApp
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const lines = [];

      lines.push("*New message from Chart Capone website*");
      lines.push("");

      // Collect all fields
      for (const [key, value] of data.entries()) {
        if (value && String(value).trim()) {
          const label = key
            .replace(/([A-Z])/g, " $1")
            .replace(/[_-]/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase())
            .trim();
          lines.push("*" + label + ":* " + String(value).trim());
        }
      }

      // Fallback if no named fields (some forms use unlabeled inputs)
      if (lines.length <= 2) {
        const inputs = form.querySelectorAll("input, select, textarea");
        inputs.forEach((el) => {
          if (el.type === "submit" || el.type === "button") return;
          const val = el.value && el.value.trim();
          if (!val) return;
          let label = el.getAttribute("placeholder") || el.getAttribute("name") || el.previousElementSibling?.textContent || el.tagName;
          label = label.replace(/\*/g, "").trim();
          lines.push("*" + label + ":* " + val);
        });
      }

      lines.push("");
      lines.push("_Sent via Chart Capone website_");

      const message = lines.join("\n");
      const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);

      // Open WhatsApp
      window.open(url, "_blank");

      // Optional: reset form after a short delay
      setTimeout(() => form.reset(), 500);
    });
  });
})();
