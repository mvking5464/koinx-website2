//

import MyFooter from "./components/appComponents/footer.jsx";
import MainBody from "./components/appComponents/main.jsx";
import MyNavBar from "./components/appComponents/navbar.jsx";
import MySideBar from "./components/appComponents/sidebar.jsx";

function App() {
  //

  return (
    <div>
      <MyNavBar />
      <div className="grid md:grid-cols-3 grid-cols-1 bg-slate-100">
        <MainBody />
        <MySideBar />
      </div>
      <MyFooter />
    </div>
  );
}

export default App;
