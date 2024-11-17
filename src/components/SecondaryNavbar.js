import React from 'react'

const SecondaryNavbar = () => {
  return (
    <div className='flex flex-col w-2/12 border-2'>
        <div className='flex flex-col items-start'>
            <h1>Home</h1>
            <h1>Questions</h1>
            <h1>Tags</h1>
        </div>
        <div className='flex flex-col items-start'>
            <h1>Saves</h1>
            <h1>Users</h1>
            <h1>Companies</h1>
        </div>
        <div className='flex flex-col items-start'> LABS
            <h1>Jobs</h1>
            <h1>Discussions</h1>
        </div>
        <div className='flex flex-col items-start'>
            <div className='flex'>
                <h1>COLLECTIVES</h1>
                <h1> + </h1>
            </div>
            <p className='flex items-start'>Communities for your favorite technologies. Explore all Collectives</p>
        </div>
        <div className='flex flex-col items-start'>
            <div className='flex'>
                <h1>TEAMS</h1>
                <h1> + </h1>
            </div>
           <div className='flex flex-col space-y-2'>
           <p>Ask questions, find answers and collaborate at work with Stack Overflow for Teams. Explore Teams</p>
           <p>Looking for your Teams?</p>
           </div>
        </div>
    </div>
  )
}

export default SecondaryNavbar