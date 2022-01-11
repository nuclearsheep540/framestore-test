// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const key = 'AIzaSyAxwgMxAMeSubiJ8kzPwc0zX12tgu2iwjU'
  const url = `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=UCGkRPUvp4tZXyd4EZUdjrCw&part=snippet,id&maxResults=10&snippet=description`

  // make sure our API wont hang
  if (req.method === 'GET') {
    // fetch data from twitter api
    const response = await fetch(url)
  
      // await the response and return it
      const data = await response.json()
      console.log(data)
      return res.status(200).json(data)
  } 
  // exit if not GET
  return res.status(405).json({msg: "error, unsupported http method"})
}
