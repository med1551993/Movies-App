import React, { useEffect, useState } from "react";
import "./style.css";
import Upcomming from "../upcoming/Upcomming";
import { homeData, recommended } from "../../dummyData";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const [rec, setRec] = useState(recommended);

  const params = useParams(); //const {id} = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = homeData.find((item) => item.id === parseInt(params.id));
    if (item) {
      setItem(item);
    }
  }, [params.id]);

  return (
    <>
      {item ? (
        <>
          <section className="singlePage">
            <div className="singleHeading">
              <h1>{item.name}</h1> <span>| {item.time} |</span>
              <span>HD</span>
            </div>
            <div className="container">
              <video src={item.video} controls></video>
              <div className="para">
                <h3>Date : {item.date} </h3>
                <p>{item.desc}</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas qui sit quo hic sint consequuntur temporibus
                  doloremque, rerum, quasi consequatur, sunt quibusdam. Harum
                  dolorem excepturi totam cupiditate illo rem quam. Incidunt
                  quisquam architecto autem sint. Error assumenda distinctio
                  enim itaque nisi incidunt inventore veritatis dicta blanditiis
                  libero atque quod iure sit, dolorem sequi! Atque, eligendi.
                  Quos alias at aut eos!
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas qui sit quo hic sint consequuntur temporibus
                  doloremque, rerum, quasi consequatur, sunt quibusdam. Harum
                  dolorem excepturi totam cupiditate illo rem quam. Incidunt
                  quisquam architecto autem sint. Error assumenda distinctio
                  enim itaque nisi incidunt inventore veritatis dicta blanditiis
                  libero atque quod iure sit, dolorem sequi! Atque, eligendi.
                  Quos alias at aut eos!
                </p>
              </div>
              <div className="social">
                <h3>Share :</h3>
                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
                <img src="https://img.icons8.com/fluency/48/000000/twitter-circled.png" />
                <img src="https://img.icons8.com/fluency/48/000000/linkedin-circled.png" />
              </div>
            </div>
          </section>
          <Upcomming items={rec} title="Recommended Movies" />
        </>
      ) : null}
    </>
  );
};

export default SinglePage;
