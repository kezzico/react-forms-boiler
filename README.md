# ENTRY FORM

This is a React 18 project that demonstrates how to create and submit HTML forms using [Router Router 6.14](https://reactrouter.com/).


## INSTALL

`npm install`

## RUN

`npm start`

## USAGE

```
import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<App />} />
      <Route 
        path="/submit"
        element={<ThankYou />} 
        action={async ({ request }) => {
          let formData = await request.formData();

          let name = formData.get("name");
          ...
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
```

## AUTHOR

LEE IRVINE, lee@kezzi.co

Special thanks to [@kentcdodds](https://twitter.com/kentcdodds) for recommending React Router.

