import React from "react";
import imgage from "../../assets/images/pic1.png";
function Card() {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imgage} alt="" />
      </div>
      <div className="card-title">ttel</div>
      <div className="card-body">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
      <div className="card-footer">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
    </div>
  );
}

export default Card;
