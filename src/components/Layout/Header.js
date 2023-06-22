import {Fragment} from "react";
import {NavLink} from "react-router-dom";
import mealsImage from '../../assets/meals.jpg';
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <nav>
                    <ul>
                        <li>
                            <h1>FoodCo</h1>
                        </li>
                        <li>
                            <NavLink activeClassName={classes.active} to="/home">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={classes.active} to="/order">
                                Order
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={classes.active} to="/work">
                                Work With Us
                            </NavLink>
                        </li>
                        <HeaderCartButton onClick={props.onShowCart}/>
                    </ul>
                </nav>


            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A delicious looking ramen bowl!'/>
            </div>

        </Fragment>
    );
};

/*

 */

export default Header;