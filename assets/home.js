// Home page animations: particle network, typing roles, count-up numbers.
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Typing effect ----------
  const roles = [
    "Machine Learning Researcher",
    "Explainable AI Enthusiast",
    "Predictive Modeling Practitioner",
    "Future Erasmus Mundus Scholar",
  ];
  const typed = document.getElementById("typed");
  if (typed) {
    if (reduce) { typed.textContent = roles[0]; }
    else {
      let r = 0, c = 0, deleting = false;
      (function tick() {
        const word = roles[r];
        typed.textContent = word.slice(0, c);
        let delay = deleting ? 35 : 75;
        if (!deleting && c === word.length) { deleting = true; delay = 1600; }
        else if (deleting && c === 0) { deleting = false; r = (r + 1) % roles.length; delay = 350; }
        c += deleting ? -1 : 1;
        setTimeout(tick, delay);
      })();
    }
  }

  // ---------- Particle network in the hero ----------
  const canvas = document.getElementById("net");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let w, h, dpr, nodes = [];
    const mouse = { x: -9999, y: -9999 };

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(28, Math.min(80, Math.round((w * h) / 16000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.8,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      const maxD = 130;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        if (!reduce) {
          a.x += a.vx; a.y += a.vy;
          if (a.x < 0 || a.x > w) a.vx *= -1;
          if (a.y < 0 || a.y > h) a.vy *= -1;
          const dx = a.x - mouse.x, dy = a.y - mouse.y, d = Math.hypot(dx, dy);
          if (d < 110) { a.x += (dx / d) * 0.8; a.y += (dy / d) * 0.8; }
        }
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < maxD) {
            ctx.strokeStyle = `rgba(129,140,248,${(1 - d / maxD) * 0.35})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        ctx.fillStyle = "rgba(165,180,252,.8)";
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
      }
      if (!reduce) requestAnimationFrame(draw);
    }

    const hero = canvas.parentElement;
    hero.addEventListener("mousemove", (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    });
    hero.addEventListener("mouseleave", () => { mouse.x = mouse.y = -9999; });
    window.addEventListener("resize", resize);
    resize(); draw();
  }

  // ---------- Count-up numbers ----------
  const counters = document.querySelectorAll("[data-count]");
  function run(el) {
    const target = parseFloat(el.dataset.count);
    const dec = parseInt(el.dataset.decimals || "0", 10);
    const suffix = el.dataset.suffix || "";
    const fmt = (v) => v.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suffix;
    if (reduce) { el.textContent = fmt(target); return; }
    const t0 = performance.now(), dur = 1800;
    (function step(now) {
      const p = Math.min((now - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * eased);
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } }), { threshold: 0.5 });
    counters.forEach((c) => io.observe(c));
  } else counters.forEach(run);
})();
