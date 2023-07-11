const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '1a1c26f87c3562e640ddb8cdb3770552',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;