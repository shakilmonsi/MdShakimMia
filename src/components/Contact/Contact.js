

// complet code ,,,,,,,,,,,,,,,,,,,,,,,,,, 
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import mailgif from "../../Assets/83358-contact-green.gif";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xwkgpedy");
  if (state.succeeded) {
    return (
      <div className="py-4">
        <h4 className=" text-primary  ">
          Your message has been sent. Thank you!
        </h4>
        <div className="more-info">
          <img style={{ height: "230px" }} src={mailgif} alt="" />
        </div>
      </div>
    );
  }
  return (
    <div  className="py-4" style={{  overflow:"hidden" }}>
      <div className="title-box-2">
        <h5 className="title-left text-white">Send me your address<br></br>
          to contact me</h5>
            </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email"></label>
          <input className="p-4"
            id="email"
            type="email"
            placeholder="Your Email"
            name="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="mt-2">
          <textarea className="p-3"
            style={{ width: "500px", height: "140px"  }}
            placeholder="Message"
            id="message"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button  className="btn btn-primary"
          style={{ borderRadius: "20px" }}
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
function Contact() {
  return <ContactForm />;
}

export default Contact;
