const format_date = (string) => {
    // Return a more human-readable, prettier format of the date format from an API
    return new Date(Date.parse(string)).toLocaleString('en', {day: "numeric", weekday: "short",  month: "short", year: "numeric"})
  }

const aggregate_api_data = (youtube) => {
    // Consilodate data from two APIs, aggregating its data to a common format
    // returning a single dict of their data

    // deconstruct data, so to map it to common keys across the app
    // const t_deconstruction = {
    //     content: twitter.map(item => {item.content}),
    //     name: twitter.includes.users[0].name,
    //     handle: twitter.includes.users[0].username,
    //     created: twitter.map(item => {item.created_at}),
    //     post_id: twitter.map(item => item.id),
    //     image: twitter.includes.users[0].profile_image_url,
    //     }

    // twitter.items.map

    // const y_deconstruction = {
        // content: youtube.map(item => item.items.snippet.description),
        // name: youtube.map(item => item.items.snippet.channelTitle),
        // handle: youtube.map(item => item.items.snippet.channelTitle),
        // created: youtube.map(item => item.items.snippet.publishedAt),
        // post_id: youtube.map(item => item.items.id.videoId),
        // image: youtube.map(item => item.items.snippet.thumbnails.default)
    // }

    let yt = []
    
    youtube.items.map(item => (
        yt.push({
            content: item.snippet.description 
                ? item.snippet.description 
                : item.snippet.title,
            name: item.snippet.channelTitle,
            handle: item.snippet.channelTitle,
            created: item.snippet.publishedAt,
            post_id: item.id.videoId,
            image: item.snippet.thumbnails.default
            })
        )
    )


    return yt


}

export {format_date, aggregate_api_data}