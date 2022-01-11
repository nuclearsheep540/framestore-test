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

  const format_date = (string) => {
    return new Date(Date.parse(string)).toLocaleString('en', {day: "numeric", weekday: "short",  month: "short", year: "numeric"})
  }

  return (
    <div className='column'>
      <h1 className='title'>Framestore Social Feed</h1>
      <div>
        {apiData.data && apiData.data.map((item, i) => (
            <MediaObject
              key={i}
              content={item.text}
              name={apiData.user}
              handle={apiData.handle}
              created={format_date(item.created_at)}
              post_id={item.id}
              img={apiData.image}
            />
          ))
        }
      </div>
    </div>
  )
}
