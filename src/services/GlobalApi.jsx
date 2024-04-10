import axios from "axios";

const urlx = "https://api.themoviedb.org/3";
const key = "6bdae086caa579c685545580ec1e7fc0";
const getTrending = axios.get(urlx + "/trending/all/day?api_key=" + key);
export default { getTrending };
