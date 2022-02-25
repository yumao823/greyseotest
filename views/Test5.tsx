import React, { FC, useState } from 'react'
import { Button, Container, FormControl } from 'react-bootstrap'
import axios from 'axios'

interface WordProps {
  word: string
  score: number
  numSyllables: number
}

const Test5: FC = () => {
  const [value, setValue] = useState<string>('')
  const [words, setWords] = useState<WordProps[]>([])

  const handleGet = async () => {
    const { data } = await axios.get(`https://api.datamuse.com/words?sl=${value}`);
    setWords(data)
  }

  return (
    <Container>
      <div className='d-flex mb-5'>
        <FormControl onChange={e => setValue(e.target.value)} />
        <Button className='ms-5' variant='success' size='lg' onClick={handleGet}>Get</Button>
      </div>
      <ul className="list-group">
        {words.map((word, index) => (
          <li className='list-group-item' key={`wd-${index}`}>{word.word}</li>
        ))}
      </ul>
    </Container>
  )
}

export default Test5