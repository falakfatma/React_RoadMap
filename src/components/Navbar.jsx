export default function Navbar() {
  return (
    <nav className='bg-dark d-flex justify-content-between p-4 '>
      <div className='d-flex'>
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp" width={40}>
        </img>
        <h2 className="text-info">
          ReactFacts
        </h2>
      </div>
      <h4 className='text-light'>REACT COURSE - PROJECT 1</h4>
    </nav>
  )
}