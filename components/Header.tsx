import Link from 'next/link'
import Image from 'next/image'



export default function Header() {
    return (
        <nav>
            <Link href="#">ClimateScience</Link>
            <Link href="/">Home</Link>
            <Image width="132px" height="72px" src='/logo.svg' alt="" />
            <Link href="/Team">Team</Link>
            <Link href="/Winners">2021 Winners</Link>
            <select className="sel">
                <option > 🇬🇧 English </option>
                <option > 🇸🇦 Arabic </option>
            </select>
        </nav>)
}