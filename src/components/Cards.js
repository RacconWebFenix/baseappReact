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


export default function Cards() {
  const [skycrapers, setSkycrapers] = useState(skys.skycraper);
  const [valorInputNome, setValorInputNome] = useState("");
  const [valorInputAltura, setValorInputAltura] = useState("");
  const [valorInputLocalizacao, setValorInputLocalizacao] = useState("");
  const [valorInputDesc, setValorInputDesc] = useState("");
  const [valorInputImagemURL, setValorInputImagemURL] = useState("");
  const [index, setIndex] = useState("");
  const [editando, setEditando] = useState(false);


const abrirModal = () => {
  const modal = document.querySelector("#modal");
  modal.style.top = "0";
};

const fecharModal = () => {
  const modal = document.querySelector("#modal");
  modal.style.top = "-100%";
  setValorInputNome("");
  setValorInputAltura("");
  setValorInputLocalizacao("");
  setValorInputDesc("");
  setValorInputImagemURL("");
};


  const CreateFunction = () => {
    if (editando === true) {
      if (
        valorInputNome === "" ||
        valorInputAltura === "" ||
        valorInputLocalizacao === "" ||
        valorInputDesc === "" ||
        valorInputImagemURL === ""
      ) {
        alert("Ta vaziu aí oh!");
        return;
      }
      skycrapers[index].nome = valorInputNome;
      skycrapers[index].altura = valorInputAltura;
      skycrapers[index].localizacao = valorInputLocalizacao;
      skycrapers[index].desc = valorInputDesc;
      skycrapers[index].imagemURL = valorInputImagemURL;
      setSkycrapers(skycrapers);
      setEditando(false);

      fecharModal();
    } else {
      if (
        valorInputNome === "" ||
        valorInputAltura === "" ||
        valorInputLocalizacao === "" ||
        valorInputDesc === "" ||
        valorInputImagemURL === ""
      ) {
        alert("Ta vaziu aí oh!");
        return;
      }
      const newSky = {
        nome: valorInputNome,
        altura: valorInputAltura,
        localizacao: valorInputLocalizacao,
        desc: valorInputDesc,
        imagemURL: valorInputImagemURL,
      };
      setSkycrapers([...skycrapers, newSky]);
      setValorInputNome("");
      setValorInputAltura("");
      setValorInputLocalizacao("");
      setValorInputDesc("");
      setValorInputImagemURL("");
      fecharModal();
    }
  };

  const editandoF = (e, i) => {
    setEditando(true);
    abrirModal();
    setValorInputNome(e.nome);
    setValorInputAltura(e.altura);
    setValorInputLocalizacao(e.localizacao);
    setValorInputDesc(e.desc);
    setValorInputImagemURL(e.imagemURL);
    setIndex(i);
  };

  const deleteF = (i) => {
    const filtroRemove = skycrapers.filter((s) => s !== i);
    setSkycrapers(filtroRemove);
  };

  useEffect(() => {
    setSkycrapers(skycrapers);
    setValorInputNome(valorInputNome);
    setValorInputAltura(valorInputAltura);
    setValorInputLocalizacao(valorInputLocalizacao);
    setValorInputDesc(valorInputDesc);
    setValorInputImagemURL(valorInputImagemURL);
    setIndex(index);
    setEditando(editando);
    console.log(valorInputImagemURL);
  }, [
    valorInputNome,
    skycrapers,
    index,
    editando,
    valorInputAltura,
    valorInputLocalizacao,
    valorInputDesc,
    valorInputImagemURL,
  ]);

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
              <div className={"inputs"}>
                <input
                  type={"text"}
                  value={valorInputNome}
                  onChange={(e) => setValorInputNome(e.target.value)}
                  placeholder="Nome"
                />
                <input
                  type={"text"}
                  value={valorInputAltura}
                  onChange={(e) => setValorInputAltura(e.target.value)}
                  placeholder="Altura"
                />
                <input
                  type={"text"}
                  value={valorInputLocalizacao}
                  onChange={(e) => setValorInputLocalizacao(e.target.value)}
                  placeholder="Localização"
                />
                <input
                  type={"text"}
                  value={valorInputDesc}
                  onChange={(e) => setValorInputDesc(e.target.value)}
                  placeholder="Descição"
                />
                <input
                  type={"text"}
                  value={valorInputImagemURL}
                  onChange={(e) => setValorInputImagemURL(e.target.value)}
                  placeholder="URL da Imagem"
                />
              </div>
              <button onClick={CreateFunction}>Save</button>
              <button onClick={fecharModal}>Cancelar</button>
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
                  <button onClick={() => editandoF(s, i)}>Editar</button>
                  <button onClick={() => deleteF(s, i)}>Excluir</button>
                </div>
              </section>
            );
          })}
        </main>
      </div>
    </>
  );
}
