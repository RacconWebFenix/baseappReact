import React, { useState, useEffect } from "react";
import "./Cards.css";

const BASE_URL = "https://api-modelblue.herokuapp.com/skycraper";

export default function Cards() {
  const [skycrapers, setSkycrapers] = useState([]);
  const [valorInputNome, setValorInputNome] = useState("");
  const [valorInputAltura, setValorInputAltura] = useState("");
  const [valorInputLocalizacao, setValorInputLocalizacao] = useState("");
  const [valorInputDesc, setValorInputDesc] = useState("");
  const [valorInputImagemURL, setValorInputImagemURL] = useState("");
  const [index, setIndex] = useState("");
  const [editando, setEditando] = useState(false);

  const loadSkycrapers = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    setSkycrapers(data);
  };

  useEffect(() => {
    loadSkycrapers();
  }, []);

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

  const CreateFunction = async () => {
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
      await fetch(`${BASE_URL}/${skycrapers[index]._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: valorInputNome,
          altura: valorInputAltura,
          localizacao: valorInputLocalizacao,
          desc: valorInputDesc,
          imagemURL: valorInputImagemURL,
        }),
      });
      skycrapers[index].nome = valorInputNome;
      skycrapers[index].altura = valorInputAltura;
      skycrapers[index].localizacao = valorInputLocalizacao;
      skycrapers[index].desc = valorInputDesc;
      skycrapers[index].imagemURL = valorInputImagemURL;
      setSkycrapers(skycrapers);
      loadSkycrapers();
      setEditando(false);
      setValorInputNome("");
      setValorInputAltura("");
      setValorInputLocalizacao("");
      setValorInputDesc("");
      setValorInputImagemURL("");
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
      await fetch(`${BASE_URL}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: valorInputNome,
          altura: valorInputAltura,
          localizacao: valorInputLocalizacao,
          desc: valorInputDesc,
          imagemURL: valorInputImagemURL,
        }),
      });
      const newSky = {
        nome: valorInputNome,
        altura: valorInputAltura,
        localizacao: valorInputLocalizacao,
        desc: valorInputDesc,
        imagemURL: valorInputImagemURL,
      };
      setSkycrapers([...skycrapers, newSky]);
      loadSkycrapers();
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

  const deleteF = async (id) => {
    let del = window.confirm("Você realmente deseja Excluir?");
    if (del === true) {
      await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
      });
      loadSkycrapers();
    }
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
              <div className="btnSaveCancel">
                <button onClick={CreateFunction}>Save</button>
                <button onClick={fecharModal}>Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="contaiverBtn">
          <button className={"openModal"} onClick={abrirModal} id="btnCadastro">
            Cadastrar
          </button>
        </div>
      </div>
      <div className={"corpo"}>
        <main className={"cards"}>
          {skycrapers.map((s, i) => {
            return (
              <section className={"card"} key={i}>
                <div className={"icon"}>
                  <img src={s.imagemURL} alt={s.nome}></img>
                </div>
                <h3>{s.nome}</h3>
                <span className="desc">{s.desc}.</span>
                <span>Altura: {s.altura}</span>
                <span>Localização: {s.localizacao}</span>
                <div className={"botoes"}>
                  <button onClick={() => editandoF(s, i)}>Editar</button>
                  <button onClick={() => deleteF(s._id)}>Excluir</button>
                </div>
              </section>
            );
          })}
        </main>
      </div>
    </>
  );
}
