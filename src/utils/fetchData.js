

export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '86735e3d84msha27f172f618170fp1909f2jsn1b16b6119fa3',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '86735e3d84msha27f172f618170fp1909f2jsn1b16b6119fa3',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json();

    return data;
}
