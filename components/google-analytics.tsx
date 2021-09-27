import { useEffect, useState } from 'react'
import Head from 'next/head'

interface Props {
    id: string
    timeout?: number
}

export default function GoogleAnalytics({ id, timeout = 2500 }: Props): React.ReactElement | null {
    const [render, setRender] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setRender(true), timeout)
        return () => clearTimeout(timer)
    }, [])

    const __html = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('consent', 'default', { 'ad_storage': 'denied', 'analytics_storage': 'denied' })
    gtag('config', '${id}');
    `

    if (render) {
        return (
            <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-SRJWR6E259" />
                <script dangerouslySetInnerHTML={{ __html }} />
            </Head>
        )
    }
    return null
}
