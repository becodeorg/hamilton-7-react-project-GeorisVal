import axios from 'axios';
async function getGenre() {
    const query = await axios.get(`https://api.rawg.io/api/games?genres=${id}&key=952d287c927344c9bf73dc7afd0ab555&page_size=21`);
    const data = await query.data.results;
    return data;
}
const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
const result = await getGenre();
console.log(result)

export default function Genre():any {
    return(
    <div className="grid grid-cols-3 gap-10 m-auto">
        {result.map((result:any) => 
            <div className="w-64">
                <a href={`/game/${result.id}`} className="text-white">
                    <div key={result.id} className={`w-64 h-20 bg-cover flex items-center justify-center mb-2 rounded-md hover:text-red-800 cursor-pointer`} style={{backgroundImage: `url(${result.short_screenshots[0].image})`}}>
                        <li style={{WebkitTextStroke: "1px black", fontWeight: "700"}} className="hover:top-10">{result.name}</li>
                    </div>
                </a>
            </div>)}
    </div>
    )
}