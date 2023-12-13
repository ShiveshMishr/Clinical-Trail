
import React from 'react';
import '../Navbar/navbar.css'
import weblogo from '../../assets/logo.png'
const Navbar = () => {
  
  return (
    <div className='fullnav'>
        <div className='section1'>
            <div className='splititem'><img src={weblogo} alt='company logo' className='weblogoimg'></img></div>
            <div className='splititem' ><button className='loginbtn'>LOG IN </button></div>
        </div>

        <div className='section2 ' >

            <div className='sidelogo'>
              <h1>Clinic Trail </h1>
            </div>
                <div className='nav-itm'>

                      <div className='dropdown'>
                        <div className='itmlist' >Home
                        </div>
                      </div>

                      <div className='dropdown'>
                        <div className='itmlist' >About the Site 
                        <span><svg width="30px" height="35px" viewBox="-2.4 -2.4 28.80 2.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"></path> </g></svg></span>

                        </div>
                        <div className='dropdown-menu' id='dropdown-2'>
                          <a href="#d">Service 1</a>
                          <a href="#d">Service 2</a>
                          <a href="#d">Service 3</a>
                        </div>
                      </div>

                      <div className='dropdown'>
                        <div className='itmlist' >Find Studies
                        <span><svg width="30px" height="35px" viewBox="-2.4 -2.4 28.80 2.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"></path> </g></svg></span>
                        
                        </div>
                        <div className='dropdown-menu' id='dropdown-3'>
                          <a href="#d">Service 1</a>
                          <a href="#d">Service 2</a>
                          <a href="#d">Service 3</a>
                        </div>
                      </div>

                      <div className='dropdown' >
                        <div className='itmlist' >Data about Studies</div>
                        <div className='dropdown-menu' id='dropdown-4'>
                          <a href="#d">Service 1</a>
                          <a href="#d">Service 2</a>
                          <a href="#d">Service 3</a>
                        </div>
                      </div>

                      <div className='dropdown' >
                        <div className='itmlist' >Study Bacis
                        <span><svg width="30px" height="35px" viewBox="-2.4 -2.4 28.80 2.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"></path> </g></svg></span>

                        </div>
                        <div className='dropdown-menu' id='dropdown-5'>
                          <a href="#d">Service 1</a>
                          <a href="#d">Service 2</a>
                          <a href="#d">Service 3</a>
                        </div>
                      </div>
                    
                </div>

          <div className='btnsearch '>
            <input id='input'  ></input>
            <button>Search</button>
            
          </div>
        </div>
        
            

       
    </div>
  )
}

export default Navbar