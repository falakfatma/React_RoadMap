export default function Contant({src,Name,Phone,Email}) {
  return (
    <div className='bg-pink-400 w-96 m-4 rounded p-4 '>
      <img src={src} className='h-80'></img>
      <div className='pt-2'>
        <h1>Name : {Name}</h1>
        <h1>Phone : {Phone}</h1>
        <h1>Email : {Email}</h1>
      </div>
    </div>
  )
} 