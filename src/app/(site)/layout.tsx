import Header from '@/components/landing-page/header'
import React from 'react'

type props = {
  children: React.ReactNode
}

const HomePageLayout = ({children}: props) => {
  return (
    <main>
      <Header/>
      {children}
    </main>
  )
}

export default HomePageLayout