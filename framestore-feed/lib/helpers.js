export const format_date = (string) => {
    // Return a more human-readable, prettier format of the date format from an API
    return new Date(string).toLocaleString('en', {day: "numeric", weekday: "short",  month: "short", year: "numeric"})
}

export const aggregate_api_data = (twitter, youtube) => {
    // Consilodate data from two APIs, aggregating its data to a common format
    // returning an single dict of their data, ordered
    const aggregate = [...twitter, ...youtube]
    return aggregate.sort((a, b) => b.created - a.created)
}
