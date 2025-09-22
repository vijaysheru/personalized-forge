import { Review, PropertyStats } from '@/types/review';

export const mockReviews: Review[] = [
  {
    id: 7453,
    type: "host-to-guest",
    status: "published",
    rating: null,
    publicReview: "Shane and family are wonderful! Would definitely host again :)",
    reviewCategory: [
      { category: "cleanliness", rating: 10 },
      { category: "communication", rating: 10 },
      { category: "respect_house_rules", rating: 10 }
    ],
    submittedAt: "2020-08-21 22:45:14",
    guestName: "Shane Finkelstein",
    listingName: "2B N1 A - 29 Shoreditch Heights",
    channel: "Hostaway",
    isApprovedForPublic: false
  },
  {
    id: 7454,
    type: "guest-to-host",
    status: "published",
    rating: 9,
    publicReview: "Amazing property in the heart of Shoreditch! Clean, modern, and perfectly located. The host was incredibly responsive and helpful throughout our stay.",
    reviewCategory: [
      { category: "cleanliness", rating: 9 },
      { category: "communication", rating: 10 },
      { category: "location", rating: 10 },
      { category: "value", rating: 8 }
    ],
    submittedAt: "2024-03-15 14:22:31",
    guestName: "Emma Richardson",
    listingName: "2B N1 A - 29 Shoreditch Heights",
    channel: "Airbnb",
    isApprovedForPublic: true
  },
  {
    id: 7455,
    type: "guest-to-host",
    status: "published",
    rating: 8,
    publicReview: "Great location and comfortable space. The apartment was clean and well-equipped. Minor issue with the Wi-Fi but it was resolved quickly.",
    reviewCategory: [
      { category: "cleanliness", rating: 9 },
      { category: "communication", rating: 8 },
      { category: "location", rating: 10 },
      { category: "amenities", rating: 7 }
    ],
    submittedAt: "2024-03-12 10:15:44",
    guestName: "Marcus Johnson",
    listingName: "1B E2 B - 15 Canary Wharf Tower",
    channel: "Booking.com",
    isApprovedForPublic: true
  },
  {
    id: 7456,
    type: "guest-to-host",
    status: "pending",
    rating: 6,
    publicReview: "Property was okay but had some maintenance issues. The heating wasn't working properly during our stay in winter.",
    reviewCategory: [
      { category: "cleanliness", rating: 7 },
      { category: "communication", rating: 8 },
      { category: "amenities", rating: 5 },
      { category: "value", rating: 6 }
    ],
    submittedAt: "2024-03-10 16:33:12",
    guestName: "Sarah Chen",
    listingName: "Studio S3 A - 42 King's Cross Quarter",
    channel: "Hostaway",
    isApprovedForPublic: false
  },
  {
    id: 7457,
    type: "guest-to-host",
    status: "published",
    rating: 10,
    publicReview: "Absolutely perfect stay! The property exceeded all expectations. Beautifully designed, impeccably clean, and the host went above and beyond to ensure our comfort.",
    reviewCategory: [
      { category: "cleanliness", rating: 10 },
      { category: "communication", rating: 10 },
      { category: "location", rating: 10 },
      { category: "value", rating: 10 },
      { category: "amenities", rating: 10 }
    ],
    submittedAt: "2024-03-08 12:45:18",
    guestName: "David Thompson",
    listingName: "3B W1 A - 8 Notting Hill Mews",
    channel: "Airbnb",
    isApprovedForPublic: true
  },
  {
    id: 7458,
    type: "guest-to-host",
    status: "published",
    rating: 7,
    publicReview: "Decent property with good location. Room was smaller than expected but clean and functional. Staff was helpful when we had questions.",
    reviewCategory: [
      { category: "cleanliness", rating: 8 },
      { category: "communication", rating: 9 },
      { category: "location", rating: 9 },
      { category: "value", rating: 6 }
    ],
    submittedAt: "2024-03-05 09:20:55",
    guestName: "Lisa Martinez",
    listingName: "1B E2 B - 15 Canary Wharf Tower",
    channel: "Booking.com",
    isApprovedForPublic: false
  }
];

export const mockPropertyStats: PropertyStats[] = [
  {
    propertyName: "2B N1 A - 29 Shoreditch Heights",
    averageRating: 9.0,
    totalReviews: 2,
    approvedReviews: 1,
    pendingReviews: 1,
    categoryRatings: {
      cleanliness: 9.5,
      communication: 10,
      location: 10,
      value: 8
    },
    recentTrend: 'up'
  },
  {
    propertyName: "1B E2 B - 15 Canary Wharf Tower",
    averageRating: 7.5,
    totalReviews: 2,
    approvedReviews: 1,
    pendingReviews: 1,
    categoryRatings: {
      cleanliness: 8.5,
      communication: 8.5,
      location: 9.5,
      value: 6
    },
    recentTrend: 'stable'
  },
  {
    propertyName: "Studio S3 A - 42 King's Cross Quarter",
    averageRating: 6.0,
    totalReviews: 1,
    approvedReviews: 0,
    pendingReviews: 1,
    categoryRatings: {
      cleanliness: 7,
      communication: 8,
      amenities: 5,
      value: 6
    },
    recentTrend: 'down'
  },
  {
    propertyName: "3B W1 A - 8 Notting Hill Mews",
    averageRating: 10.0,
    totalReviews: 1,
    approvedReviews: 1,
    pendingReviews: 0,
    categoryRatings: {
      cleanliness: 10,
      communication: 10,
      location: 10,
      value: 10,
      amenities: 10
    },
    recentTrend: 'up'
  }
];