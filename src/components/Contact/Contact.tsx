import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";

export function Contact(){
  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Want to work together or have a question?</p>
        <p>Feel free to reach out — I'd love to connect!</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:jaiswalsonal338@gmail.com"><img src={emailIcon} alt="Email" /></a>
          <a href="mailto:jaiswalsonal338@gmail.com">jaiswalsonal338@gmail.com</a>
        </div>
        <div>
          <a href="tel:+919369182750"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919369182750">(+91) 9369182750</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  )
}
