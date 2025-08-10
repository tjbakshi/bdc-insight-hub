import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Database, 
  Settings, 
  Shield, 
  Activity, 
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';

const systemStats = [
  {
    title: 'Active Users',
    value: '1,247',
    change: '+12%',
    icon: Users
  },
  {
    title: 'Data Sources',
    value: '8',
    change: 'Healthy',
    icon: Database
  },
  {
    title: 'System Uptime',
    value: '99.97%',
    change: '+0.02%',
    icon: Activity
  },
  {
    title: 'API Calls (24h)',
    value: '45,231',
    change: '+8%',
    icon: Settings
  }
];

const systemHealth = [
  {
    service: 'Data Feed Service',
    status: 'healthy' as const,
    lastUpdated: '2 minutes ago',
    uptime: '99.9%'
  },
  {
    service: 'Authentication Service',
    status: 'healthy' as const,
    lastUpdated: '1 minute ago',
    uptime: '100%'
  },
  {
    service: 'Analytics Engine',
    status: 'warning' as const,
    lastUpdated: '15 minutes ago',
    uptime: '98.5%'
  },
  {
    service: 'Notification Service',
    status: 'healthy' as const,
    lastUpdated: '3 minutes ago',
    uptime: '99.8%'
  }
];

const recentActivities = [
  {
    action: 'Data sync completed',
    timestamp: '5 minutes ago',
    type: 'success' as const,
    details: 'All BDC data updated successfully'
  },
  {
    action: 'User registration spike',
    timestamp: '1 hour ago',
    type: 'info' as const,
    details: '23 new users registered'
  },
  {
    action: 'API rate limit warning',
    timestamp: '2 hours ago',
    type: 'warning' as const,
    details: 'Approaching daily limit for data provider'
  },
  {
    action: 'System backup completed',
    timestamp: '6 hours ago',
    type: 'success' as const,
    details: 'Daily backup completed successfully'
  }
];

export default function Admin() {
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
              <p className="text-muted-foreground">
                System administration and monitoring for BDC Tracker.
              </p>
            </div>
            <Button>
              <Settings className="w-4 h-4 mr-2" />
              System Settings
            </Button>
          </div>

          {/* System Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemStats.map((stat) => (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {stat.change}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* System Health & Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>System Health</CardTitle>
                <CardDescription>
                  Current status of all system services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemHealth.map((service) => (
                    <div key={service.service} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {service.status === 'healthy' && (
                          <CheckCircle className="w-5 h-5 text-success" />
                        )}
                        {service.status === 'warning' && (
                          <AlertCircle className="w-5 h-5 text-warning" />
                        )}
                        <div>
                          <div className="font-medium">{service.service}</div>
                          <div className="text-sm text-muted-foreground">
                            Updated {service.lastUpdated}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={service.status === 'healthy' ? 'default' : 'destructive'}
                        >
                          {service.status}
                        </Badge>
                        <div className="text-sm text-muted-foreground mt-1">
                          {service.uptime} uptime
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Latest system events and notifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex gap-3 p-3 border rounded-lg">
                      <div className="flex-shrink-0 mt-1">
                        {activity.type === 'success' && (
                          <CheckCircle className="w-4 h-4 text-success" />
                        )}
                        {activity.type === 'warning' && (
                          <AlertCircle className="w-4 h-4 text-warning" />
                        )}
                        {activity.type === 'info' && (
                          <Clock className="w-4 h-4 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{activity.action}</div>
                        <div className="text-sm text-muted-foreground">
                          {activity.details}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {activity.timestamp}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common administrative tasks and system operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Database className="w-6 h-6" />
                  <span>Backup Database</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Users className="w-6 h-6" />
                  <span>Manage Users</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Shield className="w-6 h-6" />
                  <span>Security Settings</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Activity className="w-6 h-6" />
                  <span>View Logs</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Settings className="w-6 h-6" />
                  <span>System Config</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <AlertCircle className="w-6 h-6" />
                  <span>Alerts Setup</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}