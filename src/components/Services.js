import React from "react";
import "./Services.scss";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <section className="services">
      <div className="section-center">
        <article className="header">
          <h3>
            custome furniture <br /> built only for you
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            quisquam voluptatem quasi alias mollitia sint quo sit dicta,
          </p>
        </article>
        <div className="services-center">
          {services.map((service) => (
            <article key={service.id} className="service">
              <span className="icon">{service.icon}</span>
              <h4>{service.title}</h4>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
