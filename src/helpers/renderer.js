import React from "react";
import {renderToString} from "react-dom/cjs/react-dom-server.node.development";
import Routes from '../client/routes';
import { StaticRouter } from 'react-router-dom';

export default (req) => {
    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            <Routes/>
        </StaticRouter>)
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
