import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LayoutDashboard, Eye, Star, Building, Users, Calendar } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              FlexLiving Assessment
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Reviews Dashboard
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Comprehensive property management platform for monitoring guest reviews, 
              analyzing performance, and managing public displays across all properties.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/dashboard">
                  <LayoutDashboard className="h-5 w-5" />
                  Manager Dashboard
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/reviews">
                  <Eye className="h-5 w-5" />
                  Public Reviews
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="shadow-card hover:shadow-elegant transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <LayoutDashboard className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">Review Management</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Filter, sort, and approve reviews across all properties with advanced analytics and performance monitoring.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-success/10 rounded-lg">
                      <Star className="h-6 w-6 text-success" />
                    </div>
                    <h3 className="font-semibold">Performance Analytics</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Track property performance, identify trends, and monitor category ratings across cleanliness, location, and value.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-warning/10 rounded-lg">
                      <Building className="h-6 w-6 text-warning" />
                    </div>
                    <h3 className="font-semibold">Multi-Property Support</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Manage reviews across Shoreditch, Canary Wharf, King's Cross, and Notting Hill properties from one dashboard.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">Multi-Channel Integration</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Unified view of reviews from Hostaway, Airbnb, and Booking.com with normalized data structure.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-success/10 rounded-lg">
                      <Eye className="h-6 w-6 text-success" />
                    </div>
                    <h3 className="font-semibold">Public Display Control</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Selectively approve reviews for public website display with one-click approval system.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-warning/10 rounded-lg">
                      <Calendar className="h-6 w-6 text-warning" />
                    </div>
                    <h3 className="font-semibold">Trend Analysis</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Monitor review trends over time with visual indicators for improving or declining performance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">
              Access the manager dashboard to start reviewing and managing your property feedback.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link to="/dashboard">
                <LayoutDashboard className="h-5 w-5" />
                Open Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
