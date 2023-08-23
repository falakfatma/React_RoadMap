import React from "react"

export default function Objects() {
  const [contact, setContact] = React.useState({
    name: "Alicia Doe",
    number: "+1 (849)890-5720",
    email: "itsmyfakename@gmail.com",
    profileImage: "",
    starImageEmpty: "",
    starImageFilled: "",
    isFavourate: true
  })

  let setImage = contact.isFavourate ? "" : "";
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