import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import './FeaturedInfo.css';

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featured-item">
        <span className="featured-title">Revenue</span>
        <div className="featured-money--container">
          <span className="featured-money">$5,133</span>
          <span className="featured-money--rate ">
            -11.4{' '}
            <ArrowDownward
              fontSize="small"
              className="featured-icon negative"
            />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>
      <div className="featured-item">
        <span className="featured-title">Sales</span>
        <div className="featured-money--container">
          <span className="featured-money">$3,183</span>
          <span className="featured-money--rate">
            25 <ArrowUpward fontSize="small" className="featured-icon" />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>
      <div className="featured-item">
        <span className="featured-title">Revenue</span>
        <div className="featured-money--container">
          <span className="featured-money">$2,500</span>
          <span className="featured-money--rate">
            15 <ArrowUpward fontSize="small" className="featured-icon" />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
