import axiosClient from "../apiRestaurants";
import swal from "sweetalert";

// GET method all restaurants
export async function getAllRestaurants() {
    const res = await axiosClient.get("/");
    return res;
  }

  // GET method restaurant by id
export async function getRestaurantById(id) {
    const res = await axiosClient.get(`/restaurant/${id}`);
    return res;
  }

// ADD new restaurant
export async function createRestaurant(data) {
    const res = await axiosClient
      .post(`/`, JSON.stringify(data))
      .then((result) => {
        swal({
          text: "Įrašas išsaugotas!",
          button: "Gerai",
          icon: "success",
          timer: 1500,
        });
      })
      .catch((error) => {
        swal({
          text: "Klaida!",
          icon: "error",
          button: "Gerai",
          timer: 1500,
        });
      });
    return res;
  }

  // UPDATE restaurant by id
  export async function updateRestaurantById(id, data) {
    const res = await axiosClient.patch(`/${id}/updateRestaurant`, JSON.stringify(data))
      .then((result) => {
        console.log("Success:", result);
        swal({
          text: "Atnaujinta!",
          icon: "success",
          button: "Gerai",
          timer: 2000,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        swal({
          text: "Klaida!",
          icon: "error",
          button: "Gerai",
          timer: 2000,
        });
      });
  
    return res;
  }

  //UPDATE meniu
  export async function findMeniuAndUpdate(data, id, subId) {
    const res = await axiosClient.patch(`/${id}/updateMeniu/${subId}`, JSON.stringify(data))
      .then((result) => {
        console.log("Success:", result);
        swal({
          text: "Atnaujinta!",
          icon: "success",
          button: "Gerai",
          timer: 2000,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        swal({
          text: "Klaida!",
          icon: "error",
          button: "Gerai",
          timer: 2000,
        });
      });
  
    return res;
  }


  // Delete Restaurant
export async function deleteRestaurant(id) {
    const res = await axiosClient.patch(`/${id}/deleteRestaurant`)
      return res;
  }