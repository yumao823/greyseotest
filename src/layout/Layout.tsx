import React, { FC } from 'react'
import Header from '../components/Header'

interface LayoutProps {}

const Layout: FC<LayoutProps> = (props) => (
  <>
    <Header />
    {props.children}
  </>
)

export default Layout