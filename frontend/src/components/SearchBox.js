import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='search'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='w-65 p-2 mr-sm-2 ml-sm-2' 
      >
      </Form.Control>
      <Button type='submit' className='btns'><i className="fas fa-search"></i>
      </Button>
    </Form>
  )
}

export default SearchBox
