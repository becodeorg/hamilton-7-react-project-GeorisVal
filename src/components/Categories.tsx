import axios from 'axios';
async function getPlat() {
    const query = await axios.get('https://api.rawg.io/api/platforms?key=952d287c927344c9bf73dc7afd0ab555');
    const data = await query.data.results;
    return data;
}
async function getGenres() {
    const query = await axios.get('https://api.rawg.io/api/genres?key=952d287c927344c9bf73dc7afd0ab555');
    const data = await query.data.results;
    return data;
}
async function getTags() {
    const query = await axios.get('https://api.rawg.io/api/tags?key=952d287c927344c9bf73dc7afd0ab555');
    const data = await query.data.results;
    return data;
}

const platforms = await getPlat();
console.log(platforms)
const genres = await getGenres();
const tags = await getTags();



export default function Categories() {
    return (
        <div className="flex gap-28 m-auto">
            <ul id='platforms'>
                <h2>Platform</h2>
                {platforms.map((platform:any) =>
                <a href={`platform/${platform.id}`} key={platform.slug} className="text-white">
                    <div className={`w-64 h-20 bg-cover flex items-center justify-center mb-5 rounded-md hover:text-red-800 cursor-pointer`} style={{backgroundImage: `url(${platform.image_background})`}}>
                        <li style={{WebkitTextStroke: "1px black", fontWeight: "700"}}>{platform.name} <span>({platform.games_count} games)</span></li>
                    </div>
                    </a>
                )}
            </ul>
            <ul id='genres'>
                <h2>Genre</h2>
                {genres.map((genre:any) => 
                <a href={`genre/${genre.slug}`} key={genre.slug} className="text-white">
                <div className={`w-64 h-20 bg-cover flex items-center justify-center mb-5 rounded-md hover:text-red-800 cursor-pointer`} style={{backgroundImage: `url(${genre.image_background})`}}>
                    <li style={{WebkitTextStroke: "1px black", fontWeight: "700"}}>{genre.name} <span>({genre.games_count} games)</span></li>
                </div>
                </a>)}
            </ul>
            <ul id='tags'>
                <h2>Tag</h2>
                {tags.map((tag:any) => 
                <a href={`tag/${tag.slug}`} key={tag.slug} className="text-white">
                <div  className={`w-64 h-20 bg-cover flex items-center justify-center mb-5 rounded-md hover:text-red-800 cursor-pointer`} style={{backgroundImage: `url(${tag.image_background})`}}>
                    <li style={{WebkitTextStroke: "1px black", fontWeight: "700"}}>{tag.name} <span>({tag.games_count} games)</span></li>
                </div>
                </a>)}
            </ul>
        </div>
    )
}