import React, { useState, useEffect } from 'react';
import MediaObject from '../components/MediaObject';
import { format_date, aggregate_api_data} from '../lib/helpers';

export default function Home() {
  const [apiData, setApiData] = useState([])

  useEffect(async () => {
    // fetch data, check its there, else empty arr
    const twitter_req = await fetch('http://localhost:3000/api/twitter')
    const twitter_data = await twitter_req.status === 200 ? await twitter_req.json() : []
    
    const yt_req = await fetch('http://localhost:3000/api/youtube')
    const yt_data = await yt_req.status === 200 ? await yt_req.json() : []

    // aggregate data so its easy for us to map over
    const result = aggregate_api_data(twitter_data, yt_data)
    setApiData(result)
  }, [])

  return (
    <div className='column'>
      <h1 className='title'>Framestore Social Feed</h1>
      <div>
        {apiData && apiData.map((data, i) => (
            <MediaObject
              key={i}
              source={data.source}
              content={data.content}
              name={data.name}
              handle={data.handle}
              created={format_date(data.created)}
              post_id={data.post_id}
              img={data.image}
            />
          ))
        }
      </div>
    </div>
  )
}
