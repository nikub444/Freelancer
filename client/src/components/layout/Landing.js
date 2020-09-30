import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import illustration from '../../img/illustration.jpg';
import face1 from '../../img/face1.jpg';
import face2 from '../../img/face2.jpg';
import face3 from '../../img/face3.jpg';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <React.Fragment>
      {/* <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Developer Connector</h1>
            <p className="lead">
              Create a developer profile/portfolio, share posts and get help from
              other developers
            </p>
            <div className="buttons">
              <Link to="/register" className="btn btn-primary">Sign Up</Link>
              <Link to="/login" className="btn btn-light">Login</Link>
            </div>
          </div>
        </div>
      </section> */}

      <section className='landing'>
        <div className='introBox'>
          <h1 className='x-large'>Welcome to our community</h1>
          <div className='block'>
            <Link to='/login' className='btn btn-custom btn intro'>
              Search for ideal job{' '}
              <i class='fas fa-angle-double-right align'></i>
            </Link>
            <Link to='/login' className='btn btn-custom intro'>
              Find person u know <i class='fas fa-angle-double-right align'></i>
            </Link>
            <Link to='/login' className='btn btn-custom intro'>
              Make your own portfolio{' '}
              <i class='fas fa-angle-double-right align'></i>
            </Link>
          </div>
        </div>
        <div className='introBoxImg'>
          <img className='responsive' src={illustration} alt='' />
        </div>
      </section>
      <div className='break breakSingle '></div>

      <div>
        <section className='landing'>
          <div className='introBox2' style={{ width: '800px', height: 'auto' }}>
            <h2 className='large colorBlue' style={{ verticalAlign: 'middle' }}>
              Browse open jobs and internships
            </h2>
            <div className='block'></div>
          </div>
          <div className='introBox2' style={{ width: '800px' }}>
            <h3 className='small'>Popular positions</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <div className='btn-custom2'>Front end</div>
              <div className='btn-custom2'>Back end</div>
              <div className='btn-custom2'>IT</div>
              <div className='btn-custom2'>Data Science</div>
              <div className='btn-custom2'>Marketinng</div>
              <div className='btn-custom2'>Human Resources</div>
              <div className='btn-custom2'>Finance</div>
              <div className='btn-custom2'>UI/UX Designer</div>
            </div>
          </div>
        </section>
      </div>
      <div className='break breakMulti'></div>
      <h2
        className='colorBlue'
        style={{ textAlign: 'center', padding: '20px' }}
      >
        Find out what other think about us
      </h2>

      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div class='card '>
              <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={face1}
                  alt=''
                  style={{ padding: '20px', width: '250px' }}
                />
              </div>
              <div class='back'>
                <p>'Thanks, Freelancer I found perfect job oportunity in my field of study.'</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div class='card middle'>
              <div class='front'>
                <img
                  src={face2}
                  alt=''
                  style={{ padding: '20px', width: '250px' }}
                />
              </div>
              <div class='back'>
                <p>'Freelancer let find my career path.'</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div class='card middle'>
              <div class='front'>
                <img
                  src={face3}
                  alt=''
                  style={{ padding: '20px', width: '250px' }}
                />
              </div>
              <div class='back'>
                <p>'This website helped me find employers for my professional project.'</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2
        className='colorBlue'
        style={{ textAlign: 'center', padding: '20px' }}
      >
        Choose us! Choose{' '}
        <span style={{ color: 'black' }}>
          Freelancer<i className='fab fa-freebsd'></i>
        </span>
      </h2>
    </React.Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: propTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
