const format_date = (string) => {
    // Return a more human-readable, prettier format of the date format from an API
    return new Date(Date.parse(string)).toLocaleString('en', {day: "numeric", weekday: "short",  month: "short", year: "numeric"})
  }

const aggregate_api_data = (twitter, youtube) => {
    // Consilodate data from two APIs, aggregating its data to a common format
    // returning a single dict of their data


}

export {format_date, aggregate_api_data}