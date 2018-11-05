import React from "react";
import {Provider} from 'react-redux'
import {renderToString} from "react-dom/cjs/react-dom-server.node.development";
import Routes from '../client/routes';
import {StaticRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>)
    ;
    return `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
}
