import { useState } from 'react';
import { data } from './data';
import './App.css';
import Clothes from './Clothes';
import Buttons from './Buttons';

function App() {
  const [clothes, setClothes] = useState(data);

  const chosenClothes = (searchKey) => {
    const newClothes = data.filter(element => element.searchTerm === searchKey);
    setClothes(newClothes);
  }

  return (
    <div>
      <div className='cont'>
        <h2 className='back'>Free Standart Shipping</h2>
      </div>
      <Buttons filteredClothes={chosenClothes}/>
      <Clothes itemsForSale={clothes}/>
    </div>

  )
}

export default App
