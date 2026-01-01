<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap - Good Hosters</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex, follow"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" rel="stylesheet"/>
        <style type="text/css">
          :root {
            --bg-primary: #0a0f1a;
            --bg-secondary: #111827;
            --bg-card: #1a2332;
            --bg-hover: #243044;
            --border: rgba(255, 255, 255, 0.08);
            --text-primary: #f1f5f9;
            --text-secondary: #94a3b8;
            --text-muted: #64748b;
            --accent: #10b981;
            --accent-light: #34d399;
            --accent-glow: rgba(16, 185, 129, 0.15);
          }
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            min-height: 100vh;
            line-height: 1.6;
          }
          
          .page-wrapper {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
          
          /* Header */
          header {
            background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
            border-bottom: 1px solid var(--border);
            padding: 3rem 1.5rem 4rem;
            position: relative;
            overflow: hidden;
          }
          
          header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 800px;
            height: 400px;
            background: radial-gradient(ellipse, var(--accent-glow) 0%, transparent 70%);
            pointer-events: none;
          }
          
          .header-content {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
          }
          
          .brand {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
          }
          
          .logo {
            width: 56px;
            height: 56px;
            background: linear-gradient(135deg, var(--accent) 0%, #059669 100%);
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 32px rgba(16, 185, 129, 0.3);
          }
          
          .logo svg {
            width: 32px;
            height: 32px;
            stroke: white;
            stroke-width: 2;
            fill: none;
          }
          
          .brand-text {
            text-align: left;
          }
          
          .brand-name {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--text-primary);
            letter-spacing: -0.02em;
          }
          
          .brand-tagline {
            font-size: 0.875rem;
            color: var(--text-muted);
          }
          
          h1 {
            font-size: 2.75rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 0.5rem;
            letter-spacing: -0.03em;
          }
          
          h1 span {
            background: linear-gradient(135deg, var(--accent-light) 0%, var(--accent) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .subtitle {
            text-align: center;
            color: var(--text-secondary);
            font-size: 1.125rem;
            max-width: 500px;
            margin: 0 auto 2rem;
          }
          
          /* Stats */
          .stats {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
          }
          
          .stat-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 1.25rem 2rem;
            text-align: center;
            min-width: 140px;
          }
          
          .stat-value {
            font-size: 2rem;
            font-weight: 700;
            color: var(--accent);
            font-family: 'JetBrains Mono', monospace;
            line-height: 1.2;
          }
          
          .stat-label {
            font-size: 0.75rem;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-top: 0.25rem;
          }
          
          /* Main Content */
          main {
            flex: 1;
            padding: 2rem 1.5rem 4rem;
          }
          
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
          
          /* Info Box */
          .info-box {
            background: var(--accent-glow);
            border: 1px solid rgba(16, 185, 129, 0.2);
            border-radius: 12px;
            padding: 1rem 1.5rem;
            margin-bottom: 2rem;
            display: flex;
            align-items: center;
            gap: 1rem;
          }
          
          .info-icon {
            width: 20px;
            height: 20px;
            stroke: var(--accent);
            flex-shrink: 0;
          }
          
          .info-box p {
            color: var(--text-secondary);
            font-size: 0.9rem;
          }
          
          .info-box a {
            color: var(--accent);
            text-decoration: none;
            font-weight: 500;
          }
          
          .info-box a:hover {
            text-decoration: underline;
          }
          
          /* Table */
          .table-wrapper {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 16px;
            overflow: hidden;
          }
          
          table {
            width: 100%;
            border-collapse: collapse;
          }
          
          th {
            background: var(--bg-secondary);
            color: var(--text-muted);
            font-weight: 600;
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            padding: 1rem 1.25rem;
            text-align: left;
            border-bottom: 1px solid var(--border);
            white-space: nowrap;
          }
          
          td {
            padding: 1rem 1.25rem;
            border-bottom: 1px solid var(--border);
            vertical-align: middle;
          }
          
          tbody tr:last-child td {
            border-bottom: none;
          }
          
          tbody tr {
            transition: background 0.15s ease;
          }
          
          tbody tr:hover {
            background: var(--bg-hover);
          }
          
          /* URL Column */
          .url-cell {
            max-width: 450px;
          }
          
          .url-link {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            text-decoration: none;
            color: var(--text-primary);
            font-weight: 500;
            transition: color 0.15s;
          }
          
          .url-link:hover {
            color: var(--accent);
          }
          
          .url-icon {
            width: 32px;
            height: 32px;
            background: var(--bg-secondary);
            border: 1px solid var(--border);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          
          .url-icon svg {
            width: 16px;
            height: 16px;
            stroke: var(--text-muted);
          }
          
          .url-text {
            word-break: break-word;
            font-size: 0.9rem;
          }
          
          /* Priority Badge */
          .priority-badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.375rem 0.875rem;
            border-radius: 100px;
            font-size: 0.8rem;
            font-weight: 600;
            font-family: 'JetBrains Mono', monospace;
            min-width: 52px;
          }
          
          .priority-high {
            background: rgba(16, 185, 129, 0.15);
            color: var(--accent-light);
            border: 1px solid rgba(16, 185, 129, 0.3);
          }
          
          .priority-medium {
            background: rgba(59, 130, 246, 0.15);
            color: #60a5fa;
            border: 1px solid rgba(59, 130, 246, 0.3);
          }
          
          .priority-low {
            background: rgba(148, 163, 184, 0.1);
            color: var(--text-muted);
            border: 1px solid rgba(148, 163, 184, 0.2);
          }
          
          /* Frequency Tag */
          .freq-tag {
            display: inline-flex;
            align-items: center;
            gap: 0.375rem;
            color: var(--text-secondary);
            font-size: 0.85rem;
            text-transform: capitalize;
          }
          
          .freq-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: var(--text-muted);
          }
          
          .freq-daily .freq-dot { background: var(--accent); }
          .freq-weekly .freq-dot { background: #60a5fa; }
          .freq-monthly .freq-dot { background: #a78bfa; }
          .freq-yearly .freq-dot { background: var(--text-muted); }
          
          /* Date */
          .lastmod {
            color: var(--text-muted);
            font-size: 0.85rem;
            font-family: 'JetBrains Mono', monospace;
          }
          
          /* Images */
          .images-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.375rem;
            background: var(--bg-secondary);
            border: 1px solid var(--border);
            padding: 0.25rem 0.625rem;
            border-radius: 6px;
            color: var(--text-secondary);
            font-size: 0.8rem;
            font-family: 'JetBrains Mono', monospace;
          }
          
          .images-badge svg {
            width: 14px;
            height: 14px;
            stroke: var(--text-muted);
          }
          
          /* Footer */
          footer {
            background: var(--bg-secondary);
            border-top: 1px solid var(--border);
            padding: 2rem;
            text-align: center;
          }
          
          .footer-content {
            max-width: 1200px;
            margin: 0 auto;
          }
          
          .footer-brand {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--text-primary);
            text-decoration: none;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }
          
          .footer-brand:hover {
            color: var(--accent);
          }
          
          .footer-text {
            color: var(--text-muted);
            font-size: 0.875rem;
          }
          
          /* Responsive */
          @media (max-width: 900px) {
            header { padding: 2rem 1rem 3rem; }
            h1 { font-size: 2rem; }
            .subtitle { font-size: 1rem; }
            .stat-card { padding: 1rem 1.5rem; min-width: 120px; }
            .stat-value { font-size: 1.5rem; }
            .table-wrapper { overflow-x: auto; }
            th, td { padding: 0.875rem 1rem; }
            .url-cell { max-width: 280px; }
          }
          
          @media (max-width: 600px) {
            .brand { flex-direction: column; text-align: center; }
            .brand-text { text-align: center; }
            h1 { font-size: 1.625rem; }
            .stats { gap: 0.75rem; }
            .stat-card { padding: 0.875rem 1.25rem; min-width: 100px; }
            .url-icon { display: none; }
            th:nth-child(5), td:nth-child(5) { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="page-wrapper">
          <header>
            <div class="header-content">
              <div class="brand">
                <div class="logo">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div class="brand-text">
                  <div class="brand-name">Good Hosters</div>
                  <div class="brand-tagline">Expert Hosting Reviews</div>
                </div>
              </div>
              <h1>XML <span>Sitemap</span></h1>
              <p class="subtitle">Complete index of all pages indexed by search engines</p>
              <div class="stats">
                <div class="stat-card">
                  <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></div>
                  <div class="stat-label">Total URLs</div>
                </div>
                <div class="stat-card">
                  <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url[sitemap:priority >= 0.8])"/></div>
                  <div class="stat-label">High Priority</div>
                </div>
                <div class="stat-card">
                  <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url/image:image)"/></div>
                  <div class="stat-label">Images</div>
                </div>
              </div>
            </div>
          </header>
          
          <main>
            <div class="container">
              <div class="info-box">
                <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
                <p>
                  This XML sitemap is used by search engines to discover and index pages on this website.
                  Learn more at <a href="https://www.sitemaps.org/" target="_blank" rel="noopener">sitemaps.org</a>.
                </p>
              </div>
              
              <div class="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>URL</th>
                      <th>Priority</th>
                      <th>Frequency</th>
                      <th>Last Modified</th>
                      <th>Images</th>
                    </tr>
                  </thead>
                  <tbody>
                    <xsl:for-each select="sitemap:urlset/sitemap:url">
                      <xsl:sort select="sitemap:priority" order="descending" data-type="number"/>
                      <tr>
                        <td class="url-cell">
                          <a class="url-link" href="{sitemap:loc}">
                            <div class="url-icon">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                              </svg>
                            </div>
                            <span class="url-text"><xsl:value-of select="sitemap:loc"/></span>
                          </a>
                        </td>
                        <td>
                          <xsl:choose>
                            <xsl:when test="sitemap:priority >= 0.8">
                              <span class="priority-badge priority-high"><xsl:value-of select="sitemap:priority"/></span>
                            </xsl:when>
                            <xsl:when test="sitemap:priority >= 0.5">
                              <span class="priority-badge priority-medium"><xsl:value-of select="sitemap:priority"/></span>
                            </xsl:when>
                            <xsl:otherwise>
                              <span class="priority-badge priority-low"><xsl:value-of select="sitemap:priority"/></span>
                            </xsl:otherwise>
                          </xsl:choose>
                        </td>
                        <td>
                          <span class="freq-tag freq-{sitemap:changefreq}">
                            <span class="freq-dot"></span>
                            <xsl:value-of select="sitemap:changefreq"/>
                          </span>
                        </td>
                        <td class="lastmod"><xsl:value-of select="sitemap:lastmod"/></td>
                        <td>
                          <xsl:if test="count(image:image) > 0">
                            <span class="images-badge">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                <circle cx="8.5" cy="8.5" r="1.5"/>
                                <polyline points="21 15 16 10 5 21"/>
                              </svg>
                              <xsl:value-of select="count(image:image)"/>
                            </span>
                          </xsl:if>
                        </td>
                      </tr>
                    </xsl:for-each>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
          
          <footer>
            <div class="footer-content">
              <a href="https://goodhosters.com" class="footer-brand">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
                Good Hosters
              </a>
              <p class="footer-text">Expert Web Hosting Reviews &amp; Comparisons</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
