# Framestore Engineering test
## Foreword
This application is using exposed API keys - this is intentional purely for the purposes of this exercise and your convenience.
I am aware of obsfucating or using a secret manager in a real production environment. I didn't want to spend more time than necessary for the exercise.

GCP allows 100 requests per day to the endpoint I use for retrieving video data on a channel - if you require another key, I have a secondary account I can generate a key from - let me know if you'd like another, alternatively feel free to use your own GCP API key locally and update the `key` variable in `pages/api/youtube.js @function handler()`

_hint: if you're getting a 403 from my app's endpoint it means the GCP API quota has been exceeded - I manage this in the return of the request so you can check locally_
<hr>
<br>

# Introduction
This is a simple application that aggregates social media feed data into a single representation, re-structuring data into a common model, and using a single re-usable React component to render the data client-side.

I've decided to build this app with Next.js framework to run my node server and dev environment - I've never used Next.js and wanted to use this as a learning opportunity. It's worked out well, saving me having to personally set up webpack and has features such as hot-reloading out-of-the-box. The API routing is also quite intuitive and required minimal setup.

I'm using React Hooks to build my front-end components, and using Bulma.CSS framework for styling - I believe CSS frameworks are robust and save a lot of time.

Twitter API and Google GCP API have been used to retreive respective data on Twitter and YouTube - a first for me with these two API's, they were very easy to use (albiet google having tight limits on quotas).

Other than Hooks' framework and Bulma, everything else is every-day JavaScript. I couldn't justify needing any more frameworks within this challenge, as I was able to achieve what I wanted with the standard library.

## Thoughts
Given more time there would be a lot more I could improve upon. I would want to build a Python backend, and create a proper MVC design so that I can handle the re-structuring of the API response data behind a controller - even more so, modelling the data myself with Classes, so I can create a social-feed object with defined properties, I could then have my own backend which writes and caches this new data and could reduce the need to query the external APIs when nessesary.

I would also consider using TypeScript to create interfaces to ensure the data being handled in the front-end is as expected.

Also, as mentioned, I would have tried to implement a secret manager. I would have considered `dotenv` for this project, but that would have required you to generate your own Twitter and GCP API keys and add them to the codebase (I wanted to make this as convenient as possible)

# Running the app
* First of all be sure to clone this git repository
* navigate from the `framestore-test` to the `framestore-feed` directory, if you haven't already.
* Run `npm i` to install this applications packages
* To start a dev server, run `npm run dev`

This server runs locally on port `3000`

If everything worked you should see:
![framestore](https://user-images.githubusercontent.com/37055772/149102767-1405c70b-cf27-4603-8901-6eefa07b5264.PNG)
