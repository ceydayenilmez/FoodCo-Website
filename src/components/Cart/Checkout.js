import { useRef, useState } from "react";
import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isElevenChars = value => value.trim().length === 11;

const Checkout = (props) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        address: true,
        city: true,
        phone: true
    });

    const nameInputRef = useRef();
    const addressInputRef = useRef();
    const phoneNumberInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredPhone = phoneNumberInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredAddressIsValid = !isEmpty(enteredAddress);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPhoneIsValid = isElevenChars(enteredPhone);

         setFormInputValidity({
             name: enteredNameIsValid,
             address: enteredAddressIsValid,
             city: enteredCityIsValid,
             phone: enteredPhoneIsValid
         });

        const formIsValid =
            enteredNameIsValid &&
            enteredAddressIsValid &&
            enteredCityIsValid &&
            enteredPhoneIsValid;

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            address: enteredAddress,
            city: enteredCity,
            phone: enteredPhone,
        });
    };

    const nameControlClasses = `${classes.control} ${
        formInputValidity.name ? '' : classes.invalid
    }`;
    const addressControlClasses = `${classes.control} ${
        formInputValidity.address ? '' : classes.invalid
    }`;
    const cityControlClasses = `${classes.control} ${
        formInputValidity.city ? '' : classes.invalid
    }`;
    const phoneControlClasses = `${classes.control} ${
        formInputValidity.phone ? '' : classes.invalid
    }`;

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef}/>
                {!formInputValidity.name && <p>Please enter a valid name.</p>}
            </div>
            <div className={addressControlClasses}>
                <label htmlFor='address'>Address</label>
                <input type='text' id='address' ref={addressInputRef}/>
                {!formInputValidity.address && <p>Please enter a valid address.</p>}
            </div>
            <div className={phoneControlClasses}>
                <label htmlFor='phone'>Phone Number</label>
                <input type='tel' id='phone' ref={phoneNumberInputRef}/>
                {!formInputValidity.phone && <p>Please enter a valid phone number (11 characters).</p>}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef}/>
                {!formInputValidity.city && <p>Please enter a valid city.</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;