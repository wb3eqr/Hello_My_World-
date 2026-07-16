export function projectsPage(t) {
  const gradients = [
    "from-[var(--accent)]/20 to-purple-600/10",
    "from-emerald-500/20 to-cyan-600/10",
    "from-rose-500/20 to-orange-600/10",
    "from-sky-500/20 to-indigo-600/10",
  ];
  const icons = [
    '<path d="M2 8l4-4h12l4 4-10 14L2 8z"/><path d="M2 8l10 2 10-2"/><path d="M12 22V10"/>',
    '<rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="8" cy="16" r="1" fill="currentColor"/><circle cx="16" cy="16" r="1" fill="currentColor"/><path d="M9 7h6"/><path d="M12 7v4"/><path d="M8 11V7a4 4 0 018 0v4"/><path d="M6 11H3v3"/><path d="M18 11h3v3"/><path d="M12 21v-2"/>',
    '<rect x="2" y="6" width="20" height="12" rx="3"/><circle cx="8" cy="10" r="1" fill="currentColor"/><circle cx="16" cy="10" r="1" fill="currentColor"/><circle cx="12" cy="14" r="1" fill="currentColor"/><path d="M8 14h8"/><path d="M6 10v2"/><path d="M18 10v2"/>',
    '<circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="4" ry="10"/><path d="M2 12h20"/>',
  ];

  return `
    <section class="min-h-[calc(100vh-4rem)] py-20">
      <div class="max-w-6xl mx-auto px-6">
        <div class="mb-16">
          <span class="text-sm font-medium tracking-widest uppercase" style="color:var(--accent)">${t.projects.work}</span>
          <h2 class="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">${t.projects.title}</h2>
          <p class="text-lg text-[var(--text-secondary)] mt-4 max-w-2xl">${t.projects.desc}</p>
        </div>
        <div class="grid md:grid-cols-2 gap-6 mb-12">
          ${t.projects.items.map((item, i) => `
            <div class="glass rounded-2xl overflow-hidden project-card stagger-${i + 1} scroll-reveal">
              <div class="relative h-56 bg-gradient-to-br ${gradients[i]} flex items-center justify-center overflow-hidden">
                <div class="select-none flex items-center justify-center" style="animation:float ${4 + i * 0.5}s ease-in-out infinite ${i * 0.5}s">
                  <svg class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.35">${icons[i]}</svg>
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-[var(--bg)] to-transparent"></div>
                ${item.tag ? `<div class="absolute bottom-4 left-4"><span class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium">${item.tag}</span></div>` : ''}
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">${item.title}</h3>
                <p class="text-sm leading-relaxed mb-4" style="color:var(--text-secondary)">${item.desc}</p>
                <div class="flex flex-wrap gap-2">
                  ${item.tags.map(tag => `<span class="px-3 py-1 rounded-full text-xs" style="background:var(--border);color:var(--text-secondary)">${tag}</span>`).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="text-center">
          <a href="https://github.com/wb3eqr" target="_blank" rel="noopener" class="btn-glass inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            ${t.projects.seeAll}
          </a>
        </div>
      </div>
    </section>
  `;
}
