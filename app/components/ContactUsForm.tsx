import React from 'react'

const ContactUsForm: React.FC = () => {
  return (
    <div className="w-full lg:w-6/12 -mt-16 mx-auto z-10 mb-10 px-4 lg:px-0">
      <form className="bg-white shadow-xl rounded-3xl px-8 pt-20 pb-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name <span className='text-red-700'>*</span>
          </label>
          <input className="shadow appearance-none border rounded-xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email  <span className='text-red-700'>*</span>
          </label>
          <input className="shadow appearance-none border rounded-xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message  <span className='text-red-700'>*</span>
          </label>
          <textarea className="shadow appearance-none border rounded-xl h-44 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message"></textarea>
        </div>
        <div className="flex items-center justify-center mb-10">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-full text-lg px-16 py-3 text-center mr-2 mb-2 cursor-pointer hover:from-blue-700 hover:to-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactUsForm