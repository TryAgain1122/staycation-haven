'use client';

import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';
import { useMemo } from 'react';
import RoomCard from '@/Components/Rooms/RoomCard';
import { ArrowLeft, MapPin, Calendar, Users, Clock } from 'lucide-react';

interface Room {
  id: string;
  name: string;
  price: string;
  pricePerNight: string;
  images: string[];
  rating: number;
  reviews: number;
  capacity: number;
  amenities: string[];
  description: string;
  fullDescription?: string;
  beds?: string;
  roomSize?: string;
  location?: string;
  tower?: string;
}

const RoomsPage = () => {
  const router = useRouter();
  const bookingData = useAppSelector((state) => state.booking);

  // All available rooms (in real app, this would come from API)
  const allRooms: Room[] = [
    {
      id: "1",
      name: "6-Hour Short Stay",
      price: "₱999",
      pricePerNight: "6 hours",
      images: [
        "/Images/haven_9_Living Area_haven_5_jpg_30.jpg",
        "/Images/haven9_Living_Area_haven_4_1763025826_3659.jpg",
        "/Images/haven9_Full_Bathroom_haven_7_1763025826_8427.jpg",
      ],
      rating: 4.8,
      reviews: 245,
      capacity: 2,
      amenities: ["WiFi", "AC", "TV", "Comfortable Bed"],
      description: "Perfect for a quick rest or day stay with all essential amenities.",
      fullDescription: "Our 6-Hour Short Stay is ideal for travelers needing a quick rest or day stay. Enjoy comfortable accommodations with all modern amenities in a cozy setting at Haven 9, Tower A.",
      beds: "Queen Size Bed",
      roomSize: "28 sq.m",
      location: "Haven 9",
      tower: "Tower A",
    },
    {
      id: "2",
      name: "10-Hour Extended Stay",
      price: "₱1,599",
      pricePerNight: "10 hours",
      images: [
        "/Images/haven_9_Living Area_haven_5_jpg_31.jpg",
        "/Images/haven9_Kitchenette_haven_7_1763025826_3190.jpg",
        "/Images/haven9_Living_Area_haven_4_1764219962_3222.jpg",
      ],
      rating: 4.9,
      reviews: 189,
      capacity: 2,
      amenities: ["WiFi", "AC", "Kitchen", "Living Area"],
      description: "Extended stay option with kitchenette and comfortable living space.",
      fullDescription: "Our 10-Hour Extended Stay offers more time to relax and unwind. Features a kitchenette and spacious living area, perfect for those who need a longer stay at Haven 67, Tower A.",
      beds: "King Size Bed",
      roomSize: "35 sq.m",
      location: "Haven 67",
      tower: "Tower A",
    },
    {
      id: "3",
      name: "21-Hour Full Day",
      price: "₱1,799",
      pricePerNight: "21 hours",
      images: [
        "/Images/haven9_Living_Area_haven_7_1764217597_1817.jpg",
        "/Images/haven_9_Dining Area_haven_7_jpg_35.jpg",
        "/Images/haven9_Pool_Black_and_Orange_Illustrative_Happy_Halloween_Instagram_Post_1763025712_1833.jpg",
      ],
      rating: 5,
      reviews: 312,
      capacity: 3,
      amenities: ["WiFi", "AC", "Kitchen", "Dining Area"],
      description: "Almost a full day experience with premium amenities and spacious layout.",
      fullDescription: "Enjoy 21 hours of comfort in our spacious haven. Features full kitchen, dining area, and modern furnishings perfect for a full day stay at Haven 1, Tower D.",
      beds: "1 King + 1 Single Bed",
      roomSize: "45 sq.m",
      location: "Haven 1",
      tower: "Tower D",
    },
    {
      id: "4",
      name: "Weekday Special",
      price: "₱1,999",
      pricePerNight: "Mon-Thu",
      images: [
        "/Images/haven_9_Living Area_haven_5_jpg_30.jpg",
        "/Images/haven9_Full_Bathroom_haven_7_1763025826_8427.jpg",
        "/Images/haven9_Kitchenette_haven_7_1763025826_3190.jpg",
      ],
      rating: 4.6,
      reviews: 567,
      capacity: 2,
      amenities: ["WiFi", "AC", "Workstation", "Comfortable Bed"],
      description: "Perfect weekday rate for business travelers and mid-week getaways.",
      fullDescription: "Our Weekday Special offers the best value from Monday to Thursday. Ideal for business travelers with a comfortable workstation and all essential amenities at Haven 2, Tower D.",
      beds: "Queen Bed",
      roomSize: "30 sq.m",
      location: "Haven 2",
      tower: "Tower D",
    },
    {
      id: "5",
      name: "Weekend Haven",
      price: "₱2,499",
      pricePerNight: "Fri-Sat",
      images: [
        "/Images/haven9_Living_Area_haven_4_1764219962_3222.jpg",
        "/Images/haven_9_Dining Area_haven_7_jpg_35.jpg",
        "/Images/haven_9_Garage_haven_4_jpg_37.jpg",
      ],
      rating: 4.7,
      reviews: 421,
      capacity: 2,
      amenities: ["WiFi", "AC", "Premium Bedding", "Entertainment"],
      description: "Weekend special rate with premium amenities for a perfect getaway.",
      fullDescription: "Make the most of your weekend with our Friday-Saturday special. Features premium bedding, entertainment options, and modern amenities at Haven 3, Tower D.",
      beds: "King Size Bed",
      roomSize: "32 sq.m",
      location: "Haven 3",
      tower: "Tower D",
    },
    {
      id: "6",
      name: "Multi-Day Suite",
      price: "₱1,899",
      pricePerNight: "per night",
      images: [
        "/Images/haven_9_Exterior_haven_5_jpg_38.jpg",
        "/Images/haven9_Pool_Black_and_Orange_Illustrative_Happy_Halloween_Instagram_Post_1763025712_1833.jpg",
        "/Images/haven9_Living_Area_haven_7_1764217597_1817.jpg",
      ],
      rating: 5,
      reviews: 98,
      capacity: 4,
      amenities: ["WiFi", "AC", "Full Kitchen", "Living Room", "Pool Access"],
      description: "Perfect for extended stays with custom rates and flexible schedules.",
      fullDescription: "Our Multi-Day Suite is designed for guests planning longer stays. Enjoy spacious accommodations with full kitchen, living room, and pool access. Custom rates available for extended bookings at Haven 4, Tower D.",
      beds: "1 King + 2 Single Beds",
      roomSize: "50 sq.m",
      location: "Haven 4",
      tower: "Tower D",
    },
    {
      id: "7",
      name: "Luxury Haven 5",
      price: "₱2,299",
      pricePerNight: "per night",
      images: [
        "/Images/haven9_Living_Area_haven_7_1764217597_1817.jpg",
        "/Images/haven_9_Dining Area_haven_7_jpg_35.jpg",
        "/Images/haven9_Kitchenette_haven_7_1763025826_3190.jpg",
      ],
      rating: 4.9,
      reviews: 156,
      capacity: 3,
      amenities: ["WiFi", "AC", "Kitchenette", "Dining Area", "Smart TV"],
      description: "Modern luxury haven with premium furnishings and smart home features.",
      fullDescription: "Experience modern luxury at Haven 5. Features smart home technology, premium furnishings, and a fully equipped kitchenette for your convenience at Tower D.",
      beds: "1 King + 1 Queen Bed",
      roomSize: "42 sq.m",
      location: "Haven 5",
      tower: "Tower D",
    },
    {
      id: "8",
      name: "Family Haven 6",
      price: "₱2,799",
      pricePerNight: "per night",
      images: [
        "/Images/haven_9_Living Area_haven_5_jpg_31.jpg",
        "/Images/haven9_Living_Area_haven_4_1764219962_3222.jpg",
        "/Images/haven9_Full_Bathroom_haven_7_1763025826_8427.jpg",
      ],
      rating: 4.8,
      reviews: 203,
      capacity: 5,
      amenities: ["WiFi", "AC", "Full Kitchen", "2 Bathrooms", "Kids Area"],
      description: "Spacious family haven with multiple rooms and kid-friendly amenities.",
      fullDescription: "Perfect for families, Haven 6 offers spacious accommodations with separate kids area, two bathrooms, and full kitchen facilities at Tower D.",
      beds: "2 King Beds + 1 Single",
      roomSize: "60 sq.m",
      location: "Haven 6",
      tower: "Tower D",
    },
    {
      id: "9",
      name: "Premium Haven 7",
      price: "₱2,199",
      pricePerNight: "per night",
      images: [
        "/Images/haven9_Pool_Black_and_Orange_Illustrative_Happy_Halloween_Instagram_Post_1763025712_1833.jpg",
        "/Images/haven_9_Garage_haven_4_jpg_37.jpg",
        "/Images/haven9_Living_Area_haven_7_1764217597_1817.jpg",
      ],
      rating: 4.7,
      reviews: 178,
      capacity: 2,
      amenities: ["WiFi", "AC", "Pool View", "Balcony", "Mini Bar"],
      description: "Premium room with stunning pool views and private balcony.",
      fullDescription: "Enjoy breathtaking pool views from your private balcony at Haven 7. Features modern amenities and a mini bar for your convenience at Tower D.",
      beds: "King Size Bed",
      roomSize: "38 sq.m",
      location: "Haven 7",
      tower: "Tower D",
    },
    {
      id: "10",
      name: "Cozy Haven 8",
      price: "₱1,699",
      pricePerNight: "per night",
      images: [
        "/Images/haven_9_Living Area_haven_5_jpg_30.jpg",
        "/Images/haven9_Kitchenette_haven_7_1763025826_3190.jpg",
        "/Images/haven9_Living_Area_haven_4_1763025826_3659.jpg",
      ],
      rating: 4.6,
      reviews: 289,
      capacity: 2,
      amenities: ["WiFi", "AC", "Kitchenette", "Work Desk"],
      description: "Comfortable and affordable haven perfect for couples and solo travelers.",
      fullDescription: "Haven 8 offers great value with modern comforts. Features a kitchenette and work desk, ideal for both leisure and business stays at Tower D.",
      beds: "Queen Bed",
      roomSize: "30 sq.m",
      location: "Haven 8",
      tower: "Tower D",
    },
  ];

  const filteredRooms = useMemo(() => {
    // Filter rooms based on booking data
    let filtered = [...allRooms];

    // Filter by location if selected
    if (bookingData.location) {
      filtered = filtered.filter(
        (room) => room.location === bookingData.location?.name || room.tower === bookingData.location?.branch
      );
    }

    // Filter by capacity (total guests)
    const totalGuests = bookingData.guests.adults + bookingData.guests.children + bookingData.guests.infants;
    if (totalGuests > 0) {
      filtered = filtered.filter((room) => room.capacity >= totalGuests);
    }

    // Filter by stay type
    if (bookingData.stayType) {
      const stayId = bookingData.stayType.id;

      // Map stay type to room types
      if (stayId === '6h') {
        filtered = filtered.filter((room) => room.pricePerNight.includes('6 hours'));
      } else if (stayId === '10h') {
        filtered = filtered.filter((room) => room.pricePerNight.includes('10 hours'));
      } else if (stayId === '21h') {
        filtered = filtered.filter((room) => room.pricePerNight.includes('21 hours'));
      } else if (stayId === 'weekdays') {
        filtered = filtered.filter((room) => room.pricePerNight.includes('Mon-Thu'));
      } else if (stayId === 'fri-sat') {
        filtered = filtered.filter((room) => room.pricePerNight.includes('Fri-Sat'));
      } else if (stayId === 'multi') {
        filtered = filtered.filter((room) => room.pricePerNight.includes('per night'));
      }
    }

    return filtered;
  }, [bookingData, allRooms]);

  const totalGuests = bookingData.guests.adults + bookingData.guests.children + bookingData.guests.infants;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors mb-6 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Search</span>
        </button>

        {/* Header with Booking Info */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Available Rooms
          </h1>
          
          {/* Booking Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            {bookingData.location && (
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-4 h-4 text-orange-500" />
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="font-semibold">{bookingData.location.name}</p>
                </div>
              </div>
            )}
            
            {bookingData.checkInDate && bookingData.checkOutDate && (
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="w-4 h-4 text-orange-500" />
                <div>
                  <p className="text-xs text-gray-500">Dates</p>
                  <p className="font-semibold">
                    {new Date(bookingData.checkInDate).toLocaleDateString()} - {new Date(bookingData.checkOutDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            )}
            
            <div className="flex items-center gap-2 text-gray-700">
              <Users className="w-4 h-4 text-orange-500" />
              <div>
                <p className="text-xs text-gray-500">Guests</p>
                <p className="font-semibold">{totalGuests} {totalGuests === 1 ? 'Guest' : 'Guests'}</p>
              </div>
            </div>
            
            {bookingData.stayType && (
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="w-4 h-4 text-orange-500" />
                <div>
                  <p className="text-xs text-gray-500">Stay Type</p>
                  <p className="font-semibold">{bookingData.stayType.duration}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            {filteredRooms.length} {filteredRooms.length === 1 ? 'Room' : 'Rooms'} Available
          </h2>
        </div>

        {/* Rooms Grid */}
        {filteredRooms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredRooms.map((room, index) => (
              <div
                key={room.id}
                className="animate-in fade-in slide-in-from-bottom duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <RoomCard room={room} mode="select" />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">
              No rooms available for your selected criteria
            </p>
            <button
              onClick={() => router.push('/')}
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Modify Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomsPage;