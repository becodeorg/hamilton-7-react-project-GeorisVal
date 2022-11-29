import axios from 'axios';
async function getCat() {
    const query = await axios.get(`https://api.rawg.io/api/games?platforms=${id}&key=952d287c927344c9bf73dc7afd0ab555&page_size=21`);
    const data = await query.data.results;
    return data;
}
const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
const result = await getCat();
console.log(result)

export default function Platform():any {
    return(
    <div className="grid grid-cols-3 gap-10 m-auto">
        {result.map((result:any) => 
                <a href={`/game/${result.id}`} key={result.id} className="text-white">
                <div className={`w-64 h-20 bg-cover flex items-center justify-center mb-5 rounded-md hover:text-red-800 cursor-pointer`} style={{backgroundImage: `url(${result.short_screenshots[0].image})`}}>
                    <li style={{WebkitTextStroke: "1px black", fontWeight: "700"}}>{result.name}</li>
                </div>
                </a>)}
    </div>
    )
}