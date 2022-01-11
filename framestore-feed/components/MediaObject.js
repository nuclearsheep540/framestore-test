// media component for social feed
import React, { useState, useEffect } from 'react';


export default function MediaObject({handle, name, content}) {
    return (
        <article class="media">
        <figure class="media-left">
            <p class="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
            <p>
                <strong>{name}</strong> <small>@{handle}</small> <small>31m</small>
                <br />
                {content}
            </p>
            </div>
            <nav class="level is-mobile">
            <div class="level-left">
                <a class="level-item">
                <span class="icon is-small"><i class="fas fa-reply"></i></span>
                </a>
                <a class="level-item">
                <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                </a>
                <a class="level-item">
                <span class="icon is-small"><i class="fas fa-heart"></i></span>
                </a>
            </div>
            </nav>
        </div>
        </article>
    )
}