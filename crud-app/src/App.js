import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import NavBar from './Component/NavBar';
import AllProducts from './Component/AllProducts';
import NotFound from './Component/NotFound'; 
import AddProduct from './Component/AddProduct';
import Losdesamparados from './Component/Losdesamparados';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Losdesamparados} />
        <Route exact path="/all" component={AllUsers} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/addproduct" component={AddProduct} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
