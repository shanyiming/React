import React  from 'react';
import { Route, Switch, HashRouter} from 'react-router-dom';
import "../../node_modules/react-vis/dist/style.css";
import Header  from './header';
import MyColor from '../components/contentlist/Colors/colors.js';
import MyIcon from '../components/contentlist/Icon/icon.js';
import MyHome from '../components/contentlist/Home/home.js';
import Error from '../components/contentlist/Error/error.js';
import Footer from './footer/footer.js';
import MyAvatar from '../components/contentlist/Components/Avatar/avatar.js';
import MyChips from '../components/contentlist/Components/Chips/chips.js';
import MyVerticalBar from '../components/contentlist/Charts/VerticalBar/verticalBar.js';
import MyPie from '../components/contentlist/Charts/Pie/pie.js';
import {connect} from 'react-redux';
import AppAction from '../actions/AppAction/appAction.js'

class App extends React.Component
{
  handleNavOpen = () =>{
    this.props.leftMenuOpen();
  };

  render()
  {
    return(
       <HashRouter >
      <div className= 'App' >
         <div>
         <Header SideBarOpen={this.handleNavOpen} listOpenState = {this.props.leftOpen}/>
         </div>

         <div className = {this.props.leftOpen ? "move-right" : "default"}>
             <div className = "content">
             <Switch>
             <Route path = "/" component = {MyHome}  key = "/home" exact/>
             <Route path = "/my-app" component = {MyHome} key = "/my-app" exact/>
             <Route path = "/colors" component = {MyColor} key = "/colors"/>
             <Route path = "/icons" component = {MyIcon} key = "/icons"/>
             <Route path = "/components/chips" component = {MyChips} key = "/components/chips"/>
             <Route path = "/components/avatar" component = {MyAvatar} key = "/components/avatar"/>
             <Route path = "/charts/verticalbar" component = {MyVerticalBar} key = "/charts/verticalbar"/>
             <Route path = "/charts/pie" component = {MyPie} key = "/charts/pie"/>
             <Route  component = {Error} key = "error"/>
             </Switch>
             </div>
         </div>
         <div className = "footer-position">
           <Footer />
         </div>
      </div>
      </HashRouter>

    );
  }
}
const mapStateToProps = (state) =>{
  return{
    leftOpen: state.appReducer.leftOpen,
    data: state.appReducer.data
  }
}

const mapDispatchtoProps = (dispatch) =>{
  return{
    leftMenuOpen: () => {dispatch(AppAction.LeftMenuOpen())},
  }
}

export default connect(mapStateToProps,mapDispatchtoProps)(App);