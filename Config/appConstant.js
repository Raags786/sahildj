var SERVER={
    APP_NAME:'TAWALA',
    SALT:11,
    JWT_SECRET_KEY_ADMIN : "superone",
    JWT_SECRET_KEY_ARTIST:"supersaver",
    JWT_SECRET_KEY_CUSTOMER :"supersecret"
    
}
const SCOPE=
{
    CUSTOMER:"CUSTOMER",
    ADMIN:"ADMIN",
    ARTIST:"ARTIST",
  

}

var USER={
         Admins:"Admins",
         }

const AGENT_TYPE=
{
    INACTIVE:"Inactive",
    ACTIVE:"active",
    DELETED:"deleted"
}

var MODEl=
{
    Admins:"Admins",
}


var DATABASE_CONSTANT={
    ADMIN:"Admin",
    AFFILIATE:"Affiliate",
    APP:"App",
    VENUE:"Venue"
}

var APP_CONSTANTS=
{
    SERVER: SERVER,
    SCOPE:SCOPE,
    AGENT_TYPE:AGENT_TYPE,
    // MODELS:MODELS,
    // USERS:USERS,
    DATABASE_CONSTANT:DATABASE_CONSTANT

}
module.exports = APP_CONSTANTS;