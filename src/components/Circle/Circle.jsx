const Circle = ({ icon, color }) => (
  <div
    className={`flex flex-v-center flex-h-center no-select circle-icon ${color}`}
  >
    <span className="material-symbols-outlined">{icon}</span>
  </div>
);

export default Circle;
