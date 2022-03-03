
export default function Header() {
    return (
        <nav>
    <a href="#">ClimateScience</a>
    <a href="/">Home</a>
    <a><img src='/logo.svg' alt="" /></a>
            <a href="/Team">Team</a>
            <a href="/Winners">2021 Winners</a>
            <select className="sel">
                <option > 🇬🇧 English </option>
                <option > 🇸🇦 Arabic </option>
            </select>
    </nav>  )
}