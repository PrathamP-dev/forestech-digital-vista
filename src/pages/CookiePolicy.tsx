const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 gradient-forest bg-clip-text text-transparent">
          Cookie Policy
        </h1>
        
        <div className="prose prose-lg max-w-none text-foreground">
          <p className="text-lg mb-6">
            This Cookie Policy explains how FORESTECH, a platform by Myristika, uses cookies and similar technologies when you visit our website.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-primary">What Are Cookies?</h2>
          <p className="mb-6">
            Cookies are small text files that are stored on your device when you visit a website. They help us improve your experience by remembering your preferences, analyzing site traffic, and delivering relevant content.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-primary">Types of Cookies We Use</h2>
          
          <h3 className="text-xl font-bold mb-3 text-primary">Essential Cookies</h3>
          <p className="mb-4">
            These are necessary for the website to function properly, enabling features such as page navigation and access to secure areas.
          </p>

          <h3 className="text-xl font-bold mb-3 text-primary">Performance & Analytics Cookies</h3>
          <p className="mb-4">
            These help us understand how visitors interact with the site, allowing us to improve its performance and content.
          </p>

          <h3 className="text-xl font-bold mb-3 text-primary">Functionality Cookies</h3>
          <p className="mb-4">
            These allow the website to remember your preferences (such as language or location) to enhance your experience.
          </p>

          <h3 className="text-xl font-bold mb-3 text-primary">Third-Party Cookies</h3>
          <p className="mb-6">
            We may use cookies from trusted third parties (e.g., Google Analytics) for insights into usage patterns and website performance.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-primary">Managing Cookies</h2>
          <p className="mb-6">
            You can manage or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of the site.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-primary">Changes to This Policy</h2>
          <p className="mb-6">
            We may update this Cookie Policy from time to time to reflect changes in law or our data practices. Please check this page periodically for updates.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-primary">Contact Us</h2>
          <p className="text-lg">
            If you have any questions about this policy or how we use cookies, please reach out to us at:
          </p>
          <p className="text-lg font-medium">
            📧 info.myristika@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;