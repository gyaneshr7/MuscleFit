

export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3f87060d5cmsh8ddd035505871ecp112590jsn4918885b2b51',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3f87060d5cmsh8ddd035505871ecp112590jsn4918885b2b51',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json();

    return data;
}