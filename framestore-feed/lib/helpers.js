const format_date = (string) => {
    // Return a more human-readable, prettier format of the date format from an API
    return new Date(string).toLocaleString('en', {day: "numeric", weekday: "short",  month: "short", year: "numeric"})
    // return new Date(string)
}

const aggregate_api_data = (twitter, youtube) => {
    // Consilodate data from two APIs, aggregating its data to a common format
    // returning a single dict of their data

    let aggregate = []
    twitter.data.map(item => (
        aggregate.push({
            source: "twitter",
            content: item.text,
            name: twitter.includes.users[0].name,
            handle: twitter.includes.users[0].username,
            created: Date.parse(item.created_at),
            post_id: item.id,
            image: twitter.includes.users[0].profile_image_url,
            })
        )
    )

    youtube.items.map(item => (
        aggregate.push({
            source: "youtube",
            content: item.snippet.description 
                ? item.snippet.description 
                : item.snippet.title,
            name: item.snippet.channelTitle,
            handle: item.snippet.channelTitle,
            created: Date.parse(item.snippet.publishedAt),
            post_id: item.id.videoId,
            image: item.snippet.thumbnails.default.url
            })
        )
    )
    // return an sorted list by when each content was created
    return aggregate.sort((a, b) => b.created - a.created)
}

export {format_date, aggregate_api_data}