// media component for social feed

export default function MediaObject({handle, name, content, created, post_id, img}) {
    return (
        <article className="media">
            <figure className="media-left">
                <p className="image is-64x64">
                <img src={img} />
                </p>
            </figure>
            <div className="media-content">
                <div className="content">
                <p>
                    <strong><a href={`https://twitter.com/${handle}/status/${post_id}`}>{name}</a></strong> <small>@{handle}</small> · <small>{created}</small>
                    <br />
                    {content}
                </p>
                </div>
            </div>
        </article>
    )
}