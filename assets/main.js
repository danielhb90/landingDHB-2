//const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCxqHwVDcJE0txeekTliMHug&part=snippet%2Cid&order=date&maxResults=1';

const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCxqHwVDcJE0txeekTliMHug&part=snippet%2Cid&order=date&maxResults=10';

//const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    'x-rapidapi-key': '2a7cca5f5fmsha522a787b09454bp1539f4jsn848cbc338c6b'
  }
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}
// con los parentesis al inicio, se crea una funcion que se llama a si misma sola
(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.items.map(video => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(0,4).join('')}

    `;
    // aca se hace el llamado
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();