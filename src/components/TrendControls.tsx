import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Settings, Search } from 'lucide-react';

interface TrendControlsProps {
  metric: 'fmv_pct_par' | 'fmv_pct_cost';
  scope: 'bdc' | 'company';
  keyInput: string;
  onMetricChange: (metric: 'fmv_pct_par' | 'fmv_pct_cost') => void;
  onScopeChange: (scope: 'bdc' | 'company') => void;
  onKeyInputChange: (key: string) => void;
  onApplyFilters: () => void;
}

export function TrendControls({
  metric,
  scope,
  keyInput,
  onMetricChange,
  onScopeChange,
  onKeyInputChange,
  onApplyFilters
}: TrendControlsProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Settings className="w-4 h-4" />
          <h3 className="font-medium">Trend Analysis Controls</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Metric Selection */}
          <div className="space-y-2">
            <Label>Metric</Label>
            <Select value={metric} onValueChange={onMetricChange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fmv_pct_par">FMV % of Par</SelectItem>
                <SelectItem value="fmv_pct_cost">FMV % of Cost</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Scope Selection */}
          <div className="space-y-2">
            <Label>Analysis Scope</Label>
            <Select value={scope} onValueChange={onScopeChange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bdc">By BDC</SelectItem>
                <SelectItem value="company">By Company</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Key Input */}
          <div className="space-y-2">
            <Label>
              {scope === 'bdc' ? 'BDC Ticker' : 'Company Name'}
            </Label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder={scope === 'bdc' ? 'e.g., ARCC' : 'e.g., Ares Capital'}
                  value={keyInput}
                  onChange={(e) => onKeyInputChange(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Button onClick={onApplyFilters}>Apply</Button>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Current Analysis:</strong> {metric === 'fmv_pct_par' ? 'Fair Market Value as % of Par' : 'Fair Market Value as % of Cost'} 
            {' '}analyzed {scope === 'bdc' ? 'by BDC company' : 'by portfolio company'}
            {keyInput && ` for "${keyInput}"`}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}