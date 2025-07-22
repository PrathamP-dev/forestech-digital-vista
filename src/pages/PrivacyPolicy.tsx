const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 gradient-forest bg-clip-text text-transparent">
          Privacy Notice
        </h1>
        
        <div className="prose prose-lg max-w-none text-foreground">
          <p className="text-lg mb-6">
            At FORESTECH, an initiative by Myristika, we value your privacy and are committed to protecting your personal information. This Privacy Notice explains how we collect, use, and safeguard your data when you visit our website.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-primary">Information We Collect</h2>
          <p className="mb-4">We may collect limited personal data when you:</p>
          <ul className="list-disc ml-6 mb-6">
            <li>Subscribe to our newsletter</li>
            <li>Fill out contact or collaboration forms</li>
            <li>Access certain resources or participate in events</li>
          </ul>
          <p className="mb-6">
            This information may include your name, email address, organization, and professional interest areas.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-primary">How We Use Your Information</h2>
          <p className="mb-4">Your information is used to:</p>
          <ul className="list-disc ml-6 mb-6">
            <li>Respond to inquiries or requests</li>
            <li>Share updates, newsletters, and event invites</li>
            <li>Improve website functionality and user experience</li>
            <li>Monitor site performance through analytics (e.g., Google Analytics)</li>
          </ul>
          <p className="mb-6">
            We do not sell or share your personal data with third parties for commercial purposes.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-primary">Cookies</h2>
          <p className="mb-6">
            Our website uses cookies to enhance your experience. For more information, please read our Cookie Policy.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-primary">Third-Party Tools</h2>
          <p className="mb-6">
            We may use third-party services (e.g., analytics, email delivery) that process data in compliance with their own privacy policies.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-primary">Your Rights</h2>
          <p className="mb-6">
            You have the right to access, update, or request deletion of your personal data. To do so, please contact us at info.myristika@gmail.com.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-primary">Changes to This Notice</h2>
          <p className="mb-6">
            We may update this Privacy Notice from time to time. Please review it periodically for any changes.
          </p>

          <p className="text-lg font-medium">
            For questions or concerns about this Privacy Notice, please write to us at: info.myristika@gmail.com. Your trust is important to us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;