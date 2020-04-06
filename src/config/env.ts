import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV;
const _env = (att: string) => {
    return process.env[`${env}_${att}`];
};

export default {
    DB_CONNECT: _env('DB_CONNECT'),
    PORT: Number(_env('PORT')),
    TOKEN_SECRET: _env('TOKEN_SECRET')
};
