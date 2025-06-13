
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-purple-950 to-gray-950">
      <Navigation />
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Privacy Policy</h1>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                CryptoConnect ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our social trading and community building platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Wallet Information</h3>
                  <p className="text-gray-300">We collect your blockchain wallet address and transaction data for portfolio tracking and trading functionality.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">XMTP Messages</h3>
                  <p className="text-gray-300">Messages sent through our platform are encrypted end-to-end using XMTP protocol. We do not store or access the content of your messages.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Usage Data</h3>
                  <p className="text-gray-300">We collect information about how you interact with our platform for analytics and improvement purposes.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">How We Use Your Information</h2>
              <ul className="space-y-2 text-gray-300">
                <li>• Provide and maintain our services</li>
                <li>• Process transactions and manage portfolios</li>
                <li>• Facilitate secure messaging between users</li>
                <li>• Generate AI-powered trading insights</li>
                <li>• Improve our platform and user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate security measures to protect your information. All messages are encrypted using XMTP's end-to-end encryption, and we use secure protocols for all blockchain interactions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Third-Party Services</h2>
              <p className="text-gray-300 leading-relaxed">
                We integrate with Base blockchain, XMTP messaging, and AI services. Please review their respective privacy policies for information about how they handle your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us through our GitHub repository or community channels.
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

export default Privacy;
