// media component for social feed

export default function MediaObject({handle, name, content, created, post_id}) {
    return (
        <article className="media">
            <figure className="media-left">
                <p className="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
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
                <nav className="level is-mobile">
                <div className="level-left">
                    <a className="level-item">
                    <span className="icon is-small"><i className="fas fa-reply"></i></span>
                    </a>
                    <a className="level-item">
                    <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                    </a>
                    <a className="level-item">
                    <span className="icon is-small"><i className="fas fa-heart"></i></span>
                    </a>
                </div>
                </nav>
            </div>
        </article>
    )
}