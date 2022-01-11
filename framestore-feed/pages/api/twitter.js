// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const format_twitter_data = (twitter) => {
  // formats the response into a common object, to be aggregated with 
  // other api calls from the front end later
  return twitter.data.map(item => ({
        source: "twitter",
        content: item.text,
        name: twitter.includes.users[0].name,
        handle: twitter.includes.users[0].username,
        created: Date.parse(item.created_at),
        post_id: item.id,
        image: twitter.includes.users[0].profile_image_url,
        })
    )
}

export default async function handler(req, res) {
  const token = 'Bearer AAAAAAAAAAAAAAAAAAAAAE77XwEAAAAAknHORpglJbMQcHnRoFmTQ7xdr5E%3Di6hUdyJJgco9jLcRdbBmlzU073105CtQ5cuAjVlJZrYRzrwAHR'
  const url = 'https://api.twitter.com/2/users/33475281/tweets?expansions=author_id&user.fields=profile_image_url&tweet.fields=created_at'

  // make sure our API wont hang
  if (req.method === 'GET') {
    // fetch data from twitter api
    // await the response and return it
    const response = await fetch(url, {
      headers: {'Authorization': token}
      })
    
    if (response.status === 200) {
      // if successful
      const data = await response.json()
      const formatted = format_twitter_data(data)
      return res.status(200).json(formatted)
    } else {
      return res.status(response.status).json("error, unable to reach twitter's API")
    }
  } 
  // exit if not GET
  return res.status(405).json({msg: "error, unsupported http method"})
}
