import React from "react"

export default function Objects() {
  const [contact, setContact] = React.useState({
    name: "Alicia Doe",
    number: "+1 (849)890-5720",
    email: "itsmyfakename@gmail.com",
    profileImage: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png",
    starImageEmpty: "",
    starImageFilled: "",
    isFavourate: true
  })

  let setImage = contact.isFavourate ? "https://img.freepik.com/premium-vector/star-icon-white-background_212417-976.jpg?w=2000" : "https://www.freeiconspng.com/thumbs/white-star-icon/white-star-icon-11.png";
  // +++++++If Else Also Write This ++++++++++ 

  // if (contact.isFavourate) {
  //   setImage = contact.starImageFilled
  // } else {
  //   setImage = contact.starImageEmpty
  // }

  function toggleImage() {
    setContact(
      preVal => {
        return {
          ...preVal,
          isFavourate: !preVal.isFavourate
        }
      })
  }

  console.log(contact.isFavourate)
  return (
    <article className="p-4 text-m bg-white m-3 rounded w-56 h-96">
      <img src={contact.profileImage} className="h-48" />
      <div>
        <img src={setImage} className="h-10" onClick={toggleImage} />
        <h1 className="text-3xl font-bold">{contact.name}</h1>
        <h2 className="text-gray-600 mb-2 mt-2">{contact.number}</h2>
        <h2 className="text-gray-600">{contact.email}</h2>
      </div>
    </article>
  )
}