export default function jokesCon(props) {
  // {/*Map*/}
  // let a = ["apple","boy","cat"]
  //   a.map((e)=>{
  //     console.log(e.charAt(0).toLocaleUpperCase() + e)
  //   })
  return (
    <div className='bg-white text-blue-400 p-4 m-4 text-lg rounded'>
      {/* <h1 style={{ display: props.SetUp ? "block" :"none"}} className='bg-green-300'>SETUP : {props.SetUp}</h1> */}
      <h1 className='bg-green-300'>SETUP : {props.SetUp}</h1>
      <p>{props.Punchline}</p>
    </div>
  )
}
// Distructive Props
// export default function jokesCon({SetUp,Punchline}) {
//   return (
//     <div className='bg-white text-blue-300 p-4 m-4 text-lg rounded'>
//       <h1>{SetUp}</h1>
//       <p>{Punchline}</p>
//     </div>
//   )
// }


