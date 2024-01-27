import "./Contact.css";
import pic from "../../assets/images/pic1.jpg";
const Contact = () => {
  return (
    <div className="contact-container flex">
      <h1>Contact us</h1>
      <div className="contact grid">
        <div className="image">
          <img src={pic} alt="" />
        </div>
        <form className="flex">
          <div className="flex">
            <input type="text" name="full-name" placeholder="Full name" />
            <input type="subject" name="subject" placeholder="Subject" />
          </div>
          <input type="email" name="email" placeholder="Email" />
          <textarea
            name="message"
            rows="200"
            cols=""
            placeholder="Message ..."
          />
          <div className="form-btn">
            <button className="btn">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
