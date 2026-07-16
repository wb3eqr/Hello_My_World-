export function heroPage(t) {
  return `
    <section class="min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden">
      <div class="max-w-6xl mx-auto px-6 w-full py-20">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="flex-1 space-y-8">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[var(--text-secondary)] stagger-1" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              ${t.hero.available}
            </div>
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] stagger-2" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
              ${t.hero.title1}<br/>
              <span class="gradient-text">${t.hero.title2}</span><br/>
              ${t.hero.title3}
            </h1>
            <p class="text-lg sm:text-xl text-[var(--text-secondary)] max-w-xl leading-relaxed stagger-3" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
              ${t.hero.desc}
            </p>
            <div class="flex flex-wrap gap-4 stagger-4" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
              <a href="/projects" data-nav class="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm">
                ${t.hero.cta}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
              <a href="/contact" data-nav class="btn-glass inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm">
                ${t.hero.contact}
              </a>
            </div>
            <div class="flex items-center gap-8 pt-4 stagger-5" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
              <div class="flex -space-x-2">
                <div class="w-8 h-8 rounded-full bg-[#6C63FF]/20 border-2 border-[var(--bg)] flex items-center justify-center text-xs font-bold" style="color:var(--text)">JS</div>
                <div class="w-8 h-8 rounded-full bg-emerald-500/20 border-2 border-[var(--bg)] flex items-center justify-center text-xs font-bold" style="color:var(--text)">Py</div>
                <div class="w-8 h-8 rounded-full bg-amber-500/20 border-2 border-[var(--bg)] flex items-center justify-center text-xs font-bold" style="color:var(--text)">C#</div>
                <div class="w-8 h-8 rounded-full bg-rose-500/20 border-2 border-[var(--bg)] flex items-center justify-center text-xs font-bold" style="color:var(--text)">Lu</div>
              </div>
              <span class="text-sm text-[var(--text-secondary)]">${t.hero.techs}</span>
            </div>
          </div>
          <div class="flex-shrink-0 stagger-6" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
            <div class="relative">
              <div class="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl glass flex items-center justify-center overflow-hidden" style="animation:float 6s ease-in-out infinite">
                <div class="text-center">
                  <div class="mb-2 flex justify-center">
                    <svg class="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                  </div>
                  <div class="text-2xl font-bold gradient-text">wb3eqr</div>
                  <div class="text-sm text-[var(--text-secondary)] mt-1">${t.hero.subtitle}</div>
                </div>
              </div>
              <div class="absolute -top-3 -right-3 w-20 h-20 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center backdrop-blur-xl">
                <div class="text-center">
                  <div class="text-lg font-bold" style="color:var(--accent)">5</div>
                  <div class="text-[10px]" style="color:var(--text-secondary);line-height:1.2">${t.hero.years}<br/>${t.hero.coding}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
