import quality from "./assets/about/desktop/image-quality.jpg";
import uk from "./assets/about/desktop/illustration-uk.svg";
import canada from "./assets/about/desktop/illustration-canada.svg";
import australia from "./assets/about/desktop/illustration-australia.svg";

const About = () => {
  return (
    <>
      <section className="about-us">
        <h1>About us</h1>
        <p>
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </section>

      <section className="commitment">
        <div className="commitment-left"></div>
        <div className="commitment-right">
          <h2>Our commitment</h2>
          <p>
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </section>

      <section className="quality">
        <h2>Unpromising quality</h2>
        <p>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
        <img className="quality-img" src={quality}></img>
      </section>

      <section className="headquarters">
        <h2>Our headquarters</h2>
        <div className="locations">
          <div className="location-card">
            <img src={uk}></img>
            <h3>United Kingdom</h3>
            <address>
              68 Asfordby Rd
              <br></br>
              Alcaston
              <br></br>
              SY6 1YA
              <br></br>
              +44 1241 918425
            </address>
          </div>
          <div className="location-card">
            <img src={canada}></img>
            <h3>Canada</h3>
            <address>
              1528 Eglinton Avenue
              <br></br>
              Toronto
              <br></br>
              Ontario M4P 1A6
              <br></br>
              +1 416 485 2997
            </address>
          </div>
          <div className="location-card">
            <img src={australia}></img>
            <h3>Australia</h3>
            <address>
              36 Swanston Street
              <br></br>
              Kewell
              <br></br>
              Victoria
              <br></br>
              +61 4 9928 3629
            </address>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
