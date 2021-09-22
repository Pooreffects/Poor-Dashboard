import './Home.css';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import Chart from '../../components/Chart/Chart';
import { userData } from '../../data';
import WidgetS from '../../components/WidgetS/WidgetS';
import WidgetL from '../../components/WidgetL/WidgetL';

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="home-widgets">
        <WidgetS />
        <WidgetL />
      </div>
    </div>
  );
}

export default Home;
