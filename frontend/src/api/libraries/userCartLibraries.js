import axiosClient from "../apiRestaurants";
import swal from "sweetalert";

// GET all users
export async function getAllUsers() {
    const res = await axiosClient.get("/users");
    return res;
  }

// GET user by id
export async function getUserById(id) {
    id = "629f6b8422969702b8cb9d2b"
    const res = await axiosClient.get(`/user/${id}`);
    return res;
  }

// ADD new user
export async function createUser(data) {
    const res = await axiosClient
      .post(`/users`, JSON.stringify(data))
      .then((result) => {
        swal({
          text: "Vartotojas išsaugotas!",
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

  // Delete user cart item
  export async function deleteUserCartItem(id, subId) {
    
    const response = await axiosClient
    .delete(`/${id}/deleteCartItem/${subId}`) // patch
    .then((result) => {
      console.log("Success:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// create user cart item
export async function createUserCartItem(data, id) {
    id = "629f6b8422969702b8cb9d2b";
    console.log(id);
    console.log(data);
    const res = await axiosClient
      .post(`/${id}/cartItem/`, JSON.stringify(data))  //patch
      .then((result) => {
        console.log("Success:", result);
        swal({
          text: "Pridėta į krepšelį",
          icon: "success",
          button: "Puiku",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        swal(
          "Nepavyko",
          "Duomenys blogai suvesti, galimai rašybos klaida!",
          "error"
        );
      });
    return res;
  }

// UPDATE user cart item
export async function findUserCartItemAndUpdate(data, id, subId) {
    const res = await axiosClient.post(
      `/${id}/cartItem/${subId}`,
      JSON.stringify(data)
    );
    return res;
  }

  //update all cart items status

  export async function changeCartItemStatus(data, id, subId) {
    const res = await axiosClient.patch(
      `/${id}/cartItem/${subId}`,
      JSON.stringify(data)
    );
    return res;
  }