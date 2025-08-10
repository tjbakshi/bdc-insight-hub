import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  ExternalLink, 
  Download, 
  Video, 
  FileText, 
  HelpCircle,
  Code,
  Database
} from 'lucide-react';

const documentationSections = [
  {
    title: 'Getting Started',
    description: 'Learn the basics of using BDC Tracker to monitor your investments.',
    icon: BookOpen,
    articles: [
      { title: 'Quick Start Guide', type: 'guide', estimatedTime: '5 min' },
      { title: 'Setting Up Your Portfolio', type: 'tutorial', estimatedTime: '10 min' },
      { title: 'Understanding BDC Metrics', type: 'explanation', estimatedTime: '15 min' },
    ]
  },
  {
    title: 'Investment Tracking',
    description: 'Comprehensive guides for tracking and analyzing your BDC investments.',
    icon: Database,
    articles: [
      { title: 'Adding New Investments', type: 'tutorial', estimatedTime: '8 min' },
      { title: 'Portfolio Performance Analysis', type: 'guide', estimatedTime: '12 min' },
      { title: 'Dividend Tracking', type: 'tutorial', estimatedTime: '6 min' },
    ]
  },
  {
    title: 'Analytics & Reports',
    description: 'Make the most of our analytics tools and reporting features.',
    icon: FileText,
    articles: [
      { title: 'Understanding Market Trends', type: 'explanation', estimatedTime: '20 min' },
      { title: 'Custom Reports', type: 'tutorial', estimatedTime: '15 min' },
      { title: 'Exporting Data', type: 'guide', estimatedTime: '5 min' },
    ]
  },
  {
    title: 'API Reference',
    description: 'Technical documentation for developers using our API.',
    icon: Code,
    articles: [
      { title: 'Authentication', type: 'reference', estimatedTime: '10 min' },
      { title: 'BDC Data Endpoints', type: 'reference', estimatedTime: '15 min' },
      { title: 'Rate Limits & Best Practices', type: 'guide', estimatedTime: '8 min' },
    ]
  }
];

const quickLinks = [
  {
    title: 'Video Tutorials',
    description: 'Step-by-step video guides',
    icon: Video,
    color: 'text-primary'
  },
  {
    title: 'FAQ',
    description: 'Frequently asked questions',
    icon: HelpCircle,
    color: 'text-success'
  },
  {
    title: 'API Documentation',
    description: 'Technical reference docs',
    icon: Code,
    color: 'text-warning'
  },
  {
    title: 'Download Resources',
    description: 'PDFs and guides',
    icon: Download,
    color: 'text-destructive'
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'tutorial': return 'default';
    case 'guide': return 'secondary';
    case 'explanation': return 'outline';
    case 'reference': return 'destructive';
    default: return 'secondary';
  }
};

export default function Docs() {
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Documentation</h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about using BDC Tracker effectively. 
              From getting started to advanced features and API integration.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link) => (
              <Card key={link.title} className="hover:shadow-medium transition-smooth cursor-pointer">
                <CardContent className="p-6 text-center">
                  <link.icon className={`w-8 h-8 mx-auto mb-3 ${link.color}`} />
                  <h3 className="font-semibold mb-2">{link.title}</h3>
                  <p className="text-sm text-muted-foreground">{link.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Documentation Sections */}
          <div className="space-y-8">
            {documentationSections.map((section) => (
              <Card key={section.title}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{section.title}</CardTitle>
                      <CardDescription>{section.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.articles.map((article) => (
                      <div key={article.title} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-smooth cursor-pointer">
                        <div className="flex items-center gap-3">
                          <FileText className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <div className="font-medium">{article.title}</div>
                            <div className="text-sm text-muted-foreground">
                              {article.estimatedTime} read
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={getTypeColor(article.type)}>
                            {article.type}
                          </Badge>
                          <ExternalLink className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Data Sources Information */}
          <Card>
            <CardHeader>
              <CardTitle>Data Sources</CardTitle>
              <CardDescription>
                Understanding the data behind BDC Tracker
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">SEC BDC Data Sets</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Our primary data source comes from SEC filings submitted by Business Development Companies. 
                    This includes quarterly and annual reports (10-K, 10-Q) that contain detailed investment portfolio information.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Investment-level data including fair value, cost basis, and portfolio company details</li>
                    <li>• Interest rates, maturity dates, and security types</li>
                    <li>• Industry classifications and business descriptions</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">SOI (Schedule of Investments)</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Schedule of Investments data provides granular details about each investment holding, 
                    extracted directly from SEC filings.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Data Coverage</h3>
                  <p className="text-sm text-muted-foreground">
                    Our dataset includes comprehensive BDC investment data starting from August 1, 2022. 
                    Data is updated quarterly following SEC filing deadlines.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Resources</CardTitle>
              <CardDescription>
                More ways to get help and stay updated with BDC Tracker
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Support</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <HelpCircle className="w-4 h-4 mr-2" />
                      Contact Support
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Video className="w-4 h-4 mr-2" />
                      Schedule a Demo
                    </Button>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">Downloads</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      User Manual (PDF)
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      API Specification
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Search and Contact */}
          <div className="text-center p-8 bg-muted/30 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Can't find what you're looking for?</h3>
            <p className="text-muted-foreground mb-4">
              Our support team is here to help you get the most out of BDC Tracker.
            </p>
            <Button>
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}