import React from 'react';
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { createRestaurant } from "../../../api/libraries/apiLibraries";
import "../Dashboard/Style/RegisterRestaurant.css"

function AddNewRestaurant() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      function onSubmit(data) {
        console.log(data)
    createRestaurant(data)
      .then((result) => {
        console.log("Success:", result);
        swal({
          text: "Restoranas pridėtas",
          icon: "success",
          button: "Puiku",
          timer: 2000,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        swal({
          text: "Toks restoranas jau egzistuoja",
          icon: "error",
          button: "Gerai",
          timer: 5000,
        });
      });
  }
  return (
    <div className="AddNewRestaurant-container">
    <div className="AddNewRestaurant-body">
        <h3>Pridėti naują restorną</h3>
      <form className="RegisterNewRestaurant-form" onSubmit={handleSubmit(onSubmit)}>
      <label for="name">Restorano pavadinimas*</label>
        <input
          type="text"
          id="name"
          placeholder="Restorano pavadinimas"
          {...register("name", {
            required: "Laukelis privalomas",
            maxLength: {
              value: 25,
              message: "Daugiausia simbolių galima įvesti 25",
            },
            minLength: {
              value: 2,
              message: "Mažiausia simbolių galima įvesti 2",
            },
            pattern: {
              value: "[A-Za-ząčęėįšųūžĄČĘĖĮŠŲŪŽ0-9]+-",
              message: "Negali būti specialų simbolių",
            },
          })}
        />
        <span className="error">{errors.name?.message}</span>
        <label for="email">Restorano elektroninis paštas*</label>
        <input
          type="email"
          id="email"
          placeholder="Elektroninis paštas"
          {...register("email", {
            required: "Laukelis privalomas",
            maxLength: {
              value: 50,
              message: "Daugiausia simbolių galima įvesti 50",
            },
            pattern: /^\S+@\S+$/i
            // validate: {
            //   checkEmail: async (value) => {
            //     let pass = await getUserEmail(value);
            //     console.log(pass, !pass);
            //     return !pass;
            //   },
            // },
          })}
        />
        <span className="error">{errors.email?.message}</span>
        <span className="error">
          {errors.email?.type === "checkEmail" &&
            "El. paštas jau naudojamas."}
        </span>
         <label for="address">Adresas*</label>
         <input
          type="text"
          id="address"
          placeholder="Restorano adresas"
          {...register("address", {
            required: "Laukelis privalomas",
            maxLength: {
              value: 25,
              message: "Daugiausia simbolių galima įvesti 25",
            },
            minLength: {
              value: 2,
              message: "Mažiausia simbolių galima įvesti 2",
            },
            pattern:"[A-Za-ząčęėįšųūžĄČĘĖĮŠŲŪŽ0-9]+-",
          })}
        />
        <span className="error">{errors.address?.message}</span>
        <label for="city">Miestas*</label>
        <input
          type="text"
          id="city"
          placeholder="Mietas"
          {...register("city", {
            required: "Laukelis privalomas",
            maxLength: {
              value: 25,
              message: "Daugiausia simbolių galima įvesti 25",
            },
            minLength: {
              value: 2,
              message: "Mažiausia simbolių galima įvesti 2",
            },
            pattern: {
              value: /^[A-Za-z0-9_-]*$/i,
              message: "Negali būti specialų simbolių",
            },
          })}
        />
        <span className="error">{errors.city?.message}</span>
        <label for="number">Restorano telefono numeris*</label>
         <input
          type="number"
          id="phoneNumber"
          placeholder="Tel nr"
          {...register("phoneNumber", {
            required: "Laukelis privalomas",
            maxLength: {
              value: 25,
              message: "Daugiausia simbolių galima įvesti 25",
            },
            minLength: {
              value: 2,
              message: "Mažiausia simbolių galima įvesti 2",
            },
            pattern: {
              value: /^[0-9-+]*$/i,
              message: "Tik skaičiai",
            },
          })}
        />
        <span className="error">{errors.number?.message}</span>
        <label for="about">Apie restoraną</label>
        <textarea
          id="about"
          placeholder="Apie restoraną"
          {...register("about", {
            maxLength: {
              value: 200,
              message: "Daugiausia simbolių galima įvesti 200",
            },
            minLength: {
              value: 2,
              message: "Mažiausia simbolių galima įvesti 2",
            },
          })}
        />
        <span className="error">{errors.about?.message}</span>
        <button className="RegisterUser-form-btn" type="submit">
          Registracija
        </button>
        <button className="RegisterUser-form-btn" type="reset">
          Anuliuoti
        </button>
      </form>
    </div>
  </div>
  )
}

export default AddNewRestaurant


