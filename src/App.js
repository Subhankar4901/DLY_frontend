import "./App.css";
import Folder from "./Components/Pages/FolderDashbord/Folder";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Pages/Semanctic Dashbord/Dashboard";
import Register from "./Components/Register/CreateAccount/Register";
import Login from "./Components/Register/Login/Login";
import Sidebar from "./Components/Shared/Sidebar/Sidebar";
import FIledashboard from "./Components/Pages/FileDashboard/FIledashboard";
import PopupDocument from "./Components/Pages/FileDashboard/PopupDocument/PopupDocument";
import Datasource from "./Components/Pages/FileDashboard/DataSource/Datasource";
import DocumentSetup from "./Components/Pages/DocumentSetup/DocumentSetup";
import TemplateDesign from "./Components/Pages/TemplateDesign/TemplateDesign";
import Documentsetup2 from "./Components/Pages/Documentsetup2/Documentsetup2";
import Tpopup from "./Components/Pages/TemplateDesignpopup/Tpopup";
import Slider from "./Components/Register/Login/Slider/Slider";
import From from "./Components/Register/Login/From/From";
import Topbutton from "./Components/Shared/Sidebar/Topbutton";
import Exlogin from "./Components/Register/Login/From/exlogin";
import Elogin from "./Components/Register/Login/From/Elogin";
import Ctopbutton from "./Components/Shared/Ctopbutton";
import Exaccount from "./Components/Register/Login/From/Exaccount";
import Eaccount from "./Components/Register/Login/From/Eaccount";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/folderdashboard">
          <Folder />
        </Route>
        <Route path="/filedashboard">
          <FIledashboard />
        </Route>
        <Route path="/popupdocument">
          <PopupDocument />
        </Route>
        <Route path="/datasource">
          <Datasource />
        </Route>
        <Route path="/documentsetup">
          <DocumentSetup />
        </Route>
        <Route path="/documentsetup2">
          <Documentsetup2 />
        </Route>
        <Route path="/templatedesign">
          <TemplateDesign />
        </Route>
        <Route path="/tpopup">
          <Tpopup />
        </Route>
        <Route path="/semanticsdashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
