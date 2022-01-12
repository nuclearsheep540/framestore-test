// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const format_youtube_data = (youtube) => {
  // formats the response into a common object, to be aggregated with 
  // other api calls from the front end later
  return youtube.items.map(item => ({
        source: "youtube",
        content: item.snippet.description 
            ? item.snippet.description 
            : item.snippet.title,
        name: item.snippet.channelTitle,
        handle: item.snippet.channelId,
        created: Date.parse(item.snippet.publishedAt),
        post_id: item.id.videoId,
        image: item.snippet.thumbnails.default.url
        })
    )
}

export default async function handler(req, res) {
  const key = 'AIzaSyDNQyXH-lDgv_ySuuhnJKi1NrIGtLKQ-Zo'
  const url = `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=UCGkRPUvp4tZXyd4EZUdjrCw&part=snippet,id&maxResults=10&snippet=description`

  // make sure our API wont hang
  if (req.method === 'GET') {
    // fetch data from twitter api
    // await the response and return it
    const response = await fetch(url)

    if (response.status === 200) {
      // if successful
      const data = await response.json()
      const formatted = format_youtube_data(data)
      return res.status(200).json(formatted)
    }  else {
      return res.status(response.status).json("error, unable to reach google's API")
    }
  } 
  // exit if not GET
  return res.status(405).json({msg: "error, unsupported http method"})
}
