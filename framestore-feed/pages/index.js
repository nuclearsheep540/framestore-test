import React, { useState, useEffect } from 'react';
import MediaObject from '../components/MediaObject';

export default function Home() {
  const [name, setName] = useState("Matt")
  const [apiData, setApiData] = useState([])

  useEffect(async () => {
    // get API data on page load
    const req = await fetch('http://localhost:3000/api/twitter')
    const data = await req.json()
    
    console.log(data)
    setApiData(data)
  }, [])

  return (
    <body className='column'>
      <h1 className='title'>Framestore Social Feed</h1>
      {apiData.data.map(item => (
          <MediaObject content={item.text}/>
        )
        )}
    </body>
  )
}
