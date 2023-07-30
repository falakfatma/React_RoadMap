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
    <main className=' Container vh-100'>
      {/* <Navbar />
      <Main /> */}
      {/* props in react */}
      <Contant />
      <h1>helllo {firstName} {lastName}</h1>
    </main>
  )
}
