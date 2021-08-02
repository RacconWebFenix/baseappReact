import React, { useState, useEffect } from "react";
import "./Cards.css";
import a from "../img/ceu.jpg";

const skys = {
  skycraper: [
    {
      nome: "Loren isrun loren isrun loren isrun loren isrun loren.",
      altura: "150km",
      localizacao: "Loren isrun ",
      desc: "Loren isrun loren isrun loren isrun loren isrun loren.",
      imagemURL: a,
    },
    {
      nome: "Tranim.",
      altura: "12km",
      localizacao: "Loren isrun ",
      desc: "Lorenloren.",
      imagemURL: a,
    },
    {
      nome: "Domingues",
      altura: "130km",
      localizacao: "Loren isrun ",
      desc: "Loren isrun loren isrun loren isrun loren isrun loren.",
      imagemURL: a,
    },
    {
      nome: "Loren isrun loren isrun loren isrun loren isrun loren.",
      altura: "150km",
      localizacao: "Loren isrun ",
      desc: "Loren isrun loren isrun loren isrun loren isrun loren.",
      imagemURL: a,
    },
    {
      nome: "Loren isrun loren isrun loren isrun loren isrun loren.",
      altura: "200km",
      localizacao: "Loren isrun ",
      desc: "Loren isrun loren isrun loren isrun loren isrun loren.",
      imagemURL: a,
    },
  ],
};

const abrirModal = () => {
  const modal = document.querySelector("#modal");
  modal.style.top = "0";
};

const fecharModal = () => {
  const modal = document.querySelector("#modal");
  modal.style.top = "-100%";
  const imputs = document.querySelectorAll(".inputText");
  imputs.forEach((i) => (i.value = ""));
};



export default function Cards() {
  const [skycrapers, setSkycrapers] = useState(skys.skycraper);
  const [nome, setNome] = useState("");
  const [altura, setAltura] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [desc, setDesc] = useState("");
  const [imagemURL, setImagemURL] = useState("");
  const [index, setIndex] = useState(false);
  // const [editar, setEditar] = useState(false);


  const estadoNome = (e) => {
    const valorNome = e.target.value;
    setNome(valorNome);
  };
  const estadoAltura = (e) => {
    const valorAltura = e.target.value;

    setAltura(valorAltura);
  };
  const estadoLocalizacao = (e) => {
    const valorLocalizacao = e.target.value;

    setLocalizacao(valorLocalizacao);
  };
  const estadoDesc = (e) => {
    const valorDesc = e.target.value;
    setDesc(valorDesc);
  };

  const estadoImagemURL = (e) => {
    const valorImagemURL = e.target.value;
    setImagemURL(valorImagemURL);
  };

  const createFunction = () => {
    const newSkycraper = { nome, altura, localizacao, desc, imagemURL };
    if (!nome || !altura || !localizacao || !desc || !imagemURL) {
      alert("Precha os campos corretamente");
    } else {
      skycrapers.push(newSkycraper);
      console.log(skycrapers);
      setSkycrapers(skycrapers);
      setIndex(true);
      setNome("");
      setAltura("");
      setLocalizacao("");
      setDesc("");
      setImagemURL("");
      fecharModal();
    }
  };

  // const editingFunction = (s) => {
  //   setEditar(true);
  //   setNome(s.nome);
  //   setAltura(s.altura);
  //   setLocalizacao(s.localizacao);
  //   setDesc(s.desc);
  //   setImagemURL(s.imagemURL);
  //   abrirModal();

  //   const textNome = document.querySelector("#nomeText");
  //   const textAltura = document.querySelector("#alturaText");
  //   const textLocalizacao = document.querySelector("#locaText");
  //   const textDesc = document.querySelector("#descText");
  //   const textImagemUrl = document.querySelector("#imgText");
  //   textNome.value = nome
  //   // console.log(textNome);
  //   console.log(nome);
  //   console.log(s);
  // };

  useEffect(() => {
    if (index === true) {
      setIndex(false);

      return setSkycrapers(skycrapers);
    }
  }, [index, skycrapers]);

  return (
    <>
      <div>
        <button className={"openModal"} onClick={abrirModal}>
          Cadastrar
        </button>
        <div className={"bgModal"} id={"modal"}>
          <div className={"modal"}>
            <span className={"close"} onClick={fecharModal}>
              &times;
            </span>
            <div>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className={"inputs"}>
                  <input
                    type={"text"}
                    className={"inputText"}
                    onChange={estadoNome}
                    id={"nomeText"}
                  />
                  <input
                    type={"text"}
                    className={"inputText"}
                    onChange={estadoAltura}
                    id={"alturaText"}
                  />
                  <input
                    type={"text"}
                    className={"inputText"}
                    onChange={estadoLocalizacao}
                    id={"locaText"}
                  />
                  <input
                    type={"text"}
                    className={"inputText"}
                    onChange={estadoDesc}
                    id={"descText"}
                  />
                  <input
                    type={"text"}
                    className={"inputText"}
                    onChange={estadoImagemURL}
                    id={"imgText"}
                  />
                </div>

                <button type={"submit"} onClick={createFunction}>
                  Save
                </button>
                <button onClick={fecharModal}>Cancelar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={"corpo"}>
        <main className={"cards"}>
          {skycrapers.map((s, i) => {
            return (
              <section className={"card"} key={i}>
                <div className={"icon"}>
                  <img src={s.imagemURL} alt={"Predio 1"}></img>
                </div>
                <h3>{s.nome}</h3>
                <span>{s.desc}.</span>
                <span>Altura: {s.altura}</span>
                <div className={"botoes"}>
                  <button /*onClick={() => editingFunction(s)}*/>Editar</button>
                  <button>Excluir</button>
                </div>
              </section>
            );
          })}
        </main>
      </div>
    </>
  );
}
