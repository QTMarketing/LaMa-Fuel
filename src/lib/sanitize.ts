// src/lib/sanitize.ts
export function sanitizeHTML(inputHtml: string): string {
  if (!inputHtml) return "";

  let html = String(inputHtml);

  // Remove script/style/meta/iframe/noscript blocks and link rel=stylesheet
  html = html.replace(/<\s*(script|style|iframe|noscript|meta)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, "");
  html = html.replace(/<\s*link\b[^>]*rel=["']?stylesheet["']?[^>]*>/gi, "");
  html = html.replace(/<\s*link\b[^>]*>/gi, "");

  // Strip inline styles and event handlers
  html = html.replace(/\sstyle=(["'])(?:(?=(\\?))\2.)*?\1/gi, "");
  html = html.replace(/\sstyle=[^\s>]+/gi, "");
  html = html.replace(/\son\w+\s*=\s*(["'])(?:(?=(\\?))\2.)*?\1/gi, "");
  html = html.replace(/\son\w+\s*=\s*[^\s>]+/gi, "");

  // Remove srcset and sizes
  html = html.replace(/\ssrcset=(["'])(?:(?=(\\?))\2.)*?\1/gi, "");
  html = html.replace(/\ssizes=(["'])(?:(?=(\\?))\2.)*?\1/gi, "");
  html = html.replace(/\ssrcset=[^\s>]+/gi, "");
  html = html.replace(/\ssizes=[^\s>]+/gi, "");
  // Remove fetchpriority attribute
  html = html.replace(/\sfetchpriority=(["'])(?:(?=(\\?))\2.)*?\1/gi, "");
  html = html.replace(/\sfetchpriority=[^\s>]+/gi, "");

  // Normalize and strip class tokens that match WP/theme patterns
  html = html.replace(/\sclass=(["'])(.*?)\1/gi, (full, quote, val) => {
    const parts = String(val)
      .split(/\s+/)
      .filter(Boolean)
      .filter((c) => {
        if (/^(wp-|has-|alignwide|alignfull|theme|site|widget|sidebar|site-|post-)/i.test(c)) return false;
        if (/^(prose|caption|align-|figure|wp-block-image|language-)/.test(c)) return true;
        if (/^[a-z0-9-_]+$/i.test(c) && c.length < 40) return true;
        return false;
      });
    return parts.length ? ` class="${parts.join(" ")}"` : "";
  });

  // Unwrap common wrappers while preserving inner content
  const unwrapTags = ["header","footer","nav","aside","main","section","div"];
  for (const tag of unwrapTags) {
    html = html.replace(new RegExp(`<\\s*${tag}\\b[^>]*>`, "gi"), "<!--UNWRAP-->");
    html = html.replace(new RegExp(`<\\s*\\/\\s*${tag}\\s*>`, "gi"), "<!--UNWRAP-END-->");
  }
  html = html.replace(/<!--UNWRAP-->/g, "");
  html = html.replace(/<!--UNWRAP-END-->/g, "");

  // Unwrap common Gutenberg wrappers
  html = html.replace(/<\s*div\b[^>]*class=(["'])(?:(?=(\\?))\2.)*?wp-block-(group|column|columns)(?:(?=(\\?))\2.)*?\1[^>]*>/gi, "");
  html = html.replace(/<\s*\/\s*div\s*>\s*/gi, "");

  // Remove empty wrappers
  html = html.replace(/<\s*(div|section)\b[^>]*>\s*<\/\s*\1\s*>/gi, "");

  // Final cleanup
  html = html.replace(/<\s*(style|script)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, "");
  html = html.replace(/<\s*link\b[^>]*>/gi, "");

  return html.trim();
}
  