import React, { useState } from "react";
import "./Curd.css";

const Curdop = () => {
  const [name, setName] = useState("");
  const [alldata, setAlldata] = useState([]);
  const [show, setshow] = useState(false);
  const [editindex, setIndex] = useState(false);
  // const [showinput,setshowinput]= useState(false)

  const Handleadd = () => {
    if (name.length !== 0) {
      setAlldata((newdata) => [...newdata, name]);
      setName("");
    }
  };
  const Handledelete = (i) => {
    // console.log(i);
    alldata.splice(i, 1);
    setAlldata([...alldata]);
  };
  const HandleEdit = (i) => {
    setName(alldata[i]);
    setshow(true);
    setIndex(i);


    // setshowinput(false)
  };
  const HandleUpdate = () => {
    alldata.splice(editindex, 1, name);
    setAlldata([...alldata]);
    setName("");
    setshow(false);
  };
  console.log(alldata);
  return (
    <>
      <h1> Curd Operation </h1>
      <div>
        <input
          className="input-fill"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {!show ? (
          <button className="button" onClick={Handleadd}>
            Add
          </button>
        ) : (
          <button className="button" onClick={HandleUpdate}>
            Update
          </button>
        )}

        {alldata.map((val, i) => (
          <div>
            <h1>{val}</h1>

            <div>
              <button className="Edit" onClick={() => HandleEdit(i)}>
                Edit
              </button>
              <button className="Delete" onClick={() => Handledelete(i)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Curdop;
