
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from "next/link"

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('search-form') as HTMLFormElement
        if (form) form.reset();
    }

    

  return (
    <Button  onClick={reset} type='reset'>
        <Link href="/" className="search-btn text-white">
            X
        </Link>
    </Button>
  )
}

export default SearchFormReset