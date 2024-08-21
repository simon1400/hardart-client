module.exports = {
  apps : [{
    name   : "Hardart client",
    script : "npm start"
  }],

  deploy : {
    production : {
      user : 'dimi',
      host : ['89.221.216.23'],
      ref  : 'origin/main',
      repo : 'git@github.com:simon1400/hardart-client.git',
      path : '/home/dimi/app/hardart/client',
      'post-deploy' : 'npm i && npm run build && pm2 reload ecosystem.config.js --env production',
    }
  }
};
