import React from "react";
const Pokemon = () => {
  const [datas, setDatas] = useState([]);
  const [details, setDetails] = useState();

  const detailsHandler = async (name) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();
    console.log(data);
    setDetails(data);
  };

  const generateRandomNumber = () => {
    let min = 0;
    let max = 999;
    let x = Math.random() * (max - min) + min;
    return x;
  };

  const getDatas = async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${generateRandomNumber()}&limit=8`
    );
    const resData = await res.json();
    console.log(resData);
    setDatas(resData.results);
  };

  useEffect(() => {
    getDatas();
  }, []);

  const deleteHandler = (name) => {
    const filteredDatas = datas.filter((data) => {
      return data.name !== name && data;
    });

    setDatas(filteredDatas);
  };

  return (
    <div className="container">
      <div className="row">
        {datas.map((data) => {
          return (
            <div className="col-lg-3" key={data.name}>
              <>
                <Card name={data.name} url={data.url} />
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    detailsHandler(data.name);
                  }}
                >
                  Details
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteHandler(data.name);
                  }}
                >
                  Delete
                </button>
              </>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pokemon;
