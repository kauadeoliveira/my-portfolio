import React from "react"
import './style.scss';
import ArrowBtn from "../ArrowBtn";

export default function Hero() {
  return(
    <section id="hero" className="section">
      <div className="gradient" />
      <div className="section__content">
        <div className="title-container">
          <span>Olá! meu nome é Kauã e sou</span>
          <h1 className="title">
            <em>React</em>
            <br />
            Developer
          </h1>
        </div>
        <div className="summary-about">
          <p>
            Com 19 anos de idade, minha jornada no mundo do desenvolvimento web começou há dois anos. Desde então, tenho sido
            apaixonado por explorar e aprimorar minhas habilidades para criar projetos excepcionais.
          </p>
          <span>(Scroll)</span>
        </div>
        <div className="arrow-btn-container">
          <ArrowBtn direction="down" label="Conheça meus projetos" />
        </div>
      </div>
    </section>
  )
}