
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Users, Zap, Brain, TrendingUp, Shield, MessageCircle, Globe, Target, BarChart, Coins } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Social Trading Groups",
      description: "Create and join exclusive trading communities with like-minded traders.",
      details: [
        "Private group creation with invitation system",
        "Real-time strategy sharing and discussions",
        "Member performance leaderboards",
        "Group-based trading competitions"
      ]
    },
    {
      icon: Zap,
      title: "DeFi Integration",
      description: "Seamlessly trade on Base network with advanced portfolio tools.",
      details: [
        "Gasless USDC transactions on Base",
        "Automated portfolio rebalancing",
        "Cross-protocol yield farming",
        "Smart contract interaction tools"
      ]
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Get intelligent market analysis and trading recommendations.",
      details: [
        "Real-time market sentiment analysis",
        "Automated risk assessment scoring",
        "Personalized trading strategy suggestions",
        "Price prediction algorithms"
      ]
    },
    {
      icon: Shield,
      title: "XMTP Security",
      description: "End-to-end encrypted messaging for secure communications.",
      details: [
        "Military-grade encryption protocols",
        "Decentralized message routing",
        "Private key management",
        "Secure file sharing capabilities"
      ]
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Track and optimize your trading performance with detailed metrics.",
      details: [
        "Portfolio performance tracking",
        "Risk-adjusted return calculations",
        "Benchmark comparisons",
        "Historical performance analysis"
      ]
    },
    {
      icon: MessageCircle,
      title: "Real-time Communication",
      description: "Stay connected with instant messaging and notifications.",
      details: [
        "Live group chat functionality",
        "Push notifications for market events",
        "Voice and video calling",
        "Screen sharing for strategy demos"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      <Navigation />
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Powerful Features for
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                Social Trading
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to trade socially, manage portfolios, and build communities on Base network.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-400">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Features;
