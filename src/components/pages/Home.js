import React, {Fragment} from "react";
import {Route} from "react-router-dom";
import Card from "../UI/Card";
import home1Image from '../../assets/home1.jpg';
import home2Image from '../../assets/home2.jpg';
import home3Image from '../../assets/home3.jpg';
import classes from "./Home.module.css";

const Home = () => {

    return (
        <div>
            <Fragment>
                <section className={classes.meals}>
                    <section className={classes.h1}>
                        <h1>GOOD FOOD, GOOD MOOD.</h1>
                        <section className={classes.h2}>
                            <Route path="/home">
                                <p>See you tomorrow.</p>
                            </Route>
                        </section>
                    </section>
                    <Card>
                        <section className={classes.h4}>
                            <p> Here at FoodCo we take pride in the quality of the ingredients used for each and
                                every dish.
                                If it’s not perfect and done just the way you ordered it, we won’t send it out.
                                We guarantee the food delivered to your table is the best meal you could have
                                ordered.
                            </p>
                        </section>
                        <br/>
                        <div className={classes['main-image']}>
                            <img src={home1Image} alt='restaurant'/>
                        </div>
                        <section className={classes.h3}>
                            <p>About Us</p>
                        </section>
                        <section className={classes.h4}>
                            <p>
                                Organizer, Ceyda Yenilmez, opened the first FoodCo in Los
                                Alamitos, California on September 27, 1977.
                                Today, there are 37 areas all through Arizona, California, Illinois, Louisiana,
                                Nevada, Oregon, Tennessee, and Washington.
                            </p>
                            <p>
                                FoodCo is well known with a substantial gathering of
                                people including families, kids, seniors, and business experts. Our benevolent
                                condition is perfect for praising unique events, facilitating a business lunch,
                                or assembling for a flavorful dinner with loved ones.
                            </p>
                        </section>
                        <div className={classes['main-image']}>
                            <img src={home3Image} alt='eating'/>
                        </div>
                        <section className={classes.h3}>
                            <p>Our Mission</p>
                        </section>
                        <section className={classes.h4}>
                            <p>
                                Everything we do is about you. From chefs who create exciting new flavors,
                                to crew members who know exactly how you want your drink –
                                we prioritize what you need to get you on your way.
                                We strive to keep you at your best, and we remain loyal to you,
                                your tastes and your time.
                            </p>
                        </section>
                        <div className={classes['main-image']}>
                            <img src={home2Image} alt='plate'/>
                        </div>
                        <section className={classes.h5}>
                            <p>Hours</p>
                        </section>
                        <section className={classes.h6}>
                            <p>Mon–Wed 6–11</p>
                            <p>Thu–Sat 4–12</p>
                            <p>Sun 3–10</p>
                        </section>
                        <br/>
                        <section className={classes.h5}>
                            <p>Contact Us</p>
                        </section>
                        <section className={classes.h6}>
                            <p>206-555-7890</p>
                            <p>123 Fake Street, Seattle, WA 00000</p>
                            <p>yenilmezceyda@gmail.com</p>
                        </section>
                    </Card>
                </section>
            </Fragment>
        </div>

    );
};

export default Home;