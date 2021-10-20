import './WidgetL.css';

function WidgetL() {
  const Button = ({ type }) => {
    return <button className={`widget-l-btn ` + type}>{type}</button>;
  };
  return (
    <div className="widget-l">
      <h3 className="widget-l-title">Latest Transactions</h3>
      <table className="widget-l-table">
        <tr className="widget-l-tr">
          <th className="widget-l-th">Customer</th>
          <th className="widget-l-th">Date</th>
          <th className="widget-l-th">Amount</th>
          <th className="widget-l-th">Status</th>
        </tr>
        <tr className="widget-l-tr">
          <td className="widget-l-user">
            <img
              src="https://github.com/pooreffects.png"
              alt="my avatar"
              className="widget-l-img"
            />
            <span className="widget-l-user--name">Mohamed Benabdellah</span>
          </td>
          <td className="widget-l-date">4th Jul 2021</td>
          <td className="widget-l-amount">$170.00</td>
          <td className="widget-l-status">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widget-l-tr">
          <td className="widget-l-user">
            <img
              src="https://github.com/pooreffects.png"
              alt="my avatar"
              className="widget-l-img"
            />
            <span className="widget-l-user--name">Mohamed Benabdellah</span>
          </td>
          <td className="widget-l-date">4th Jul 2021</td>
          <td className="widget-l-amount">$320.00</td>
          <td className="widget-l-status">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widget-l-tr">
          <td className="widget-l-user">
            <img
              src="https://github.com/pooreffects.png"
              alt="my avatar"
              className="widget-l-img"
            />
            <span className="widget-l-user--name">Mohamed Benabdellah</span>
          </td>
          <td className="widget-l-date">4th Jul 2021</td>
          <td className="widget-l-amount">$1300.00</td>
          <td className="widget-l-status">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widget-l-tr">
          <td className="widget-l-user">
            <img
              src="https://github.com/pooreffects.png"
              alt="my avatar"
              className="widget-l-img"
            />
            <span className="widget-l-user--name">Mohamed Benabdellah</span>
          </td>
          <td className="widget-l-date">4th Jul 2021</td>
          <td className="widget-l-amount">$400.00</td>
          <td className="widget-l-status">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetL;
