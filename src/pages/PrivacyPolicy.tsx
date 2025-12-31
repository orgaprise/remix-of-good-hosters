import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
        "name": "Privacy Policy",
        "item": "https://yourdomain.com/privacy-policy"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy | GoodHosters</title>
        <meta name="description" content="Learn how GoodHosters collects, uses, and protects your personal information. Read our comprehensive privacy policy." />
        <link rel="canonical" href="https://yourdomain.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | GoodHosters" />
        <meta property="og:description" content="Learn how GoodHosters collects, uses, and protects your personal information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/privacy-policy" />
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
                Privacy <span className="text-gradient">Policy</span>
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
                    At GoodHosters, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully to understand our practices regarding your personal data.
                  </p>
                </div>

                {/* Section 1 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    1. Information We Collect
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We may collect the following types of information:</p>
                    
                    <h3 className="font-semibold text-foreground text-lg mt-6">Personal Information</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Name and email address when you subscribe to our newsletter</li>
                      <li>Contact information when you submit inquiries through our contact form</li>
                      <li>Any other information you voluntarily provide to us</li>
                    </ul>

                    <h3 className="font-semibold text-foreground text-lg mt-6">Automatically Collected Information</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>IP address and browser type</li>
                      <li>Device information and operating system</li>
                      <li>Pages visited and time spent on our website</li>
                      <li>Referring website addresses</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    2. How We Use Your Information
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We use the information we collect for various purposes, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>To provide and maintain our website and services</li>
                      <li>To send you newsletters and marketing communications (with your consent)</li>
                      <li>To respond to your inquiries and provide customer support</li>
                      <li>To analyze website usage and improve our content</li>
                      <li>To detect, prevent, and address technical issues</li>
                      <li>To comply with legal obligations</li>
                    </ul>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    3. Cookies and Tracking Technologies
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device.
                    </p>
                    <p>Types of cookies we use:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-foreground">Essential Cookies:</strong> Required for the website to function properly</li>
                      <li><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                      <li><strong className="text-foreground">Marketing Cookies:</strong> Used to track visitors across websites for advertising purposes</li>
                    </ul>
                    <p>
                      You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our website may not function properly without cookies.
                    </p>
                  </div>
                </div>

                {/* Section 4 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    4. Affiliate Disclosure
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      GoodHosters participates in affiliate marketing programs. This means we may earn a commission when you click on certain links on our website and make a purchase. These affiliate relationships do not influence our editorial content or reviews.
                    </p>
                    <p>
                      Our team of software engineers and DevOps professionals independently tests and evaluates all hosting providers featured on our website. Affiliate commissions help support our operations and allow us to continue providing free, unbiased content.
                    </p>
                  </div>
                </div>

                {/* Section 5 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    5. Third-Party Services
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We may use third-party services that collect, monitor, and analyze data:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-foreground">Google Analytics:</strong> For website traffic analysis</li>
                      <li><strong className="text-foreground">Email Service Providers:</strong> For newsletter delivery</li>
                      <li><strong className="text-foreground">Affiliate Networks:</strong> For tracking referral commissions</li>
                    </ul>
                    <p>
                      These third parties have their own privacy policies governing how they use such information. We encourage you to review their privacy policies.
                    </p>
                  </div>
                </div>

                {/* Section 6 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    6. Data Security
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                    </p>
                    <p>
                      While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                    </p>
                  </div>
                </div>

                {/* Section 7 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    7. Your Rights
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Depending on your location, you may have the following rights regarding your personal data:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-foreground">Right to Access:</strong> Request copies of your personal data</li>
                      <li><strong className="text-foreground">Right to Rectification:</strong> Request correction of inaccurate information</li>
                      <li><strong className="text-foreground">Right to Erasure:</strong> Request deletion of your personal data</li>
                      <li><strong className="text-foreground">Right to Restrict Processing:</strong> Request limitation of data processing</li>
                      <li><strong className="text-foreground">Right to Data Portability:</strong> Request transfer of your data</li>
                      <li><strong className="text-foreground">Right to Object:</strong> Object to processing of your personal data</li>
                    </ul>
                    <p>
                      To exercise any of these rights, please contact us using the information provided below.
                    </p>
                  </div>
                </div>

                {/* Section 8 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    8. Children's Privacy
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                    </p>
                  </div>
                </div>

                {/* Section 9 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    9. Changes to This Privacy Policy
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy.
                    </p>
                    <p>
                      We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>
                  </div>
                </div>

                {/* Section 10 */}
                <div className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    10. Contact Us
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="bg-muted/30 border border-border rounded-xl p-6 mt-4">
                      <p className="font-semibold text-foreground mb-2">GoodHosters</p>
                      <p>Email: <a href="mailto:contact@goodhosters.com" className="text-accent hover:underline">contact@goodhosters.com</a></p>
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

export default PrivacyPolicy;
