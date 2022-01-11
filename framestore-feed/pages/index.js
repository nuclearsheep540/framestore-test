import React, { useState, useEffect } from 'react';
import MediaObject from '../components/MediaObject';
import { format_date, aggregate_api_data} from '../lib/helpers';

export default function Home() {
  const [apiData, setApiData] = useState([])

  useEffect(async () => {
    // get API data on page load
    const twitter_req = await fetch('http://localhost:3000/api/twitter')
    const twitter_data = await twitter_req.json()
    
    const yt_req = await fetch('http://localhost:3000/api/youtube')
    const yt_data = await yt_req.json()
    // console.log(twitter_data)
    // const data = {twitter: twitter_data, youtube: yt_data}
    setApiData(aggregate_api_data(twitter_data, yt_data))
  }, [])

  return (
    <div className='column'>
      {console.log(apiData)}
      <h1 className='title'>Framestore Social Feed</h1>
      <div>
        {apiData.data && apiData.data.map((item, i) => (
            <MediaObject
              key={i}
              content={item.content[i]}
              name={item.name}
              handle={item.handle}
              created={format_date(item.created_at[i])}
              post_id={item.id[i]}
              img={item.image}
            />
          ))
        }
      </div>
    </div>
  )
}
