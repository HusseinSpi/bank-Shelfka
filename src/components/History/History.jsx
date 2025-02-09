import { Link } from "react-router-dom";

// components
import HistoryLine from "./HistoryLine";

const History = ({ date, detailed = false, dateBalance }) => (
  <>
    {detailed && (
      <div className="history-header flex flex-v-center flex-space-between">
        <span className="text-shadow no-select date">{date}</span>
        <span className="text-shadow no-select amount flex flex-end">
          {dateBalance}
        </span>
      </div>
    )}
    <div className="history">
      {/* استدعاءات HistoryLine */}
      {!detailed && (
        <Link
          to="/transactions"
          className="history-line bottom flex flex-v-center flex-h-center"
        >
          See all
          <span className="material-symbols-outlined">
            keyboard_arrow_right
          </span>
        </Link>
      )}
    </div>
  </>
);

export default History;
