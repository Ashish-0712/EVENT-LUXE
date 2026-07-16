import HeroSection from '@/components/sections/HeroSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import PlannersPreview from '@/components/sections/PlannersPreview';
import GalleryPreview from '@/components/sections/GalleryPreview';
import AISearchSection from '@/components/sections/AISearchSection';
import BookingPreview from '@/components/sections/BookingPreview';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import StatsSection from '@/components/sections/StatsSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] selection:bg-[#D4AF37]/30 selection:text-white">
      <HeroSection />
      <CategoriesSection />
      <PlannersPreview />
      <GalleryPreview />
      <AISearchSection />
      <BookingPreview />
      <TestimonialsSection />
      <StatsSection />
      <CTASection />
    </main>
  );
}
