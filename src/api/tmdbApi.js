import axiosClinet from "./axiosClient";

export const category = {
    movie: "movie",
    tv: "tv",
};

export const movieType = {
    upcoming: "upcoming",
    popular: "popular",
    top_rated: "top_rated",
};
export const tvType = {
    popular: "popular",
    top_rated: "top_rated",
    on_the_air: "on_the_air",
};
const tmdbApi = {
    getMoviesList: (type, params) => {
        const url = "movie/" + movieType[type];
        return axiosClinet.get(url, params);
    },
    getTvList: (type, params) => {
        const url = "tv/" + tvType[type];
        return axiosClinet.get(url, params);
    },
    getVideos: (cata, id) => {
        const url = category[cata] + "/" + id + "/videos";
        return axiosClinet.get(url, { params: {} });
    },
    search: (cata, params) => {
        const url = "search/" + category[cata];
        return axiosClinet.get(url, params);
    },
    detail: (cata, id, params) => {
        const url = category[cata] + "/" + id;
        return axiosClinet.get(url, params);
    },
    credits: (cata, id) => {
        const url = category[cata] + "/" + id + "/credits";
        return axiosClinet.get(url, { params: {} });
    },
    similar: (cata, id) => {
        const url = category[cata] + "/" + id + "/similar";
        return axiosClinet.get(url, { params: {} });
    },
};

export default tmdbApi;
