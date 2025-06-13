
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Twitter, MessageCircle, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-purple-500/20 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              CryptoConnect
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              The first Social Trading & Community Building platform on Base. 
              Connect, trade, and grow together with AI-powered insights and secure XMTP messaging.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="border-purple-500/30 text-gray-400 hover:text-purple-400 hover:border-purple-400">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-purple-500/30 text-gray-400 hover:text-purple-400 hover:border-purple-400">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-purple-500/30 text-gray-400 hover:text-purple-400 hover:border-purple-400">
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-purple-500/30 text-gray-400 hover:text-purple-400 hover:border-purple-400">
                <Globe className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-white font-semibold mb-4">Features</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/features" className="hover:text-purple-400 transition-colors">Social Trading</a></li>
              <li><a href="/ai-insights" className="hover:text-purple-400 transition-colors">AI Insights</a></li>
              <li><a href="/defi" className="hover:text-purple-400 transition-colors">DeFi Integration</a></li>
              <li><a href="/community" className="hover:text-purple-400 transition-colors">Community Groups</a></li>
              <li><a href="/analytics" className="hover:text-purple-400 transition-colors">Portfolio Analytics</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="https://github.com/speedily/cryptoconnectgit/blob/main/cryptoconnect/cryptoconnectoverview.md" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Documentation</a></li>
              <li><a href="/api" className="hover:text-purple-400 transition-colors">API Reference</a></li>
              <li><a href="/support" className="hover:text-purple-400 transition-colors">Support</a></li>
              <li><a href="/community" className="hover:text-purple-400 transition-colors">Community</a></li>
              <li><a href="/blog" className="hover:text-purple-400 transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 CryptoConnect. Built on Base with XMTP. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="/cookies" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
