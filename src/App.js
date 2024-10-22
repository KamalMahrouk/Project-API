import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setusers] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=> setusers(res.data))
  }, [])

  return (
    <div className="flex flex-row flex-wrap gap-20">
      {users.map((el)=>
      <div class="flex">
      <div class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-x-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer ml-10 mt-10 flex flex-wrap">
          <a href="#" class="w-full h-full">
              <img alt="blog photo" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" class="max-h-40 w-full object-cover"/>
              <div class="bg-white w-full p-4">
                  <p class="text-indigo-500 text-2xl font-medium">
                      {el.id}
                  </p>
                  <p class="text-gray-800 text-sm font-medium mb-2">
                      
                  </p>
                  <p class="text-gray-600 font-light text-md">
                      {el.email}
                  </p>
                  <div class="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                      <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                          {el.address.suite}
                      </span>
                      <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                          {el.address.street}
                      </span>
                      <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                          {el.address.city}
                      </span>
                      <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                         lat:{el.address.geo.lat}
                      </span>
                      <span class="m-1 px-2 py-1 rounded bg-indigo-500">
                         lng:{el.address.geo.lng}
                      </span>
                  </div>
                  <div class="flex items-center mt-2">  
                      <div class="pl-3">
                          <div class="font-medium">
                              {el.username}
                          </div>
                          <div class="text-gray-600 text-sm">
                              {el.name}
                          </div>
                      </div>
                  </div>
              </div>
          </a>
      </div>
      
  </div>
      
      
      
      )}
    </div>
  );
}

export default App;
