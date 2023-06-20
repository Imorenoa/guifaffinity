export const api = {
    getGifs: async (tag: string) => {
        const response = await fetch(`http://localhost:3001/api/gifs?tag=${tag}`);
        const res = await response.json();
        return res;
    }
}

