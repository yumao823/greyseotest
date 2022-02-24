import React, { FC, useState } from 'react'
import { Container, Nav } from 'react-bootstrap'

const ROUTES = [
  { title: 'Test 1', route: '/', key: '1' },
  { title: 'Test 2', route: '/test2', key: '2' },
  { title: 'Test 3', route: '/test3', key: '3' },
  { title: 'Test 4', route: '/test4', key: '4' },
  { title: 'Test 5', route: '/test5', key: '5' },
]

const Header: FC = () => {
  const [active, setActive] = useState<string>(ROUTES[0].key)

  return (
  <div className='header py-5'>
    <Container>
      <Nav className='justify-content-end' variant="pills" activeKey={active} onSelect={(e : any) => setActive(e)}>
        {ROUTES.map((item) => (
          <Nav.Item key={`rt-${item.key}`}>
            <Nav.Link href={item.route} eventKey={item.key}>{item.title}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </Container>
  </div>
)}

export default Header