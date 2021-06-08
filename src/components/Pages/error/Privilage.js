import React from 'react'
import PropTypes from 'prop-types'
import './error.css'
function Privilage(props) {
    return (
        <div>
      <main>
          <div className="error bg-white">
          <div className="errorInner">


          <section className="pt-20 pb-48 w-full">
              <div className=" mx-auto px-4">
                <div className="flex flex-wrap justify-center text-center mb-24">
                  <div className="w-full lg:w-6/12 px-4 bg-white">
                    <h2 className="text-3xl font-semibold text-red-600">
                    4<span><i class="fas fa-ghost"></i></span>4
                    </h2>
                    <p className="text-xl leading-relaxed m-4 text-blue-600">
                    Error: 404 page not found
                    </p>
                    <p className="text-xl leading-relaxed m-4 text-blue-600">
                    Sorry, the page you're looking for cannot be accessed
                    </p>

                    <a href ='/'>
                      <button  className="bg-red-500 hover:bg-pink-600 text-xs py-4 text-white font-bold py-2 px-4 rounded" type="submit">Back to Home
                      </button>
                      </a>

                  </div>
                </div>

  </div>
  </section>
  </div>


</div>

</main>
        </div>
       
    )
}

Privilage.propTypes = {

}

export default Privilage