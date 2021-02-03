import React, {useEffect, useState} from 'react';
import { Header } from './components';
import categories from './fixtures/categories';
import logo from './logo.png'

export default function App() {
  const [category, setCategory] = useState('people');
  const [returnedData, setReturnedData] = useState([]);

  const getSwapiData = async(type) => {
    const res = await fetch(`https://swapi.dev/api/${type}/`);
    const data = await res.json();
    console.log(data.results);
    setReturnedData(data.results);
    
  }
  const sentenceCase = (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  }

  useEffect(()=>{
    getSwapiData(category)
  },[category])

  return (
    <>
      <Header>
        <Header.Image src={logo}/>
        <Header.Group>
          {
            categories.map((item, idx) => (              
              <Header.Link key={idx}  onClick={() => setCategory(item.toLowerCase())}>{sentenceCase(item)}</Header.Link>
            ))
          }
        </Header.Group>
      </Header>
      <div>
        {
          <>
            <p>{category.charAt(0).toUpperCase() + category.substr(1).toLowerCase()}</p>
            <div>
              {returnedData.map((item, idx) => (
                <p key={idx}>
                  {
                    item.name === '' ? item.title : item.name
                  }
                  </p>
              ))}
            </div>
          </>
        }
      </div>
    </>

  );
}