import './pagestyle/home.css';
import TopSection1 from '../libs/Home_Top_Section/TopSection1';
import NewArrivalSection from '../libs/Home_Top_Section/NewArrivalSection';

export default function Home() {
  return (
    <div className='home-wrapper'>
      <TopSection1 />
      <NewArrivalSection />
    </div>
  );
}
