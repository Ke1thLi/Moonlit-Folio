# Changelog

## 0.1.0 release candidate

- Extracted a configurable Astro blog template with original examples.
- Added a moonlit home hero, system-aware theme controls, and article progress.
- Added validation-only CI and preserved root and subpath routing.
- Added full-text RSS, mathematical notation, a stand-alone search page with a feature switch, and related articles.
- Added the `/index.xml` feed entry and support for both `q` and `keyword` on the search page.
- Made Han query segmentation independent of the current page language and excluded `_local-drafts/` before loading posts.
- Restored highlighting for Markdown fences labelled `C` or `HTML`.
- Pinned KaTeX to patched `0.18.10` for article rendering and Mermaid.
- Included browser dependency and font notices in the static site output.
- Licensed the original theme source, configuration, documentation, tests, and examples under MIT.
