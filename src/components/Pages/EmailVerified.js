import React from 'react'

 const EmailVerified = () => {
    return (
        <div>
            <div className="app font-sans min-w-screen min-h-screen bg-grey-200 pt-8 px-4">

  <div className="mail__wrapper max-w-md mx-auto">

    <div className="mail__content bg-blue-200 p-8 shadow-md">

      <div className="content__header text-center tracking-wide border-b">
        <div className="text-Blue-600 text-sm font-bold">Thank You..!</div>
        <h1 className="text-3xl text-red-500 h-48 flex items-center justify-center">Your Email has been verified</h1>
      </div>

      <div className="content__body py-8 border-b">
        
        <button className="text-white text-md tracking-wide bg-blue-400 rounded w-full my-8 p-4 "><a href="/signin">Log in with your credentials</a> </button>
        <p className="text-sm">
          Keep Rockin'!<br/> NoQueue Team
        </p>
      </div>

      <div className="content__footer mt-8 text-center text-grey-darker">
        <h3 className="text-base sm:text-lg mb-4">Thanks for Joining With Us</h3>
      </div>

    </div>

    <div className="mail__meta text-center text-sm text-grey-darker mt-8">

      <div className="meta__social flex justify-center my-4">
        <a href="#" className="flex items-center justify-center mr-4 bg-blue-900 text-white rounded-full w-8 h-8 no-underline"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="flex items-center justify-center mr-4 bg-blue-900 text-white rounded-full w-8 h-8 no-underline"><i className="fab fa-instagram"></i></a>
        <a href="#" className="flex items-center justify-center bg-blue-900 text-white rounded-full w-8 h-8 no-underline"><i className="fab fa-twitter"></i></a>
      </div>

      <div className="meta__help">
        <p className="leading-loose">
          Questions or concerns? <a href="#" className="text-blue-600">noqueuehelp@gmail.com</a>

        </p>
      </div>

    </div>

  </div>

</div>
        </div>
    )
}
export default EmailVerified