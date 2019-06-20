const config = {
  production: {
    secret: process.env.secret,
    MONGO_URI: 'mongodb+srv://datkq:dat123456@cluster0-g48vv.gcp.mongodb.net/test?retryWrites=true&w=majority',
    port: 27017,
  },
  development: {
    secret: 'I_AME_GERER',
    MONGO_URI: 'mongodb+srv://datkq:dat123456@cluster0-g48vv.gcp.mongodb.net/test?retryWrites=true&w=majority',
    port: 27017,
  },
};

export const getConfig = env => config[env] || config.development;
