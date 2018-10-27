import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './header.css';


class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <section className="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark header-style" >
         <div className="container-fluid">
            <div className="row  justify-content-center align-items-center d-flex text-center h-100">
              <div className="col-8 col-md-8  h-50 cont">
                  <h1 className="display-2  text-light mb-2 mt-5"><strong>Makert Stock</strong> </h1>
                  <p className="lead  text-light mb-5">
                      Tus productos siempre a alcance ...........
                  </p>
                <p>
                  <a href="http://bootstraptor.com" className="btn bg-success btn-round text-light btn-lg btn-rised btn-ra">
                    Realiza tu <FontAwesomeIcon icon={faCartPlus} />
                  </a>
                </p>
      					<div className="btn-container-wrapper p-relative d-block  zindex-1">
      					
      					</div>
              </div>

            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Header
