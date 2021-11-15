import React, { useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState(''); // введеный Email
  const [emailIsValid, setEmailIsValid] = useState(); // проверка инпута  на валидность
  const [enteredPassword, setEnteredPassword] = useState('');// введений пасворд
  const [passwordIsValid, setPasswordIsValid] = useState();// проверка инпута  на валидность
  const [formIsValid, setFormIsValid] = useState(false); // useState forma

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value); // получаем значение через инпут

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6 // проверка инпута на @ 
    );//и введеного пасворда на валидность > 6
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@') // проверка инпута на @ 
    );//и введеного пасворда на валидность > 6
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@')); // проверка инпута на @ 
  };// дальше фунцию передаем на onBlur()

  const validatePasswordHandler = () => { // дальше фунцию передаем на onBlur()
    setPasswordIsValid(enteredPassword.trim().length > 6); //и введеного пасворда на валидность > 6
  };

  const submitHandler = (event) => {
    event.preventDefault(); 
    props.onLogin(enteredEmail, enteredPassword); //lifting up 
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
