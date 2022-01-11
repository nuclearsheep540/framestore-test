export const format_date = (string) => {
    // Return a more human-readable, prettier format of the date format from an API
    return new Date(string).toLocaleString('en', {day: "numeric", weekday: "short",  month: "short", year: "numeric"})
    // return new Date(string)
}

export const aggregate_api_data = (twitter, youtube) => {
    // Consilodate data from two APIs, aggregating its data to a common format
    // returning a single dict of their data
    const aggregate = [...twitter, ...youtube]
    return aggregate.sort((a, b) => b.created - a.created)
}
