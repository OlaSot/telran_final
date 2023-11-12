import React from "react";
import s from "./index.module.css";
import whatsapp from './whatsapp.png'
import insta from './insta.png'

export default function Footer() {
  return (
    <div className={s.wrapper}>
      <div className={s.text_container}>
        <div className={s.contact_container}>
          <h1>Contact</h1>
          <p className={s.number}>
            {" "}
            <a href="tel:+49 999 999 99 99" tel="+49 999 999 99 99">
              {" "}
              +49 999 999 99 99
            </a>
          </p>
          <div className={s.social_media_content}>
            <div className={s.content_cont}>
              <a href="https://www.instagram.com/tel_ran/">
                <img src={insta} alt="" />
              </a>
              <p>Instagram</p>
            </div>
            <div className={s.content_cont}>
              <a href="https://api.whatsapp.com/send?phone=%2B493083797477&app=facebook&entry_point=page_cta&fbclid=IwAR3eUU2FYqyUPJNi23MAOH_es4Bg4zLhFCDPPH1volXz6W4XI9lfqXrgoBc">
                <img src={whatsapp} alt="" />
              </a>
              <p>WhatsApp</p>
            </div>
          </div>
        </div>
        <div className={s.address}>
          <h1>Address</h1>
          <p className={s.strasse}>Linkstraße 2, 8 OG, 10785,</p>
          <p className={s.strasse}>Berlin, Deutschland</p>
          <p className={s.hours}>Working Hours:</p>
          <p className={s.duration}>24 hours a day</p>
        </div>
      </div>
      <div className={s.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.402683339232!2d13.372396477620809!3d52.508051237112966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdeaf3909%3A0xff2aef2e44148447!2sLinkstra%C3%9Fe%202%2C%2010785%20Berlin!5e0!3m2!1sru!2sde!4v1695403201082!5m2!1sru!2sde"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
