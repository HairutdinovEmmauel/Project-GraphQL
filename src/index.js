import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { client } from './init/client';
import { ApolloProvider } from '@apollo/react-hooks';


import App from './component/app';

ReactDOM.render(
    <ApolloProvider client={client} >
      
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      
    </ApolloProvider>,
  document.getElementById('root')
);