import React from "react";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="about-area area-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="about-img">
              <Image
                width={555}
                height={485}
                src="/images/about1.png.webp"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <h4>WHO WE ARE</h4>
              <p>
                At Ecorich Infratech, we{`'`}re not just builders. We{`'`}re
                dreamers and doers. Since day one, we{`'`}ve been working hard
                to create spaces that not only look good but also stand the test
                of time. We{`'`}re all about transforming your visions into
                concrete reality, adding our touch to Delhi{`'`}s ever-evolving
                skyline.
              </p>
              <a className="main_btn" href="#">
                learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
