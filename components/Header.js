import Link from 'next/link'

export default function Header(){
    return(
        <nav>
            <menu>
                <Link href="/Home">
                    <a >Home</a>
                </Link>
                <Link href='/hola'>
                    <a >About</a>
                </Link>
            </menu>
        </nav>
    )
}