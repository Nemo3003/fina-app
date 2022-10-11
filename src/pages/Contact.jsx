import React, { useState } from "react";
import "../styles/contact.css"

const FORM_ENDPOINT = 'https://public.herotofu.com/v1/a5993420-48a8-11ed-8970-6943e4ac8982'

export const Contact = () => {

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {

    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  
  if (submitted) {

    return (
    <>
    <section class="login-main-wrapper">
      <div class="main-container">
          <div class="login-process">
              <div class="login-main-container">
                  <div class="thankyou-wrapper">
                      <h1><img src="http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png" alt="thanks" /></h1>
                        <p>for contacting us, we will get in touch with you soon... </p>
                        <a href="/">Back to home</a>
                        <div class="clr"></div>
                    </div>
                    <div class="clr"></div>
                </div>
            </div>
            <div class="clr"></div>
        </div>
    </section>
    </>

    );

  }

    return (
    <div className="container p-5 column" >
        <br /> <br /> <br />
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        className="container p-5 column  new" 
      >
        <div className="mb-3" >
        <label htmlFor="exampleFormControlInput1" className="form-label"> ¿Quien nos escribe?  </label>
          <input type="text"  name="name" required className="form-control" id="exampleFormControlInput1" placeholder="Nombre"/>
        </div>
        <div className="mb-3" >
        <label htmlFor="exampleFormControlInput1" className="form-label"> Ingresa tu correo</label>
          <input type="email"  name="email" required className="form-control" id="exampleFormControlInput1" placeholder="jondoe@gmail.com"/>

        </div>
        <div  className="form-label">
          <textarea className="form-control" placeholder="Tu texto va aqui..." name="message" required />
        </div>
        <div className="d-flex flex-row-reverse">
          <button className="btn btn-dark" type="submit"> Enviar</button>
        </div>
      </form>
    </div>
  );

};