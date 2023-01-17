import './single.css'
import Sidebar from '../SideBar/Sidebar'
import SinglePost from '../SinglePost/SinglePost'
export default function Single() {
  return (
    <div className='Single'>
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}
