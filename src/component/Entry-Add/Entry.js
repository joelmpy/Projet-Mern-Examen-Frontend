import React from "react";
import styles from "../Entry-Add/Entry.module.css";
import { useForm } from "react-hook-form";
import {useState, useEffect } from 'react'
import {useNavigate} from 'react-dom'


function Entry() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [activity, setActivity] = useState("");
  const [gender, setGender] = useState('')
  const [user, setUsers] = useState([])
  const navigate = useNavigate()

  const onSubmit = (data, event) => {

    };
  



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
                  required
                  {...register('date', {
                    required: true,
                  })}
                />
              {errors.date?.type === 'required' && (
                <span className={styles.error}>La date est requise</span>
              )}

            </div>
          </div>

      
          <div className={styles.content}>
            <div className={styles.input}>
              <label>Gender</label>
              <input
                  type="text"
                  id="number"
                  required
                  {...register('gender', {
                    required: true,
                  })}
                />
              {errors.height?.type === 'required' && (
              <span className={styles.error}>Le genre est requis</span>
              )}
            </div>
          </div>


          <div className={styles.content}>
            <div className={styles.input}>
              <label>Height(cm)</label>
              <input
                  type="number"
                  id="number"
                  required
                  {...register('height', {
                    required: true, max: 250
                  })}
                />
           
              {errors.height?.type === 'required' && (
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
                  required
                  {...register('weight', {
                    required: true, min: 30,
                    max: 300,
                  })}
                />
              {errors.weight?.type === 'required' && (
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
                  required
                  {...register('age', {
                    required: true,  min: 15, max: 70 
                  })}
                />
           
              {errors.age?.type === 'required' && (
              <span className={styles.error}>L'age est requis</span>
              )}
              <input type="number" />
            </div>
          </div>


          <div className={styles.content}>
            <div className={styles.input}>
              <label>Activtié</label>
              <input
                  type="number"
                  id="number"
                  required
                  {...register('activity', {
                    required: true,
                  })}
                />
              {errors.activity?.type === 'required' && (
              <span className={styles.error}>L'Activtié est requis</span>
              )}
            </div>
          </div>

        </div>
        <div className={styles.button}>
          <button type="submit">Envoyer</button>
        </div>
      </form>
      <h1>Entry</h1>
    </div>
  );
}

export default Entry;
