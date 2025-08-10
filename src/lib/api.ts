import { getSupabase } from './supabase';
import type { Bdc, Investment, Filing } from '../types/db';

// Mock data for development
const mockBdcData: Bdc[] = [
  {
    id: '1',
    cik: '0001433556',
    name: 'Ares Capital Corporation',
    ticker: 'ARCC',
    fiscal_year_end_month: 12,
    fiscal_year_end_day: 31,
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    cik: '0001433557',
    name: 'FS KKR Capital Corp',
    ticker: 'FSK',
    fiscal_year_end_month: 12,
    fiscal_year_end_day: 31,
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    cik: '0001433558',
    name: 'Blackstone Secured Lending',
    ticker: 'BXSL',
    fiscal_year_end_month: 12,
    fiscal_year_end_day: 31,
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    cik: '0001433559',
    name: 'Apollo Investment Corp',
    ticker: 'AINV',
    fiscal_year_end_month: 12,
    fiscal_year_end_day: 31,
    created_at: new Date().toISOString()
  },
  {
    id: '5',
    cik: '0001433560',
    name: 'Main Street Capital',
    ticker: 'MAIN',
    fiscal_year_end_month: 12,
    fiscal_year_end_day: 31,
    created_at: new Date().toISOString()
  }
];

const mockInvestmentData: Investment[] = [
  {
    id: '1',
    bdc_cik: '0001433556',
    accession_number: '0001433556-24-000001',
    portfolio_company: 'Tech Solutions Corp',
    investment_type: 'Senior Secured Loan',
    industry: 'Technology',
    business_description: 'Software development company',
    interest_rate: 12.5,
    reference_rate: 'SOFR',
    spread_bps: 750,
    maturity_date: '2026-12-31',
    par_amount: 10000000,
    cost: 9500000,
    fair_value: 9725000,
    fmv_pct_par: 97.25,
    fmv_pct_cost: 102.37,
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    bdc_cik: '0001433557',
    accession_number: '0001433557-24-000001',
    portfolio_company: 'Healthcare Services LLC',
    investment_type: 'Subordinated Debt',
    industry: 'Healthcare',
    business_description: 'Healthcare services provider',
    interest_rate: 15.0,
    reference_rate: 'Prime',
    spread_bps: 1100,
    maturity_date: '2027-06-30',
    par_amount: 6000000,
    cost: 6200000,
    fair_value: 6045000,
    fmv_pct_par: 100.75,
    fmv_pct_cost: 97.5,
    created_at: new Date().toISOString()
  }
];

// BDC API functions
export async function fetchBdcs(): Promise<Bdc[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  try {
    // TODO: Replace with actual Supabase query when ready
    // const supabase = getSupabase();
    // const { data, error } = await supabase.from('bdc').select('*');
    // if (error) throw error;
    // return data || [];
    
    return mockBdcData;
  } catch (error) {
    console.error('Error fetching BDCs:', error);
    throw error;
  }
}

// Investment API functions
export async function fetchInvestments(filters?: {
  bdcCik?: string;
  search?: string;
  type?: string;
  dateRange?: { from: Date; to: Date };
}): Promise<Investment[]> {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  try {
    let filteredData = [...mockInvestmentData];
    
    if (filters?.bdcCik) {
      filteredData = filteredData.filter(inv => inv.bdc_cik === filters.bdcCik);
    }
    
    if (filters?.search) {
      const searchLower = filters.search.toLowerCase();
      filteredData = filteredData.filter(inv => 
        inv.portfolio_company.toLowerCase().includes(searchLower)
      );
    }
    
    if (filters?.type) {
      filteredData = filteredData.filter(inv => inv.investment_type === filters.type);
    }
    
    return filteredData;
  } catch (error) {
    console.error('Error fetching investments:', error);
    throw error;
  }
}

// Trend data API functions
export async function fetchTrendData(
  metric: 'fmv_pct_par' | 'fmv_pct_cost',
  scope: 'bdc' | 'company',
  key?: string
): Promise<any[]> {
  await new Promise(resolve => setTimeout(resolve, 600));
  
  // Mock trend data based on parameters
  const mockTrendData = Array.from({ length: 12 }, (_, i) => ({
    month: new Date(2024, i, 1).toLocaleDateString('en-US', { month: 'short' }),
    value: Math.random() * 20 + 80, // Random values between 80-100
    [metric]: Math.random() * 20 + 80
  }));
  
  return mockTrendData;
}

// Admin API functions
export async function backfillDataset(): Promise<{ success: boolean; message: string }> {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return { success: true, message: 'Dataset backfill completed successfully' };
}

export async function updateLatestQuarter(): Promise<{ success: boolean; message: string }> {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return { success: true, message: 'Latest quarter data updated' };
}

export async function fetchSystemLogs(): Promise<any[]> {
  await new Promise(resolve => setTimeout(resolve, 500));
  return [
    {
      id: '1',
      timestamp: new Date().toISOString(),
      level: 'info',
      message: 'System initialized successfully',
      source: 'system'
    },
    {
      id: '2',
      timestamp: new Date(Date.now() - 300000).toISOString(),
      level: 'warn',
      message: 'High memory usage detected',
      source: 'monitor'
    }
  ];
}

// CSV Export utility
export function exportToCSV<T extends Record<string, any>>(
  data: T[],
  filename: string,
  columns?: { key: keyof T; label: string }[]
): void {
  if (!data.length) return;
  
  const headers = columns 
    ? columns.map(col => col.label)
    : Object.keys(data[0]);
  
  const csvContent = [
    headers.join(','),
    ...data.map(row => {
      const values = columns
        ? columns.map(col => row[col.key])
        : Object.values(row);
      
      return values.map(value => {
        const stringValue = String(value || '');
        return stringValue.includes(',') ? `"${stringValue}"` : stringValue;
      }).join(',');
    })
  ].join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}