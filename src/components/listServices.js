import React, { Component } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

class List extends Component {
  render() {
    return (
      <div>
        <section className="py-5">
          <div class="paymentCont">
						<div class="headingWrap">
								<h3 class="headingTop text-center">Metodos de pago </h3>
						</div>

          <div>
            <div className="paymentWrap">
            <div className="btn-group paymentBtnGroup btn-group-justified" data-toggle="buttons">
                    <label className="btn paymentMethod ">
                      <FontAwesomeIcon icon={ faCreditCard } size="6x"/>
                    </label>
                    <label className="btn paymentMethod">
                      <FontAwesomeIcon icon={ faCreditCard } size="6x"/>

                    </label>
                    <label className="btn paymentMethod">
                      <div className="method amex"></div>
                      <input type="radio" name="options" />
                    </label>
                     <label className="btn paymentMethod">
                      <div className="method vishwa"></div>
                      <input type="radio" name="options" />
                    </label>
                    <label className="btn paymentMethod">
                      <div className="method ez-cash"></div>
                      <input type="radio" name="options" />
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
