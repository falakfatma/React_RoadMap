import './App.css'
// import Header from './header'
// import MainBody from './mainContent'
// import Footer from './footer'
// import Navbar from './components/Navbar'
// import Main from './components/Main'
// import Contant from './components/Contant'
// import Joke from './components/joke'
// import JokeData from './components/jokeData'
// import EventListener from './components/eventListenerInJs'
import Date from './components/Date'

export default function App() {
  // let item = ['thing1', 'thing2']

  // let eachItem = item.map((e) => {
  //   console.log(e)
  //   return <p key={e} className='block'>{e}</p>
  // })

  // let addItem = () => {
  //   item.push('thing' + item.length)
  //   console.log(item)
  // }

  // const firstName = 'maria'
  // const lastName = 'omeano'
  // const fruits = [
  //   <h3>mango</h3>,
  //   <h3>apple</h3>,
  //   <h3>banana</h3>,
  //   <h3>pine-apple</h3>
  // ]
  // let JokeDataMap = JokeData.map((joke) => {
  //   return <Joke SetUp={joke.SetUp} Punchline={joke.Punchline} />
  // })
  return (
    <main className='flex flex-wrap bg-gray-100'>
      
      {/* <button onClick={addItem} className='p-2 hover:bg-sky-700 text-2xl hover:text-blue-200 border-2 m-4 border-slate-900 '>Add Item </button>
      {eachItem} */}
      <Date />
      {/* <EventListener /> */}
      {/* <h1>{JokeDataMap}</h1> */}
      {/* <JokeData />/ */}
      {/* <Navbar />
      <Main /> */}
      {/*  Challenge In Props*/}
      {/* <Joke SetUp='Did you hear about the mathematician who’s afraid of negative numbers?'
        Punchline='He’ll stop at nothing to avoid them.' />
      <Joke  />
      <Joke SetUp='Helvetica and Times New Roman walk into a bar.'
        Punchline='“Get out of here!” shouts the bartender. “We don’t serve your type.”' />
      <Joke SetUp='Yesterday I saw a guy spill all his Scrabble letters on the road.'
        Punchline='I asked him, “What’s the word on the street?”' />
      <Joke Punchline='A pair of cows were talking in the field. One says, “Have you heard about the mad        cow disease that’s going around?”
      “Yeah,” the other cow says. “Makes me glad I’m a penguin.”'/>
      <Joke SetUp={4542} Punchline={[true,'jkj',87]}></Joke> */}
      {/* props in react */}
      {/* <Contant src='https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg' Name='maria' Phone='7895467870645' Email='maria@gmail.com' />
      <Contant src='https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189_1280.jpg' Name='Parry' Phone='738434989788' Email='parry@gmail.com' />
      <Contant src='https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_1280.jpg' Name='Catty' Phone='6576734348' Email='catty@gmail.com' />
      <h1>helllo {firstName} {lastName}</h1> */}
    </main>
  )
}

