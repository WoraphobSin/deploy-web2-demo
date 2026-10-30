# Heatworks industrial heating website

A responsive, dependency-free, multi-page website inspired by an industrial equipment catalog. It includes Home, Products, Projects, Articles, About, Contact, and an individual industrial oven product detail page. Product illustrations are original CSS and SVG artwork.

## Run locally

Run a static server from this folder:

```powershell
python -m http.server 8000
```

Open `http://localhost:8000`. Navigation routes:

- `/` — Home
- `/products/` — searchable product catalog with category filters
- `/projects/` — project portfolio
- `/articles/` — articles and insights
- `/about/` — company and services
- `/contact/` — contact details and email form
- `/products/industrial-oven/` — industrial oven product detail and gallery

Pages include Thai and English switching, responsive navigation and contact links. The contact form opens the visitor's email application with the entered details; it does not submit to a server.

## GitHub Pages deployment

The GitHub Actions workflow deploys the static site to `https://woraphobsin.github.io/deploy-web2-demo/` on pushes to `main`. The first workflow run enables the repository's GitHub Pages Actions source and publishes the site.
