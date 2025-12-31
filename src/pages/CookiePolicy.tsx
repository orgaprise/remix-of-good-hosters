import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  const lastUpdated = "December 30, 2025";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://yourdomain.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Cookie Policy",
        "item": "https://yourdomain.com/cookie-policy"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Cookie Policy | GoodHosters</title>
        <meta name="description" content="Learn about how GoodHosters uses cookies and similar technologies. Understand your choices regarding cookies on our website." />
        <link rel="canonical" href="https://yourdomain.com/cookie-policy" />
        <meta property="og:title" content="Cookie Policy | GoodHosters" />
        <meta property="og:description" content="Learn about how GoodHosters uses cookies and similar technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/cookie-policy" />
        <meta name="robots" content="noindex, follow" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-12 lg:py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Cookie <span className="text-gradient">Policy</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                
                {/* Introduction */}
                <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 mb-8">
                  <p className="text-muted-foreground leading-relaxed">
                    This Cookie Policy explains what cookies are, how GoodHosters uses them, and your choices regarding their use. By continuing to use our website, you consent to our use of cookies in accordance with this policy.
                  </p>
                </div>

                {/* Section 1 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    1. What Are Cookies?
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                    </p>
                    <p>
                      Cookies can be "persistent" or "session" cookies:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-foreground">Persistent Cookies:</strong> Remain on your device for a set period or until you delete them</li>
                      <li><strong className="text-foreground">Session Cookies:</strong> Deleted automatically when you close your browser</li>
                    </ul>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    2. How We Use Cookies
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      GoodHosters uses cookies for several purposes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>To ensure the website functions properly</li>
                      <li>To remember your preferences and settings</li>
                      <li>To analyze how visitors use our website</li>
                      <li>To improve our content and user experience</li>
                      <li>To track affiliate referrals and conversions</li>
                      <li>To deliver relevant advertisements (if applicable)</li>
                    </ul>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    3. Types of Cookies We Use
                  </h2>
                  <div className="space-y-6 text-muted-foreground">
                    
                    {/* Essential Cookies */}
                    <div className="bg-muted/30 border border-border rounded-xl p-5">
                      <h3 className="font-semibold text-foreground text-lg mb-2">Essential Cookies</h3>
                      <p className="mb-3">
                        These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions you take, such as setting privacy preferences or filling in forms.
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-2 pr-4 text-foreground">Cookie Name</th>
                              <th className="text-left py-2 pr-4 text-foreground">Purpose</th>
                              <th className="text-left py-2 text-foreground">Duration</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-border/50">
                              <td className="py-2 pr-4">cookie_consent</td>
                              <td className="py-2 pr-4">Stores your cookie preferences</td>
                              <td className="py-2">1 year</td>
                            </tr>
                            <tr>
                              <td className="py-2 pr-4">session_id</td>
                              <td className="py-2 pr-4">Maintains session state</td>
                              <td className="py-2">Session</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="bg-muted/30 border border-border rounded-xl p-5">
                      <h3 className="font-semibold text-foreground text-lg mb-2">Analytics Cookies</h3>
                      <p className="mb-3">
                        These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-2 pr-4 text-foreground">Cookie Name</th>
                              <th className="text-left py-2 pr-4 text-foreground">Purpose</th>
                              <th className="text-left py-2 text-foreground">Duration</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-border/50">
                              <td className="py-2 pr-4">_ga</td>
                              <td className="py-2 pr-4">Google Analytics - Distinguishes users</td>
                              <td className="py-2">2 years</td>
                            </tr>
                            <tr className="border-b border-border/50">
                              <td className="py-2 pr-4">_ga_*</td>
                              <td className="py-2 pr-4">Google Analytics - Maintains session state</td>
                              <td className="py-2">2 years</td>
                            </tr>
                            <tr>
                              <td className="py-2 pr-4">_gid</td>
                              <td className="py-2 pr-4">Google Analytics - Distinguishes users</td>
                              <td className="py-2">24 hours</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="bg-muted/30 border border-border rounded-xl p-5">
                      <h3 className="font-semibold text-foreground text-lg mb-2">Marketing & Affiliate Cookies</h3>
                      <p className="mb-3">
                        These cookies track visitors across websites and are used to track affiliate referrals and display relevant advertisements.
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-2 pr-4 text-foreground">Cookie Name</th>
                              <th className="text-left py-2 pr-4 text-foreground">Purpose</th>
                              <th className="text-left py-2 text-foreground">Duration</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-border/50">
                              <td className="py-2 pr-4">affiliate_ref</td>
                              <td className="py-2 pr-4">Tracks affiliate referral source</td>
                              <td className="py-2">30-90 days</td>
                            </tr>
                            <tr>
                              <td className="py-2 pr-4">_fbp</td>
                              <td className="py-2 pr-4">Facebook Pixel - Tracks conversions</td>
                              <td className="py-2">3 months</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Section 4 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    4. Third-Party Cookies
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Some cookies on our website are placed by third-party services. These include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-foreground">Google Analytics:</strong> For website traffic analysis and user behavior insights</li>
                      <li><strong className="text-foreground">Affiliate Networks:</strong> For tracking referrals to hosting providers</li>
                      <li><strong className="text-foreground">Social Media Platforms:</strong> If you interact with social sharing buttons</li>
                    </ul>
                    <p>
                      These third parties have their own privacy and cookie policies. We recommend reviewing their policies for more information.
                    </p>
                  </div>
                </div>

                {/* Section 5 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    5. Managing Your Cookie Preferences
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      You have the right to decide whether to accept or reject cookies. You can manage your preferences in several ways:
                    </p>
                    
                    <h3 className="font-semibold text-foreground text-lg mt-6">Browser Settings</h3>
                    <p>
                      Most browsers allow you to control cookies through their settings. You can:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>View what cookies are stored on your device</li>
                      <li>Delete all or specific cookies</li>
                      <li>Block third-party cookies</li>
                      <li>Block all cookies from specific sites</li>
                      <li>Block all cookies entirely</li>
                    </ul>
                    
                    <h3 className="font-semibold text-foreground text-lg mt-6">Browser-Specific Instructions</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-foreground">Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                      <li><strong className="text-foreground">Firefox:</strong> Settings → Privacy & Security → Cookies</li>
                      <li><strong className="text-foreground">Safari:</strong> Preferences → Privacy → Cookies</li>
                      <li><strong className="text-foreground">Edge:</strong> Settings → Cookies and Site Permissions</li>
                    </ul>

                    <div className="bg-accent/10 border border-accent/20 rounded-xl p-5 mt-6">
                      <p className="text-foreground font-medium mb-2">⚠️ Important Note</p>
                      <p className="text-sm">
                        Blocking or deleting cookies may affect your experience on our website. Some features may not function properly without essential cookies.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 6 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    6. Do Not Track Signals
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Some browsers offer a "Do Not Track" (DNT) feature that sends a signal to websites requesting that your browsing activity not be tracked. Currently, there is no universally accepted standard for how to respond to DNT signals.
                    </p>
                    <p>
                      As such, our website does not currently respond to DNT browser signals. However, you can manage your tracking preferences through your browser cookie settings as described above.
                    </p>
                  </div>
                </div>

                {/* Section 7 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    7. Updates to This Policy
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. When we make changes, we will update the "Last updated" date at the top of this policy.
                    </p>
                    <p>
                      We encourage you to periodically review this policy to stay informed about how we use cookies.
                    </p>
                  </div>
                </div>

                {/* Section 8 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    8. More Information
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      For more information about how we handle your personal data, please read our <Link to="/privacy-policy" className="text-accent hover:underline">Privacy Policy</Link>.
                    </p>
                    <p>
                      If you have any questions about our use of cookies, please contact us:
                    </p>
                    <div className="bg-muted/30 border border-border rounded-xl p-6 mt-4">
                      <p className="font-semibold text-foreground mb-2">GoodHosters</p>
                      <p>Email: <a href="mailto:contact@goodhosters.com" className="text-accent hover:underline">contact@goodhosters.com</a></p>
                      <p className="mt-4">
                        <Link to="/contact" className="text-accent hover:underline">Visit our Contact Page →</Link>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CookiePolicy;
