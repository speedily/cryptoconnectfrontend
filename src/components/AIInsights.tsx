
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, TrendingUp, AlertTriangle, Target, Lightbulb } from 'lucide-react';

export const AIInsights = () => {
  const marketInsights = [
    {
      title: "Base Network Momentum",
      description: "Strong institutional adoption signals continue to drive Base ecosystem growth",
      confidence: 92,
      type: "bullish",
      timeframe: "7 days"
    },
    {
      title: "DeFi TVL Analysis",
      description: "Total Value Locked shows healthy consolidation above key support levels",
      confidence: 85,
      type: "neutral",
      timeframe: "3 days"
    },
    {
      title: "Volatility Alert",
      description: "Increased volatility expected due to upcoming Fed announcement",
      confidence: 78,
      type: "warning",
      timeframe: "2 days"
    }
  ];

  const aiRecommendations = [
    {
      action: "Increase Exposure",
      asset: "Base Ecosystem Tokens",
      reason: "Strong fundamentals + institutional adoption",
      confidence: 88
    },
    {
      action: "Reduce Risk",
      asset: "High-Beta Assets",
      reason: "Upcoming volatility period detected",
      confidence: 82
    },
    {
      action: "Monitor Closely",
      asset: "DeFi Protocols",
      reason: "Potential regulatory developments",
      confidence: 75
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI-Powered
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
              Market Intelligence
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Leverage advanced AI algorithms to get real-time market analysis, 
            risk assessments, and personalized trading recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Market Insights */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-400" />
                Real-time Market Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {marketInsights.map((insight, index) => (
                <div key={index} className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-2">{insight.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{insight.description}</p>
                    </div>
                    <div className="ml-4 text-right">
                      <div className="text-purple-400 font-bold text-lg">{insight.confidence}%</div>
                      <div className="text-gray-400 text-xs">confidence</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant="secondary"
                      className={
                        insight.type === 'bullish' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                        insight.type === 'warning' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                        'bg-blue-500/20 text-blue-400 border-blue-500/30'
                      }
                    >
                      {insight.type === 'bullish' ? <TrendingUp className="w-3 h-3 mr-1" /> :
                       insight.type === 'warning' ? <AlertTriangle className="w-3 h-3 mr-1" /> :
                       <Target className="w-3 h-3 mr-1" />}
                      {insight.type.charAt(0).toUpperCase() + insight.type.slice(1)}
                    </Badge>
                    <span className="text-gray-400 text-sm">{insight.timeframe}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* AI Recommendations */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                AI Trading Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {aiRecommendations.map((rec, index) => (
                <div key={index} className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge 
                          variant="outline"
                          className={
                            rec.action.includes('Increase') ? 'border-green-500 text-green-400' :
                            rec.action.includes('Reduce') ? 'border-red-500 text-red-400' :
                            'border-yellow-500 text-yellow-400'
                          }
                        >
                          {rec.action}
                        </Badge>
                        <span className="text-white font-semibold">{rec.asset}</span>
                      </div>
                      <p className="text-gray-300 text-sm">{rec.reason}</p>
                    </div>
                    <div className="ml-4 text-right">
                      <div className="text-yellow-400 font-bold text-lg">{rec.confidence}%</div>
                      <div className="text-gray-400 text-xs">confidence</div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* AI Status */}
              <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-purple-400 font-semibold">AI Engine Status</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Analyzing 1,247 data points across 15 protocols. Next update in 3 minutes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
