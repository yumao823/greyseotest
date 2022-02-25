import React, { FC, useState } from 'react'
import { Container, Form, Row, Col, InputGroup } from 'react-bootstrap'

const Test2: FC = () => {
  const [name, setName] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [school, setSchool] = useState<string>('')
  const [area, setArea] = useState<string>('')


  return (
    <Container className='test2'>
      <div className='signup-form mx-auto mt-5 p-4'>
        <Form.Group className="mb-3">
          <Form.Label className='title'>Your full given name:</Form.Label>
          <Form.Control value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
        </Form.Group>
        <Row>
          <Col sm={5}>
            <Form.Group className="mb-3">
              <Form.Label className='title'>Date of Birth</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  <img src='/date.svg' />
                </InputGroup.Text>
                <Form.Control />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col sm={7}>
          <Form.Group className="mb-3">
            <Form.Label className='title'>
              Country of resident or citizenship:
            </Form.Label>
            <Form.Control value={country} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCountry(e.target.value)} />
          </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label className='title'>
            What school do you plan to attend:
          </Form.Label>
          <Form.Control value={school} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSchool(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className='title'>
            Please take a moment to describe your intended area of study:
          </Form.Label>
          <Form.Control
            value={area}
            as="textarea"
            placeholder="Enter Details here"
            rows={5}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setArea(e.target.value)}
          />
        </Form.Group>
      </div>
    </Container>
  )
}

export default Test2