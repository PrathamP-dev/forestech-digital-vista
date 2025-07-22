const RssTerms = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 gradient-forest bg-clip-text text-transparent">
          RSS Terms of Use
        </h1>
        
        <div className="prose prose-lg max-w-none text-foreground">
          <p className="text-lg mb-6">
            FORESTECH, an initiative of Myristika, offers RSS (Really Simple Syndication) feeds to provide users with easy access to our latest updates, articles, tools, and insights.
          </p>
          
          <p className="mb-6">
            By accessing or using our RSS feeds, you agree to the following terms:
          </p>

          <h2 className="text-2xl font-bold mb-4 text-primary">Usage Rights</h2>
          <p className="mb-4">
            The RSS feeds are provided solely for personal, non-commercial use or for non-profit educational or informational websites.
          </p>
          <p className="mb-6">
            You may display the content as provided in the feed, including the headline, summary, and link back to the original page on the FORESTECH website.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-primary">Attribution</h2>
          <p className="mb-6">
            Proper attribution to FORESTECH (forestech.org) must be maintained. The content must not be altered or presented in a way that misrepresents the source.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-primary">Modifications and Limitations</h2>
          <p className="mb-4">
            You may not modify, distribute, or monetize the RSS feed content.
          </p>
          <p className="mb-6">
            FORESTECH reserves the right to modify, discontinue, or limit access to its RSS feeds at any time without notice.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-primary">No Endorsement</h2>
          <p className="mb-6">
            Use of our RSS feeds does not imply endorsement by FORESTECH or Myristika of any website, organization, or viewpoint where the content appears.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-primary">Respect for Intellectual Property</h2>
          <p className="mb-6">
            All content accessed through RSS feeds remains the intellectual property of FORESTECH and Myristika and is protected by applicable copyright and trademark laws.
          </p>

          <p className="text-lg font-medium">
            For questions about using our RSS feeds or to request special permissions, please contact us at: info.myristika@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default RssTerms;