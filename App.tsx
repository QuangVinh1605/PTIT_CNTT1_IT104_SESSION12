
import './App.css'
import { Calculations } from './componants.tsx/Calculations'
import'./componants.tsx/ListCourse'
import UserInfor from './componants.tsx/UserInfor'
import { ListCourse } from './componants.tsx/ListCourse'
import { FormatName } from './componants.tsx/FormatName'
function App() {
  return (
    <div>
      <ListCourse></ListCourse>
      <Calculations></Calculations>
      <UserInfor></UserInfor>
      <FormatName></FormatName>
    </div>
    
  )
}

export default App
