import Image from "next/image";
import React from "react";

type Props = {};

const Services = (props: Props) => {
  return (
    <section className="service-area area-padding">
      <div className="container">
        <div className="area-heading">
          <h3 className="line">What We Do</h3>
          <p>We are with you from the first sketch to the final nail.</p>
        </div>
        <div className="row">
          <div className="col-md-6 col-xl-3">
            <div className="single-service">
              <div className="service-icon">
                <Image
                  width={92}
                  height={92}
                  src="/images/i1.png.webp"
                  alt=""
                />
              </div>
              <div className="service-content">
                <h5>Architecture Design</h5>
                <p>
                  We believe in the power of thoughtful design to shape spaces.
                  Our architects bring creativity and expertise to every
                  project, ensuring that each structure tells a unique story
                  while meeting your practical needs.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="single-service">
              <div className="service-icon">
                <Image
                  width={83}
                  height={83}
                  src="/images/i2.png.webp"
                  alt=""
                />
              </div>
              <div className="service-content">
                <h5>Building Construction</h5>
                <p>
                  From groundbreaking to final touches, our construction team is
                  dedicated to bringing your vision to life. We handle every
                  aspect of the building process with precision and care,
                  delivering quality craftsmanship that stands the test of time.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="single-service">
              <div className="service-icon">
                <Image
                  width={53}
                  height={92}
                  src="/images/i3.png.webp"
                  alt=""
                />
              </div>
              <div className="service-content">
                <h5>Building Renovation</h5>
                <p>
                  Ready to breathe new life into your space? Our renovation
                  experts specialize in transforming existing structures.
                  Whether it{`'`}s a modern update or a historical restoration,
                  we will revitalize & enhance your property.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="single-service">
              <div className="service-icon">
                <Image
                  width={82}
                  height={82}
                  src="/images/i4.png.webp"
                  alt=""
                />
              </div>
              <div className="service-content">
                <h5>Building Maintenance</h5>
                <p>
                  Preserving the beauty and functionality of your space is our
                  commitment. Our maintenance services ensures that your
                  property remains in top condition. From routine check-ups to
                  emergency repairs, we{`'`}ve got you covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
