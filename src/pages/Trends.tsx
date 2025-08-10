import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { LineChart } from '@/components/LineChart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Activity, AlertTriangle } from 'lucide-react';

// Mock trend data
const yieldTrendData = [
  { month: 'Jan', avgYield: 9.2, topYield: 12.1, lowYield: 6.3 },
  { month: 'Feb', avgYield: 9.3, topYield: 12.3, lowYield: 6.1 },
  { month: 'Mar', avgYield: 9.1, topYield: 12.0, lowYield: 6.2 },
  { month: 'Apr', avgYield: 9.4, topYield: 12.5, lowYield: 6.4 },
  { month: 'May', avgYield: 9.5, topYield: 12.7, lowYield: 6.3 },
  { month: 'Jun', avgYield: 9.44, topYield: 12.3, lowYield: 6.1 },
];

const premiumTrendData = [
  { month: 'Jan', avgPremium: 18.2, avgDiscount: -2.1 },
  { month: 'Feb', avgPremium: 17.8, avgDiscount: -1.9 },
  { month: 'Mar', avgPremium: 19.1, avgDiscount: -2.3 },
  { month: 'Apr', avgPremium: 16.9, avgDiscount: -1.8 },
  { month: 'May', avgPremium: 15.2, avgDiscount: -2.0 },
  { month: 'Jun', avgPremium: 15.7, avgDiscount: -1.7 },
];

const sectorPerformanceData = [
  { sector: 'Healthcare', count: 12, avgYield: 10.2, performance: 2.3 },
  { sector: 'Technology', count: 8, avgYield: 9.8, performance: 1.8 },
  { sector: 'Energy', count: 6, avgYield: 11.1, performance: -0.5 },
  { sector: 'Diversified', count: 15, avgYield: 9.1, performance: 1.2 },
  { sector: 'Industrial', count: 7, avgYield: 8.7, performance: 2.1 },
  { sector: 'Consumer', count: 4, avgYield: 9.5, performance: 0.8 },
];

const marketInsights = [
  {
    title: 'Rising Interest Rate Environment',
    description: 'BDCs benefit from floating rate loans as rates increase, improving net investment income.',
    type: 'positive' as const,
    impact: 'High'
  },
  {
    title: 'Credit Quality Concerns',
    description: 'Economic uncertainty leading to increased scrutiny of portfolio credit quality.',
    type: 'warning' as const,
    impact: 'Medium'
  },
  {
    title: 'Healthcare Sector Outperformance',
    description: 'Healthcare-focused BDCs showing stronger yield and NAV performance this quarter.',
    type: 'positive' as const,
    impact: 'Medium'
  },
  {
    title: 'Premium/Discount Compression',
    description: 'Average premiums to NAV have compressed as valuations normalize.',
    type: 'neutral' as const,
    impact: 'Low'
  }
];

export default function Trends() {
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight">Market Trends</h1>
            <p className="text-muted-foreground">
              Analyze BDC market trends, sector performance, and key insights.
            </p>
          </div>

          {/* Yield Trends */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <LineChart
              title="Yield Trends"
              data={yieldTrendData}
              lines={[
                { dataKey: 'avgYield', name: 'Average Yield', color: 'hsl(var(--primary))' },
                { dataKey: 'topYield', name: 'Top Yield', color: 'hsl(var(--success))' },
                { dataKey: 'lowYield', name: 'Lowest Yield', color: 'hsl(var(--warning))' }
              ]}
              xAxisKey="month"
              height={300}
            />
            
            <LineChart
              title="Premium/Discount Trends"
              data={premiumTrendData}
              lines={[
                { dataKey: 'avgPremium', name: 'Avg Premium', color: 'hsl(var(--warning))' },
                { dataKey: 'avgDiscount', name: 'Avg Discount', color: 'hsl(var(--success))' }
              ]}
              xAxisKey="month"
              height={300}
            />
          </div>

          {/* Sector Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Sector Performance</CardTitle>
              <CardDescription>
                Performance breakdown by investment sector over the last quarter
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sectorPerformanceData.map((sector) => (
                  <div key={sector.sector} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="font-medium">{sector.sector}</div>
                        <div className="text-sm text-muted-foreground">
                          {sector.count} companies • {sector.avgYield.toFixed(1)}% avg yield
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant={sector.performance >= 0 ? "default" : "destructive"}
                        className="min-w-[80px] justify-center"
                      >
                        {sector.performance >= 0 ? (
                          <TrendingUp className="w-3 h-3 mr-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 mr-1" />
                        )}
                        {sector.performance >= 0 ? '+' : ''}{sector.performance.toFixed(1)}%
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Market Insights */}
          <Card>
            <CardHeader>
              <CardTitle>Market Insights</CardTitle>
              <CardDescription>
                Key trends and developments affecting the BDC market
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {marketInsights.map((insight, index) => (
                  <div key={index} className="flex gap-4 p-4 border rounded-lg">
                    <div className="flex-shrink-0 mt-1">
                      {insight.type === 'positive' && (
                        <div className="w-2 h-2 bg-success rounded-full" />
                      )}
                      {insight.type === 'warning' && (
                        <AlertTriangle className="w-4 h-4 text-warning" />
                      )}
                      {insight.type === 'neutral' && (
                        <Activity className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{insight.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {insight.impact} Impact
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {insight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Market Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <span className="text-lg font-semibold">Bullish</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Rising yields and improving fundamentals
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Best Performing Sector
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold">Healthcare</div>
                <p className="text-sm text-muted-foreground">
                  +2.3% average performance
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Market Volatility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold">Moderate</div>
                <p className="text-sm text-muted-foreground">
                  Standard deviation: 12.3%
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}