import { mockReviews } from '@/lib/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, User, Calendar } from 'lucide-react';

const PublicReviews = () => {
  const approvedReviews = mockReviews.filter(review => review.isApprovedForPublic);
  
  const averageRating = approvedReviews.length > 0 
    ? approvedReviews.reduce((sum, review) => {
        const avgRating = review.reviewCategory.reduce((s, cat) => s + cat.rating, 0) / review.reviewCategory.length;
        return sum + avgRating;
      }, 0) / approvedReviews.length
    : 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              FlexLiving London Properties
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Premium serviced apartments in the heart of London
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="text-xl font-bold">{averageRating.toFixed(1)}</span>
                <span className="opacity-80">average rating</span>
              </div>
              <div className="h-6 w-px bg-white/30"></div>
              <div>
                <span className="text-xl font-bold">{approvedReviews.length}</span>
                <span className="opacity-80 ml-1">guest reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Property Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">About Our Properties</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Experience luxury living in London with our carefully curated collection of serviced apartments. 
                    From trendy Shoreditch to prestigious Notting Hill, each property offers modern amenities, 
                    prime locations, and exceptional service that our guests love.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Property Features</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Premium locations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">24/7 concierge service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">High-speed Wi-Fi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Fully equipped kitchens</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="space-y-4">
                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <div className="text-center space-y-2">
                      <div className="text-3xl font-bold text-primary">{averageRating.toFixed(1)}</div>
                      <div className="flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(averageRating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Based on {approvedReviews.length} reviews
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Guests Say</h2>
              <p className="text-muted-foreground">
                Real reviews from guests who've experienced our properties
              </p>
            </div>

            {approvedReviews.length > 0 ? (
              <div className="grid gap-6">
                {approvedReviews.map((review) => {
                  const averageRating = review.reviewCategory.reduce((sum, cat) => sum + cat.rating, 0) / review.reviewCategory.length;
                  
                  return (
                    <Card key={review.id} className="shadow-card">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4 text-muted-foreground" />
                                <span className="font-medium">{review.guestName}</span>
                                <Badge variant="outline" className="text-xs">
                                  {review.channel}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                {new Date(review.submittedAt).toLocaleDateString()}
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-medium">{averageRating.toFixed(1)}/10</span>
                            </div>
                          </div>
                          
                          <p className="text-foreground leading-relaxed">{review.publicReview}</p>
                          
                          <div className="text-sm text-muted-foreground">
                            <span className="font-medium">{review.listingName}</span>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 pt-2">
                            {review.reviewCategory.map((category, index) => (
                              <div key={index} className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded">
                                <span className="capitalize">{category.category.replace('_', ' ')}</span>
                                <span className="font-medium">{category.rating}/10</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No approved reviews to display at this time.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicReviews;