import axios from 'axios';
async function getPlat() {
    const query = await axios.get('https://api.rawg.io/api/platforms?key=952d287c927344c9bf73dc7afd0ab555');
    const data = await query.data.results;
    return data;
}

const base_url = "https://api.rawg.io/api/";
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
};
//Getting the date
const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
};
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
const popular_games = `games?key=952d287c927344c9bf73dc7afd0ab555&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=952d287c927344c9bf73dc7afd0ab555&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=952d287c927344c9bf73dc7afd0ab555&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

async function getPopular() {
    const query = await axios.get(`${base_url}${popular_games}`);
    const data = await query.data.results;
    return data;
}
async function getUpcoming() {
    const query = await axios.get(`${base_url}${upcoming_games}`);
    const data = await query.data.results;
    return data;
}
async function getNew() {
    const query = await axios.get(`${base_url}${new_games}`);
    const data = await query.data.results;
    return data;
}
const popular = await getPopular()
const upcoming = await getUpcoming()
const newGames = await getNew()

export default function Home() {

    return (
        <div className="grid grid-cols-3 gap-10 m-auto">
            <div>
                <h2>Popular Games</h2>
                {popular.map((popular: any) =>
                    <a href={`game/${popular.id}`} key={popular.slug} className="text-white">
                        <div className={`w-64 h-20 bg-cover flex items-center justify-center mb-5 rounded-md hover:text-red-800 cursor-pointer`} style={{ backgroundImage: `url(${popular.short_screenshots[0].image})` }}>
                            <li style={{ WebkitTextStroke: "1px black", fontWeight: "700" }}>{popular.name}</li>
                        </div>
                    </a>
                )}
            </div>
            <div>
                <h2>Upcoming Games</h2>
                {upcoming.map((upcoming: any) =>
                    <a href={`game/${upcoming.id}`} key={upcoming.slug} className="text-white hover:text-red-100">
                        <div className={`w-64 h-20 bg-black absolute opacity-0 hover:opacity-50 hover:text-red-800 z-0`}></div>
                        <div className={`w-64 h-20 bg-cover flex items-center justify-center mb-5 rounded-md hover:text-red-800 cursor-pointer`} style={{ backgroundImage: `url(${upcoming.short_screenshots[0].image})` }}>
                            <li style={{ WebkitTextStroke: "1px black", fontWeight: "700" }} className="z-1">{upcoming.name}</li>
                        </div>
                    </a>
                )}
            </div>
            <div>
                <h2>Latest Games</h2>
                {newGames.map((newGames: any) =>
                    <a href={`game/${newGames.id}`} key={newGames.slug} className="text-white">
                        <div className={`w-64 h-20 bg-cover flex items-center justify-center mb-5 rounded-md hover:text-red-800 cursor-pointer`} style={{ backgroundImage: `url(${newGames.short_screenshots[0].image})` }}>
                            <li style={{ WebkitTextStroke: "1px black", fontWeight: "700" }}>{newGames.name}</li>
                        </div>
                    </a>
                )}
            </div>
        </div>
    )
}