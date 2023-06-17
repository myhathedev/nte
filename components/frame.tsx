
interface FrameProps {
    title: string;
  }
  
const Frame: React.FC<FrameProps> = ({ title }) => {
  return (
    <div className='block relative'> 
    <img src='/Frame.jpg' alt='frame'></img>
    <div className = ' container text-6xl block absolute right-8 bottom-8 text-white'>{title}</div>
  </div>
  )
}

export default Frame;
