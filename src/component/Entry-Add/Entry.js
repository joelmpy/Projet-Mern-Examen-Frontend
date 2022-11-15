import React from "react";
import { useForm } from "react-hook-form";
import Man from "../../assets/homme.png";
import Woman from "../../assets/femme.png";
import { useState, useContext } from "react";
import { useNavigate } from "react-dom";
import { User } from "../../App";
import "../Entry-Add/Entry.css"

function Entry() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [activity, setActivity] = useState(1);
  const [gender, setGender] = useState("homme");
  const [values, setValues] = useState(null);
  const [formValid, setFormValid] = useState(false);
  const [user, setUsers] = useState([]);
  // const navigate = useNavigate()
  const context = useContext(User);
  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data, event);
    fetch("http://localhost:8009/info", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        gender: gender,
        activity: activity,
        age: parseInt(data.age),
        weight: parseInt(data.weight),
        height: parseInt(data.height),
        _id: context.user._id,
      }),
    })
      .then((reponse) => reponse.json())
      .then((res) => {
        console.log("Success:", res);

        setUsers(res);
      });
  };

  const handleChange = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };


  return (
    <div className="container-entry">

      <div className="box-title">
        <h1>Entrer des nouvelles données personnelles</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="container-entry-input">
        {/* La date */}
        <div className="container-form">

          <div className="container-date">
            <div className="form-date">
              <label htmlFor="date">Date</label>
              <input type="date" id="date" name="date" className="form-date-input"
                required {...register("date", { required: true })} onChange={handleChange} />
              <span className="date-error">{errors.date?.type === "required" && "La date est requise"}</span>
            </div>
          </div>


          {/* Le genre */}
          <div className="container-gender">

            <div className="section-title-gender">
              <h2>Gender</h2>
            </div>

            <div className="section-gender">
              <div className="gender-male-img">
                <img src={Man} className="male-img"></img>
                <button className={"gender-btn" + (gender === "homme" ? " active " : "")} onClick={() => { setGender("homme") }} >Un Homme</button>
              </div>

              <div className="gender-woman-img">
                <img src={Woman} className="male-img"></img>
                <button className={"gender-btn" + (gender === "femme" ? " active " : "")} onClick={() => { setGender("femme") }}>Une Femme</button>
              </div>
            </div>

          </div>


          {/* Les input pour les information */}

          <div className="container-info-user">

            <div className="section-title-gender">
              <h2>Info</h2>
            </div>

            <div className="input-champs">
              <div className="input-champs-info">
                <h3>Height(cm)</h3>
                <input type="number" id="number" name="height" placeholder="ta taille (cm)" required className="input-info"
                  {...register("height", { required: true, max: 250, })} onChange={handleChange} />
                <span className="error">{errors.height?.type === "required" && ("La taille est requis")}</span>
              </div>
            </div>

            <div className="input-champs">
              <div className="input-champs-info">
                <h3>Weight(kg)</h3>
                <input type="number" id="number" name="weight" placeholder="kg min : 30" required className="input-info"
                  {...register("weight", { required: true, min: 30, max: 300 })} onChange={handleChange} />
                {errors.weight?.type === "required" && (<span className="error">Le poids est requis</span>)}
              </div>
            </div>

            <div className="input-champs">
              <div className="input-champs-info">
                <h3>Age</h3>
                <input type="number" id="number" name="age" placeholder="min : 15ans" required className="input-info"
                  {...register("age", { required: true, min: 15, max: 70 })} onChange={handleChange} />
                {errors.age?.type === "required" && (<span className="error">L'age est requis</span>)}
              </div>
            </div>
          </div>
        </div>




        <div className="container-activity">

          <div className="section-title-activity">
            <h2>Votre activité</h2>
          </div>

          <div className="section-activity">

            <div className="btn-activity">
              <button className={"btn-actif" + (activity === "1" ? " active-btn " : "")} onClick={() => { setActivity("1"); }}>{" "} Peu actif</button>
            </div>

            <div className="btn-activity">
              <button className={"btn-actif" + (activity === "2" ? " active-btn " : "")} onClick={() => { setActivity("2") }}>Moyennement actif</button>
            </div>

            <div className="btn-activity">
              <button className={"btn-actif" + (activity === "3" ? " active-btn " : "")} onClick={() => { setActivity("3"); }}> Actif</button>
            </div>

            <div className="btn-activity">
              <button className={"btn-actif" + (activity === "4" ? " active-btn " : "")} onClick={() => { setActivity("4"); }}> Très actif </button>
            </div>

          </div>
        </div>



        <div className={"styles.buttonEntry"}>
          {/* <button className="button-valid" type="submit">Envoyer</button> */}
          <input type="submit" />
        </div>

      </form>



    </div>
  );
}

export default Entry;
