// Build a dependency-free CommonJS function formatting paper titles and links into Markdown.
// PM → Dev. 2026-10-15T06:40:27.070Z

// Usage: const formatPaperMarkdown = require('./paper-markdown'); formatPaperMarkdown(' A Paper Title ', 'https://example.com');
'use strict';

function formatPaperMarkdown(title, url) {
  const formattedTitle = title == null
    ? ''
    : String(title).trim().replace(/\s+/g, ' ');

  const formattedUrl = url == null ? '' : String(url).trim();

  if (formattedTitle && formattedUrl) {
    return '[' + formattedTitle + '](' + formattedUrl + ')';
  }

  if (formattedTitle) {
    return formattedTitle;
  }

  if (formattedUrl) {
    return formattedUrl;
  }

  return '';
}

module.exports = formatPaperMarkdown;

if (require.main === module) {
  console.log(formatPaperMarkdown('  Attention Is All You Need  ', 'https://arxiv.org/abs/1706.03762'));
}
