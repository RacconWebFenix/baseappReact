import React from "react";
import "./Cards.css";
import a from "../img/burjkhalifa.jpg";
import b from "../img/ctffinancecentre.jpg";
import c from "../img/internationalcommercecentre.jpg";

const imgs = [a, b, c];

export default function Cards() {
  return (
    <div className={"corpo"}>
      <main className={"cards"}>
        <section className={"card"}>
          <div className={"icon"}>
            <img src={imgs[0]} alt={"Predio 1"}></img>
          </div>
          <h3>Contatc us.</h3>
          <span>Loren isrun loren isrun loren isrun loren isrun loren.</span>
          <div className={"botoes"}>
            <button>Editar</button>
            <button>Excluir</button>
          </div>
        </section>
        <section className={"card"}>
          <div className={"icon"}>
            <img src={imgs[1]} alt={"Predio 2"}></img>
          </div>
          <h3>Dados 2.</h3>
          <span>Loren isrun loren isrun loren isrun loren isrun loren.</span>
          <div className={"botoes"}>
            <button>Editar</button>
            <button>Excluir</button>
          </div>
        </section>
        <section className={"card"}>
          <div className={"icon"}>
            <img src={imgs[2]} alt={"Predio 3"}></img>
          </div>
          <h3>Dados 1.</h3>
          <span>Loren isrun loren isrun loren isrun loren isrun loren.</span>
          <div className={"botoes"}>
            <button>Editar</button>
            <button>Excluir</button>
          </div>
        </section>
        <section className={"card"}>
          <div className={"icon"}>
            <img src={imgs[0]} alt={"Predio 1"}></img>
          </div>
          <h3>Contatc us.</h3>
          <span>Loren isrun loren isrun loren isrun loren isrun loren.</span>
          <div className={"botoes"}>
            <button>Editar</button>
            <button>Excluir</button>
          </div>
        </section>
        <section className={"card"}>
          <div className={"icon"}>
            <img src={imgs[1]} alt={"Predio 2"}></img>
          </div>
          <h3>Dados 2.</h3>
          <span>Loren isrun loren isrun loren isrun loren isrun loren.</span>
          <div className={"botoes"}>
            <button>Editar</button>
            <button>Excluir</button>
          </div>
        </section>
        <section className={"card"}>
          <div className={"icon"}>
            <img src={imgs[2]} alt={"Predio 3"}></img>
          </div>
          <h3>Dados 1.</h3>
          <span>Loren isrun loren isrun loren isrun loren isrun loren.</span>
          <div className={"botoes"}>
            <button>Editar</button>
            <button>Excluir</button>
          </div>
        </section>
        <section className={"card"}>
          <div className={"icon"}>
            <img src={imgs[1]} alt={"Predio 2"}></img>
          </div>
          <h3>Dados 2.</h3>
          <span>Loren isrun loren isrun loren isrun loren isrun loren.</span>
          <div className={"botoes"}>
            <button>Editar</button>
            <button>Excluir</button>
          </div>
        </section>
        <section className={"card"}>
          <div className={"icon"}>
            <img src={imgs[2]} alt={"Predio 3"}></img>
          </div>
          <h3>Dados 1.</h3>
          <span>Loren isrun loren isrun loren isrun loren isrun loren.</span>
          <div className={"botoes"}>
            <button>Editar</button>
            <button>Excluir</button>
          </div>
        </section>
      </main>
    </div>
  );
}
