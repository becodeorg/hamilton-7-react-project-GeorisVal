import axios from 'axios';
async function getPlat() {
    const query = await axios.get('https://api.rawg.io/api/platforms?key=8f0f7afd66254afbbd55e97e8ba32642');
    const data = await query.data.results;
    return data;
}
async function getGenres() {
    const query = await axios.get('https://api.rawg.io/api/genres?key=8f0f7afd66254afbbd55e97e8ba32642');
    const data = await query.data.results;
    return data;
}
async function getGames() {
    const query = await axios.get('https://api.rawg.io/api/games?key=8f0f7afd66254afbbd55e97e8ba32642');
    const data = await query.data.results;
    return data;
}
async function getTags() {
    const query = await axios.get('https://api.rawg.io/api/tags?key=8f0f7afd66254afbbd55e97e8ba32642');
    const data = await query.data.results;
    return data;
}

const platforms = await getPlat();
const genres = await getGenres();
const games = await getGames();
const tags = await getTags();



export default function Header() {
    return (
        <div className="flex gap-10">
            <ul id='platforms'>
                {platforms.map((platform:any) => 
                <div key={platform.id} className={`w-64 h-20 bg-cover flex items-center justify-center mb-5 rounded-md hover:text-red-800 cursor-pointer`} style={{backgroundImage: `url(${platform.image_background})`}}>
                    <li style={{WebkitTextStroke: "1px black", fontWeight: "700"}}>{platform.name} <span>({platform.games_count} games)</span></li>
                </div>)}
            </ul>
            <ul id='genres'>
                {genres.map((genre:any) => 
                <div key={genre.id} className={`w-64 h-20 bg-cover flex items-center justify-center mb-5 rounded-md hover:text-red-800 cursor-pointer`} style={{backgroundImage: `url(${genre.image_background})`}}>
                    <li style={{WebkitTextStroke: "1px black", fontWeight: "700"}}>{genre.name} <span>({genre.games_count} games)</span></li>
                </div>)}
            </ul>
            <ul id='tags'>
                {tags.map((tag:any) => 
                <div key={tag.id} className={`w-64 h-20 bg-cover flex items-center justify-center mb-5 rounded-md hover:text-red-800 cursor-pointer`} style={{backgroundImage: `url(${tag.image_background})`}}>
                    <li style={{WebkitTextStroke: "1px black", fontWeight: "700"}}>{tag.name} <span>({tag.games_count} games)</span></li>
                </div>)}
            </ul>
        </div>
    )
}