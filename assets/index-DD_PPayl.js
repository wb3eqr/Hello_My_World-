(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();function T(){const e=document.getElementById("particles-bg");if(!e)return;const t=document.createElement("canvas");t.className="absolute inset-0 w-full h-full",e.appendChild(t);const s=t.getContext("2d");let o=[],a={x:null,y:null},r,d=0;function u(){t.width=window.innerWidth,t.height=window.innerHeight}class S{constructor(){this.reset()}reset(){this.x=Math.random()*t.width,this.y=Math.random()*t.height,this.size=Math.random()*2+.5,this.speedX=(Math.random()-.5)*.3,this.speedY=(Math.random()-.5)*.3,this.opacity=Math.random()*.5+.1,this.hue=Math.random()*60+240}update(){if(this.x+=this.speedX,this.y+=this.speedY,(this.x<0||this.x>t.width)&&(this.speedX*=-1),(this.y<0||this.y>t.height)&&(this.speedY*=-1),a.x&&a.y){const l=a.x-this.x,n=a.y-this.y;Math.sqrt(l*l+n*n)<150&&(this.x-=l*.005,this.y-=n*.005)}}draw(){s.beginPath(),s.arc(this.x,this.y,this.size,0,Math.PI*2),s.fillStyle=`hsla(${this.hue}, 70%, 60%, ${this.opacity})`,s.fill()}}function j(i){o=[];for(let l=0;l<i;l++)o.push(new S)}function C(){for(let i=0;i<o.length;i++)for(let l=i+1;l<o.length;l++){const n=o[i].x-o[l].x,v=o[i].y-o[l].y,f=Math.sqrt(n*n+v*v);f<120&&(s.beginPath(),s.moveTo(o[i].x,o[i].y),s.lineTo(o[l].x,o[l].y),s.strokeStyle=`hsla(250, 70%, 60%, ${.08*(1-f/120)})`,s.lineWidth=.5,s.stroke())}}function x(i){i-d>16&&(s.clearRect(0,0,t.width,t.height),o.forEach(n=>{n.update(),n.draw()}),C(),d=i),r=requestAnimationFrame(x)}return window.addEventListener("resize",u),document.addEventListener("mousemove",i=>{a.x=i.clientX,a.y=i.clientY}),document.addEventListener("mouseleave",()=>{a.x=null,a.y=null}),u(),j(Math.min(Math.floor(t.width*t.height/12e3),80)),x(0),()=>{cancelAnimationFrame(r),window.removeEventListener("resize",u),e.removeChild(t)}}const I={nav:{bio:"Bio",stack:"Stack",projects:"Projects",contact:"Contact"},hero:{available:"Available for projects",title1:"Middle",title2:"Fullstack",title3:"& GameDev",desc:"5 years of crafting code. From Minecraft servers to modern web — I build experiences that people remember.",cta:"View Projects",contact:"Contact Me",techs:"10+ technologies mastered",subtitle:"Code. Build. Ship.",years:"years",coding:"coding"},bio:{about:"About",title:"The Story",desc:"From a 10-year-old kid typing HTML in Notepad to a Middle developer shipping production code. Self-taught, driven, and obsessed with building.",whoTitle:"Who I Am",whoText:"Middle Fullstack & GameDev developer with 5 years of hands-on experience. Started coding at 10, built my first Minecraft server at 12, and scaled it to 50+ concurrent players. Self-taught through forums, YouTube, and now AI-assisted development.",missionTitle:"The Mission",missionText:"To build digital experiences that push boundaries. Whether it’s optimizing a Minecraft server for hundreds of players or crafting a pixel-perfect web interface — I obsess over quality, performance, and user delight.",timeline:"Timeline",journey:"The Journey",items:[{period:"2025 — Present",title:"Middle Fullstack Developer",sub:"Self-employed / Freelance",desc:"Building full-stack web applications, game scripts, and automation tools. Working with modern stacks: Node.js, React, Python, C#. Integrating AI into development workflow for maximum efficiency."},{period:"2024 — 2025",title:"Minecraft Server Lead Developer",sub:"Project Peak: 50+ Online",desc:"Architected and maintained a Minecraft server from scratch. Wrote custom plugins in Java, configured networking and CI/CD. Grew the playerbase to 50+ concurrent players."},{period:"2022 — 2024",title:"Game Scripter (Roblox + Minecraft)",sub:"Luau, Lua, Java",desc:"Developed game mechanics, UI systems, and backend logic for Roblox and Minecraft projects. Wrote efficient Luau scripts for player interactions, inventory systems, and game loops."},{period:"2020 — 2022",title:"Started Coding",sub:"HTML → JS → Python → Everything",desc:"Began with HTML and CSS at age 10. Quickly moved to JavaScript, then Python. Built small websites, games, and automation scripts. Discovered game development and never looked back."}]},stack:{skills:"Skills",title:"Tech Stack",desc:"Every tool in my belt — from frontend pixels to backend architecture.",languages:"Languages",frameworks:"Frameworks & Libraries",databases:"Databases & Infrastructure",gameDev:"Game Development",levels:{Expert:"Expert",Advanced:"Advanced",Intermediate:"Intermediate"},langNames:["JavaScript / TypeScript","Python","C#","Java","C / C++","Luau / Lua","HTML / CSS","SQL"],fwList:["React / Next.js","Node.js / Express","Vue.js","Tailwind CSS","React Native",".NET","Bootstrap","jQuery","Electron","Socket.IO"],dbList:["PostgreSQL","MySQL","MongoDB","Firebase","Redis","Docker","Git","Linux","Nginx","CI/CD"],gdList:["Minecraft Plugins (Java)","Roblox (Luau)","Unity (C#)","Game Mechanics","Server Architecture"]},projects:{work:"Work",title:"Featured Projects",desc:"What I’ve built — each one a story of code, creativity, and late nights.",items:[{tag:"50+ Online",title:"Minecraft Server",desc:"Fully custom Minecraft server with unique gameplay mechanics, custom plugins, optimized performance, and a dedicated community. Built from scratch — from core configuration to plugin development.",tags:["Java","PaperMC","MySQL","Linux"]},{tag:null,title:"Discord / Telegram Bots",desc:"Multi-functional automation bots for gaming communities. Moderation, minigames, economy systems, and real-time server monitoring. Handling thousands of commands daily.",tags:["Python","Node.js","Firebase"]},{tag:null,title:"Roblox Game Scripts",desc:"Custom game mechanics and interactive systems for Roblox experiences. Player progression, inventory management, real-time multiplayer synchronization, and polished UI.",tags:["Luau","Roblox API"]},{tag:null,title:"Web Applications",desc:"Full-stack web apps with modern architecture. From landing pages to complex dashboards. Responsive design, optimized performance, and clean code that scales.",tags:["React","Node.js","PostgreSQL","Docker"]}],seeAll:"See all on GitHub"},contact:{connect:"Connect",title:"Let’s Build",desc:"Got a project, idea, or just want to talk code? Hit me up — I’m always open to interesting conversations.",telegram:"Telegram",github:"GitHub",channel:"Telegram Channel",openTitle:"Open for opportunities",openDesc:"Whether it’s freelance, partnership, or just geeking out about tech — my DMs are always open.",sayHello:"Say Hello"},common:{footer:"Built with precision."}},A={nav:{bio:"Био",stack:"Стек",projects:"Проекты",contact:"Контакты"},hero:{available:"Открыт к проектам",title1:"Middle",title2:"Fullstack",title3:"& GameDev",desc:"5 лет пишу код. От Minecraft-серверов до современного веба — создаю впечатления, которые запоминаются.",cta:"Проекты",contact:"Связаться",techs:"10+ технологий в арсенале",subtitle:"Код. Сборка. Релиз.",years:"лет",coding:"опыта"},bio:{about:"Обо мне",title:"История",desc:"С 10 лет таскал HTML в Блокноте — теперь Middle-разработчик, который поставляет продакшн-код. Самоучка, драйвовый, одержимый созданием.",whoTitle:"Кто я",whoText:"Middle Fullstack & GameDev разработчик с 5-летним опытом. Начал в 10, собрал первый Minecraft-сервер в 12, масштабировал до 50+ игроков онлайн. Самоучка — форумы, YouTube, теперь ещё и AI.",missionTitle:"Миссия",missionText:"Создавать цифровые впечатления, которые раздвигают границы. Оптимизация Minecraft-сервера на сотни игроков или пиксель-перфект веб-интерфейс — я одержим качеством, скоростью и эстетикой.",timeline:"Таймлайн",journey:"Путь",items:[{period:"2025 — сейчас",title:"Middle Fullstack Developer",sub:"Селф-эмплойд / Фриланс",desc:"Строю fullstack-приложения, игровые скрипты и инструменты автоматизации. Работаю с Node.js, React, Python, C#. Встраиваю AI в рабочий процесс."},{period:"2024 — 2025",title:"Ведущий разработчик Minecraft-сервера",sub:"Пик: 50+ онлайн",desc:"Спроектировал и поддерживал Minecraft-сервер с нуля: плагины на Java, CI/CD, сеть. Вывел онлай на 50+ одновременных игроков."},{period:"2022 — 2024",title:"Игровой скриптер (Roblox + Minecraft)",sub:"Luau, Lua, Java",desc:"Разрабатывал игровые механики, UI и бэкенд для Roblox и Minecraft. Писал эффективные Luau-скрипты для интерактивов, инвентарей и игровых циклов."},{period:"2020 — 2022",title:"Начало пути",sub:"HTML → JS → Python → Всё подряд",desc:"Начал с HTML и CSS в 10 лет. Быстро перешёл на JavaScript, потом Python. Собирал сайты, игры, скрипты. Открыл геймдев и больше не оглядывался."}]},stack:{skills:"Навыки",title:"Технологии",desc:"Весь арсенал — от фронтенд-пикселей до бэкенд-архитектуры.",languages:"Языки",frameworks:"Фреймворки и библиотеки",databases:"Базы данных и инфраструктура",gameDev:"Геймдев",levels:{Expert:"Эксперт",Advanced:"Продвинутый",Intermediate:"Средний"},langNames:["JavaScript / TypeScript","Python","C#","Java","C / C++","Luau / Lua","HTML / CSS","SQL"],fwList:["React / Next.js","Node.js / Express","Vue.js","Tailwind CSS","React Native",".NET","Bootstrap","jQuery","Electron","Socket.IO"],dbList:["PostgreSQL","MySQL","MongoDB","Firebase","Redis","Docker","Git","Linux","Nginx","CI/CD"],gdList:["Minecraft-плагины (Java)","Roblox (Luau)","Unity (C#)","Игровые механики","Серверная архитектура"]},projects:{work:"Работы",title:"Избранные проекты",desc:"То, что я построил — каждый проект со своей историей, кодом и бессонными ночами.",items:[{tag:"50+ Онлайн",title:"Minecraft-сервер",desc:"Полностью кастомный Minecraft-сервер с уникальными механиками, плагинами, оптимизацией и комьюнити. Собран с нуля — от конфигов до разработки плагинов.",tags:["Java","PaperMC","MySQL","Linux"]},{tag:null,title:"Discord / Telegram боты",desc:"Многофункциональные боты для автоматизации игровых сообществ: модерация, мини-игры, экономика, мониторинг сервера. Тысячи команд в день.",tags:["Python","Node.js","Firebase"]},{tag:null,title:"Roblox Game Scripts",desc:"Кастомные игровые механики и интерактивные системы для Roblox: прогрессия, инвентарь, мультиплеер-синхронизация, UI.",tags:["Luau","Roblox API"]},{tag:null,title:"Веб-приложения",desc:"Fullstack-приложения с современной архитектурой. От лендингов до сложных дашбордов. Адаптивный дизайн, оптимизация, чистый код.",tags:["React","Node.js","PostgreSQL","Docker"]}],seeAll:"Все проекты на GitHub"},contact:{connect:"Связь",title:"Давайте построим",desc:"Есть проект, идея или просто желание поговорить о коде? Пиши — я всегда открыт к интересным разговорам.",telegram:"Телеграм",github:"GitHub",channel:"Telegram-канал",openTitle:"Открыт к предложениям",openDesc:"Фриланс, партнёрство или просто потусить в тематических чатах — мои личные сообщения всегда открыты.",sayHello:"Написать"},common:{footer:"Сделано с аккуратностью."}};function P(e){return`
    <section class="min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden">
      <div class="max-w-6xl mx-auto px-6 w-full py-20">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="flex-1 space-y-8">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[var(--text-secondary)] stagger-1" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              ${e.hero.available}
            </div>
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] stagger-2" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
              ${e.hero.title1}<br/>
              <span class="gradient-text">${e.hero.title2}</span><br/>
              ${e.hero.title3}
            </h1>
            <p class="text-lg sm:text-xl text-[var(--text-secondary)] max-w-xl leading-relaxed stagger-3" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
              ${e.hero.desc}
            </p>
            <div class="flex flex-wrap gap-4 stagger-4" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
              <a href="/projects" data-nav class="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm">
                ${e.hero.cta}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
              <a href="/contact" data-nav class="btn-glass inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm">
                ${e.hero.contact}
              </a>
            </div>
            <div class="flex items-center gap-8 pt-4 stagger-5" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
              <div class="flex -space-x-2">
                <div class="w-8 h-8 rounded-full bg-[#6C63FF]/20 border-2 border-[var(--bg)] flex items-center justify-center text-xs font-bold" style="color:var(--text)">JS</div>
                <div class="w-8 h-8 rounded-full bg-emerald-500/20 border-2 border-[var(--bg)] flex items-center justify-center text-xs font-bold" style="color:var(--text)">Py</div>
                <div class="w-8 h-8 rounded-full bg-amber-500/20 border-2 border-[var(--bg)] flex items-center justify-center text-xs font-bold" style="color:var(--text)">C#</div>
                <div class="w-8 h-8 rounded-full bg-rose-500/20 border-2 border-[var(--bg)] flex items-center justify-center text-xs font-bold" style="color:var(--text)">Lu</div>
              </div>
              <span class="text-sm text-[var(--text-secondary)]">${e.hero.techs}</span>
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
                  <div class="text-sm text-[var(--text-secondary)] mt-1">${e.hero.subtitle}</div>
                </div>
              </div>
              <div class="absolute -top-3 -right-3 w-20 h-20 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center backdrop-blur-xl">
                <div class="text-center">
                  <div class="text-lg font-bold" style="color:var(--accent)">5</div>
                  <div class="text-[10px]" style="color:var(--text-secondary);line-height:1.2">${e.hero.years}<br/>${e.hero.coding}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function E(e){return`
    <section class="min-h-[calc(100vh-4rem)] py-20">
      <div class="max-w-4xl mx-auto px-6">
        <div class="mb-16">
          <span class="text-sm font-medium tracking-widest uppercase" style="color:var(--accent)">${e.bio.about}</span>
          <h2 class="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">${e.bio.title}</h2>
          <p class="text-lg text-[var(--text-secondary)] mt-4 max-w-2xl">
            ${e.bio.desc}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-20">
          <div class="glass rounded-2xl p-8 stagger-1 scroll-reveal">
            <div class="mb-4 flex">
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2" fill="var(--accent)"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">${e.bio.whoTitle}</h3>
            <p class="text-sm leading-relaxed" style="color:var(--text-secondary)">${e.bio.whoText}</p>
          </div>
          <div class="glass rounded-2xl p-8 stagger-2 scroll-reveal">
            <div class="mb-4 flex">
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/>
                <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">${e.bio.missionTitle}</h3>
            <p class="text-sm leading-relaxed" style="color:var(--text-secondary)">${e.bio.missionText}</p>
          </div>
        </div>

        <div class="mb-16">
          <span class="text-sm font-medium tracking-widest uppercase" style="color:var(--accent)">${e.bio.timeline}</span>
          <h2 class="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">${e.bio.journey}</h2>
        </div>

        <div class="relative">
          <div class="absolute left-[19px] top-0 bottom-0 w-[1px]" style="background:var(--border)"></div>
          <div class="space-y-12">
            ${e.bio.items.map((t,s)=>`
              <div class="relative pl-14 stagger-${s+1} scroll-reveal">
                <div class="absolute left-[11px] top-1 w-[17px] h-[17px] rounded-full timeline-dot" style="background:var(--accent)"></div>
                <div class="text-xs font-medium mb-1" style="color:var(--accent)">${t.period}</div>
                <h3 class="text-lg font-semibold">${t.title}</h3>
                <p class="text-sm mt-1" style="color:var(--text-secondary)">${t.sub}</p>
                <p class="text-sm mt-1 leading-relaxed" style="color:var(--text-tertiary)">${t.desc}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  `}function B(e){const t={Expert:95,Advanced:80,Intermediate:65},s=["from-yellow-500/20 to-yellow-600/10","from-emerald-500/20 to-emerald-600/10","from-purple-500/20 to-purple-600/10","from-orange-500/20 to-orange-600/10","from-blue-500/20 to-blue-600/10","from-sky-500/20 to-sky-600/10","from-red-500/20 to-red-600/10","from-cyan-500/20 to-cyan-600/10"],o=["JS","Py","C#","Ja","C","Lu","H","SQL"];return`
    <section class="min-h-[calc(100vh-4rem)] py-20">
      <div class="max-w-6xl mx-auto px-6">
        <div class="mb-16">
          <span class="text-sm font-medium tracking-widest uppercase" style="color:var(--accent)">${e.stack.skills}</span>
          <h2 class="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">${e.stack.title}</h2>
          <p class="text-lg text-[var(--text-secondary)] mt-4 max-w-2xl">${e.stack.desc}</p>
        </div>
        <div class="space-y-12">
          <div>
            <h3 class="text-sm font-medium tracking-wider uppercase mb-6" style="color:var(--text-secondary)">${e.stack.languages}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              ${e.stack.langNames.map((a,r)=>`
                <div class="glass rounded-xl p-5 tech-card stagger-${r+1} scroll-reveal">
                  <div class="flex items-center gap-3 mb-3">
                    <span class="flex-shrink-0">
                      <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" opacity="0.2"/>
                        <text x="12" y="16" text-anchor="middle" fill="currentColor" font-size="10" font-weight="bold">${o[r]}</text>
                      </svg>
                    </span>
                    <div>
                      <div class="text-sm font-medium">${a}</div>
                      <div class="text-xs mt-0.5" style="color:var(--accent)">${e.stack.levels[["Expert","Advanced","Advanced","Upper-Intermediate","Intermediate","Advanced","Expert","Intermediate"][r]]||a}</div>
                    </div>
                  </div>
                  <div class="h-1 rounded-full overflow-hidden" style="background:var(--border)">
                    <div class="h-full rounded-full bg-gradient-to-r ${s[r]}" style="width:${t[["Expert","Advanced","Advanced","Intermediate","Intermediate","Advanced","Expert","Intermediate"][r]]||65}%"></div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
          <div>
            <h3 class="text-sm font-medium tracking-wider uppercase mb-6" style="color:var(--text-secondary)">${e.stack.frameworks}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              ${e.stack.fwList.map((a,r)=>`
                <div class="glass rounded-xl px-4 py-3 text-sm text-center hover-scale stagger-${r+1} scroll-reveal" style="transition:all 0.2s ease">${a}</div>
              `).join("")}
            </div>
          </div>
          <div>
            <h3 class="text-sm font-medium tracking-wider uppercase mb-6" style="color:var(--text-secondary)">${e.stack.databases}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              ${e.stack.dbList.map((a,r)=>`
                <div class="glass rounded-xl px-4 py-3 text-sm text-center hover-scale stagger-${r+1} scroll-reveal" style="transition:all 0.2s ease">${a}</div>
              `).join("")}
            </div>
          </div>
          <div>
            <h3 class="text-sm font-medium tracking-wider uppercase mb-6" style="color:var(--text-secondary)">${e.stack.gameDev}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              ${e.stack.gdList.map((a,r)=>`
                <div class="glass rounded-xl px-4 py-3 text-sm text-center hover-scale stagger-${r+1} scroll-reveal" style="transition:all 0.2s ease">${a}</div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function D(e){const t=["from-[var(--accent)]/20 to-purple-600/10","from-emerald-500/20 to-cyan-600/10","from-rose-500/20 to-orange-600/10","from-sky-500/20 to-indigo-600/10"],s=['<path d="M2 8l4-4h12l4 4-10 14L2 8z"/><path d="M2 8l10 2 10-2"/><path d="M12 22V10"/>','<rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="8" cy="16" r="1" fill="currentColor"/><circle cx="16" cy="16" r="1" fill="currentColor"/><path d="M9 7h6"/><path d="M12 7v4"/><path d="M8 11V7a4 4 0 018 0v4"/><path d="M6 11H3v3"/><path d="M18 11h3v3"/><path d="M12 21v-2"/>','<rect x="2" y="6" width="20" height="12" rx="3"/><circle cx="8" cy="10" r="1" fill="currentColor"/><circle cx="16" cy="10" r="1" fill="currentColor"/><circle cx="12" cy="14" r="1" fill="currentColor"/><path d="M8 14h8"/><path d="M6 10v2"/><path d="M18 10v2"/>','<circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="4" ry="10"/><path d="M2 12h20"/>'];return`
    <section class="min-h-[calc(100vh-4rem)] py-20">
      <div class="max-w-6xl mx-auto px-6">
        <div class="mb-16">
          <span class="text-sm font-medium tracking-widest uppercase" style="color:var(--accent)">${e.projects.work}</span>
          <h2 class="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">${e.projects.title}</h2>
          <p class="text-lg text-[var(--text-secondary)] mt-4 max-w-2xl">${e.projects.desc}</p>
        </div>
        <div class="grid md:grid-cols-2 gap-6 mb-12">
          ${e.projects.items.map((o,a)=>`
            <div class="glass rounded-2xl overflow-hidden project-card stagger-${a+1} scroll-reveal">
              <div class="relative h-56 bg-gradient-to-br ${t[a]} flex items-center justify-center overflow-hidden">
                <div class="select-none flex items-center justify-center" style="animation:float ${4+a*.5}s ease-in-out infinite ${a*.5}s">
                  <svg class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.35">${s[a]}</svg>
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-[var(--bg)] to-transparent"></div>
                ${o.tag?`<div class="absolute bottom-4 left-4"><span class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium">${o.tag}</span></div>`:""}
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">${o.title}</h3>
                <p class="text-sm leading-relaxed mb-4" style="color:var(--text-secondary)">${o.desc}</p>
                <div class="flex flex-wrap gap-2">
                  ${o.tags.map(r=>`<span class="px-3 py-1 rounded-full text-xs" style="background:var(--border);color:var(--text-secondary)">${r}</span>`).join("")}
                </div>
              </div>
            </div>
          `).join("")}
        </div>
        <div class="text-center">
          <a href="https://github.com/wb3eqr" target="_blank" rel="noopener" class="btn-glass inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            ${e.projects.seeAll}
          </a>
        </div>
      </div>
    </section>
  `}function H(e){return`
    <section class="min-h-[calc(100vh-4rem)] py-20 flex items-center">
      <div class="max-w-4xl mx-auto px-6 w-full">
        <div class="text-center mb-16">
          <span class="text-sm font-medium tracking-widest uppercase" style="color:var(--accent)">${e.contact.connect}</span>
          <h2 class="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">${e.contact.title}</h2>
          <p class="text-lg text-[var(--text-secondary)] mt-4 max-w-xl mx-auto">${e.contact.desc}</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <a href="https://t.me/sell_program" target="_blank" rel="noopener" class="glass rounded-xl p-6 flex items-center gap-4 hover-scale stagger-1 scroll-reveal" style="transition:all 0.2s ease">
            <div class="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-sky-400" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </div>
            <div>
              <div class="text-sm font-medium">${e.contact.telegram}</div>
              <div class="text-xs mt-0.5" style="color:var(--text-secondary)">@sell_program</div>
            </div>
          </a>
          <a href="https://github.com/wb3eqr" target="_blank" rel="noopener" class="glass rounded-xl p-6 flex items-center gap-4 hover-scale stagger-2 scroll-reveal" style="transition:all 0.2s ease">
            <div class="w-12 h-12 rounded-xl bg-gray-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style="color:var(--text-secondary)"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </div>
            <div>
              <div class="text-sm font-medium">${e.contact.github}</div>
              <div class="text-xs mt-0.5" style="color:var(--text-secondary)">/wb3eqr</div>
            </div>
          </a>
          <a href="https://t.me/hello_my_super_bio" target="_blank" rel="noopener" class="glass rounded-xl p-6 flex items-center gap-4 hover-scale stagger-3 scroll-reveal sm:col-span-2 lg:col-span-1" style="transition:all 0.2s ease">
            <div class="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </div>
            <div>
              <div class="text-sm font-medium">${e.contact.channel}</div>
              <div class="text-xs mt-0.5" style="color:var(--text-secondary)">@hello_my_super_bio</div>
            </div>
          </a>
        </div>
        <div class="glass rounded-2xl p-8 text-center stagger-4 scroll-reveal">
          <div class="mb-4 flex justify-center">
            <svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              <line x1="8" y1="10" x2="16" y2="10"/>
              <line x1="8" y1="14" x2="12" y2="14"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">${e.contact.openTitle}</h3>
          <p class="text-sm mb-6 max-w-md mx-auto" style="color:var(--text-secondary)">${e.contact.openDesc}</p>
          <a href="https://t.me/sell_program" target="_blank" rel="noopener" class="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
            ${e.contact.sayHello}
          </a>
        </div>
      </div>
    </section>
  `}const g={"/":P,"/bio":E,"/stack":B,"/projects":D,"/contact":H};let c="",m=localStorage.getItem("lang")||"en",p=localStorage.getItem("theme")||"dark";function w(){return window.location.hash.replace(/^#/,"")||"/"}function k(){return m==="ru"?A:I}function M(e){document.documentElement.setAttribute("data-theme",e),p=e,localStorage.setItem("theme",e);const t=e==="dark"?"{":"}";document.querySelectorAll("#theme-icon, #theme-icon-mobile").forEach(s=>{s.textContent=t,s.className=e==="dark"?"theme-icon text-lg":"theme-icon light text-lg"}),N()}function N(){document.querySelectorAll("#particles-bg canvas")}function L(e){m=e,localStorage.setItem("lang",e),document.querySelectorAll("[data-lang-btn]").forEach(s=>{s.classList.toggle("active",s.dataset.langBtn===e)}),h(c,!1);const t=document.getElementById("footer-text");if(t){const s=k();t.textContent=s.common.footer}}function F(e){const t=g[e]||g["/"],s=k();return t(s)}function R(e){e.startsWith("/")||(e="/"+e),e!==c&&(location.hash="#"+e)}async function h(e,t){const s=document.getElementById("page-content");if(!s)return;t&&(s.style.opacity="0",s.style.transform="scale(0.98)",s.style.transition="opacity 0.15s ease, transform 0.15s ease",await new Promise(a=>setTimeout(a,150))),s.innerHTML=F(e),c=e,t&&requestAnimationFrame(()=>{s.style.transition="opacity 0.5s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1)",s.style.opacity="1",s.style.transform="scale(1)"}),$();const o=document.getElementById("mobile-menu");o&&o.classList.add("hidden"),window.scrollTo({top:0,behavior:"smooth"}),setTimeout(J,100)}function $(){document.querySelectorAll("[data-nav]").forEach(e=>{const t=e.getAttribute("href").replace(/^#/,"");e.classList.toggle("active",t===c)})}function y(e){const t=e.currentTarget.getAttribute("href").replace(/^#/,"");t&&g[t]&&(e.preventDefault(),R(t))}function z(){document.querySelectorAll("[data-nav]").forEach(e=>{e.removeEventListener("click",y),e.addEventListener("click",y)}),$()}function J(){const e=new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting&&(s.target.classList.add("revealed"),e.unobserve(s.target))})},{threshold:.1,rootMargin:"0px 0px -40px 0px"});document.querySelectorAll(".scroll-reveal").forEach(t=>e.observe(t))}function q(){const e=document.getElementById("menu-btn"),t=document.getElementById("mobile-menu");e&&t&&e.addEventListener("click",()=>{t.classList.toggle("hidden")})}function G(){document.querySelectorAll("#theme-toggle, #theme-toggle-mobile").forEach(e=>{e.addEventListener("click",()=>{M(p==="dark"?"light":"dark")})})}function Q(){document.querySelectorAll("[data-lang-btn]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.langBtn;t&&t!==m&&L(t)})})}function b(){M(p),L(m),T(),q(),G(),Q();const e=sessionStorage.getItem("spa:path");if(e){sessionStorage.removeItem("spa:path"),location.hash="#"+e;return}c=w(),h(c,!1),z(),window.addEventListener("hashchange",_)}function _(){const e=w();e!==c&&h(e,!0)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b):b();
