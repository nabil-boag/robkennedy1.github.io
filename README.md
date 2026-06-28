# Out of the Abyss — Campaign Chronicle

A static website chronicling our *Dungeons & Dragons: Out of the Abyss* campaign, built with [Astro](https://astro.build/). All content lives in plain Markdown files, so adding a new session, quest, character, or location is just a matter of dropping in a new file.

## Running it locally

You need **Node 18+** (this project was set up with Node 20). If you use `nvm`:

```bash
nvm use 20      # or: nvm install 20
npm install     # first time only
npm run dev     # start the live preview at http://localhost:4321
```

To build the final static site into `dist/`:

```bash
npm run build
npm run preview # preview the built site
```

The `dist/` folder is a plain static site you can host for free on GitHub Pages, Netlify, or Cloudflare Pages.

## Where everything lives

```
src/content/
  sessions/    one .md per game session   → Sessions page + home summary
  quests/      one .md per quest OR lore   → Quests & Lore page
  characters/  PCs, NPCs, and villains     → Heroes page + NPCs page
  locations/   places visited or heard of  → Locations page
public/images/ all artwork (players/, velkynvelve/, ...)
src/pages/     the actual pages
src/layouts/   shared page shell + nav
src/styles/    global.css (colours, cards, typography)
```

## Adding content

**A new session** — copy `src/content/sessions/session-01.md` to `session-02.md` and edit the frontmatter (`sessionNumber`, `date`, `chapter`, `blurb`, `heroImage`) and the body. Sessions sort by `date` automatically. Put any images in `public/images/...` and reference them as `/images/...` in the body.

**A new quest or lore entry** — add a file in `src/content/quests/`. Set `kind: quest` or `kind: lore`, and `status: active | completed | failed | unknown`. The `order` field controls listing order.

**A new character** — add a file in `src/content/characters/`. Set `kind: pc | npc | villain`, plus `race`, `role`, `status`, and an `image` path. If a character has no image, a lettered placeholder is shown automatically.

**A new location** — add a file in `src/content/locations/` with `status: visited` (shows in the gallery, supports an `image`) or `mentioned`.

## Content note

The character and location descriptions are deliberately limited to **what the players currently know** from the sessions — no spoilers from the source books or DM notes.

## Deploying to GitHub Pages (optional)

If you host at `https://<username>.github.io/<repo>/`, set `site` and `base` in `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://<username>.github.io',
  base: '/<repo>',
});
```

Then run `npm run build` and publish the `dist/` folder (e.g. via a GitHub Action or the `gh-pages` branch).
