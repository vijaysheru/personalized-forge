import { Review } from '@/types/review';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Calendar, MapPin, User, Check, X, Eye } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

interface ReviewCardProps {
  review: Review;
  onApprovalToggle: (reviewId: number, approved: boolean) => void;
  showApprovalControls?: boolean;
}

export const ReviewCard = ({ review, onApprovalToggle, showApprovalControls = true }: ReviewCardProps) => {
  const averageRating = review.reviewCategory.reduce((sum, cat) => sum + cat.rating, 0) / review.reviewCategory.length;
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'success';
      case 'pending': return 'warning';
      default: return 'secondary';
    }
  };

  const getChannelColor = (channel?: string) => {
    switch (channel) {
      case 'Airbnb': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'Booking.com': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Hostaway': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  return (
    <Card className="shadow-card hover:shadow-elegant transition-all duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{review.guestName}</span>
              <Badge variant={getStatusColor(review.status) as any}>
                {review.status}
              </Badge>
              {review.channel && (
                <Badge className={getChannelColor(review.channel)}>
                  {review.channel}
                </Badge>
              )}
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(review.submittedAt).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {review.listingName}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{averageRating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm leading-relaxed">{review.publicReview}</p>
        
        <div className="flex flex-wrap gap-2">
          {review.reviewCategory.map((category, index) => (
            <div key={index} className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded">
              <span className="capitalize">{category.category.replace('_', ' ')}</span>
              <span className="font-medium">{category.rating}/10</span>
            </div>
          ))}
        </div>
        
        {showApprovalControls && (
          <div className="flex items-center justify-between pt-2 border-t">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Show on public website</span>
            </div>
            <Switch
              checked={review.isApprovedForPublic}
              onCheckedChange={(checked) => onApprovalToggle(review.id, checked)}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};