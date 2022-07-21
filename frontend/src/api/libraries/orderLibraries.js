import axiosClient from "../apiRestaurants";
import swal from "sweetalert";

// GET all orders
export async function getAllOrders() {
    const res = await axiosClient.get("/orders");
    return res;
  }

  // ADD new order
export async function createUserOrder(data) {
    const res = await axiosClient
      .post(`/orders`, JSON.stringify(data))
      .then((result) => {
        swal({
          text: "Užsakymas išsaugotas!",
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

  // UPDATE order status
export async function updateOrderStatusById(data, id) {
  const res = await axiosClient.post(  // patch
    `/${id}/updateOrderStatus`,
    JSON.stringify(data)
  );
  return res;
}