
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, MessageSquare, Trophy, Star, TrendingUp, Globe } from 'lucide-react';

const Community = () => {
  const communityStats = [
    { label: "Active Traders", value: "25K+", icon: Users },
    { label: "Trading Groups", value: "500+", icon: MessageSquare },
    { label: "Total Volume", value: "$10M+", icon: TrendingUp },
    { label: "Success Rate", value: "78%", icon: Trophy }
  ];

  const topGroups = [
    {
      name: "Base DeFi Masters",
      members: 1250,
      performance: "+24.5%",
      description: "Expert traders focusing on Base ecosystem DeFi protocols",
      leader: "0x1234...5678"
    },
    {
      name: "AI Trading Signals",
      members: 980,
      performance: "+18.3%",
      description: "Community driven by AI-powered trading insights",
      leader: "0x8765...4321"
    },
    {
      name: "USDC Yield Farmers",
      members: 750,
      performance: "+15.7%",
      description: "Focused on stable yield strategies on Base",
      leader: "0x2468...1357"
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
              Join the
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                Trading Community
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Connect with thousands of traders, share strategies, and grow together on Base network.
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8 py-3">
              <Users className="w-5 h-5 mr-2" />
              Join Community
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {communityStats.map((stat, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 text-center">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Top Trading Groups */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Top Trading Groups</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topGroups.map((group, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-white text-lg">{group.name}</CardTitle>
                      <div className="flex items-center text-green-400">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {group.performance}
                      </div>
                    </div>
                    <CardDescription className="text-gray-400">
                      {group.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Members:</span>
                        <span className="text-white">{group.members.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Leader:</span>
                        <span className="text-blue-400">{group.leader}</span>
                      </div>
                      <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:text-white">
                        View Group
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Community Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MessageSquare className="w-6 h-6 mr-2 text-blue-400" />
                  Real-time Chat
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Engage in live discussions with secure XMTP messaging
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• End-to-end encrypted messages</li>
                  <li>• Group channels for different strategies</li>
                  <li>• File sharing and screen capture</li>
                  <li>• Voice and video calls</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Trophy className="w-6 h-6 mr-2 text-purple-400" />
                  Competitions
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Participate in trading competitions and earn rewards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• Weekly trading challenges</li>
                  <li>• Prize pools in USDC</li>
                  <li>• Leaderboard rankings</li>
                  <li>• Achievement badges</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
