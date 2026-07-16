export function stackPage(t) {
  const levels = { Expert: 95, Advanced: 80, Intermediate: 65 };
  const colors = [
    "from-yellow-500/20 to-yellow-600/10",
    "from-emerald-500/20 to-emerald-600/10",
    "from-purple-500/20 to-purple-600/10",
    "from-orange-500/20 to-orange-600/10",
    "from-blue-500/20 to-blue-600/10",
    "from-sky-500/20 to-sky-600/10",
    "from-red-500/20 to-red-600/10",
    "from-cyan-500/20 to-cyan-600/10",
  ];
  const initials = ["JS", "Py", "C#", "Ja", "C", "Lu", "H", "SQL"];

  return `
    <section class="min-h-[calc(100vh-4rem)] py-20">
      <div class="max-w-6xl mx-auto px-6">
        <div class="mb-16">
          <span class="text-sm font-medium tracking-widest uppercase" style="color:var(--accent)">${t.stack.skills}</span>
          <h2 class="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">${t.stack.title}</h2>
          <p class="text-lg text-[var(--text-secondary)] mt-4 max-w-2xl">${t.stack.desc}</p>
        </div>
        <div class="space-y-12">
          <div>
            <h3 class="text-sm font-medium tracking-wider uppercase mb-6" style="color:var(--text-secondary)">${t.stack.languages}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              ${t.stack.langNames.map((name, i) => `
                <div class="glass rounded-xl p-5 tech-card stagger-${i + 1} scroll-reveal">
                  <div class="flex items-center gap-3 mb-3">
                    <span class="flex-shrink-0">
                      <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" opacity="0.2"/>
                        <text x="12" y="16" text-anchor="middle" fill="currentColor" font-size="10" font-weight="bold">${initials[i]}</text>
                      </svg>
                    </span>
                    <div>
                      <div class="text-sm font-medium">${name}</div>
                      <div class="text-xs mt-0.5" style="color:var(--accent)">${t.stack.levels[['Expert','Advanced','Advanced','Upper-Intermediate','Intermediate','Advanced','Expert','Intermediate'][i]] || name}</div>
                    </div>
                  </div>
                  <div class="h-1 rounded-full overflow-hidden" style="background:var(--border)">
                    <div class="h-full rounded-full bg-gradient-to-r ${colors[i]}" style="width:${levels[['Expert','Advanced','Advanced','Intermediate','Intermediate','Advanced','Expert','Intermediate'][i]] || 65}%"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          <div>
            <h3 class="text-sm font-medium tracking-wider uppercase mb-6" style="color:var(--text-secondary)">${t.stack.frameworks}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              ${t.stack.fwList.map((fw, i) => `
                <div class="glass rounded-xl px-4 py-3 text-sm text-center hover-scale stagger-${i + 1} scroll-reveal" style="transition:all 0.2s ease">${fw}</div>
              `).join('')}
            </div>
          </div>
          <div>
            <h3 class="text-sm font-medium tracking-wider uppercase mb-6" style="color:var(--text-secondary)">${t.stack.databases}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              ${t.stack.dbList.map((db, i) => `
                <div class="glass rounded-xl px-4 py-3 text-sm text-center hover-scale stagger-${i + 1} scroll-reveal" style="transition:all 0.2s ease">${db}</div>
              `).join('')}
            </div>
          </div>
          <div>
            <h3 class="text-sm font-medium tracking-wider uppercase mb-6" style="color:var(--text-secondary)">${t.stack.gameDev}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              ${t.stack.gdList.map((g, i) => `
                <div class="glass rounded-xl px-4 py-3 text-sm text-center hover-scale stagger-${i + 1} scroll-reveal" style="transition:all 0.2s ease">${g}</div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
