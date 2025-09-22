import { useState, useMemo } from 'react';
import { mockReviews, mockPropertyStats } from '@/lib/mockData';
import { Review, ReviewFilters } from '@/types/review';
import { ReviewCard } from '@/components/ReviewCard';
import { PropertyStatsCard } from '@/components/PropertyStatsCard';
import { ReviewFilters as FiltersComponent } from '@/components/ReviewFilters';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LayoutDashboard, BarChart3, Eye, Clock, Star } from 'lucide-react';

const Dashboard = () => {
  const [reviews, setReviews] = useState<Review[]>(mockReviews);
  const [filters, setFilters] = useState<ReviewFilters>({});
  const [view, setView] = useState<'reviews' | 'analytics'>('reviews');

  const handleApprovalToggle = (reviewId: number, approved: boolean) => {
    setReviews(prev => 
      prev.map(review => 
        review.id === reviewId 
          ? { ...review, isApprovedForPublic: approved }
          : review
      )
    );
  };

  const filteredReviews = useMemo(() => {
    return reviews.filter(review => {
      if (filters.property && review.listingName !== filters.property) return false;
      if (filters.channel && review.channel !== filters.channel) return false;
      if (filters.status) {
        if (filters.status === 'approved' && !review.isApprovedForPublic) return false;
        if (filters.status !== 'approved' && review.status !== filters.status) return false;
      }
      if (filters.rating) {
        const avgRating = review.reviewCategory.reduce((sum, cat) => sum + cat.rating, 0) / review.reviewCategory.length;
        if (avgRating < filters.rating) return false;
      }
      return true;
    });
  }, [reviews, filters]);

  const properties = [...new Set(reviews.map(r => r.listingName))];
  const channels = [...new Set(reviews.map(r => r.channel).filter(Boolean))];

  const totalStats = {
    totalReviews: reviews.length,
    approvedReviews: reviews.filter(r => r.isApprovedForPublic).length,
    pendingReviews: reviews.filter(r => !r.isApprovedForPublic).length,
    averageRating: reviews.reduce((sum, r) => {
      const avg = r.reviewCategory.reduce((s, c) => s + c.rating, 0) / r.reviewCategory.length;
      return sum + avg;
    }, 0) / reviews.length
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">FlexLiving Reviews Dashboard</h1>
              <p className="text-muted-foreground">Manage property reviews and monitor performance</p>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant={view === 'reviews' ? 'default' : 'ghost'}
                onClick={() => setView('reviews')}
                className="gap-2"
              >
                <LayoutDashboard className="h-4 w-4" />
                Reviews
              </Button>
              <Button
                variant={view === 'analytics' ? 'default' : 'ghost'}
                onClick={() => setView('analytics')}
                className="gap-2"
              >
                <BarChart3 className="h-4 w-4" />
                Analytics
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-6">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-card p-4 rounded-lg shadow-card">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <div>
                <p className="text-2xl font-bold">{totalStats.averageRating.toFixed(1)}</p>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-4 rounded-lg shadow-card">
            <div className="flex items-center gap-2">
              <LayoutDashboard className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{totalStats.totalReviews}</p>
                <p className="text-sm text-muted-foreground">Total Reviews</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-4 rounded-lg shadow-card">
            <div className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-success" />
              <div>
                <p className="text-2xl font-bold">{totalStats.approvedReviews}</p>
                <p className="text-sm text-muted-foreground">Public Reviews</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-4 rounded-lg shadow-card">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-warning" />
              <div>
                <p className="text-2xl font-bold">{totalStats.pendingReviews}</p>
                <p className="text-sm text-muted-foreground">Pending</p>
              </div>
            </div>
          </div>
        </div>

        {view === 'reviews' ? (
          <div className="space-y-6">
            <FiltersComponent
              filters={filters}
              onFiltersChange={setFilters}
              properties={properties}
              channels={channels as string[]}
            />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold">Reviews</h2>
                <Badge variant="secondary">{filteredReviews.length} results</Badge>
              </div>
            </div>
            
            <div className="grid gap-4">
              {filteredReviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  review={review}
                  onApprovalToggle={handleApprovalToggle}
                />
              ))}
            </div>
            
            {filteredReviews.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No reviews match your current filters.</p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Property Analytics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockPropertyStats.map((stats, index) => (
                <PropertyStatsCard key={index} stats={stats} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;