import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@/app/layout.css'
import '@/highlight/atom-one-light.css'
import Header from '@/components/Header'
import { NextFont } from 'next/dist/compiled/@next/font'

const roboto: NextFont = Roboto({ weight: ['400', '500'], style: 'normal', subsets: ['cyrillic'] })

const metadata: Metadata = {
    title: 'Quiz',
    description: 'Quiz on JavaScript',
    keywords: ['Quiz', 'NextJS', 'Zustand'],
    authors: [{ name: 'UglyGhoulChrist' }],
    icons: {
        icon: [
            {
                url: '/favicon.ico',
                href: '/favicon.ico',
            }]
    },
}

function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>): JSX.Element {

    return (

        <html lang='ru'>
            <body className={roboto.className} >
                <Header />
                <main className='main'>{children}</main>
            </body >
        </html >
    )
}

export default RootLayout
export { metadata }