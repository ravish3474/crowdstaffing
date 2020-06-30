import React, { Component } from 'react';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';


class FAQ extends Component {
    render() {
    return (
    
        <section className="mainDiv">
            <section className=" colBackLightBlue">
                <Header/>
                
            </section>
            <section className="py-4 text-center bckloGry">
                <h2 className="colBlu">FAQ  </h2>
            </section>
           

            <section className="py-4 container">
            <section className="container my-5">
		   	<div className="my-2  ">
              <span className="">
                <h5 className="">FREQUENTLY ASKED QUESTIONS</h5>
              </span>
            </div>
	<div className="row">
		<div className="col-md-12">
			<div id="accordion">
	  <div className="card mt-2">
	    <div className="card-header p-0" id="headingOne">
	      <h5 className="mb-0">
	        <a className="btn btn-link collapsed Faq_ OJUPP" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
	        
	          Collapsible Group Item #1
	        </a>
	      </h5>
	    </div>

	    <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordion">
	      <div className="card-body">
	        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
	      </div>
	    </div>
	  </div>
	  <div className="card mt-2">
	    <div className="card-header p-0" id="headingTwo">
	      <h5 className="mb-0">
	        <a className="btn btn-link collapsed Faq_ OJUPP" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
	          Collapsible Group Item #2
	        </a>
	      </h5>
	    </div>
	    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
	      <div className="card-body">
	        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
	      </div>
	    </div>
	  </div>
	  <div className="card mt-2">
	    <div className="card-header p-0" id="headingThree">
	      <h5 className="mb-0">
	        <a className="btn btn-link collapsed Faq_ OJUPP" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
	          Collapsible Group Item #3
	        </a>
	      </h5>
	    </div>
	    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
	      <div className="card-body">
	        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
	      </div>
	    </div>
	  </div>
	</div>
		</div>
		
	</div>
</section>

                
            </section>
            
            <Footer/>
        </section>
           
    );
    }
}

export default FAQ;