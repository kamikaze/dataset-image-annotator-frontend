const local = {
  API_BASE_URL: 'http://localhost:8080/api/v1'
};

const dev = {
  API_BASE_URL: '/api/v1'
};

const prod = {
  API_BASE_URL: '/api/v1'
};

const envVariables = process.env.REACT_APP_STAGE === 'prod' ? prod : (
  process.env.REACT_APP_STAGE === 'dev' ? dev : local
);

const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  PATH_ROOT: '',
  ...envVariables
};

export default config;
