import { Route } from "react-router-dom";
import Meals from "../Meals/Meals";

const Order = () => {
    return (
        <section>
            <Route path="/order">
                <Meals />
            </Route>
        </section>
    );
};

export default Order;