# Bitcoin Block Explorer

Hey!  So, I'm all out of time to commit here, so this will have to remain imperfect, but I'm still fairly happy with the results.   It's a working Bitcoin block explorer, where you can browse from block to block and view the transactions.

Things that still need work:

- 1. Block Search:  Currently crippled by the CORS policy on the APIs I've tried.  Need to tinker with proxies to bypass that, or make my own API layer to fetch the BTC data (real world would probably do that).  No time now so it remains broken.  Please inspect src/agent.js and src/components/Header.js to see that it would/should work otherwise.  Just needs the CORS policy.
- 2. Styling: Obviously this is not a killer app.  Ain't the prettiest.  Needs some more perfecting, but that takes time.  Should organize the block data in a prettier way, maybe go two-column or group data up differently.  Maybe generate pictures from hashes. Animations, etc.  Popup tooltips.  TODO.
- 3. Transactions pagination: Again, needs more styling for buttons etc, but it's currently fully working.  Would probably use AwesomeFont icons or whatnot, but opted not to open up the external library can of worms right now.
- 4. Misc functionality:  Plenty more that could be done here, obviously.  Search by hash/height/transaction-hash, transaction input/outputs, wallets tracking, summing fees from all transactions per block, etc.  Performance could be improved too - need to be able to preload some blocks so each one doesn't have a load delay.  Need to solve CORS issue for that though (or make clever batch crawler).  Show/hide transactions by clicking header. 
- 5. Odd Decisions: e.g. I like using the long hashes as header/footers to a block, so the Merkle Root is a footer now.  Kinda works.  Should probably be ellipsis shortened with a "Copy to Clipboard" icon instead though, long term.  Oh well.
- 6. Tests.  Though I follow Jonathan Blow and John Carmack in advocating we make those very low priority vs integration tests and just general development - the code bloat is real otherwise, makes changing your API/namespace/structure etc very unwieldy. That's just the tl;dr argument though.
 
Anyway!  Enjoy this limited-time snapshot of what I can do in a bit over a day and a half.  Hopefully overkill, hopefully not underkill, most likely somewhere in-between!   Really hope to work with you guys.  I love the BTC space, spent a good year where all my free time went into researching ETH/Dfinity/Bancor/EOS/etc, and still always keeping an eye out through the Insiders Trading Group on Discord for the major twists and turns of the industry.  Strongly believe decentralized crypto tech is the future, and would love to grow my career further into the space.  Cheers.

-Warren


===================================================

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
