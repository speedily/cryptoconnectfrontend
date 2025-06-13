
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { TrendingUp, TrendingDown, Users, Star } from 'lucide-react';

export const SocialTrading = () => {
  const tradingGroups = [
    {
      name: "Base Builders",
      members: 1247,
      performance: "+18.5%",
      isPositive: true,
      leader: "CryptoWhale",
      description: "Focus on Base ecosystem tokens and emerging DeFi protocols",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=base"
    },
    {
      name: "DeFi Maximalists",
      members: 892,
      performance: "+12.3%",
      isPositive: true,
      leader: "DeFiGuru",
      description: "Advanced DeFi strategies and yield farming opportunities",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=defi"
    },
    {
      name: "AI Traders",
      members: 634,
      performance: "+24.7%",
      isPositive: true,
      leader: "AIAlpha",
      description: "Algorithmic trading strategies powered by AI insights",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ai"
    }
  ];

  const recentSignals = [
    {
      user: "CryptoWhale",
      action: "BUY",
      token: "USDC/ETH",
      confidence: 85,
      timeAgo: "2m ago"
    },
    {
      user: "DeFiGuru",
      action: "SELL",
      token: "UNI",
      confidence: 92,
      timeAgo: "5m ago"
    },
    {
      user: "AIAlpha",
      action: "HOLD",
      token: "BASE",
      confidence: 78,
      timeAgo: "8m ago"
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the Best
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent block">
              Trading Communities
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Connect with successful traders, share strategies, and grow your portfolio together 
            in our exclusive social trading groups.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Trading Groups */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                Featured Trading Groups
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {tradingGroups.map((group, index) => (
                <div key={index} className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={group.avatar} />
                        <AvatarFallback>{group.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-white font-semibold">{group.name}</h3>
                        <p className="text-gray-400 text-sm">Led by {group.leader}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`flex items-center gap-1 ${group.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {group.isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        <span className="font-semibold">{group.performance}</span>
                      </div>
                      <p className="text-gray-400 text-sm">{group.members} members</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{group.description}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Live Trading Signals */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                Live Trading Signals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentSignals.map((signal, index) => (
                <div key={index} className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${signal.user}`} />
                        <AvatarFallback>{signal.user[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-white font-medium">{signal.user}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{signal.timeAgo}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant={signal.action === 'BUY' ? 'default' : signal.action === 'SELL' ? 'destructive' : 'secondary'}
                        className={
                          signal.action === 'BUY' ? 'bg-green-600 hover:bg-green-700' :
                          signal.action === 'SELL' ? 'bg-red-600 hover:bg-red-700' :
                          'bg-yellow-600 hover:bg-yellow-700'
                        }
                      >
                        {signal.action}
                      </Badge>
                      <span className="text-white font-semibold">{signal.token}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-blue-400 font-semibold">{signal.confidence}%</div>
                      <div className="text-gray-400 text-xs">confidence</div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
