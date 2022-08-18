import React, { useEffect, useState } from "react";
import Single from "./Single";
import SingleList from "./SingleList";
import SingleCard from "./SingleCard";
const Projects = ({ view }) => {
  console.log(view);
  const [value, getData] = useState([]);
  //   console.log(view);
  useEffect(() => {
    fetch("../../../../fdata.json")
      .then((res) => res.json())
      .then((data) => getData(data));
  }, []);
  return (
    <>
      {view === "List" ? (
        <div className="row list mx-auto" style={{ width: "95%" }}>
          {value.map((filedata) => (
            <SingleList carddata={filedata} key={filedata.id}></SingleList>
          ))}
        </div>
      ) : view === "Card" ? (
        <div className="row activity mx-auto" style={{ width: "95%" }}>
          {value.map((filedata) => (
            <SingleCard carddata={filedata} key={filedata.id}></SingleCard>
          ))}
        </div>
      ) : (
        <div className="row activity mx-auto" style={{ width: "95%" }}>
          {value.map((filedata) => (
            <Single carddata={filedata} key={filedata.id}></Single>
          ))}
        </div>
      )}
      {/* <div className="row activity mx-auto">
        {value.map((filedata) => (
          <Single carddata={filedata} key={filedata.id}></Single>
        ))}
      </div>
      <div className="row list mx-auto">
        {value.map((filedata) => (
          <SingleList carddata={filedata} key={filedata.id}></SingleList>
        ))}
      </div>
      <div className="row activity mx-auto">
        {value.map((filedata) => (
          <SingleCard carddata={filedata} key={filedata.id}></SingleCard>
        ))}
      </div> */}
    </>
  );
};

export default Projects;
