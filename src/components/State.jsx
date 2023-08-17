import React from "react"

export default function State() {
  let [result, setResult] = React.useState("Yes")
  function handleClick() {
    setResult("No")
  }
  return (
    <div className='block bg-purple-800 h-screen w-screen text-white'>
      <h1 className="text-3xl m-10">Is State Important to know</h1>
      <div onClick={handleClick}>
        <h1 className="bg-blue-500 text-2xl rounded-full w-fit text-center p-4">{result}</h1>
      </div>
    </div>
  )
}