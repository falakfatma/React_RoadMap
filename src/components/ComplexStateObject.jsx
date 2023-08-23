import React from "react"

export default function Objects() {
  const [contact, setContact] = React.useState({
    name: "Alicia Doe",
    number: "+1 (849)890-5720",
    email: "itsmyfakename@gmail.com",
    profileImage: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png",
    starImageEmpty: "",
    starImageFilled: "",
    isFavourate: false
  })
  let setImage = contact.isFavourate ? contact.starImageFilled : contact.starImageEmpty;
  // if (contact.isFavourate) {
  //   setImage = contact.starImageFilled
  // } else {
  //   setImage = contact.starImageEmpty
  // }

  return (
    <article className="p-4 bg-white m-3 rounded">
      <img src={contact.profileImage} className="h-48" />
      <div>
        <img src={setImage} className="h-10" />
        <h1 className="text-3xl font-bold">{contact.name}</h1>
        <h2 className="text-gray-600">{contact.number}</h2>
        <h2 className="text-gray-600">{contact.email}</h2>
      </div>
    </article>
  )
}