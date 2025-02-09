// components
import Circle from "../Circle/Circle";

const HistoryLine = ({
  item: { color, icon, name, time, currencySymbol, amount },
}) => (
  <div className="history-line flex flex-h-center flex-v-center">
    <div className="history-line-icon flex flex-1">
      <Circle color={color} icon={icon} />
    </div>
    <div className="history-line-details flex flex-col">
      <span className="name">{name}</span>
      <span className="time">{time}</span>
    </div>
    <div className="history-line-amount flex flex-1 flex-end">
      <p>
        - {currencySymbol}
        {amount}
      </p>
    </div>
  </div>
);

export default HistoryLine;
