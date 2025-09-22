import { PropertyStats } from '@/types/review';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, TrendingUp, TrendingDown, Minus, Eye, Clock } from 'lucide-react';

interface PropertyStatsCardProps {
  stats: PropertyStats;
}

export const PropertyStatsCard = ({ stats }: PropertyStatsCardProps) => {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-success" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-destructive" />;
      default: return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-success';
      case 'down': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <Card className="shadow-card hover:shadow-elegant transition-all duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold">{stats.propertyName}</CardTitle>
          <div className="flex items-center gap-1">
            {getTrendIcon(stats.recentTrend)}
            <span className={`text-sm font-medium ${getTrendColor(stats.recentTrend)}`}>
              {stats.recentTrend}
            </span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-2xl font-bold">{stats.averageRating.toFixed(1)}</span>
            </div>
            <p className="text-xs text-muted-foreground">Average Rating</p>
          </div>
          
          <div className="space-y-1">
            <span className="text-2xl font-bold">{stats.totalReviews}</span>
            <p className="text-xs text-muted-foreground">Total Reviews</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4 text-success" />
            <span className="text-sm">
              <span className="font-medium text-success">{stats.approvedReviews}</span> approved
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-warning" />
            <span className="text-sm">
              <span className="font-medium text-warning">{stats.pendingReviews}</span> pending
            </span>
          </div>
        </div>
        
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Category Ratings</p>
          <div className="space-y-1">
            {Object.entries(stats.categoryRatings).map(([category, rating]) => (
              <div key={category} className="flex items-center justify-between text-sm">
                <span className="capitalize">{category.replace('_', ' ')}</span>
                <span className="font-medium">{rating}/10</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};