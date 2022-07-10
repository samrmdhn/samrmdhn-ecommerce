import React, { useState } from "react";const Card = ({ name, url, datas: datas }) => {
  const [details, setDetails] = useState();

  const detailsHandler = async (name) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();
    console.log(data);
    setDetails(data);
  };

  /*
  const deleteHandler = (name) => {
    const filteredDatas = datas.map((data) => {
      return data.name !== name && data;
    });
    console.log(filteredDatas);
  };
*/
  return (
    <div className="card" style={{ marginTop: "10px" }}>
      <div className="card-header">{name}</div>
      <div className="card-body">{url}</div>
      <div className="card-footer">Kiw</div>
    </div>
  );
};

export default Card;
