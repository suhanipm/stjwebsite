import callsymbol from'../Image/callsymbol.png';
function Header(){
    return(
        <div className="first">
        <img alt="call" src={callsymbol} className='callsymbol'></img>
        <div className='phno'><h3>08373-266343, 262075</h3></div>
        <div className='phno'><h3 className='fax'> Fax: 08373-266427</h3></div>
        <div className='phno'><h3 className='cet'> CET CODE : E033</h3></div>
        <div className='phno'><h3 className='research'>Research Program</h3></div>
        <div className='phno'><h3 className='alumni'>Alumni</h3></div>
        </div> 
    );
}
export default Header;