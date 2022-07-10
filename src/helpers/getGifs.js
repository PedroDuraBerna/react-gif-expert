// La función GetGifs mejor fuera del componente (incluso en otro archivo)
export const GetGifs = async (category) => {

    const startUrl = 'api.giphy.com/v1/gifs/search';
    const apiKey = 'pDPO8mqRduqX1jtJDbYngXEI9QBKfNUC';
    const limit = 20;
    const endUrl = `https://${startUrl}?api_key=${apiKey}&q=${category}&limit=${limit}`;

    // Petición http
    const resp = await fetch(endUrl);
    const { data } = await resp.json();

    // Nos quedamos con la información que nos interesa de la respuesta
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized.url
    }));

    return gifs;

}