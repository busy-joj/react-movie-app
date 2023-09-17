const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: "abd38fc8df60332ab7befa6b61fc7a71",
    originalImage: (imgPath) =>
        `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
