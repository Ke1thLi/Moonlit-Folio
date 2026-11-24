# Moonlit Folio

An Astro template for technical articles and project notes. It includes a responsive reading layout, light and dark themes, keyboard search, full-text RSS, and static metadata.

[Moonlit Folio on GitHub](https://github.com/Ke1thLi/Moonlit-Folio)

## Run locally

Use Node.js 24.22.1 and npm 11.19.1.

```sh
npm ci
npm run dev
```

Edit [site.config.mjs](site.config.mjs) to customize the site. Replace the sample articles and project in `src/content/` and edit the About page in `src/pages/about.astro`.

```sh
npm run check
npm run format:check
npm test
npm run build
npm run preview
```

Preview the production build to try Pagefind or open `/search/?q=build`. The examples cover code, tables, inline and block math, a diagram, images, Chinese search, and related articles. Build output is in `dist/`.

- [Configuration](docs/Configuration.md)
- [Content guide](docs/Content-Guide.md)
- [Getting started and hosting](docs/Getting-Started.md)
- [Development and design](docs/Development-Guide.md)
- [Third-party notices](docs/Third-Party-Notices.md)

## License

The original theme source, configuration, documentation, tests, two sample articles, one sample project, and three original SVGs are covered by the [MIT License](LICENSE).

Third-party dependencies and assets retain their upstream licenses. Keep the generated `third-party/` directory with any static site built from this template. [Third-party notices](docs/Third-Party-Notices.md)

## GitHub Template

Enable **Template repository** in the standalone repository settings and verify CI on its default branch before tagging `v0.1.0`. Users can customize their copy before deployment by following the [hosting guide](docs/Getting-Started.md). [GitHub template settings](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository)
