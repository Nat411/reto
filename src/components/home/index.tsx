import Cards from '../cards'
import Filter from '../fiter'
import Header from '../header'
import './index.css'


function Home() {
  return (
      <div className='App'>
        <Header/>
        <Filter />
        <Cards />
      </div>



  )
}

export default Home
