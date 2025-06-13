
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-purple-950 to-gray-950">
      <Navigation />
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Terms of Service</h1>
          
          <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using CryptoConnect, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Description of Service</h2>
              <p className="text-gray-300 leading-relaxed">
                CryptoConnect is a social trading and community building platform built on Base blockchain and XMTP messaging protocol. We provide tools for portfolio management, secure messaging, and AI-powered trading insights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">User Responsibilities</h2>
              <ul className="space-y-2 text-gray-300">
                <li>• You are responsible for maintaining the security of your wallet and private keys</li>
                <li>• You must comply with all applicable laws and regulations</li>
                <li>• You are responsible for your own trading decisions and financial outcomes</li>
                <li>• You must not use the platform for illegal activities or to harm others</li>
                <li>• You must respect other users and maintain appropriate conduct in communities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Financial Disclaimer</h2>
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-300 font-semibold mb-2">Important Financial Notice:</p>
                <p className="text-gray-300 leading-relaxed">
                  Trading cryptocurrencies involves significant risk. Our AI insights and community recommendations are for informational purposes only and do not constitute financial advice. You should conduct your own research and consider your financial situation before making any trading decisions.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Platform Availability</h2>
              <p className="text-gray-300 leading-relaxed">
                We strive to maintain platform availability but cannot guarantee uninterrupted service. We may temporarily suspend or restrict access for maintenance, updates, or other operational reasons.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                CryptoConnect shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of the platform, including but not limited to trading losses or technical issues.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Modifications</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective upon posting to the platform. Your continued use constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                For questions about these Terms of Service, please contact us through our GitHub repository or community channels.
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

export default Terms;
