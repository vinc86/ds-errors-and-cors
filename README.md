# DataServer - Exercise

## Errors, arise! But we will keep you in check...

You reached the fuckup workshop. 

We will produce some errors now. Something that you were probably quite good at so far... right? 

- Setup a 404 middleware
  - It should return you 404 + { error: `Route ${req.url} does not exist }
  - Test in the browser to call an unknown route, e.g. /idontknow
  - Works? You get the error? Good. Let's move on...

- Setup a GET route /fuckup/saw-it-coming: 
  - Produce here an error handled by try & catch
  - call the next function in your catch block
  - pass in the error object as a parameter to the next function

- Setup a GET route /fuckup/surprise: 
  - Produce here an unhandled error with `throw new Error('<your error message>')`

- Test the routes and see what you get
  - HTML? We don't want that... our frontend expects always JSON from us. That is the convention

- Setup JSON responses for all your errors now
  - Setup a generic error handler: `app.use((err, req, res, next) => ...`
  - Return the error message you receive here as JSON object
    - that error handler will from now on be responsible to receive and format all our errors, so we have a unified error handling
  
- Adapt your 404 route:
  - instead of handling the 404 error here directly
    - forward the error to your new, generic error handler
    - use the next function for that!

- Test the two routes again
  - All your routes should return JSON errors now

You did that?

Congratulations!

We now completed the essentials of ExpressJS.

You just learned your very first backend framework.


### Bonus - Get over the CORS mountain... 

Setup a React app. Install it into a folder "client" (`npx create-react-app client`)

Step into the App.js. Place a button and onClick: Make a call to your POST route.

Start React and the backend in two separate terminals.

Open React in the browser. Click the button to make your POST call.

Check the browser console for a CORS error.

Setup CORS middleware in your backend to make the request work.

Redo your button click in React. Works??


