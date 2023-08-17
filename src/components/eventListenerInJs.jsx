export default function data() {
  const MouseHover = () => {
    console.log(`mouse enter`)
  }
  return (
    <div >
      <img
        src="https://cdn.pixabay.com/photo/2023/05/15/08/52/flower-7994489_1280.jpg"
        className="h-40 "
      >
      </img>
      <button onMouseEnter={MouseHover} className='p-2 hover:bg-sky-700 text-2xl hover:text-blue-200 border-2 m-4 border-slate-900 '>
        Click Me
      </button>
    </div>
  )
}