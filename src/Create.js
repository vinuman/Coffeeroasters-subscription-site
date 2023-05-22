import arrow from "./assets/plan/desktop/icon-arrow.svg";

const Create = () => {
  return (
    <>
      <section className="create-plan">
        <h1>Create plan</h1>
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
          paddingTop: "2rem",
          paddingLeft: "4rem",
          marginTop: "8rem",
        }}
        className="how-it-works"
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
          <p>01 Preferences</p>
          <p>02 Bean Type</p>
          <p>03 Quantity</p>
          <p>04 Grind option</p>
          <p>05 Deliveries</p>
        </div>
        <div className="coffee-selection-right">
          <div className="accordion accordion1">
            <div className="top">
              <p>How do you drink your coffee?</p>
              <img src={arrow}></img>
            </div>
            <div className="bottom">
              <div className="accordion-card">
                <h2>Capsule</h2>
                <p>Compatible with Nespresso systems and similar brewers</p>
              </div>
              <div className="accordion-card">
                <h2>Filter</h2>
                <p>
                  For pour over or drip methods like Aeropress, Chemex, and V60
                </p>
              </div>
              <div className="accordion-card">
                <h2>Espresso</h2>
                <p>
                  Dense and finely ground beans for an intense, flavorful
                  experience
                </p>
              </div>
            </div>
          </div>

          <div className="accordion accordion2">
            <div className="top">
              <p>What type of coffee?</p>
              <img src={arrow}></img>
            </div>
            <div className="bottom">
              <div className="accordion-card">
                <h2>Single Origin</h2>
                <p>
                  Distinct, high quality coffee from a specific family-owned
                  farm
                </p>
              </div>
              <div className="accordion-card">
                <h2>Decaf</h2>
                <p>
                  Just like regular coffee, except the caffeine has been removed
                </p>
              </div>
              <div className="accordion-card">
                <h2>Blended</h2>
                <p>
                  Combination of two or three dark roasted beans of organic
                  coffees
                </p>
              </div>
            </div>
          </div>

          <div className="accordion accordion3">
            <div className="top">
              <p>How much would you like?</p>
              <img src={arrow}></img>
            </div>
            <div className="bottom">
              <div className="accordion-card">
                <h2>250g</h2>
                <p>
                  Perfect for the solo drinker. Yields about 12 delicious cups.
                </p>
              </div>
              <div className="accordion-card">
                <h2>500g</h2>
                <p>
                  Perfect option for a couple. Yields about 40 delectable cups.
                </p>
              </div>
              <div className="accordion-card">
                <h2>1000g</h2>
                <p>
                  Perfect for offices and events. Yields about 90 delightful
                  cups.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion accordion4">
            <div className="top">
              <p>Want us to grind them?</p>
              <img src={arrow}></img>
            </div>
            <div className="bottom">
              <div className="accordion-card">
                <h2>Wholebean</h2>
                <p>Best choice if you cherish the full sensory experience</p>
              </div>
              <div className="accordion-card">
                <h2>Filter</h2>
                <p>
                  For drip or pour-over coffee methods such as V60 or Aeropress
                </p>
              </div>
              <div className="accordion-card">
                <h2>Cafetiére</h2>
                <p>
                  Course ground beans specially suited for french press coffee
                </p>
              </div>
            </div>
          </div>

          <div className="accordion accordion5">
            <div className="top">
              <p>How often should we deliver?</p>
              <img src={arrow}></img>
            </div>
            <div className="bottom">
              <div className="accordion-card">
                <h2>Every week</h2>
                <p>$7.20 per shipment. Includes free first-class shipping.</p>
              </div>
              <div className="accordion-card">
                <h2>Every 2 weeks</h2>
                <p>$9.60 per shipment. Includes free priority shipping.</p>
              </div>
              <div className="accordion-card">
                <h2>Every Month</h2>
                <p>$12.00 per shipment. Includes free priority shipping.</p>
              </div>
            </div>
          </div>

          <div className="order-summary">
            <h3>Order Summary</h3>
            <p>"I drink my coffee as"</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Create;
