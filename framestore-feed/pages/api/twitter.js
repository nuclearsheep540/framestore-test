// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const token = 'Bearer AAAAAAAAAAAAAAAAAAAAAE77XwEAAAAAknHORpglJbMQcHnRoFmTQ7xdr5E%3Di6hUdyJJgco9jLcRdbBmlzU073105CtQ5cuAjVlJZrYRzrwAHR'
  const url = 'https://api.twitter.com/2/users/33475281/tweets?expansions=author_id&user.fields=profile_image_url&tweet.fields=created_at'

  // make sure our API wont hang
  if (req.method === 'GET') {
    // fetch data from twitter api
    const response = await fetch(url, {
      headers: {
        'Authorization': token,
        }
      })
  
      // await the response and return it
      const data = await response.json()

      return res.status(200).json(data)
  } 
  // exit if not GET
  return res.status(405).json({msg: "error, unsupported http method"})
}
