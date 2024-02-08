'use client'

import Button from '@/components/Button';
import { useRouter } from 'next/navigation'

function Refresh(): JSX.Element {

    const router = useRouter()

    return (

        <Button text='Ещё 20' onClick={() => {
            window.scrollTo(0, 0)
            router.refresh()
        }} />
    )
}

export default Refresh