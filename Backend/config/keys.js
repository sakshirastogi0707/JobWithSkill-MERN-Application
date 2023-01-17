require('dotenv').config()

module.exports={
DB_URL: process.env.MONGODB_URL,
PORT: process.env.APP_PORT,
MSG: process.env.MONGODB_SUCCESS_MSG,
SECRET: process.env.APP_SECRET,
HOST: process.env.APP_HOST,
CLIENT_URL: process.env.CLIENT_APP_URL,
SERVICE_NAME: process.env.SERVICE,
MY_PASSWORD:process.env.MY_EMAIL_PASSWORD
}

