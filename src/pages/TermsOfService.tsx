import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
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
        "name": "Terms of Service",
        "item": "https://yourdomain.com/terms-of-service"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Terms of Service | GoodHosters</title>
        <meta name="description" content="Read the Terms of Service for GoodHosters. Understand your rights and responsibilities when using our website and services." />
        <link rel="canonical" href="https://yourdomain.com/terms-of-service" />
        <meta property="og:title" content="Terms of Service | GoodHosters" />
        <meta property="og:description" content="Read the Terms of Service for GoodHosters." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/terms-of-service" />
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
                Terms of <span className="text-gradient">Service</span>
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
                    Welcome to GoodHosters. By accessing and using our website, you agree to be bound by these Terms of Service. Please read them carefully before using our services. If you do not agree with any part of these terms, you may not access our website.
                  </p>
                </div>

                {/* Section 1 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      By accessing or using GoodHosters, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our <Link to="/privacy-policy" className="text-accent hover:underline">Privacy Policy</Link>.
                    </p>
                    <p>
                      We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website following any changes constitutes acceptance of those changes.
                    </p>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    2. Description of Services
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      GoodHosters is an informational website that provides:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Reviews and comparisons of web hosting providers</li>
                      <li>Educational articles and guides about web hosting</li>
                      <li>Recommendations based on our independent testing and analysis</li>
                      <li>Links to third-party hosting providers and services</li>
                    </ul>
                    <p>
                      We do not directly provide web hosting services. All hosting services are provided by third-party companies that we review and recommend.
                    </p>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    3. Affiliate Relationships
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      GoodHosters participates in affiliate marketing programs. This means:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>We may earn commissions when you click on affiliate links and make purchases</li>
                      <li>Affiliate relationships do not influence our editorial content or reviews</li>
                      <li>Our reviews are based on independent testing by our team of software engineers and DevOps professionals</li>
                      <li>We clearly disclose affiliate relationships in accordance with applicable regulations</li>
                    </ul>
                  </div>
                </div>

                {/* Section 4 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    4. User Responsibilities
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>When using our website, you agree to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide accurate information when submitting forms or communications</li>
                      <li>Use the website only for lawful purposes</li>
                      <li>Not attempt to interfere with the proper functioning of the website</li>
                      <li>Not engage in any activity that could damage, disable, or impair the website</li>
                      <li>Not attempt to gain unauthorized access to any part of the website</li>
                      <li>Not use automated systems to access the website without permission</li>
                    </ul>
                  </div>
                </div>

                {/* Section 5 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    5. Intellectual Property
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      All content on GoodHosters, including but not limited to text, graphics, logos, images, and software, is the property of GoodHosters or its content suppliers and is protected by intellectual property laws.
                    </p>
                    <p>You may not:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Reproduce, distribute, or publicly display our content without permission</li>
                      <li>Modify or create derivative works based on our content</li>
                      <li>Use our content for commercial purposes without written consent</li>
                      <li>Remove any copyright or proprietary notices from our content</li>
                    </ul>
                    <p>
                      You may share links to our articles and reference our content with proper attribution.
                    </p>
                  </div>
                </div>

                {/* Section 6 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    6. Disclaimer of Warranties
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      The information on GoodHosters is provided "as is" without warranties of any kind, either express or implied.
                    </p>
                    <p>We do not warrant that:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>The website will be available at all times or uninterrupted</li>
                      <li>The information provided is completely accurate or up-to-date</li>
                      <li>Third-party hosting providers will meet your expectations</li>
                      <li>Any errors or defects will be corrected</li>
                    </ul>
                    <p>
                      Hosting provider features, pricing, and policies may change without notice. We recommend verifying current information directly with providers before making purchasing decisions.
                    </p>
                  </div>
                </div>

                {/* Section 7 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    7. Limitation of Liability
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      To the fullest extent permitted by law, GoodHosters shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Your use of or inability to use our website</li>
                      <li>Any purchases or decisions made based on our recommendations</li>
                      <li>Any third-party services accessed through our website</li>
                      <li>Unauthorized access to your data or transmissions</li>
                      <li>Any errors, omissions, or inaccuracies in our content</li>
                    </ul>
                  </div>
                </div>

                {/* Section 8 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    8. Third-Party Links
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our website contains links to third-party websites and services. These links are provided for your convenience and information.
                    </p>
                    <p>
                      We do not control or endorse these third-party sites and are not responsible for their content, privacy policies, or practices. Your interactions with third-party websites are solely between you and the third party.
                    </p>
                    <p>
                      We encourage you to review the terms and privacy policies of any third-party sites you visit.
                    </p>
                  </div>
                </div>

                {/* Section 9 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    9. Indemnification
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      You agree to indemnify, defend, and hold harmless GoodHosters and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Your use of the website</li>
                      <li>Your violation of these Terms of Service</li>
                      <li>Your violation of any rights of another party</li>
                      <li>Any content you submit or transmit through the website</li>
                    </ul>
                  </div>
                </div>

                {/* Section 10 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    10. Governing Law
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                    </p>
                    <p>
                      Any disputes arising from these terms or your use of the website shall be resolved through binding arbitration in accordance with applicable arbitration rules.
                    </p>
                  </div>
                </div>

                {/* Section 11 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    11. Severability
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      If any provision of these Terms of Service is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be modified to the minimum extent necessary to make it valid and enforceable.
                    </p>
                  </div>
                </div>

                {/* Section 12 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    12. Contact Information
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      If you have any questions about these Terms of Service, please contact us:
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

export default TermsOfService;
