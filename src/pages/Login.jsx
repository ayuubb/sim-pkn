import React from "react";
import SectionTitle from "../components/SectionTitle";

export default function Login() {
  return (
    <div>
      <SectionTitle title={"Login"} />
      <section id='registration' className='container' style={{marginBottom: '18px'}}>
        <fieldset className='registration-form'>
          <div className='form-group'>
            <h3>Form Login</h3>
            <hr />
          </div>
          <div className='form-group'>
            <input
              type='text'
              id='username'
              name='username'
              placeholder='NIM'
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-success btn-md btn-block'>
              Login
            </button>
          </div>
        </fieldset>
      </section>
    </div>
  );
}
