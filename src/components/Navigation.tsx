
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, MessageCircle, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            CryptoConnect
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/features" className="text-gray-300 hover:text-purple-400 transition-colors">Features</Link>
          <Link to="/community" className="text-gray-300 hover:text-purple-400 transition-colors">Community</Link>
          <Link to="/ai-insights" className="text-gray-300 hover:text-purple-400 transition-colors">AI Insights</Link>
          <a 
            href="https://github.com/speedily/cryptoconnectgit/blob/main/cryptoconnect/cryptoconnectoverview.md" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            Docs
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gray-300 hover:text-purple-400 hover:bg-purple-500/10"
            onClick={() => window.open('https://github.com/speedily/cryptoconnectgit/tree/main/cryptoconnect', '_blank')}
          >
            <Github className="w-4 h-4" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gray-300 hover:text-purple-400 hover:bg-purple-500/10"
            onClick={() => window.open('https://xmtp.chat', '_blank')}
          >
            <MessageCircle className="w-4 h-4" />
          </Button>
          
          <Button 
            variant="default" 
            size="sm" 
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
          >
            <Wallet className="w-4 h-4 mr-2" />
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  );
};
