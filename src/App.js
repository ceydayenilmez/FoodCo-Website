import { useState } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Home from "./components/pages/Home";
import Order from "./components/pages/Order";
import Work from "./components/pages/Work";
import Meals from "./components/Meals/Meals";
import AvailableMeals from "./components/Meals/AvailableMeals";
import BasicForm from "./components/Form/BasicForm";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <CartProvider>
            console.log("cartIsShown =".concat(cartIsShown))
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/home" />
                    </Route>
                    <Route path = "/home">
                        <Home>
                            <Meals />
                        </Home>
                    </Route>
                    <Route path = "/order" exact>
                        <Order>
                            <AvailableMeals />
                        </Order>
                    </Route>
                    <Route path = "/work" exact>
                        <Work>
                            <BasicForm />
                        </Work>
                    </Route>
                </Switch>
            </main>
        </CartProvider>
    );
}

export default App;