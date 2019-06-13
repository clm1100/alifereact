import React,{Component} from 'react';
import Footer from './components/footer.jsx'
import Content from "./components/content"
import Aside from "./components/aside"
import Topnav from "./components/topnav"
import Header from "./components/header"

import List from "./pages/list.jsx"
import Detail from "./pages/detail.jsx"
import Login from "./pages/login.jsx"
import { HashRouter, Route ,Switch} from 'react-router-dom'
class App extends Component{
  constructor(props){
    super();
  }
  render(){
    return (
      <div className="wrapper">
        <Topnav />
        <Header />
        <Aside />
          <Route path="/list/:category" component={List}></Route>
          <Route path="/detail/:category/:id"  component={Detail}></Route>
          <Route path="/" exact component={Content}></Route>
        <Footer />
      </div>
    );
  }
}

class Root extends Component{
  render(){
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/"  component={App}></Route>
        </Switch>
      </HashRouter>
    )
  }
}


export default Root;
