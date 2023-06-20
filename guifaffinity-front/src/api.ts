export const api = {
    getGifs: async () => {
        const response = await fetch("http://localhost:3001/api/gifs");
        const res = await response.json();
        return res;
    }
}