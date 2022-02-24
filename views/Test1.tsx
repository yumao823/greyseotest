import React, { FC, useState } from 'react'
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap'

const Test1: FC = () => {
  const [value, setValue] = useState<string>('0')
  const [result, setResult] = useState<string>(value)

  const handlePrint = () => {
    const _value = Number(value)

    if (_value <= 0) {
      alert("Wrong Input!")
    } else if (_value % 22 === 0) {
      setResult('candybar')
    } else if (_value % 2 === 0) {
      setResult('candy')
    } else if (_value % 11 === 0) {
      setResult('bar')
    } else {
      setResult(value)
    }
  }

  return (
    <Container>
      <div className='d-flex mb-5'>
        <FormControl type='number' onChange={e => setValue(e.target.value)} />
        <Button className='ms-5' variant='success' size='lg' onClick={handlePrint}>Print</Button>
      </div>
      <h2>Result: {result}</h2>
    </Container>
  )
}

export default Test1