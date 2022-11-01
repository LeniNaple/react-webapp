import React from 'react'

const ContactFormSection = () => {
 

  return (
    <section className="contact-form">
        <div className="container">
            <h2>Come in Contact with Us</h2>   
            <form onSubmit="submitForm(event)" noValidate>
                <div>
                    <input id="name" type="text" placeholder="Your Name" onKeyUp="validate(event)" required data-required-min="2" />
                    <div id="nameErrorMessage" className="errorMessage"></div>
                </div>
                <div>
                    <input id="email" type="email" placeholder="Your Mail" onKeyUp="validate(event)" required data-required-min="5" />
                    <div id="emailErrorMessage" className="errorMessage"></div>
                </div>
                
                <div className="textarea">
                    <textarea id="comment" placeholder="Comments" onKeyUp="validate(event)" required data-required-min="10"></textarea>
                    <div id="commentErrorMessage" className="errorMessage"></div>
                </div>
                
                <div>
                    <button type="submit" className="btn-theme-contact"> 
                        Post Comments
                    </button>
                </div>
            </form>
        </div>
    </section>

  )
}

export default ContactFormSection