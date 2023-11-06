import substj from'../Image/substj.jpg'
import substj1 from'../Image/substj1.jpg'
import substj2 from'../Image/substj2.jpg'
import substj3 from'../Image/substj3.jpg'
import substj4 from'../Image/swami.jpg'
function Fourth(){
    return( 
<div className='join'>
<div className='stj12'>
    <img alt="" src={substj} className='stj1'></img>
    <br></br>
    <img alt="substj2" src={substj1} className='stj2'></img>
</div>
<div>
<img alt="" src={substj4} className='swami'></img>
</div>
<div>
    <img alt="" src={substj2} className='stj3'></img>
    <br></br>
    <img alt="" src={substj3} className='stj4'></img>
    <br></br>
</div>
</div>
);
}
export default Fourth;