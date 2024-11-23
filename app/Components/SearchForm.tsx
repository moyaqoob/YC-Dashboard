"use client"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { SearchIcon } from 'lucide-react'
import React from 'react'
import Form from "next/form"
import SearchFormReset from "../Components/SearchFormReset"

const SearchForm = ({query}:{query?:string}) => {
    // const q = {query}

   
  return (
    <Form action="/" scroll={false} className='search-form'>
      <input
      name='query'
      className='search-input'
      placeholder='Search Startups'
      defaultValue={query}
      />
      <div>
      {query && <SearchFormReset/>}

        <Button className='size-8 py-4'>
          <SearchIcon/>
        </Button>

      </div>
    </Form>
)
}

export default SearchForm