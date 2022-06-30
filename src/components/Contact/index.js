import React from 'react'
import "./index.scss";
import Loader from "react-loaders";

const Contact = () => {
  return (
    <>
    <div className='container contact-page'>
      <div className='text-zone'>
        <h1>
          Contact me
        </h1>
      </div>
    </div>
      <Loader type="line-spin-fade-loader" />
    </>
  )
}

export default Contact