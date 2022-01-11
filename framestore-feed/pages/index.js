import React, { useState, useEffect } from 'react';
import MediaObject from '../components/MediaObject';
import { format_date, aggregate_api_data} from '../lib/helpers';

export default function Home() {
  const [apiData, setApiData] = useState([])

  useEffect(async () => {
    // get API data on page load
    const twitter_req = await fetch('http://localhost:3000/api/twitter')
    const twitter_data = await twitter_req.json()
    
    // const yt_req = await fetch('http://localhost:3000/api/twitter')
    // const yt_data = await req.json()

    // const data = {twitter: twitter_data, youtube: yt_data}

    // aggregate_api_data(twitter_data, )
    console.log(twitter_data)
    setApiData(twitter_data)
  }, [])

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
