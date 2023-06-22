import {Route} from "react-router-dom";
import React, {Fragment} from "react";

import classes from "../Meals/AvailableMeals.module.css";
import BasicForm from "../Form/BasicForm";

const Work = () => {

    return (
            <Fragment>
                <section className={classes.info}>
                    <h2>WORK WITH US</h2>
                    <p>
                        We are always keen to hear
                        from professionals looking for a new role.
                    </p>
                    <p>
                        After you provide your personal information,
                        we will send you an informative e-mail about the process.
                    </p>
                </section>
                <section className={classes.work}>
                    <section className={classes.meals}>
                        <Route path="/work">
                            <BasicForm/>
                        </Route>
                    </section>
                </section>
            </Fragment>
    );
};

export default Work;

