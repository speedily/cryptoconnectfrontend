
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Trophy, Medal, Award, TrendingUp, Users } from 'lucide-react';

export const Community = () => {
  const leaderboard = [
    {
      rank: 1,
      name: "CryptoWhale",
      performance: "+47.3%",
      followers: 2847,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=whale",
      badge: "legendary"
    },
    {
      rank: 2,
      name: "DeFiMaster",
      performance: "+42.1%",
      followers: 1923,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=master",
      badge: "pro"
    },
    {
      rank: 3,
      name: "BaseBuilder",
      performance: "+38.7%",
      followers: 1456,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=builder",
      badge: "expert"
    },
    {
      rank: 4,
      name: "AITrader",
      performance: "+35.2%",
      followers: 1234,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ai",
      badge: "rising"
    },
    {
      rank: 5,
      name: "YieldFarmer",
      performance: "+32.8%",
      followers: 987,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=farmer",
      badge: "verified"
    }
  ];

  const communityStats = [
    {
      label: "Total Volume Traded",
      value: "$12.4M",
      change: "+23%",
      icon: TrendingUp
    },
    {
      label: "Active Communities",
      value: "156",
      change: "+12%",
      icon: Users
    },
    {
      label: "Successful Trades",
      value: "8,945",
      change: "+18%",
      icon: Trophy
    },
    {
      label: "Average ROI",
      value: "+24.3%",
      change: "+5%",
      icon: Award
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5 text-yellow-400" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Award className="w-5 h-5 text-orange-400" />;
      default:
        return <span className="w-5 h-5 flex items-center justify-center text-gray-400 font-bold">#{rank}</span>;
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'legendary':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'pro':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'expert':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'rising':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Community
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent block">
              Leaderboard
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how top traders in our community are performing. Learn from the best 
            and climb your way to the top of the leaderboard.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {communityStats.map((stat, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-700 text-center">
              <CardContent className="p-6">
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm mb-2">{stat.label}</div>
                <div className="text-green-400 text-xs font-semibold">{stat.change} this month</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Leaderboard */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                Top Performers This Month
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {leaderboard.map((trader, index) => (
                <div key={index} className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8">
                        {getRankIcon(trader.rank)}
                      </div>
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={trader.avatar} />
                        <AvatarFallback>{trader.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-white font-semibold">{trader.name}</h3>
                          <Badge variant="secondary" className={getBadgeColor(trader.badge)}>
                            {trader.badge}
                          </Badge>
                        </div>
                        <p className="text-gray-400 text-sm">{trader.followers} followers</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold text-lg">{trader.performance}</div>
                      <div className="text-gray-400 text-sm">30-day return</div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Community Achievements */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-400" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h3 className="text-white font-semibold">Monthly Champion</h3>
                    <p className="text-yellow-400 text-sm">CryptoWhale achieved +47.3% returns</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-6 h-6 text-purple-400" />
                  <div>
                    <h3 className="text-white font-semibold">Community Milestone</h3>
                    <p className="text-purple-400 text-sm">Reached 10,000 active traders!</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                  <div>
                    <h3 className="text-white font-semibold">Trading Volume</h3>
                    <p className="text-blue-400 text-sm">$12.4M total volume traded this month</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-6 h-6 text-green-400" />
                  <div>
                    <h3 className="text-white font-semibold">Success Rate</h3>
                    <p className="text-green-400 text-sm">87% of signals resulted in profits</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
