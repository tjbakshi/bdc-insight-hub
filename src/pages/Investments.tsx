import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { DataTable, Column } from '@/components/DataTable';
import { LineChart } from '@/components/LineChart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlusCircle, Download, TrendingUp, DollarSign, Target, Percent } from 'lucide-react';

// Mock investment data
const investmentData = [
  {
    id: 1,
    company: 'Ares Capital Corporation',
    ticker: 'ARCC',
    shares: 500,
    avgCost: 18.75,
    currentPrice: 19.45,
    value: 9725,
    gainLoss: 350,
    gainLossPercent: 3.7,
    dividendReceived: 960,
    yield: 9.9,
    allocation: 25.4
  },
  {
    id: 2,
    company: 'FS KKR Capital Corp',
    ticker: 'FSK',
    shares: 300,
    avgCost: 21.10,
    currentPrice: 20.15,
    value: 6045,
    gainLoss: -285,
    gainLossPercent: -4.5,
    dividendReceived: 744,
    yield: 12.3,
    allocation: 15.8
  },
  {
    id: 3,
    company: 'Main Street Capital',
    ticker: 'MAIN',
    shares: 150,
    avgCost: 39.20,
    currentPrice: 42.18,
    value: 6327,
    gainLoss: 447,
    gainLossPercent: 7.6,
    dividendReceived: 387,
    yield: 6.1,
    allocation: 16.5
  },
  {
    id: 4,
    company: 'Blackstone Secured Lending',
    ticker: 'BXSL',
    shares: 200,
    avgCost: 30.45,
    currentPrice: 31.22,
    value: 6244,
    gainLoss: 154,
    gainLossPercent: 2.5,
    dividendReceived: 616,
    yield: 9.9,
    allocation: 16.3
  }
];

// Mock chart data for portfolio performance
const chartData = [
  { month: 'Jan', value: 35000, dividends: 280 },
  { month: 'Feb', value: 35420, dividends: 310 },
  { month: 'Mar', value: 34890, dividends: 295 },
  { month: 'Apr', value: 36200, dividends: 320 },
  { month: 'May', value: 37100, dividends: 340 },
  { month: 'Jun', value: 38341, dividends: 365 },
];

const columns: Column<typeof investmentData[0]>[] = [
  {
    key: 'company',
    label: 'Investment',
    sortable: true,
    render: (value, row) => (
      <div>
        <div className="font-medium">{value}</div>
        <div className="text-sm text-muted-foreground">{row.ticker} • {row.shares} shares</div>
      </div>
    )
  },
  {
    key: 'avgCost',
    label: 'Avg Cost',
    sortable: true,
    render: (value) => `$${value.toFixed(2)}`
  },
  {
    key: 'currentPrice',
    label: 'Current Price',
    sortable: true,
    render: (value) => `$${value.toFixed(2)}`
  },
  {
    key: 'value',
    label: 'Current Value',
    sortable: true,
    render: (value) => `$${value.toLocaleString()}`
  },
  {
    key: 'gainLoss',
    label: 'Gain/Loss',
    sortable: true,
    render: (value, row) => (
      <div className={`${value >= 0 ? 'text-success' : 'text-destructive'}`}>
        ${Math.abs(value).toLocaleString()} ({row.gainLossPercent >= 0 ? '+' : ''}{row.gainLossPercent.toFixed(1)}%)
      </div>
    )
  },
  {
    key: 'dividendReceived',
    label: 'Dividends (YTD)',
    sortable: true,
    render: (value) => `$${value.toLocaleString()}`
  },
  {
    key: 'allocation',
    label: 'Allocation',
    sortable: true,
    render: (value) => (
      <Badge variant="secondary">
        {value.toFixed(1)}%
      </Badge>
    )
  }
];

const portfolioStats = [
  {
    title: 'Total Portfolio Value',
    value: '$38,341',
    change: '+$666 (1.8%)',
    trend: 'up' as const,
    icon: DollarSign
  },
  {
    title: 'Total Dividends (YTD)',
    value: '$2,707',
    change: '+$365 this month',
    trend: 'up' as const,
    icon: Percent
  },
  {
    title: 'Portfolio Yield',
    value: '8.9%',
    change: '+0.2% vs target',
    trend: 'up' as const,
    icon: Target
  },
  {
    title: 'Unrealized Gain/Loss',
    value: '+$666',
    change: '+1.8%',
    trend: 'up' as const,
    icon: TrendingUp
  }
];

export default function Investments() {
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">My Investments</h1>
              <p className="text-muted-foreground">
                Track your BDC portfolio performance and dividend income.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button>
                <PlusCircle className="w-4 h-4 mr-2" />
                Add Investment
              </Button>
            </div>
          </div>

          {/* Portfolio Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioStats.map((stat) => (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className={`text-xs ${stat.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                    {stat.change}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Performance Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <LineChart
              title="Portfolio Value & Dividends"
              data={chartData}
              lines={[
                { dataKey: 'value', name: 'Portfolio Value', color: 'hsl(var(--primary))' },
                { dataKey: 'dividends', name: 'Monthly Dividends', color: 'hsl(var(--success))' }
              ]}
              xAxisKey="month"
              height={250}
            />
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Allocation Breakdown</CardTitle>
                <CardDescription>Current portfolio allocation by investment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {investmentData.map((investment) => (
                    <div key={investment.id} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="text-sm font-medium">{investment.ticker}</div>
                        <div className="w-full bg-muted rounded-full h-2 mt-1">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${investment.allocation}%` }}
                          />
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground ml-4">
                        {investment.allocation.toFixed(1)}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Investments Table */}
          <Card>
            <CardHeader>
              <CardTitle>Investment Holdings</CardTitle>
              <CardDescription>
                Detailed view of your BDC investment positions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable
                data={investmentData}
                columns={columns}
                searchPlaceholder="Search investments..."
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}