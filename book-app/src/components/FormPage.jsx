import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Done from "../assets/done.gif"
import NavbarForm from "./NavbarForm"

const FormPage = () => {
  const {register,handleSubmit,reset,formState: { errors },watch,} = useForm();
  const [userName,setUserName]=useState('');
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

    const FormSubmitHandler = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserName(parsedUser.name);
    }
  
    setIsSubmitSuccessful(true);
    console.log('Form submitted:', data);
  };

  return (
    <>
    <NavbarForm/>
    <div id="formContainer" style={{ position: 'relative', zIndex: '1', top: '30px' }}>
      {!isSubmitSuccessful && (
        <div>
          <h1 id="formHeading">Create your Account</h1>
          <div id="formDiv">
            <form onSubmit={handleSubmit(FormSubmitHandler)}>

              <label> Name:</label>
              <input
                className="inp"
                type="text"
                name="name"
                autoComplete='off'
                placeholder="Enter your Name"
                {...register('name', { required: 'Enter your Name' ,
                 minLength:{
                  value:3,
                  message:'Name should have atleast 3 characters'
                 },
                 maxLength:{
                  value:30,
                  message:'Name should not have more than 30 characters'
                 }
              })}
                />
              <p className="err">{errors.name?.message}</p>

              <label> Email:</label>
              <input
                className="inp"
                type="email"
                name="email"
                autoComplete='off'
                placeholder="Enter your Email"
                {...register('email', {
                  required: 'Enter Email',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid Email',
                  },
                })}
              />
              <p className="err">{errors.email?.message}</p>

              <label> Password:</label>
              <input
                className="inp"
                type="password"
                name="password"
                autoComplete='off'
                style={{userSelect:"none"}}
                placeholder="Enter Password"
                {...register('password', {
                  required: 'Enter Password',
                  validate: (value) => value === watch('password'),
                  minLength: {
                    value: 10,
                    message: 'Password must be of atleast 10 characters',
                  },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[a-zA-Z]).{8,}$/,
                    message: 'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 digit, and 1 special character',
                  },
                })}
              />
              <p className="err">{errors.password?.message}</p>



            <label>Confirm Password:</label>
            <input
              className="inp"
              type="password"
              name="repeatPassword"
              autoComplete='off'
              placeholder="Confirm password"
              {...register('repeatPassword', {
                required: 'Confirm Password',
                validate: (value) => value === watch('password') || 'Password do not match',
              })}
            />
            <p className="err">{errors.repeatPassword?.message}</p>

              <input id="submit" type="submit" value={'Register'} />
            </form>
          </div>
        </div>
      )}

      {isSubmitSuccessful && (
        <div id="done">
             <img  id="doneImg" src={Done} alt="" />
          <h1 id="doneText"> You have Successfully registered.</h1>
        </div>
      )}
    </div>
      </>
  );
};

export default FormPage;