import React from 'react'

function RestaurantListCard({
    name,
    address,
    about,
    meniu,
    phoneNumber,
    city,
    id,
    email
}) {
  return (
    <tr className="ReadOnlyRow-row">
      <td>{name}</td>
      <td>{address}</td>
      <td>{city}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>{about}</td>
      <td className="ReadOnlyRow-button">
        {/* <button
          type="button"
          onClick={(event) => handleEditClick(event, subID, type)}
        >
          Keisti
        </button>
        <button type="button" onClick={() =>
                swal({
                  title: "Ar tikrai norite ištrinti?",
                  icon: "warning",
                  buttons: ["Atšaukti", "Gerai"],
                }).then((isConfirm) => {
                  if (isConfirm) {
                      deleteItem(userID, subID, type)
                        .then(() => {
                          swal({
                            text: "Ištrinta!",
                            icon: "success",
                            button: "Gerai",
                            timer: 2000,
                          });
                        })
                        .catch((error) => {
                          swal({
                            text: "Klaida!",
                            icon: "error",
                            button: "Gerai",
                            timer: 2000,
                          });
                        });
                  }
                })
              }>
          Ištrinti
        </button> */}
      </td>
    </tr>
  )
}

export default RestaurantListCard