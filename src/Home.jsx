import { useState } from 'react';
import { data } from './data';
import Clothes from './Clothes';
import Buttons from './Buttons';

function Home() {
    const [clothes, setClothes] = useState(data);

    const choseClothes = (searchKey) => {
      const newClothes = data.filter(element => element.searchTerm === searchKey);
      setClothes(newClothes);
    }
  
    return (
      <div>
        <div className='cont'>
          <h2 className='back'>Free Standart Shipping</h2>
        </div>
        <Buttons filterClothes={choseClothes}/>
        <Clothes itemsForSale={clothes}/>
      </div>
    )
}

export default Home;