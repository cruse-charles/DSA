export default function ProgressBar({progress}) {
    const max = 100
    const min = 0
    const validValue = Math.min(Math.max(min, progress), max)
  
    return <div className="progress">
      <div className='fill' style={{width: `${validValue}%`}}
      >{validValue}%</div>
    </div>;
  }
  
  
  // include props for value
  
  // style width of blue color to be prop% of container
  
  // display number
  
  // 
  
  // 