import './App.css'
// import Header from './header'
// import MainBody from './mainContent'
// import Footer from './footer'
// import Navbar from './components/Navbar'
// import Main from './components/Main'
import Contant from './components/Contant'

export default function App() {
  const firstName = 'maria'
  const lastName = 'omeano'

  return (
    <main className='flex flex-wrap'>
      {/* <Navbar />
      <Main /> */}
      {/* props in react */}
      <Contant src='https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg' Name='maria' Phone='7895467870645' Email='maria@gmail.com' />
      <Contant src='https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189_1280.jpg' Name='Parry' Phone='738434989788' Email='parry@gmail.com' />
      <Contant src='https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_1280.jpg' Name='Catty' Phone='6576734348' Email='catty@gmail.com' />
      <h1>helllo {firstName} {lastName}</h1>
    </main>
  )
}
