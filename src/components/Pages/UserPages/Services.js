import React from 'react';

const Services = () => {
  return (
    <div class="w-full bg-white">

    
    <div class="text-center px-6 py-12 mb-6 bg-gray-100 border-b">
      <h1 class=" text-xl md:text-4xl pb-4">Contact Us</h1>
      <p class="leading-loose text-gray-dark">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  

    <div class="container max-w-4xl mx-auto pb-10 px-12 md:px-0">

      <div class="flex flex-wrap justify-start items-start -mx-4">

        <div class="w-full md:w-1/2 p-4">
          
          <form>
            <fieldset class="mb-4">
              <label class="block text-sm text-gray-dark pb-2">Name</label>
              <input class="block w-full border rounded py-2 px-3 text-sm text-gray-700" type="text" />
              <p class="text-xs pt-2 text-gray">This is some helper text...</p>
            </fieldset>

            <fieldset class="mb-4">
              <label class="block text-sm text-gray-dark pb-2">Email</label>
              <input class="block w-full border rounded py-2 px-3 text-sm text-gray-700" type="text" />
            </fieldset>

            <fieldset class="mb-4">
              <label class="block text-sm text-gray-dark pb-2">Message</label>
              <textarea class="block w-full border border-red-300er rounded py-2 px-3 text-sm text-gray-700 h-32"></textarea>
              <p class="text-xs pt-2 text-red-400">This field is required...</p>
            </fieldset>

            <button class="text-sm py-2 px-3 bg-black text-white rounded">Submit</button>
          </form>

        </div>

        <div class="w-full md:w-1/2 p-4">
          <div class="overflow-hidden rounded border mb-6">
            <iframe class="w-full h-64" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d106000.49300263195!2d151.1141413582031!3d-33.8763776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sau!4v1547515706012" frameborder="0" allowfullscreen></iframe>
          </div>

          <p class="text-black font-bold mb-1">
            My Company Ltd
          </p>
          <p class="text-sm mb-2">
            3 Doris St,<br />
            North Sydney,<br />
            NSW 2060
          </p>

          <p class="text-black font-bold">(02) 9923 1838</p>
        </div>

      </div>

    </div>

  </div>
  );
};

export default Services;
