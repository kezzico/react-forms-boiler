import React from 'react';
import ReactDOM from 'react-dom/client';
import { Root, EntryForm, ThankYou  } from './components'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<EntryForm />} />
      <Route 
        path="/thankyou"
        element={<ThankYou />} 
        action={async ({ request }) => {
          let formData = await request.formData();

          let name = formData.get("name");

          let lifestory = formData.get("lifestory");
          
          console.log(request.method);

          console.log(`name: ${name}`)

          console.log(`lifestory: ${lifestory}`)

          // TODO: send form data to backend

          return ThankYou()
        }}

        loader={async ({ request }) => {
          return ThankYou()
        }}
      
        />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
