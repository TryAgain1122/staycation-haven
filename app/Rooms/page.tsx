import SearchBarSticky from "@/Components/HeroSection/SearchBarSticky";
import HotelRoomListings from "@/Components/Rooms/HotelRoomListings";
import Footer from "@/Components/Footer";

export default function RoomsPage() {
  return (
    <>
      <SearchBarSticky />
      {/* Add top padding to account for fixed header + sticky search bar (90% height) */}
      <div className="pt-[600px] sm:pt-[550px]">
        <HotelRoomListings />
      </div>
      <Footer />
    </>
  )
}