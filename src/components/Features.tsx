
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Zap, Brain, TrendingUp, Shield, MessageCircle } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Social Trading Groups",
      description: "Create and join exclusive trading communities. Share strategies, signals, and insights with like-minded traders.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "DeFi Integration",
      description: "Seamlessly trade on Base network with gasless USDC transactions and portfolio management tools.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Get real-time market analysis, risk assessments, and trading recommendations powered by GPT-4.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "XMTP Security",
      description: "End-to-end encrypted messaging ensures your trading discussions remain private and secure.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Track your portfolio performance, compare with community leaders, and optimize your strategies.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: MessageCircle,
      title: "Real-time Communication",
      description: "Instant messaging, group chats, and real-time notifications keep you connected with your community.",
      gradient: "from-cyan-500 to-teal-500"
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
              Trade Socially
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            CryptoConnect combines the best of social networking, DeFi trading, and AI analytics 
            to create the ultimate trading experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <CardHeader className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl mb-3">{feature.title}</CardTitle>
                <CardDescription className="text-gray-400 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
