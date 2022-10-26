import React from "react";
import styles from "../Entry-Add/Entry.module.css";
import { useForm } from "react-hook-form";
import Man from "../../assets/homme.png";
import Woman from "../../assets/femme.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-dom";

function Entry() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [activity, setActivity] = useState(0);
  const [values, setValues] = useState(null);
  const [formValid, setFormValid] = useState(false);
  const [gender, setGender] = useState("homme");
  const [user, setUsers] = useState([]);
  // const navigate = useNavigate()

  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data, event)
    fetch('http://localhost:8009/info', {
         headers: {
             Accept: 'application/json',
             'Content-Type': 'application/json'
           },
           method: 'POST',
           body: JSON.stringify({
             gender : gender, 
             activity : activity,
             age:parseInt(data.age),
             weight:parseInt(data.weight),
             height:parseInt(data.height),
           })
         })
         .then(reponse => reponse.json())
         .then(res => {
          console.log('Success:',res)
      
          setUsers(res) 
         }
         ) 
        
  };

  const handleChange = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  console.log(gender);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1>Entrer des nouvelles données personnelles</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
        <div className={styles.boxInput}>
          <div className={styles.content}>
            <div className={styles.input}>
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                required
                {...register("date", {
                  required: true,
                })}
                onChange={handleChange}
              />
              {errors.date?.type === "required" && (
                <span className={styles.error}>La date est requise</span>
              )}
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.input}>
              <label>Gender</label>

              <div className={styles.wrapperGender}>
                <div className={styles.wrapperIcon}>
                  <img src={Man} className={styles.assets}></img>
                  <div
                    className={"btn" + (gender === "homme" ? " active " : "")}
                    onClick={() => {
                      setGender("homme");
                    }}
                  >
                    Un Homme{" "}
                  </div>
                </div>

                <div className={styles.wrappericonImg}>
                  <img src={Woman} className={styles.assets}></img>
                  <div
                    className={"btn" + (gender === "femme" ? " active " : "")}
                    onClick={() => {
                      setGender("femme");
                    }}
                  >
                    Une Femme
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.input}>
              <label>Height(cm)</label>
              <input
                type="number"
                id="number"
                name="height"
                required
                {...register("height", {
                  required: true,
                  max: 250,
                })}
                onChange={handleChange}
              />

              {errors.height?.type === "required" && (
                <span className={styles.error}>La taille est requis</span>
              )}
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.input}>
              <label>Weight(kg)</label>
              <input
                type="number"
                id="number"
                name="weight"
                required
                {...register("weight", {
                  required: true,
                  min: 30,
                  max: 300,
                })}
                onChange={handleChange}
              />
              {errors.weight?.type === "required" && (
                <span className={styles.error}>Le poids est requis</span>
              )}
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.input}>
              <label>Age</label>
              <input
                type="number"
                id="number"
                name="age"
                placeholder="min : 15ans"
                required
                {...register("age", {
                  required: true,
                  min: 15,
                  max: 70,
                })}
                onChange={handleChange}
              />
              {errors.age?.type === "required" && (
                <span className={styles.error}>L'age est requis</span>
              )}
            </div>
          </div>
        </div>

        <div className={styles.wrapperActivity}>
          <div className={styles.boxActif}>
            <h2>Votre activité</h2>

            <div className={styles.itemsActif}>
              <div className={styles.itemsActivity}>
                <div
                  className={"btn" + (activity === "1" ? " active-btn " : "")}
                  onClick={() => {
                    setActivity("1");
                  }}
                >
                  {" "}
                  Peu actif
                </div>
                <p>
                  Assis la plupart du temps{" "}
                  <span>(par ex : travail de bureau)</span>
                </p>
              </div>

              <div className={styles.itemsActivity}>
                <div
                  className={"btn" + (activity === "2" ? " active-btn " : "")}
                  onClick={() => {
                    setActivity("2");
                  }}
                >
                  Moyennement actif
                </div>
                <p>
                  Debout la plupart du temps{" "}
                  <span>(par ex : professeur, caissier)</span>
                </p>
              </div>

              <div className={styles.itemsActivity}>
                <div
                  className={"btn" + (activity === "3" ? " active-btn " : "")}
                  onClick={() => {
                    setActivity("3");
                  }}
                >
                  Actif
                </div>
                <p>
                  Marche la plupart du temps{" "}
                  <span>(par ex : serveur, vendeur)</span>
                </p>
              </div>

              <div className={styles.itemsActivity}>
                <div
                  className={"btn" + (activity === "4" ? " active-btn " : "")}
                  onClick={() => {
                    setActivity("4");
                  }}
                >
                  Très actif
                </div>
                <p>
                  Activité très physique <span>(par ex : ouvrier)</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.button}>
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </div>
  );
}

export default Entry;
