import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Portal',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44339',
    redirectUri: baseUrl,
    clientId: 'Portal_App',
    responseType: 'code',
    scope: 'offline_access openid profile role email phone Portal',
  },
  apis: {
    default: {
      url: 'https://localhost:44339',
      rootNamespace: 'Company.Portal',
    },
  },
} as Environment;
