import React, {useEffect, useState} from 'react';
import { Feature, Header, Browse } from './components';
import categories from './fixtures/categories';
import logo from './logo.png';
import loop from './feature-2.mp4';

export default function App() {
  const [category, setCategory] = useState('people');
  const [returnedCategoryData, setReturnedCategoryData] = useState([]);
  const [returnedItemData, setReturnedItemData] = useState([]);
  const [showItem, setShowItem] = useState(false);

  // Return only name from GET request
  const getSwapiItemName = async(url) => {
    const res = await fetch(url);
    const data = await res.text();
    return JSON.parse(data)
  };

  const processData = (data) => {
    const dataSize = Object.keys(data).length;
    const arr = [];

    for (let i = 0; i < dataSize; i++) {
      let key = Object.keys(data)[i],
          val =  data[key],
          isArray = Array.isArray(val);
          arr.push({
            "key": key, 
            "val": val, 
            "isArray": isArray
          })        
    }

    return (
      <>
        {
          arr.map((item, idx) => (              
            
            <p key={idx}>
              {
                `${item.key}: ${item.val}`
              }
            </p>
          ))
        }
      </>
    )
  }

  // Get SWAPI data for full category
  const getSwapiCategoryData = async(type) => {
    const res = await fetch(`https://swapi.dev/api/${type}/`);
    const data = await res.json();
    setReturnedCategoryData(data.results);    
  }

  // Return full SWAPI item
  const getSwapiItemData = async(type, idx) => {
    const res = await fetch(`https://swapi.dev/api/${type}/${idx}`);
    const data = await res.json();
    setShowItem(true);
    setReturnedItemData(() => processData(data));
  }

  // Function to convert string to sentence case
  const sentenceCase = (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  }

  useEffect(()=>{
    getSwapiCategoryData(category)
  },[category])


  return (
    <>
      <Feature>
        <Header>
          <Header.Image src={logo}/>
          <Header.Group>
            {
              categories.map((item, idx) => (              
                <Header.Link active={category === item.toLowerCase() ? 'true' : 'false'} key={idx}  onClick={() => setCategory(item.toLowerCase())}>{sentenceCase(item)}</Header.Link>
              ))
            }
          </Header.Group>
        </Header>
        <Feature.Frame>
          <video muted autoPlay loop>
            <source src={loop}></source>
          </video>
        </Feature.Frame>
      </Feature>
      <Browse>
        <Browse.Title>{category.charAt(0).toUpperCase() + category.substr(1).toLowerCase()}</Browse.Title>
        <Browse.Carousel>
          {
            returnedCategoryData.map((item, idx) => (
              <Browse.Item 
                key={idx} 
                cat={category} 
                src={idx + 1} 
                onClick={
                  () => getSwapiItemData(category,idx + 1)
                }>
                <Browse.ItemText >
                  {
                    item.name === undefined ? '' : item.name
                  }
                </Browse.ItemText>
              </Browse.Item>                  
            ))
          }
        </Browse.Carousel>
      </Browse>
      {
        showItem ? (
          <> 
            <Browse.ItemMeta>{
              returnedItemData
            }
            <Browse.ItemMetaClose onClick={() => setShowItem(false)}>Close</Browse.ItemMetaClose>            
          
            </Browse.ItemMeta>
            </>
        ) : ''
      }
    </>

  );
}