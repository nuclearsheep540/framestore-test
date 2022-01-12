// media component for social feed

export default function MediaObject({source, handle, name, content, created, post_id, img}) {
    const twitter_media_ext = `https://twitter.com/${handle}/status/${post_id}`
    const twitter_profile = `https://twitter.com/${handle}`
    const youtube_media_ext = `https://www.youtube.com/watch?v=${post_id}`
    const youtube_profile = `https://www.youtube.com/channel/${handle}`

    return (
        <article className="media">
            <figure className="media-left">
                <p className="image is-64x64">
                <img src={img} />
                </p>
            </figure>
            {/* render this if the content is from twitter */}
            {source === "twitter" &&
                <div className="media-content">
                    <div className="content">
                    <p>
                        <strong><a target="_blank" href={twitter_media_ext}>{name}</a></strong> 
                        <small>@{handle}</small> · <small>{created} via <a target="_blank" href={twitter_profile}>{source}</a></small>
                        <br />
                        {content}
                    </p>
                    </div>
                </div>
            }
            {/* render this if the content is from youtube */}
            {source === "youtube" &&
                <div className="media-content">
                    <div className="content">
                    <p>
                        <strong><a target="_blank" href={youtube_media_ext}>{name}</a></strong> 
                        <small>@{name}</small> · <small>{created} via <a target="_blank" href={youtube_profile}>{source}</a></small>
                        <br />
                        {content}
                    </p>
                    </div>
                </div>
            }
        </article>
    )
}