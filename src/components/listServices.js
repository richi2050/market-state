import React, { Component } from 'react'
import './header.css'
import { FaCreditCard, FaCcAmex, FaCcVisa, FaCcPaypal, FaCcMastercard } from 'react-icons/fa';

class List extends Component {
  render() {
    return (
      <div>
        <section className="py-5">
          <div className="paymentCont">
						<div className="headingWrap">
								<h1 className="headingTop text-center">Metodos de Pago </h1>
						</div>

          <div>
            <div className="paymentWrap">
            <div className="btn-group paymentBtnGroup btn-group-justified" data-toggle="buttons">
                    <label className="btn paymentMethod ">
                      <FaCreditCard size={70}/>
                    </label>
                    <label className="btn paymentMethod">
                      <FaCcAmex size={70}/>
                    </label>
                    <label className="btn paymentMethod">
                      <FaCcVisa size={70}/>
                    </label>
                     <label className="btn paymentMethod">
                       <FaCcPaypal size={70}/>
                    </label>
                    <label className="btn paymentMethod">
                      <FaCcMastercard size={70}/>
                    </label>

                </div>
              </div>
          </div>
          <div className="container">
            <h1>Half Slider by Start Bootstrap</h1>
            <p>The background images for the slider are set directly in the HTML using inline CSS. The rest of the styles for this template are contained within the
              <code>half-slider.css</code>
              file.</p>
          </div>
          </div>
        </section>
      </div>
    );
  }
}
export default List
