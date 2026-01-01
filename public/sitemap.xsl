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
        <style type="text/css">
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: #e2e8f0;
            min-height: 100vh;
            line-height: 1.6;
          }
          
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
          }
          
          header {
            text-align: center;
            padding: 3rem 1rem;
            background: rgba(15, 23, 42, 0.8);
            border-bottom: 1px solid rgba(148, 163, 184, 0.1);
            margin-bottom: 2rem;
          }
          
          .logo {
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1rem;
          }
          
          .logo-icon {
            width: 48px;
            height: 48px;
            background: linear-gradient(135deg, #22c55e, #16a34a);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .logo-icon svg {
            width: 28px;
            height: 28px;
            fill: white;
          }
          
          h1 {
            font-size: 2.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, #22c55e, #4ade80);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.5rem;
          }
          
          .subtitle {
            color: #94a3b8;
            font-size: 1.1rem;
          }
          
          .stats {
            display: flex;
            justify-content: center;
            gap: 3rem;
            margin-top: 1.5rem;
            flex-wrap: wrap;
          }
          
          .stat {
            text-align: center;
          }
          
          .stat-value {
            font-size: 2rem;
            font-weight: 700;
            color: #22c55e;
          }
          
          .stat-label {
            font-size: 0.875rem;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          
          .info-box {
            background: rgba(34, 197, 94, 0.1);
            border: 1px solid rgba(34, 197, 94, 0.2);
            border-radius: 12px;
            padding: 1.25rem;
            margin-bottom: 2rem;
          }
          
          .info-box p {
            color: #94a3b8;
            font-size: 0.95rem;
          }
          
          .info-box a {
            color: #22c55e;
            text-decoration: none;
          }
          
          .info-box a:hover {
            text-decoration: underline;
          }
          
          table {
            width: 100%;
            border-collapse: collapse;
            background: rgba(30, 41, 59, 0.5);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
          }
          
          th {
            background: rgba(15, 23, 42, 0.8);
            color: #94a3b8;
            font-weight: 600;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            padding: 1rem 1.25rem;
            text-align: left;
            border-bottom: 1px solid rgba(148, 163, 184, 0.1);
          }
          
          td {
            padding: 1rem 1.25rem;
            border-bottom: 1px solid rgba(148, 163, 184, 0.05);
            vertical-align: middle;
          }
          
          tr:last-child td {
            border-bottom: none;
          }
          
          tr:hover td {
            background: rgba(34, 197, 94, 0.05);
          }
          
          .url-cell {
            max-width: 400px;
          }
          
          .url-cell a {
            color: #22c55e;
            text-decoration: none;
            font-weight: 500;
            word-break: break-all;
            transition: color 0.2s;
          }
          
          .url-cell a:hover {
            color: #4ade80;
            text-decoration: underline;
          }
          
          .priority-badge {
            display: inline-flex;
            align-items: center;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 600;
          }
          
          .priority-high {
            background: rgba(34, 197, 94, 0.2);
            color: #4ade80;
          }
          
          .priority-medium {
            background: rgba(59, 130, 246, 0.2);
            color: #60a5fa;
          }
          
          .priority-low {
            background: rgba(148, 163, 184, 0.2);
            color: #94a3b8;
          }
          
          .changefreq {
            color: #64748b;
            font-size: 0.875rem;
            text-transform: capitalize;
          }
          
          .lastmod {
            color: #94a3b8;
            font-size: 0.875rem;
            font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;
          }
          
          .images-count {
            display: inline-flex;
            align-items: center;
            gap: 0.375rem;
            color: #64748b;
            font-size: 0.875rem;
          }
          
          .images-count svg {
            width: 16px;
            height: 16px;
            fill: currentColor;
          }
          
          footer {
            text-align: center;
            padding: 2rem;
            color: #64748b;
            font-size: 0.875rem;
          }
          
          footer a {
            color: #22c55e;
            text-decoration: none;
          }
          
          footer a:hover {
            text-decoration: underline;
          }
          
          @media (max-width: 768px) {
            .container {
              padding: 1rem;
            }
            
            h1 {
              font-size: 1.75rem;
            }
            
            .stats {
              gap: 1.5rem;
            }
            
            table {
              display: block;
              overflow-x: auto;
            }
            
            th, td {
              padding: 0.75rem;
              font-size: 0.875rem;
            }
          }
        </style>
      </head>
      <body>
        <header>
          <div class="logo">
            <div class="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
          </div>
          <h1>Good Hosters Sitemap</h1>
          <p class="subtitle">Complete index of all pages on goodhosters.com</p>
          <div class="stats">
            <div class="stat">
              <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></div>
              <div class="stat-label">Total URLs</div>
            </div>
            <div class="stat">
              <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url/image:image)"/></div>
              <div class="stat-label">Images</div>
            </div>
          </div>
        </header>
        
        <div class="container">
          <div class="info-box">
            <p>
              This is an XML sitemap, meant for consumption by search engines like Google, Bing, and others.
              You can find more information about XML sitemaps at <a href="https://www.sitemaps.org/" target="_blank" rel="noopener">sitemaps.org</a>.
            </p>
          </div>
          
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Priority</th>
                <th>Change Freq</th>
                <th>Last Modified</th>
                <th>Images</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <xsl:sort select="sitemap:priority" order="descending" data-type="number"/>
                <tr>
                  <td class="url-cell">
                    <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
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
                  <td class="changefreq"><xsl:value-of select="sitemap:changefreq"/></td>
                  <td class="lastmod"><xsl:value-of select="sitemap:lastmod"/></td>
                  <td>
                    <xsl:if test="count(image:image) > 0">
                      <span class="images-count">
                        <svg viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                        <xsl:value-of select="count(image:image)"/>
                      </span>
                    </xsl:if>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
        
        <footer>
          <p>Generated by <a href="https://goodhosters.com">Good Hosters</a> • Expert Web Hosting Reviews &amp; Comparisons</p>
        </footer>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
