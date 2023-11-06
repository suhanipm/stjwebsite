import lat from '../Image/lat.jpg';
import lat1 from '../Image/lat1.jpeg';
function Latest(){
    return(
<div>
        <div className='lathead'>
          Latest news and events
        </div>
    <div className='latflex'>
        <img alt='' src={lat} className='latimage'></img>
        <div className='lat-text'>
            <div className='latallign'>Three days Workshop from 14thto 16th June</div>
            Department of Computer Science & Engineering conducted three days workshop on Android application Development and Python Programming from 14th to 16th June 2023.
        </div><br></br>
    </div>
    <div className='latflex'>
     <div className='lat-text1'>
            <div className='latallign1'>World Environment Day Celebration</div>
            NSS Unit of our Institute celebrated World Environment Day on 5thJune 2023 in our campus.
        </div> 
        <img alt='' src={lat1} className='latimage1'></img>  
     </div>

</div>);
}
export default Latest;