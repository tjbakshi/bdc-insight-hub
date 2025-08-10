import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { DataTable, Column } from '@/components/DataTable';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { TrendingUp, TrendingDown, DollarSign, Percent, BarChart3 } from 'lucide-react';
import { fetchBdcs } from '@/lib/api';
import type { Bdc } from '@/types/db';
import { useToast } from '@/hooks/use-toast';

// Mock data for BDC companies
const bdcData = [
  {
    id: 1,
    name: 'Ares Capital Corporation',
    ticker: 'ARCC',
    price: 19.45,
    change: 0.23,
    changePercent: 1.2,
    dividend: 0.48,
    yield: 9.9,
    nav: 18.92,
    premium: 2.8,
    sector: 'Diversified',
    aum: '25.4B'
  },
  {
    id: 2,
    name: 'FS KKR Capital Corp',
    ticker: 'FSK',
    price: 20.15,
    change: -0.12,
    changePercent: -0.6,
    dividend: 0.62,
    yield: 12.3,
    nav: 19.84,
    premium: 1.6,
    sector: 'Technology',
    aum: '3.2B'
  },
  {
    id: 3,
    name: 'Blackstone Secured Lending',
    ticker: 'BXSL',
    price: 31.22,
    change: 0.45,
    changePercent: 1.5,
    dividend: 0.77,
    yield: 9.9,
    nav: 30.45,
    premium: 2.5,
    sector: 'Healthcare',
    aum: '8.7B'
  },
  {
    id: 4,
    name: 'Apollo Investment Corp',
    ticker: 'AINV',
    price: 13.85,
    change: -0.08,
    changePercent: -0.6,
    dividend: 0.31,
    yield: 9.0,
    nav: 13.12,
    premium: 5.6,
    sector: 'Energy',
    aum: '1.8B'
  },
  {
    id: 5,
    name: 'Main Street Capital',
    ticker: 'MAIN',
    price: 42.18,
    change: 0.67,
    changePercent: 1.6,
    dividend: 0.215,
    yield: 6.1,
    nav: 25.43,
    premium: 65.8,
    sector: 'Industrial',
    aum: '4.1B'
  }
];

const columns: Column<typeof bdcData[0]>[] = [
  {
    key: 'name',
    label: 'Company',
    sortable: true,
    render: (value, row) => (
      <div>
        <div className="font-medium">{value}</div>
        <div className="text-sm text-muted-foreground">{row.ticker}</div>
      </div>
    )
  },
  {
    key: 'price',
    label: 'Price',
    sortable: true,
    render: (value) => `$${value.toFixed(2)}`
  },
  {
    key: 'change',
    label: 'Change',
    sortable: true,
    render: (value, row) => (
      <div className={`flex items-center gap-1 ${value >= 0 ? 'text-success' : 'text-destructive'}`}>
        {value >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
        <span>${Math.abs(value).toFixed(2)} ({row.changePercent >= 0 ? '+' : ''}{row.changePercent.toFixed(1)}%)</span>
      </div>
    )
  },
  {
    key: 'yield',
    label: 'Yield',
    sortable: true,
    render: (value) => (
      <Badge variant="secondary">
        {value.toFixed(1)}%
      </Badge>
    )
  },
  {
    key: 'premium',
    label: 'Premium/Discount',
    sortable: true,
    render: (value) => (
      <span className={value > 0 ? 'text-warning' : 'text-success'}>
        {value > 0 ? '+' : ''}{value.toFixed(1)}%
      </span>
    )
  },
  {
    key: 'sector',
    label: 'Sector',
    sortable: true,
    render: (value) => <Badge variant="outline">{value}</Badge>
  },
  {
    key: 'aum',
    label: 'AUM',
    sortable: true,
    render: (value) => `$${value}`
  }
];

const stats = [
  {
    title: 'Total Market Cap',
    value: '$43.2B',
    change: '+2.4%',
    trend: 'up' as const,
    icon: DollarSign
  },
  {
    title: 'Average Yield',
    value: '9.44%',
    change: '+0.1%',
    trend: 'up' as const,
    icon: Percent
  },
  {
    title: 'Companies Tracked',
    value: '52',
    change: '+3',
    trend: 'up' as const,
    icon: BarChart3
  },
  {
    title: 'Avg Premium',
    value: '15.7%',
    change: '-1.2%',
    trend: 'down' as const,
    icon: TrendingUp
  }
];

export default function BDCs() {
  const [bdcData, setBdcData] = useState<Bdc[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadBdcs = async () => {
      try {
        setLoading(true);
        const data = await fetchBdcs();
        setBdcData(data);
      } catch (error) {
        console.error('Error loading BDCs:', error);
        toast({
          title: "Error",
          description: "Failed to load BDC data. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadBdcs();
  }, [toast]);

  const bdcColumns: Column<Bdc>[] = [
    {
      key: 'name',
      label: 'Company',
      sortable: true,
      render: (value, row) => (
        <div>
          <div className="font-medium">{value}</div>
          <div className="text-sm text-muted-foreground">{row.ticker}</div>
        </div>
      )
    },
    {
      key: 'ticker',
      label: 'Ticker',
      sortable: true,
      render: (value) => <Badge variant="outline">{value}</Badge>
    },
    {
      key: 'cik',
      label: 'CIK',
      sortable: true,
      render: (value) => <span className="text-muted-foreground">{value}</span>
    }
  ];

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight">BDC Companies</h1>
            <p className="text-muted-foreground">
              Monitor Business Development Company performance, yields, and key metrics.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <Card key={i}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-4" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-8 w-16 mb-1" />
                    <Skeleton className="h-3 w-24" />
                  </CardContent>
                </Card>
              ))
            ) : (
              stats.map((stat) => (
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
                      {stat.change} from last month
                    </p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* BDC Table */}
          <Card>
            <CardHeader>
              <CardTitle>BDC Companies</CardTitle>
              <CardDescription>
                All tracked Business Development Companies from our database
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="space-y-4">
                  <Skeleton className="h-10 w-full" />
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-16 w-full" />
                  ))}
                </div>
              ) : (
                <DataTable
                  data={bdcData}
                  columns={bdcColumns}
                  searchPlaceholder="Search BDC companies..."
                />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}