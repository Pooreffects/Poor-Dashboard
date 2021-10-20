import './Chart.css';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#b9c4f9" />
          <Line type="monotone" dataKey={dataKey} stroke="#fe6881" />
          <Tooltip />
          {grid && (
            <CartesianGrid
              stroke="#b9c4f9"
              opacity="0.5"
              strokeDasharray="5 5"
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
/* 51:15min vid on yt */

export default Chart;
