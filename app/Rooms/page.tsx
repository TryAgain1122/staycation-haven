import SearchBarSticky from "@/Components/HeroSection/SearchBarSticky";
import HotelRoomListings from "@/Components/Rooms/HotelRoomListings";
import Footer from "@/Components/Footer";

export default function RoomsPage() {
  return (
    <>
      <SearchBarSticky />
      {/* Add top padding to account for fixed header + sticky search bar (70% height) */}
      <div className="pt-[450px] sm:pt-[400px]">
        <HotelRoomListings />
      </div>
      <Footer />
    </>
  )
}