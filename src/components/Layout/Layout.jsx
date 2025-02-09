// components
import Header from "../Header/Header";

const Layout = ({ children }) => (
  <>
    <div className="bg" />
    <div className="content flex flex-col">
      <div className="container">
        <Header />
        {children}
      </div>
    </div>
  </>
);

export default Layout;
