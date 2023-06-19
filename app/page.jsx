import Feed from '@components/Feed'
import React from 'react'

const Home = () => {
  return (
    <div>
      <section className='w-full flex-center flex-col '>
       <h1 className='head_text text-center'>Discover & Share</h1>
       <br  className='max-md:hidden'/>
       <span className='orange_gradient text-center'>AI-Powered Prompts</span>
       <p className='desc text-center'>
        Prompotia is an open source Ai Prompting tool for modern world to discover ,create and share creative Prompts
       </p>
       <Feed />
      </section>
    </div>
  )
}

export default Home
