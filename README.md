# [Massimo Campagnaro — Portfolio](https://massimocampagnaro.github.io/)

Personal portfolio website from scratch hosted on GitHub Pages. No build tools, no dependencies beyond Google Fonts and
Font Awesome.

## Stack

Plain HTML5, CSS3, vanilla JavaScript (ES modules)

## File structure

```
├── index.html
├── css/
│   ├── style.css          # Design tokens (CSS custom properties) + all layout
│   ├── animations.css     # Keyframe animations (hero entrance)
│   └── responsive.css     # Breakpoint overrides
├── js/
│   ├── data.js            # All data content lives here — edit to update the site
│   ├── i18n.js            # Language system (EN / IT, persisted in localStorage)
│   ├── renderer.js        # Builds tabs / skills / projects from data.js
│   ├── nav.js             # Navigation: mobile menu, scroll effects, active link
│   ├── form.js            # Contact form → Google Apps Script
│   └── app.js             # Entry point — imports and wires all modules
├── img/                   # Images
└── files/                 # Downloadable files (CV PDFs, project zip)
```

## Update data content

Open **`js/data.js`** — it is the single source of truth for all portfolio content:

| Export         | What it controls                                                       |
|----------------|------------------------------------------------------------------------|
| `meta`         | Name, email, phone, social links, CV file paths, form URL              |
| `translations` | All UI strings in English and Italian                                  |
| `education`    | Education tab entries                                                  |
| `experience`   | Work Experience tab entries                                            |
| `hobbies`      | Hobbies tab entries                                                    |
| `skills`       | Skills section cards                                                   |
| `projects`     | Portfolio project cards (`featured: false` → hidden behind "See more") |

### Translate a new string

Add it to both `translations.en` and `translations.it`, then reference it with `data-i18n="your.key"` in the HTML or
`t('your.key')` in JS.
