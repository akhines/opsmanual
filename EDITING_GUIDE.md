# Editing the Ops Manual — Quick Guide

Everything that shows on opsmanual.vercel.app lives in one file: **`index.html`**.
Edit it, commit, push — Vercel auto-deploys in ~1 minute.

---

## Open the repo in VS Code

```
cd ~/Projects/opsmanual
code .
```

Then open `index.html` from the left panel.

---

## Where things live in `index.html`

Everything on the site is defined in one big JavaScript array called `SECTIONS`, starting around **line 934** (search: `const SECTIONS = [`).

The structure is:

```js
const SECTIONS = [
  {
    id: 'brand', label: 'Company Overview', color: '#E3A728',
    pages: [
      { id: 'brand-kit', title: 'Brand Kit', dept: '...', owner: '...',
        content: `<h2>Brand Overview</h2><p>...</p>` },
      { id: 'credibility-packet', title: 'Credibility Packet', ...
        content: `...` },
    ]
  },
  { id: 'pipeline-ref', label: 'Go High Level Overview', ...
    pages: [ ... ]
  },
  ...
]
```

- **Top-level section** = a tab in the left nav (Company Overview, Lead Management, etc.)
- **Page** = a clickable item under a section
- **content** = the HTML that shows on the page, wrapped in **backticks** (`` ` ``)

---

## Common edits

### Rename a page (menu heading)
Find the page by its `id` or `title` and change `title: '...'`.
Example:
```js
{ id: 'fu-sms-josh', title: 'SMS — Josh Message Bank', ...
```
Change to:
```js
{ id: 'fu-sms-josh', title: 'SMS Josh', ...
```

### Rename a top-level section (tab in the nav)
Find the section by `id`, change `label: '...'`.
```js
{ id: 'lead-mgmt', label: 'Lead Management', ...
```

### Reorder pages in a menu
Cut the whole `{ id: ..., content: \`...\` }` block (including the trailing comma) and paste it in the new position within the same `pages: [...]` array.

### Reorder top-level menus (Lead Management, Acquisitions, etc.)
Cut the entire `{ id: '...', label: '...', pages: [...] }` block and paste it in the new position within the top-level `SECTIONS` array.

### Change body text / a heading on a page
Find the `content: \`...\`` for the page and edit the HTML inside the backticks. Tags used most often:
- `<h2>Section Heading</h2>`
- `<h3>Sub-heading</h3>`
- `<p>Paragraph text.</p>`
- `<ul><li>bullet</li><li>bullet</li></ul>`
- `<strong>bold</strong>`, `<em>italic</em>`
- `<code>inline code or field names</code>`

### Hide a page from the menu (without deleting it)
Add `hidden: true` to the page object:
```js
{ id: 'fu-after-apt', hidden: true, title: '...', ...
```

### Add a new page to an existing menu
Inside that section's `pages: [...]`, add a new object:
```js
{ id: 'unique-id-here', title: 'Page Title', dept: 'Lead Management', owner: 'Ashley',
  content: `
<h2>Heading</h2>
<p>Your content here.</p>
` },
```

---

## Gotchas (things that break the page)

1. **Don't use raw backticks (`` ` ``) inside `content:`.** The template literal uses backticks as its delimiters. If you need a backtick in the text, escape it: `` \` ``.
2. **Don't use `${...}` syntax inside `content:`.** If you type `$5.00` inside content, write `\$5.00` if it's followed by `{` (rare). Plain `$5.00` is usually fine.
3. **Keep every page object closed with `},`** — a missing comma or brace will break the whole site.
4. **Strings are single-quoted.** If a string like `title:` contains an apostrophe, escape it: `title: 'Nicole\'s Daily Routine'`.
5. **Backticks wrap HTML content, single quotes wrap everything else** (id, title, label, color).

If the site breaks after an edit, open the browser dev tools (⌥⌘J) and the Console tab — it'll usually show a line number where the syntax broke.

---

## Save + publish

After editing in VS Code:

1. Save the file (⌘S)
2. Open the Terminal in VS Code (⌃\`)
3. Run:
```
git add index.html
git commit -m "short note about what you changed"
git push
```

Vercel auto-deploys in ~1 minute. Open opsmanual.vercel.app to verify.

---

## Revert a bad edit

If you broke something:
```
git log --oneline          # see recent commits
git revert <sha>           # undo that commit (creates a new commit)
git push
```

Or in GitHub web UI: go to the file's history and restore an earlier version.

---

## Getting help

If you want Claude to make a specific change, share the ops manual URL of the page and tell me what should change. I'll do the edit and push.
