// Shared header, footer and small effects for every page.
// Needs assets/extra-data.js to be loaded first.
const PAGES = [
  { id: "home",           label: "Home",           href: "index.html" },
  { id: "about",          label: "About",          href: "about.html" },
  { id: "education",      label: "Education",      href: "education.html" },
  { id: "research",       label: "Research",       href: "research.html" },
  { id: "projects",       label: "Projects",       href: "projects.html" },
  { id: "experience",     label: "Experience",     href: "experience.html" },
  { id: "awards",         label: "Awards",         href: "awards.html",         more: true, when: () => typeof AWARDS !== "undefined" && AWARDS.length },
  { id: "certifications", label: "Certifications", href: "certifications.html", more: true, when: () => typeof CERTIFICATIONS !== "undefined" && CERTIFICATIONS.length },
  { id: "volunteering",   label: "Volunteering",   href: "volunteering.html",   more: true, when: () => typeof VOLUNTEERING !== "undefined" && VOLUNTEERING.length },
  { id: "documents",      label: "Documents",      href: "documents.html",      more: true },
  { id: "contact",        label: "Contact",        href: "contact.html" },
];

(function () {
  const current = document.body.dataset.page;
  const visible = PAGES.filter((p) => !p.when || p.when());
  const main = visible.filter((p) => !p.more);
  const more = visible.filter((p) => p.more);
  const cv = typeof SITE !== "undefined" && SITE.CV_FILE ? SITE.CV_FILE : "";

  const link = (p, extra = "") => {
    const active = p.id === current;
    return `<a href="${p.href}" class="nav-link ${active ? "active text-white" : "text-slate-300 hover:text-white"} transition ${extra}">${p.label}</a>`;
  };
  const moreActive = more.some((p) => p.id === current);

  const desktopNav = `
    ${main.map((p) => link(p)).join("")}
    <div class="relative group">
      <button class="nav-link ${moreActive ? "active text-white" : "text-slate-300 hover:text-white"} transition flex items-center gap-1.5" aria-haspopup="true">
        More <i class="fas fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform"></i>
      </button>
      <div class="absolute right-0 top-full pt-4 hidden group-hover:block group-focus-within:block">
        <div class="w-52 rounded-xl border border-slate-700 bg-slate-950/95 backdrop-blur p-2 shadow-2xl">
          ${more.map((p) => `<a href="${p.href}" class="block px-3 py-2 rounded-lg text-sm ${p.id === current ? "text-white bg-slate-800" : "text-slate-300 hover:bg-slate-800 hover:text-white"} transition">${p.label}</a>`).join("")}
        </div>
      </div>
    </div>`;

  const header = `
  <header class="sticky top-0 z-50 bg-slate-950/70 backdrop-blur-md border-b border-slate-800">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="index.html" class="font-bold text-lg tracking-tight text-white flex items-center gap-2.5">
        <span class="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 grid place-items-center text-xs font-extrabold text-white">RM</span>
        <span class="hidden sm:inline">Most Rimi Moni</span>
      </a>
      <nav class="hidden lg:flex items-center gap-7 text-sm font-medium">${desktopNav}</nav>
      <div class="flex items-center gap-3">
        ${cv ? `<a href="${cv}" download class="hidden sm:flex bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition items-center gap-2"><i class="fas fa-download"></i> CV</a>` : ""}
        <a href="https://github.com/riminipa16" target="_blank" rel="noopener" aria-label="GitHub"
           class="hidden sm:flex bg-slate-800/80 hover:bg-slate-700 text-white px-3.5 py-2 rounded-lg text-sm font-medium transition items-center gap-2 border border-slate-700">
          <i class="fab fa-github"></i>
        </a>
        <button id="menu-btn" aria-label="Menu" class="lg:hidden text-slate-200 text-xl px-2"><i class="fas fa-bars"></i></button>
      </div>
    </div>
    <nav id="mobile-menu" class="hidden lg:hidden border-t border-slate-800 px-6 py-3 flex-col gap-3 text-sm font-medium bg-slate-950">
      ${visible.map((p) => link(p, "block py-1")).join("")}
      ${cv ? `<a href="${cv}" download class="block py-1 text-indigo-300"><i class="fas fa-download mr-1"></i> Download CV</a>` : ""}
    </nav>
  </header>`;

  const footer = `
  <footer class="border-t border-slate-800 mt-24 bg-slate-950">
    <div class="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 text-sm">
      <div>
        <p class="font-bold text-white text-base"></p>
        <p class="text-slate-400 mt-2 max-w-xs"></p>
      </div>
      <div>
        <p class="font-semibold text-slate-200 mb-3">Pages</p>
        <div class="grid grid-cols-2 gap-y-2 text-slate-400">
          ${visible.map((p) => `<a href="${p.href}" class="hover:text-indigo-400 transition">${p.label}</a>`).join("")}
        </div>
      </div>
      <div>
        <p class="font-semibold text-slate-200 mb-3">Contact</p>
        <div class="space-y-2 text-slate-400">
          <a href="mailto:riminipa16@gmail.com" class="flex items-center gap-2 hover:text-indigo-400 transition"><i class="fas fa-envelope w-4"></i> riminipa16@gmail.com</a>
          <a href="https://github.com/riminipa16" target="_blank" rel="noopener" class="flex items-center gap-2 hover:text-indigo-400 transition"><i class="fab fa-github w-4"></i> github.com/riminipa16</a>
          ${cv ? `<a href="${cv}" download class="flex items-center gap-2 hover:text-indigo-400 transition"><i class="fas fa-download w-4"></i> Download CV</a>` : ""}
        </div>
      </div>
    </div>
    <div class="border-t border-slate-800/80 py-5 text-center text-xs text-slate-500">
      &copy; ${new Date().getFullYear()} Most Rimi Moni. All rights reserved.
    </div>
  </footer>`;

  document.getElementById("site-header").innerHTML = header;
  document.getElementById("site-footer").innerHTML = footer;

  // Show the CV button anywhere you add <a data-cv ...>
  document.querySelectorAll("[data-cv]").forEach((el) => {
    if (cv) { el.href = cv; el.classList.remove("hidden"); } else el.remove();
  });

  document.getElementById("menu-btn").addEventListener("click", () => {
    const m = document.getElementById("mobile-menu");
    m.classList.toggle("hidden");
    m.classList.toggle("flex");
  });

  // Scroll progress bar + back-to-top + header style
  const bar = document.createElement("div");
  bar.id = "progress";
  document.body.appendChild(bar);
  const top = document.createElement("a");
  top.id = "to-top"; top.href = "#"; top.setAttribute("aria-label", "Back to top");
  top.innerHTML = '<i class="fas fa-arrow-up"></i>';
  top.addEventListener("click", (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); });
  document.body.appendChild(top);
  const hdr = document.querySelector("#site-header header");

  function onScroll() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    top.classList.toggle("show", h.scrollTop > 500);
    hdr.classList.toggle("scrolled", h.scrollTop > 20);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Reveal on scroll (call window.revealScan() after adding elements dynamically)
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); } });
      }, { threshold: 0.12 })
    : null;
  window.revealScan = function () {
    document.querySelectorAll(".reveal:not(.in-view), .reveal-left:not(.in-view)").forEach((el) => {
      io ? io.observe(el) : el.classList.add("in-view");
    });
  };
  window.revealScan();

  // Spotlight that follows the mouse on cards
  document.addEventListener("mousemove", (e) => {
    const c = e.target.closest && e.target.closest(".spot");
    if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", e.clientX - r.left + "px");
    c.style.setProperty("--my", e.clientY - r.top + "px");
  });
})();
