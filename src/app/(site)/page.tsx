import TitleSection from '@/components/landing-page/title-section'
import React from 'react'

type props = {}

const HomePage = (props: props) => {
  return (
    <section>
      <div className=' overflow-hidden px-4 sm:px-6 mt-10 sm:flex gap-4 md:justify-center md:items-center'>
        <TitleSection pill='✨ Your Workspace, Perfected!!' title='All-In-One Collaboration and Productivity Platform'/>
      </div>
      <div>

      </div>
    </section>
  )
}

export default HomePage