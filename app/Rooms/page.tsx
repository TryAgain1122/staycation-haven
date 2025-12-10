import FeatureSectionMain from "@/Components/Features/FeatureSectionMain";
import Footer from "@/Components/Footer";
import HeroSectionMain from "@/Components/HeroSection/HeroSectionMain";
import HotelRoomListings from "@/Components/Rooms/HotelRoomListings";

export default function RoomsPage() {
  return (
    <>
      <HeroSectionMain />
      <HotelRoomListings />
      <FeatureSectionMain />
      <Footer />
    </>
  )
}