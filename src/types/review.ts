export interface ReviewCategory {
  category: string;
  rating: number;
}

export interface Review {
  id: number;
  type: string;
  status: 'published' | 'pending' | 'approved';
  rating: number | null;
  publicReview: string;
  reviewCategory: ReviewCategory[];
  submittedAt: string;
  guestName: string;
  listingName: string;
  channel?: string;
  isApprovedForPublic?: boolean;
}

export interface ReviewFilters {
  rating?: number;
  category?: string;
  channel?: string;
  dateRange?: {
    from: Date;
    to: Date;
  };
  status?: string;
  property?: string;
}

export interface PropertyStats {
  propertyName: string;
  averageRating: number;
  totalReviews: number;
  approvedReviews: number;
  pendingReviews: number;
  categoryRatings: { [key: string]: number };
  recentTrend: 'up' | 'down' | 'stable';
}