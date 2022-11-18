import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/message-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blacklogo from '../../assets/th.jpg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blogs</h4>
        <div className='right-sidebar-div-1'>
           <div className='right-sidebar-div-2'>
             <img src= {pen} alt="pen" width='18' />
            <p>Introducing the Ask Wizard: Your guide to crafting high-quality questions</p>
            </div>
            <div className='right-sidebar-div-2'> 
                <img src= {pen} alt="pen" width='18' />
            <p>How to get more engineers entangled with quantum computing (Ep. 501)</p>
            </div>
        </div>
        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
           <div className='right-sidebar-div-2'>
             <img src= {comment} alt="comment" width='18' />
            <p>
The 2022 Community-a-thon has begun!</p>
            </div>
            <div className='right-sidebar-div-2'> 
                <img src= {comment} alt="comment" width='18' />
            <p>
Mobile app infrastructure being decommissioned</p>
            </div>
            <div className='right-sidebar-div-2'> 
                <img src= {blacklogo} alt="blacklogo" width='40' />
            <p>
Staging Ground Workflow: Canned Comment</p>
            </div>
            </div>
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
           <div className='right-sidebar-div-2'>
             <p>38</p>
            <p>Why was this spam flag declined, yet the question marked as spam?</p>
            </div>
            <div className='right-sidebar-div-2'> 
                <p>40</p>
            <p>What is the best course of action when a user has high enough rep to..</p>
            </div>
            <div className='right-sidebar-div-2'> 
                <p>15</p>
            <p>is a link to the "How to ask" help page a useful comment?</p>
            </div>
        </div>
        

    </div>
  )
}

export default Widget