export interface Bdc {
  id: string;
  cik: string;
  name: string;
  ticker: string;
  fiscal_year_end_month: number;
  fiscal_year_end_day: number;
  created_at: string;
}

export interface Filing {
  id: string;
  bdc_cik: string;
  accession_number: string;
  form: string;
  filed: string;
  period_end: string;
  primary_document: string;
  source: string;
  status: string;
  error?: string;
  created_at: string;
}

export interface Investment {
  id: string;
  bdc_cik: string;
  accession_number: string;
  portfolio_company: string;
  investment_type: string;
  industry: string;
  business_description: string;
  interest_rate?: number;
  reference_rate?: string;
  spread_bps?: number;
  maturity_date?: string;
  par_amount?: number;
  cost?: number;
  fair_value?: number;
  fmv_pct_par?: number;
  fmv_pct_cost?: number;
  created_at: string;
}