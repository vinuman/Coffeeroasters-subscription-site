import arrow from "./assets/plan/desktop/icon-arrow.svg";
import { useState, useEffect } from "react";

const Create = () => {
  const [accordion1, setAccordion1] = useState(true);
  const [accordion2, setAccordion2] = useState(false);
  const [accordion3, setAccordion3] = useState(false);
  const [accordion4, setAccordion4] = useState(false);
  const [accordion5, setAccordion5] = useState(false);

  const [selection1, setSelection1] = useState("");
  const [selection2, setSelection2] = useState("");
  const [selection3, setSelection3] = useState("");
  const [selection4, setSelection4] = useState("");
  const [selection5, setSelection5] = useState("");

  const [finalPrice, setFinalPrice] = useState("");

  useEffect(() => {
    if (selection1 && selection2 && selection3 && selection4 && selection5) {
      document.getElementById("plan-btn").classList.add("btn");
      document.getElementById("plan-btn").classList.remove("btn1");
    } else {
      document.getElementById("plan-btn").classList.remove("btn");
      document.getElementById("plan-btn").classList.add("btn1");
    }
    if (selection3 == "250g" && selection5 == "Every week") {
      setFinalPrice("28.8");
    }
    if (selection3 == "250g" && selection5 == "Every 2 week") {
      setFinalPrice("19.20");
    }
    if (selection3 == "250g" && selection5 == "Every Month") {
      setFinalPrice("12.00");
    }
    if (selection3 == "500g" && selection5 == "Every week") {
      setFinalPrice("52.00");
    }
    if (selection3 == "500g" && selection5 == "Every 2 week") {
      setFinalPrice("35.00");
    }
    if (selection3 == "500g" && selection5 == "Every Month") {
      setFinalPrice("22.00");
    }
    if (selection3 == "1000g" && selection5 == "Every week") {
      setFinalPrice("22.00");
    }
    if (selection3 == "1000g" && selection5 == "Every 2 week") {
      setFinalPrice("32.00");
    }
    if (selection3 == "1000g" && selection5 == "Every Month") {
      setFinalPrice("42.00");
    }
  }, [selection1, selection2, selection3, selection4, selection5]);

  const handleMyPlanButton = () => {
    document.querySelector(".modal").classList.add("show");
  };

  const handleModalClick = () => {
    document.querySelector(".modal").classList.remove("show");
  };

  return (
    <>
      <section className="create-plan">
        <h1>Create a plan</h1>
        <p>
          Coffee the way you wanted it to be. For coffee delivered tomorrow, or
          next week. For whatever brew method you use. For choice, for
          convenience, for quality.
        </p>
      </section>

      <section
        style={{
          backgroundColor: "#2C343E",
          width: "100%",
          marginLeft: "0",
          borderRadius: "1rem",
          marginTop: "8rem",
        }}
        className="how-it-works work1"
      >
        <div className="directions">
          <div className="circle"></div>
          <div className="lines"></div>
          <div className="circle"></div>
          <div className="lines"></div>
          <div className="circle"></div>
        </div>
        <div className="how-cards-container">
          <div className="how-card">
            <h2>01</h2>
            <h3 style={{ color: "#FEFCF7" }}>Pick your coffee</h3>
            <p style={{ color: "#FEFCF7" }}>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>
          <div className="how-card">
            <h2>02</h2>
            <h3 style={{ color: "#FEFCF7" }}>Choose the frequency</h3>
            <p style={{ color: "#FEFCF7" }}>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>
          <div className="how-card">
            <h2>03</h2>
            <h3 style={{ color: "#FEFCF7" }}>Receive and enjoy!</h3>
            <p style={{ color: "#FEFCF7" }}>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>
      </section>

      <section className="coffee-selection">
        <div className="coffee-selection-left">
          <p className={selection1 ? "active" : ""}>01 Preferences</p>
          <p className={selection2 ? "active" : ""}>02 Bean Type</p>
          <p className={selection3 ? "active" : ""}>03 Quantity</p>
          <p className={selection4 ? "active" : ""}>04 Grind option</p>
          <p className={selection5 ? "active" : ""}>05 Deliveries</p>
        </div>
        <div className="coffee-selection-right">
          <div className="accordion accordion1">
            <div onClick={() => setAccordion1(!accordion1)} className="top">
              <p>How do you drink your coffee?</p>
              <img
                className={accordion1 === true ? "rotate" : ""}
                src={arrow}
              ></img>
            </div>
            {accordion1 ? (
              <div className="bottom">
                <div
                  onClick={() => setSelection1("Capsules")}
                  className={`accordion-card ${
                    selection1 === "Capsules" ? "active" : ""
                  }`}
                >
                  <h2>Capsule</h2>
                  <p>Compatible with Nespresso systems and similar brewers</p>
                </div>
                <div
                  onClick={() => setSelection1("Filter")}
                  className={`accordion-card ${
                    selection1 === "Filter" ? "active" : ""
                  }`}
                >
                  <h2>Filter</h2>
                  <p>
                    For pour over or drip methods like Aeropress, Chemex, and
                    V60
                  </p>
                </div>
                <div
                  onClick={() => setSelection1("Espresso")}
                  className={`accordion-card ${
                    selection1 === "Espresso" ? "active" : ""
                  }`}
                >
                  <h2>Espresso</h2>
                  <p>
                    Dense and finely ground beans for an intense, flavorful
                    experience
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="accordion accordion2">
            <div onClick={() => setAccordion2(!accordion2)} className="top">
              <p>What type of coffee?</p>
              <img
                className={accordion2 === true ? "rotate" : ""}
                src={arrow}
              ></img>
            </div>
            {accordion2 ? (
              <div className="bottom">
                <div
                  onClick={() => setSelection2("Single origin")}
                  className={`accordion-card ${
                    selection2 === "Single origin" ? "active" : ""
                  }`}
                >
                  <h2>Single Origin</h2>
                  <p>
                    Distinct, high quality coffee from a specific family-owned
                    farm
                  </p>
                </div>
                <div
                  onClick={() => setSelection2("Decaf")}
                  className={`accordion-card ${
                    selection2 === "Decaf" ? "active" : ""
                  }`}
                >
                  <h2>Decaf</h2>
                  <p>
                    Just like regular coffee, except the caffeine has been
                    removed
                  </p>
                </div>
                <div
                  onClick={() => setSelection2("Blended")}
                  className={`accordion-card ${
                    selection2 === "Blended" ? "active" : ""
                  }`}
                >
                  <h2>Blended</h2>
                  <p>
                    Combination of two or three dark roasted beans of organic
                    coffees
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="accordion accordion3">
            <div onClick={() => setAccordion3(!accordion3)} className="top">
              <p>How much would you like?</p>
              <img
                className={accordion3 === true ? "rotate" : ""}
                src={arrow}
              ></img>
            </div>
            {accordion3 ? (
              <div className="bottom">
                <div
                  onClick={() => setSelection3("250g")}
                  className={`accordion-card ${
                    selection3 === "250g" ? "active" : ""
                  }`}
                >
                  <h2>250g</h2>
                  <p>
                    Perfect for the solo drinker. Yields about 12 delicious
                    cups.
                  </p>
                </div>
                <div
                  onClick={() => setSelection3("500g")}
                  className={`accordion-card ${
                    selection3 === "500g" ? "active" : ""
                  }`}
                >
                  <h2>500g</h2>
                  <p>
                    Perfect option for a couple. Yields about 40 delectable
                    cups.
                  </p>
                </div>
                <div
                  onClick={() => setSelection3("1000g")}
                  className={`accordion-card ${
                    selection3 === "1000g" ? "active" : ""
                  }`}
                >
                  <h2>1000g</h2>
                  <p>
                    Perfect for offices and events. Yields about 90 delightful
                    cups.
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="accordion accordion4">
            <div onClick={() => setAccordion4(!accordion4)} className="top">
              <p>Want us to grind them?</p>
              <img
                className={accordion4 === true ? "rotate" : ""}
                src={arrow}
              ></img>
            </div>
            {accordion4 ? (
              <div className="bottom">
                <div
                  onClick={() => setSelection4("wholebean")}
                  className={`accordion-card ${
                    selection4 === "wholebean" ? "active" : ""
                  }`}
                >
                  <h2>Wholebean</h2>
                  <p>Best choice if you cherish the full sensory experience</p>
                </div>
                <div
                  onClick={() => setSelection4("Filter")}
                  className={`accordion-card ${
                    selection4 === "Filter" ? "active" : ""
                  }`}
                >
                  <h2>Filter</h2>
                  <p>
                    For drip or pour-over coffee methods such as V60 or
                    Aeropress
                  </p>
                </div>
                <div
                  onClick={() => setSelection4("Cafetiére")}
                  className={`accordion-card ${
                    selection4 === "Cafetiére" ? "active" : ""
                  }`}
                >
                  <h2>Cafetiére</h2>
                  <p>
                    Course ground beans specially suited for french press coffee
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="accordion accordion5">
            <div onClick={() => setAccordion5(!accordion5)} className="top">
              <p>How often should we deliver?</p>
              <img
                className={accordion5 === true ? "rotate" : ""}
                src={arrow}
              ></img>
            </div>
            {accordion5 ? (
              <div className="bottom">
                <div
                  onClick={() => setSelection5("Every week")}
                  className={`accordion-card ${
                    selection5 === "Every week" ? "active" : ""
                  }`}
                >
                  <h2>Every week</h2>
                  <p>
                    $
                    {selection3 == "250g"
                      ? "7.20"
                      : selection3 == "500g"
                      ? "13.00"
                      : selection3 == "1000g"
                      ? "22.00"
                      : "7.20"}{" "}
                    per shipment. Includes free first-class shipping.
                  </p>
                </div>
                <div
                  onClick={() => setSelection5("Every 2 week")}
                  className={`accordion-card ${
                    selection5 === "Every 2 week" ? "active" : ""
                  }`}
                >
                  <h2>Every 2 weeks</h2>
                  <p>
                    $
                    {selection3 == "250g"
                      ? "9.60"
                      : selection3 == "500g"
                      ? "17.50"
                      : selection3 == "1000g"
                      ? "32.00"
                      : "9.60"}{" "}
                    per shipment. Includes free priority shipping.
                  </p>
                </div>
                <div
                  onClick={() => setSelection5("Every Month")}
                  className={`accordion-card ${
                    selection5 === "Every Month" ? "active" : ""
                  }`}
                >
                  <h2>Every Month</h2>
                  <p>
                    $
                    {selection3 == "250g"
                      ? "22.00"
                      : selection3 == "500g"
                      ? "32.00"
                      : selection3 == "1000g"
                      ? "42.00"
                      : "22.00"}{" "}
                    per shipment. Includes free priority shipping.
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="order-summary">
            <h3>Order Summary</h3>
            <p>
              "I drink my coffee using{" "}
              <span style={{ color: "#0E8784" }}>
                {selection1 || <div className="empty"></div>}
              </span>
              , with a{" "}
              <span style={{ color: "#0E8784" }}>
                {selection2 || <div className="empty"></div>}
              </span>{" "}
              type of bean.{" "}
              <span style={{ color: "#0E8784" }}>
                {selection3 || <div className="empty"></div>}
              </span>
              , sent to me{" "}
              <span style={{ color: "#0E8784" }}>
                {selection5 || <div className="empty"></div>}
              </span>
              "
            </p>
          </div>
          <button
            onClick={handleMyPlanButton}
            style={{ alignSelf: "flex-end", marginRight: "12rem" }}
            className="btn1"
            id="plan-btn"
          >
            Create my plan!
          </button>
        </div>
      </section>

      <section onClick={handleModalClick} className="modal order-summary">
        <div className="modal-content">
          <h2>Order Summary</h2>
          <p>
            "I drink my coffee using{" "}
            <span style={{ color: "#0E8784" }}>
              {selection1 || <div className="empty"></div>}
            </span>
            , with a{" "}
            <span style={{ color: "#0E8784" }}>
              {selection2 || <div className="empty"></div>}
            </span>{" "}
            type of bean.{" "}
            <span style={{ color: "#0E8784" }}>
              {selection3 || <div className="empty"></div>}
            </span>
            , sent to me{" "}
            <span style={{ color: "#0E8784" }}>
              {selection5 || <div className="empty"></div>}
            </span>
            "
          </p>

          <p className="confirmation-text">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.{" "}
          </p>
          <div className="checkout">
            <p>${finalPrice}/mo</p>
            <button className="btn">Checkout</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Create;
