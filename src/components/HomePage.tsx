import CustomCursor from "./CustomCursor"
import ScrollProgress from "./ScrollProgress"
import SideNavigation from "./SideNavigation"
import EditorialHero from "./EditorialHero"
import UnifiedAbout from "./UnifiedAbout"
import BentoPortfolio from "./BentoPortfolio"
import FAQSection from "./FAQSection"
import Testimonials from "./Testimonials"
import PremiumFooter from "./PremiumFooter"

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <SideNavigation />
      <EditorialHero />
      <UnifiedAbout />
      <BentoPortfolio />
      <FAQSection />
      <Testimonials />
      <PremiumFooter />
      
    </>
  )
}