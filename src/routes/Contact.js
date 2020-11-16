import React from "react";
import Call from "../assets/icons/icon-call.svg";
import Add from "../assets/icons/icon-address.svg";
// import { TextField } from "@material-ui/core";

function Contact() {
  return (
    <div className="Contact">
      <h1 className="contact-head">
        <span>Contact</span> Us Here.
      </h1>
      <section className="mess">
        <form noValidate autoComplete="off" className="message-box">
          {/* <TextField
            id="outlined-basic"
            color="secondary"
            label="Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="E-mail ID"
            color="secondary"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Message"
            color="secondary"
            variant="outlined"
            multiline="true"
            rows="10"
          /> */}
          <input type="text" className="name" placeholder="Name" />
          <input type="text" className="email" placeholder="E-mail ID" />
          <textarea
            name="message"
            className="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      <section className="call-and-add">
        <article className="call-us">
          <div className="call-head head">
            <img src={Call} alt="" />
            <h2>Ring a call.</h2>
          </div>
          <p className="call-body body">
            012-333-4444
            <br />
            012-333-4444
            <br />
            012-333-4444
            <br />
            <br />
            Call between 10am and 6pm IST.
          </p>
        </article>

        <article className="address">
          <div className="add-head head">
            <img src={Add} alt="" />
            <h2>Visit us.</h2>
          </div>
          <p className="call-body body">
            Random Annexe,
            <br />
            Random Street,
            <br />
            Random City -
            <br />
            XXXXXX
          </p>
        </article>
      </section>
    </div>
  );
}

export default Contact;
