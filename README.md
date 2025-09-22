# C Parsons Puzzles – Starter

This is a minimal site you can deploy on **GitHub Pages** to host Parsons puzzles using **js-parsons**.

## 1) Replace placeholder library files
The `/js` and `/css` files here are placeholders. Replace them with the **official files** from the js-parsons repo:

- `css/parsons.css`  ← from `assets/parsons.css`
- `js/parsons_lib.js` and `js/parsons.js` ← from `src/`

Repo: https://github.com/js-parsons/js-parsons

## 2) Edit puzzles
Add/modify puzzles in `puzzles.js`. Keep the `solution` fully correct & indented. Put wrong lines in `distractors`.

## 3) Run locally
Open `index.html` directly in a browser, or serve the folder:
```bash
python3 -m http.server 8000
```

## 4) Deploy to GitHub Pages
1. Create a new repo (e.g., `c-parsons`), add all files.
2. Push to GitHub.
3. **Settings → Pages → Build and deployment → Deploy from a branch**. Choose `main` and `/root`.
4. Visit `https://<your-username>.github.io/c-parsons/`.

## Notes
- Requires jQuery + jQuery UI (already linked via CDN in `index.html`).
- If you see a warning “js-parsons library not found…”, you haven’t replaced the placeholders yet.
- Indentation is graded; students can use left/right arrows to indent.
