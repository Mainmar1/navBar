import "./_cart.css";
import img from "./logo.png";

function cartWidget() {
  return (
    <div>
      <img src={img} alt="logo eCommerce" className="imgLogo" />
    </div>
  );
}

export default cartWidget;
