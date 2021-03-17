import './pagestyle/home.css';
import TopSection from '../libs/Home_Top_Section/TopSection1';
import NewArrivalSection from '../libs/Home_Top_Section/NewArrivalSection';
import BestSeller from '../libs/Home_Top_Section/BestSeller';
import Features from '../libs/Home_Top_Section/Features';
import DetailsAccordionSection from '../libs/Home_Top_Section/DetailsAccordionSection';
export default function Home() {
  return (
    <div className='home-wrapper'>
      <TopSection />
      <NewArrivalSection />
      <BestSeller />
      <DetailsAccordionSection />
      <Features/>
    </div>
  );
}
