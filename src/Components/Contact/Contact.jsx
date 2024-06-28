import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import Arrow_icon from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8932dcfe-c9f2-4c66-9a8c-8cf78c2db835");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} /></h3>

                <p>Feel free to reach out through  contact form or find our contact information below.your feedback,questions,suggestions are important to us as we dtrive to provide exceptional service to our university</p>
                <ul>
                    <li><img src={mail_icon} />contact@edisityweb.com</li>
                    <li><img src={phone_icon} />+91 6789054321</li>
                    <li><img src={location_icon} />88 Masschustess,california<br />MA 0123 ,united states</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                
                    Name<input type='text' name='name' placeholder='Enter Your Name' required />
                    <label>Phone Number</label>
                    <input type='tel' name='phnno' placeholder='Enter Your Mobile number' required />
                    <label>Write Your message here</label>
                    <textarea name='message' rows='2' placeholder='Enter your Message' required></textarea>
                    <button className='btn btn-dark'> Submit <img src={Arrow_icon} /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact
