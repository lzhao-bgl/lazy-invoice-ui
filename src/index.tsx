import {Amplify} from 'aws-amplify'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

Amplify.configure({
  aws_cognito_region: 'ap-southeast-2',
  aws_user_pools: 'enable',
  aws_user_pools_id: 'ap-southeast-2_DFLhRbcY9',
  aws_user_pools_web_client_id: '2tff0ge1jqfkbmk1quean5ndp0',
  authenticationFlowType: 'USER_SRP_AUTH'
})

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  )
}