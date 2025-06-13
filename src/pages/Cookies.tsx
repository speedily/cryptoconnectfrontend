
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-purple-950 to-gray-950">
      <Navigation />
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Cookie Policy</h1>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">What Are Cookies</h2>
              <p className="text-gray-300 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our platform. They help us provide you with a better user experience and analyze how our platform is used.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">How We Use Cookies</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Essential Cookies</h3>
                  <p className="text-gray-300">These cookies are necessary for the platform to function properly. They enable wallet connections, maintain your session, and ensure security.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Analytics Cookies</h3>
                  <p className="text-gray-300">We use these cookies to understand how users interact with our platform, helping us improve the user experience.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Preference Cookies</h3>
                  <p className="text-gray-300">These cookies remember your preferences and settings to provide a personalized experience.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-300 leading-relaxed">
                Our platform may include cookies from third-party services such as:
              </p>
              <ul className="space-y-2 text-gray-300 mt-4">
                <li>• Base blockchain network services</li>
                <li>• XMTP messaging infrastructure</li>
                <li>• AI service providers</li>
                <li>• Analytics services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Local Storage</h2>
              <p className="text-gray-300 leading-relaxed">
                In addition to cookies, we may use browser local storage to save your preferences, wallet connection status, and other non-sensitive data to improve your experience across sessions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Managing Cookies</h2>
              <p className="text-gray-300 leading-relaxed">
                You can control cookies through your browser settings. However, disabling certain cookies may affect the functionality of our platform, particularly wallet connections and user preferences.
              </p>
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mt-4">
                <p className="text-yellow-300 font-semibold mb-2">Note:</p>
                <p className="text-gray-300">
                  Some cookies are essential for blockchain interactions and cannot be disabled while using the platform.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Updates to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about our use of cookies, please contact us through our GitHub repository or community channels.
              </p>
            </section>

            <p className="text-sm text-gray-500 mt-8">Last updated: January 2025</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cookies;
