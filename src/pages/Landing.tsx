import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, 
  BarChart3, 
  DollarSign, 
  Shield, 
  Zap, 
  Users,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';
import heroImage from '@/assets/hero-dashboard.jpg';

const features = [
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Deep insights into BDC performance, distributions, and portfolio metrics.'
  },
  {
    icon: DollarSign,
    title: 'Investment Tracking',
    description: 'Monitor your BDC investments with real-time data and historical analysis.'
  },
  {
    icon: Shield,
    title: 'Risk Assessment',
    description: 'Comprehensive risk analysis and portfolio diversification insights.'
  },
  {
    icon: Zap,
    title: 'Real-time Updates',
    description: 'Stay informed with live market data and automated alerts.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Share insights and collaborate with your investment team.'
  },
  {
    icon: TrendingUp,
    title: 'Trend Analysis',
    description: 'Identify market trends and opportunities in the BDC sector.'
  }
];

const benefits = [
  'Track 50+ BDC companies',
  'Real-time performance metrics',
  'Comprehensive risk analysis',
  'Portfolio optimization tools',
  'Custom alerts and notifications',
  'Export data for reporting'
];

export default function Landing() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
        <div className="container relative">
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                Track BDC Investments
                <span className="block text-white/90">Like a Pro</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Comprehensive Business Development Company investment tracking, 
                analytics, and portfolio management in one powerful platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/bdcs">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  View Demo
                </Button>
              </div>
            </div>
            <div className="mt-16 max-w-5xl mx-auto">
              <img
                src={heroImage}
                alt="BDC Tracker Dashboard"
                className="rounded-lg shadow-2xl border border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Everything you need to track BDCs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional-grade tools for monitoring Business Development Company 
              investments and making informed decisions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="border-border/50 hover:shadow-medium transition-smooth">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Why choose BDC Tracker?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Make smarter investment decisions with comprehensive BDC analysis, 
                real-time data, and professional-grade portfolio management tools.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="mt-8" asChild>
                <Link to="/bdcs">
                  Start Tracking Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <Card className="gradient-card border-border/50">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">$2.5B+</div>
                    <div className="text-muted-foreground">Assets Under Management Tracked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-muted-foreground">BDC Companies Monitored</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                    <div className="text-muted-foreground">Active Investors</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <Card className="gradient-primary text-primary-foreground border-none">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to optimize your BDC investments?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Join hundreds of investors who trust BDC Tracker for their 
                Business Development Company investment decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}