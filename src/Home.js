import mainImage from "./assets/home/desktop/image-hero-coffeepress.jpg";
import granespresso from "./assets/home/desktop/image-gran-espresso.png";
import planalto from "./assets/home/desktop/image-planalto.png";
import piccolo from "./assets/home/desktop/image-piccollo.png";
import danche from "./assets/home/desktop/image-danche.png";
import coffeebean from "./assets/home/desktop/icon-coffee-bean.svg";
import benefits from "./assets/home/desktop/icon-gift.svg";
import shipping from "./assets/home/desktop/icon-truck.svg";
import arrow from "./assets/plan/desktop/icon-arrow.svg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Home = () => {
  const handleArrowClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(".our-collection");
    target.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <main>
        <img className="desktop-img" src={mainImage}></img>
        <div className="main-content">
          <h1>Great coffee made simple.</h1>
          <p>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <button className="btn">Create your plan</button>
        </div>
        <img
          onClick={handleArrowClick}
          className="home-arrow"
          src={arrow}
        ></img>
      </main>

      <section className="our-collection">
        <p>Our Collection</p>
        <div className="item">
          <img src={granespresso}></img>
          <h2>Gran Espresso</h2>
          <p>
            Light and flavorful blend with cocoa and black pepper for an intense
            experience.
          </p>
        </div>
        <div className="item">
          <img src={planalto}></img>
          <h2>Planalto</h2>
          <p>
            Brazilian dark roast with rich and velvety body, and hints of fruits
            and nuts.
          </p>
        </div>
        <div className="item">
          <img src={piccolo}></img>
          <h2>Piccollo</h2>
          <p>
            Mild and smooth blend featuring notes of toasted almond and dried
            cherry.
          </p>
        </div>
        <div className="item">
          <img src={danche}></img>
          <h2>Danche</h2>
          <p>
            Ethiopian hand-harvested blend densely packed with vibrant fruit
            notes.
          </p>
        </div>
      </section>

      <section className="why-us">
        <div className="main-card">
          <h2>Why choose us?</h2>
          <p>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <div className="child-card-container">
          <div className="child-card">
            <img src={coffeebean}></img>
            <h3>Best Quality</h3>
            <p>
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </div>
          <div className="child-card">
            <img src={benefits}></img>
            <h3>Exclusive benefits</h3>
            <p>
              Special offers and swag when you subscribe, including 30% off your
              first shipment.
            </p>
          </div>
          <div className="child-card">
            <img src={shipping}></img>
            <h3>Free shipping</h3>
            <p>
              We cover the cost and coffee is delivered fast. Peak freshness:
              guaranteed.
            </p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h3>How it works</h3>
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
            <h3>Pick your coffee</h3>
            <p>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>
          <div className="how-card">
            <h2>02</h2>
            <h3>Choose the frequency</h3>
            <p>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>
          <div className="how-card">
            <h2>03</h2>
            <h3>Receive and enjoy!</h3>
            <p>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>
        <button style={{ marginBottom: "8rem" }} className="btn">
          Create your plan
        </button>
      </section>
    </>
  );
};

export default Home;
