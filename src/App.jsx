import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './Components/Home/Home'
import Event1 from './Components/Event1/Event1'
import Event2 from './Components/Event2/Event2'
import Event3 from './Components/Event3/Event3'
import Chat from './Components/Chat'
import LiveUpdates from './Components/LiveUpdates'
import PastEventsPage from './Components/PastEventImage'
function App() {
  return (
   
   <Routes>
   
   <Route path ="/" element ={<Home/>}/>
   
   <Route path="/Event1" element={<Event1/>}/>
   <Route path="/event2" element={<Event2/>}/>
   <Route path="/event3" element={<Event3/>}/>
   <Route path="/chat" element={<Chat/>}/>
   <Route path="/liveupdates" element={<LiveUpdates/>}/>
   <Route path="/past-events" element={<PastEventsPage/>}/>
   
      </Routes>
     
  )
}

export default App
