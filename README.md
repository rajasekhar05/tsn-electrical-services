# TSN Electrical & Service — Static Website

A 4-page static site (Home, About Us, Products, Contact Us) built with plain HTML/CSS/JS — no build step, no framework, no server required.

## Folder structure

```
jy-enterprises-website/
├── index.html          Home
├── about.html           About Us
├── products.html        Our Products
├── contact.html         Contact Us
├── assets/
│   ├── css/style.css    All styling (design tokens at the top)
│   ├── js/main.js       Nav toggle, scroll reveal, active-link, form handler
│   └── js/footer.js     Injects the shared footer on every page
└── README.md
```

## Run it locally

No installation needed — just open `index.html` in a browser by double-clicking it.

If your browser blocks anything when opened directly as a file (rare, but some
extensions can), run a tiny local server instead from inside this folder:

```
# Python 3 (usually already installed)
python3 -m http.server 8000
```
Then open http://localhost:8000 in your browser.

or, if you have Node.js:
```
npx serve .
```

## What's editable where

- **Company name / contact details / address** — search for them in
  `index.html`, `about.html`, `contact.html` and `assets/js/footer.js`
  (the footer is shared across all pages from that one file). The site is
  currently branded "TSN Electrical and Service Private Limited"
  (tharaktsnespvtltd@gmail.com), Bellary, Karnataka.
- **Colors / fonts** — the `:root` block at the top of `assets/css/style.css`.
- **Contact form** — currently opens the visitor's email client addressed to
  tharaktsnespvtltd@gmail.com (static sites can't send email on their own). When you
  host this, you can wire it to a service like Formspree or Getform for a
  real inbox submission instead.
- **Map** — `contact.html` uses a keyless Google Maps embed by address text;
  swap the query string in the iframe `src` for a more exact pin if needed.

## Hosting on GitHub Pages (for later)

When you're ready:
1. Create a GitHub repo and push this folder's contents to it.
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch",
   pick the `main` branch and `/ (root)` folder, then save.
4. GitHub will publish the site at `https://<username>.github.io/<repo-name>/`.

No further configuration is needed since this is a plain static site.
