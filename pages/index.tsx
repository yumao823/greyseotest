import React, { FC } from 'react'
import { Container, Tabs, Tab } from 'react-bootstrap'
import Test1 from '../views/Test1'
import Test2 from '../views/Test2'
import Test3 from '../views/Test3'
import Test4 from '../views/Test4'
import Test5 from '../views/Test5'

const TABS = [
  { title: 'Test1', activekey: 'test1', component: <Test1 /> },
  { title: 'Test2', activekey: 'test2', component: <Test2 /> },
  { title: 'Test3', activekey: 'test3', component: <Test3 /> },
  { title: 'Test4', activekey: 'test4', component: <Test4 /> },
  { title: 'Test5', activekey: 'test5', component: <Test5 /> },
]

const Home: FC = () => {
  return (
    <Container className='py-5'>
      <Tabs
        defaultActiveKey="test1"
        className="mb-3"
      >
        {TABS.map((item) => (
          <Tab key={item.activekey} eventKey={item.activekey} title={item.title}>
            {item.component}
          </Tab>
        ))}
      </Tabs>
    </Container>
  )
}

export default Home