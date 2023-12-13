import React from 'react';
import './fotter.css';

const Content2 = () => {
  return (
    <div className='body6'>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-md">

              <h3>I-Clinic</h3>
              <p>We are all in ONE medical Application.We provide wide range of Services and build a trust to our customers.</p>
            </div>
            <hr/>
            <div className='col-flex'> 
<div class="col-md-3">
              <h3>Products</h3>
              <ul>
                <li><a href="#a">Brain Tumer Prognosis</a></li>
                <li><a href="#a">Blood Bank</a></li>
                <li><a href="#a">Doctor patient portal</a></li>
                <li><a href="#a">Diabetic Retinopathy</a></li>

              </ul>
            </div>
            <div class="col-md-3">
              <h3>Useful Links</h3>
              <ul>
                <li><a href="#a">Our Services</a></li>
                <li><a href="#a">Support</a></li>
                <li><a href="#a">Contact</a></li>
              </ul>
            </div>
            <div class="col-md-3">
              <h3>Contact</h3>
              <address>
                New York, NY 10012, US<br />
                info@example.com<br />
                +01 234 567 88<br />
              </address>
            </div>
            </div>
            
          </div>
        </div>

        <div class="social-icons">
          <a href="#a" class="icon"><i class="fab fa-facebook-f"></i></a>
          <a href="#a" class="icon"><i class="fab fa-twitter"></i></a>
          <a href="#a" class="icon"><i class="fab fa-instagram"></i></a>
        </div>
        <div class="site-info">
          <p>&copy; 2023 www.iclinic.com</p>
        </div>
      </footer>
    </div>
  );
}

export default Content2;
