'use client'

import Button from '@/components/Button';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation'

function Refresh(): JSX.Element {

    const router: AppRouterInstance = useRouter()

    return (

        <Button text='Ещё 20' onClick={() => {
            window.scrollTo(0, 0)
            router.refresh()
        }} />
    )
}

export default Refresh