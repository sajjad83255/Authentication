import React from 'react';
import Phone from '../images/phone.png';
import '../App.css';

const Contact = () => {
  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">
                      <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">

                          {/* Phone */}
                          <div className="contact_info_image">
                            <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="" /></div>
                            <div className="contact_info_content">
                                <div className="contact_info_title">Phone</div>
                                <div className="contact_info_text">+91 9674147427</div>
                            </div>
                          </div> 

                        {/* Email */}
                        <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                            <div className="contact_info_image"><img src="https://img.icons8.com/ultraviolet/24/000000/filled-message.png" alt="" /></div>
                            <div className="contact_info_content">
                                <div className="contact_info_title">Email</div>
                                <div className="contact_info_text">mdsajjadali83255@gmail.com</div>
                            </div>
                        </div> 

                        {/* Address */}
                        <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                          <div className="contact_info_image"><img src="https://img.icons8.com/ultraviolet/24/000000/map-marker.png" alt="" /></div>
                            <div className="contact_info_content">
                                <div className="contact_info_title">Address</div>
                                <div className="contact_info_text">Rafi Ahmed Kidwai Road</div>
                        </div>
                      </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact us form */}

      <div className='contact_form'>
        <div className='container mb-5'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1'>
              <div className='contact_form_container py-5'>
                <div className='contact_form_title mt-2'>
                  Get in Touch
                </div>
                <form method='' id='contact_form'>
                  <div className='contact_form_inputs flex-md-row flex-column d-flex
                  justify-content-between align-items-between'>

                    <input type='text' id='contact_form_name' className='contact_form_name input_field' placeholder='Your name' required='true'/>

                    <input type='email' id='contact_form_email' className='contact_form_email input_field' placeholder='Your Email' required='true'/>

                    <input type='number' id='contact_form_phone' className='contact_form_phone input_field' placeholder='Your Phone Number' required='true'/>
                  </div>

                  <div className='contact_form_text mt-5'>
                    <textarea className='text_field contact_form_message' placeholder='Message' cols='30' rows='10'></textarea> 
                  </div>

                  <div className='contact_form_button mb-2'>
                    <button type='sibmit' className='button contact_submit_button'>
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Contact;
