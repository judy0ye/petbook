import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeView from './components/HomeView/HomeView';
import Header from './components/Header/Header';
import { fetchPets } from './api-calls';
import Error from './components/Error/Error';
import PetDetails from './components/PetDetails/PetDetails';
import Loading from './components/Loading/Loading';

const App = () => {
  const [ allPets, setAllPets ] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  
  const addNewPet = (newPet) => {
    setAllPets([...allPets, newPet])
  }

  useEffect(() => {
    setLoading(true)
    fetchPets()
    .then(data => {
      setAllPets(data.pets)
      setLoading(false)
    })
    .catch(error => setError(`Request failed - ${error.message}`))
    setLoading(false)
  }, [])

  return (
    <div className="App">
      <Header />
      {loading && <Loading />}
      <Routes>
        <Route path="/" element={<HomeView addNewPet={addNewPet} allPets={allPets}/>}/>
        <Route path="/:id" element={<PetDetails allPets={allPets}/>}/>
      </Routes>
      {error && <Error error={error} />}
    </div>
  );
}

export default App;