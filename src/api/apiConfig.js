const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'ee4799ab48a57096d16335367f2b4fa2',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;