import React from "react";
import Footer from './../Footer'
import{
  ContactSection,
  ContactTitle,
  Span,
  Form,
  FormInput,
  InputText,
  InputEmail,
  InputExp,
  TextArea,
  InputSupmit,
} from "./style.js";


const Contact = () => {
  return (
  <React.Fragment>
      <ContactSection>
      <div className="container">
        <ContactTitle>
          <Span>Drop </Span>Me A line
        </ContactTitle>
        <Form action="">
          <FormInput>
            <InputText type="text" placeholder="Your Name" />
            <InputEmail type="email" placeholder="Your Email" />
          </FormInput>
          <InputExp type="text" className="sub" placeholder="Your Subject" />
          <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
          <InputSupmit type="submit" value="Send Message" />
        </Form>
      </div>
    </ContactSection>
    <Footer />
  </React.Fragment>
  );
};

export default Contact;
