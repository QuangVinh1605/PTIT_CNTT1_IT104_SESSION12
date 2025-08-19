import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";
import Footer from "./Footer";

const AdminIndex = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Content */}
      <div className="flex flex-1">
        <Menu />
        <Main />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AdminIndex;
