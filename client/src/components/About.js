import React, { useEffect } from 'react';
import profile from '../images/profile.jpg';
import {useNavigate} from 'react-router-dom';
import '../App.css';

const About = () => {
  const navigate = useNavigate();
  const callAboutPage = async() => {
    try {
      const res = fetch('http://localhost:5000/about', {
        method : "GET",
        headers : {
          Accept : 'application/json',
          "Content-Type" : 'application/json'
        },
        credentials : 'include'
      });
      const data = await res.json();
      if(!res.status === 200){
        const error = new error(res.error);
        throw error;

      }
    } catch (error) {
      console.log(error);
      navigate('/login')
    }
  }

  useEffect(() => {
    callAboutPage();
  }, [])
  return (
    <>
      <div className='container emp-profile'>
        <form method='GET'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='profile-img'>
                <img src={profile} alt='profile image'/>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='profile-head'>
                <h5>Md Sajjad Ali</h5>
                <h6>Web Developer</h6>
                <p className='profile-rating mt-3 mb-5'>
                  RANKING: <span>1/10</span>
                </p>

                {/* tabs */}
                <ul className='nav nav-tabs' role='tablist'>
                  <li className='nav-item'>
                    <a className='nav-link active' id='home-tab' data-toggle='tab' href='#home' role='tab'>
                      About 
                    </a>
                  </li>

                  <li className='nav-item'>
                    <a className='nav-link' id='profile-tab' data-toggle='tab' href='#profile' role='tab'>
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-md-2'>
              <input type='submit' value='Edit Profile' name='btnAddMore' className='profile-edit-btn' />
            </div>
          </div>

          <div className='row'>
            {/* left side */}
            <div className='col-md-4'>
              <div className='profile-work'>
                <p>WORK LINK</p>
                <a href='https://github.com/sajjad83255' target='_blank' rel="noopener noreferrer"><i class="zmdi zmdi-github material-icons-name"></i></a> <br/>
                <a href='https://www.linkedin.com/in/md-sajjad-ali-a4148b241/' target='_blank' rel="noopener noreferrer"><i class="zmdi zmdi-linkedin material-icons-name"></i></a> <br/>
                <a href='https://github.com/sajjad83255' target='_blank' rel="noopener noreferrer"><i class="zmdi zmdi-twitter material-icons-name"></i></a> <br/>
                <a href='https://github.com/sajjad83255' target='_blank' rel="noopener noreferrer"><i class="zmdi zmdi-instagram material-icons-name"></i></a> <br/>
                <a href='https://github.com/sajjad83255' target='_blank' rel="noopener noreferrer"><i class="zmdi zmdi-skype material-icons-name"></i></a> <br/>
              </div>
            </div>

            {/* right side */}
            <div className='col-md-8 pl-5 about-info'>
              <div className='tab-context profile-tab' id='myTabContent'>
                <div className='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='home-tab'>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p>USER ID</p>
                    </div>
                    <div className='col-md-6'>
                      <p>542809816471275401</p>
                    </div>
                  </div>

                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p>NAME</p>
                    </div>
                    <div className='col-md-6'>
                      <p>Md Sajjad Ali</p>
                    </div>
                  </div>

                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p>EMAIL</p>
                    </div>
                    <div className='col-md-6'>
                      <p>mdsajjadali83255@gmail.com</p>
                    </div>
                  </div>

                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p>PHONE</p>
                    </div>
                    <div className='col-md-6'>
                      <p>9764147427</p>
                    </div>
                  </div>

                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <p>PROFESSION</p>
                    </div>
                    <div className='col-md-6'>
                      <p>SOFTWARE ENGINEER</p>
                    </div>
                  </div>
                </div>

                {/* timeline */}
                <div className='tab-pane fade' id='profile' role='tabpanel' aria-labelledby='home-tab'>
                  <div className='row'>
                      <div className='col-md-6'>
                        <p>EXPERIENCE</p>
                      </div>
                      <div className='col-md-6'>
                        <p>Expert</p>
                      </div>
                  </div>

                  <div className='row mt-3'>
                      <div className='col-md-6'>
                        <p>HOURLY RATE</p>
                      </div>
                      <div className='col-md-6'>
                        <p>650/per</p>
                      </div>
                  </div>

                  <div className='row'>
                      <div className='col-md-6'>
                        <p>EXPERIENCE</p>
                      </div>
                      <div className='col-md-6'>
                        <p>ENGINEER</p>
                      </div>
                  </div>
                  

                  <div className='row'>
                      <div className='col-md-6'>
                        <p>EXPERIENCE</p>
                      </div>
                      <div className='col-md-6'>
                        <p>ENGINEER</p>
                      </div>
                  </div>

                  <div className='row mt-3'>
                      <div className='col-md-6'>
                        <p>EXPERIENCE</p>
                      </div>
                      <div className='col-md-6'>
                        <p>ENGINEER</p>
                      </div>
                  </div>
                </div>
              

              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
};

export default About;
