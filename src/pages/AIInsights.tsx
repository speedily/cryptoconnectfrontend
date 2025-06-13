
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, TrendingUp, AlertTriangle, Target, BarChart, Zap } from 'lucide-react';

const AIInsights = () => {
  const insights = [
    {
      type: "Market Analysis",
      confidence: 94,
      signal: "BULLISH",
      description: "Strong upward momentum detected in Base ecosystem tokens",
      recommendation: "Consider increasing exposure to Base DeFi protocols",
      timeframe: "Next 7 days"
    },
    {
      type: "Risk Assessment",
      confidence: 87,
      signal: "MODERATE",
      description: "Portfolio concentration risk in single protocol",
      recommendation: "Diversify across 3-5 different protocols",
      timeframe: "Immediate"
    },
    {
      type: "Yield Opportunity",
      confidence: 91,
      signal: "HIGH",
      description: "New liquidity mining program with attractive APY",
      recommendation: "Allocate 15-20% of portfolio to new opportunity",
      timeframe: "Next 3 days"
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "Powered by GPT-4 and custom machine learning algorithms trained on crypto market data"
    },
    {
      icon: TrendingUp,
      title: "Market Prediction",
      description: "Analyze trends, sentiment, and technical indicators to predict market movements"
    },
    {
      icon: AlertTriangle,
      title: "Risk Analysis",
      description: "Real-time risk assessment and portfolio optimization recommendations"
    },
    {
      icon: Target,
      title: "Strategy Generation",
      description: "Personalized trading strategies based on your risk profile and goals"
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
              AI-Powered
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                Trading Insights
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Leverage cutting-edge AI to make smarter trading decisions and optimize your portfolio performance.
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8 py-3">
              <Brain className="w-5 h-5 mr-2" />
              Get AI Analysis
            </Button>
          </div>

          {/* Live Insights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Live AI Insights</h2>
            <div className="space-y-6">
              {insights.map((insight, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-700">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white flex items-center">
                        <Brain className="w-5 h-5 mr-2 text-blue-400" />
                        {insight.type}
                      </CardTitle>
                      <div className="flex items-center space-x-4">
                        <div className="text-sm text-gray-400">
                          Confidence: <span className="text-green-400">{insight.confidence}%</span>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          insight.signal === 'BULLISH' ? 'bg-green-500/20 text-green-400' :
                          insight.signal === 'HIGH' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {insight.signal}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-gray-400">
                      {insight.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <span className="text-gray-400 text-sm">Recommendation:</span>
                        <p className="text-white">{insight.recommendation}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Timeframe: {insight.timeframe}</span>
                        <Button variant="outline" size="sm" className="border-gray-600 text-gray-300">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* AI Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">AI Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <feature.icon className="w-6 h-6 mr-3 text-purple-400" />
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-center flex items-center justify-center">
                <BarChart className="w-6 h-6 mr-2 text-green-400" />
                AI Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">78%</div>
                  <div className="text-gray-400">Prediction Accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">+24%</div>
                  <div className="text-gray-400">Average Return Improvement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">-15%</div>
                  <div className="text-gray-400">Risk Reduction</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AIInsights;
