import React from 'react';
import './ContactMe.css';

const ContactMe = () => (

    <div className="contact_form_page">
        <h1>Contact Me</h1>
        <div className="container contact_form">
            <form>
                <div className="row justify-content-center align-items-center">
                    <div class="col-10">
                        <input type="text" className="form-control" placeholder="name" />
                    </div>
                </div>

                <div className="row justify-content-center align-items-center">
                    <div class="col-10">
                        <input type="email" className="form-control" placeholder="name@email.com" />
                    </div>
                </div>

                <div className="row justify-content-center align-items-center" >
                    <div class="col-10">
                        <textarea type="textarea" className="form-control contact_form_messagebox" placeholder="please send me a message"></textarea>
                    </div>
                </div>

                <div class="row justify-content-center align-items-center">
                    <div class="col-sm-10">
                        <button type="submit" className="btn btn-danger contact_form_button">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
);

export default ContactMe;