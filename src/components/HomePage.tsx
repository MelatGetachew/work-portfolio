import CustomCursor from "./CustomCursor"
import ScrollProgress from "./ScrollProgress"
import SideNavigation from "./SideNavigation"
import EditorialHero from "./EditorialHero"
import BentoPortfolio from "./BentoPortfolio"
import UnifiedAbout from "./UnifiedAbout"
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
      <BentoPortfolio />
      <UnifiedAbout />
    
      <FAQSection />
      <Testimonials />
      <PremiumFooter />
      
    </>
  )
}