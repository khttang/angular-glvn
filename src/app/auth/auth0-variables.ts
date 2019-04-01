interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'sLiDAg3V92mlJJhfm1MdPHSeSlDCckOO',
  domain: 'dev-f7iaoaex.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
