<div align="center">
  <img src="https://raw.githubusercontent.com/wb3eqr/Hello_My_World-/master/public/favicon.svg" width="80" alt="logo" />
  <h1 align="center" style="margin-top: 12px;">wb3eqr</h1>
  <p align="center"><strong>Middle Fullstack & GameDev</strong></p>

  <p align="center">
    <img src="https://img.shields.io/badge/TypeScript-Advanced-3178C6?style=flat-square" alt="TypeScript"/>
    <img src="https://img.shields.io/badge/Python-Advanced-3776AB?style=flat-square" alt="Python"/>
    <img src="https://img.shields.io/badge/C%23-Advanced-239120?style=flat-square" alt="C#"/>
    <img src="https://img.shields.io/badge/Java-Middle-ED8B00?style=flat-square" alt="Java"/>
    <img src="https://img.shields.io/badge/Vite-✓-646CFF?style=flat-square" alt="Vite"/>
    <img src="https://img.shields.io/badge/Tailwind-✓-06B6D4?style=flat-square" alt="Tailwind"/>
  </p>

  <p align="center">
    <a href="https://t.me/hello_my_super_bio" style="text-decoration:none">
      <img src="https://img.shields.io/badge/Telegram-Channel-26A5E4?style=flat-square&logo=telegram" alt="Telegram"/>
    </a>
    <a href="https://t.me/sell_program" style="text-decoration:none">
      <img src="https://img.shields.io/badge/Telegram-Contact-26A5E4?style=flat-square&logo=telegram" alt="Telegram Contact"/>
    </a>
  </p>
</div>

---

## Portfolio Website

Персональный сайт-портфолио с particles-фоном, тёмной/светлой темой, переключением EN/RU и плавными анимациями.

### Features

- **Particles background** — кастомный canvas с линковкой частиц и реакцией на мышь
- **Dark / Light theme** — переключение с сохранением в localStorage
- **i18n** — полная поддержка русского и английского языков
- **SPA routing** — навигация без перезагрузки с pushState и плавными переходами
- **Scroll animations** — IntersectionObserver для появления элементов
- **Responsive** — адаптация под все устройства
- **Tech stack** — визуализация языков, фреймворков, БД и инструментов
- **Timeline** — история развития с 2020 по настоящее время

### Tech Stack

| Category | Technologies |
|----------|------------|
| **Build** | Vite |
| **Styles** | Tailwind CSS 4 + CSS Custom Properties |
| **Icons** | Inline SVG |
| **Particles** | Custom Canvas API |
| **Font** | Inter (Google Fonts) |
| **Deploy** | GitHub Pages / Vercel / Cloudflare Pages |

### Project Structure

```
Hello_My_World-/
├── index.html            # HTML shell (nav, footer, canvas)
├── vite.config.js        # Vite + Tailwind
├── vercel.json           # Vercel SPA rewrites
├── public/
│   ├── favicon.svg       # Favicon
│   └── _redirects        # Cloudflare SPA redirects
├── src/
│   ├── main.js           # SPA router, theme/lang, IntersectionObserver
│   ├── style.css         # Tailwind + CSS variables + animations
│   ├── particles.js      # Canvas particle system
│   ├── i18n.js           # EN/RU translations
│   └── pages/
│       ├── hero.js       # Landing page
│       ├── bio.js        # About + timeline
│       ├── stack.js      # Tech stack visualization
│       ├── projects.js   # Featured projects
│       └── contact.js    # Contact section
└── package.json
```

### Getting Started

```bash
# Clone
git clone https://github.com/wb3eqr/Hello_My_World-.git
cd Hello_My_World-

# Install
npm install

# Dev server
npm run dev

# Build
npm run build
```

### Deployment

Проект готов к деплою на любую платформу:

- **GitHub Pages** — `/` root, branch `master`
- **Vercel** — auto-detect, `npm run build` → `dist/`
- **Cloudflare Pages** — `npm run build` → `dist/`

---

<div align="center">
  <p>Built with precision by <a href="https://github.com/wb3eqr">wb3eqr</a></p>
</div>
