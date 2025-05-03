import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;

export const NODE_ENV = process.env.NODE_ENV || 'development';

export const DB_URL = process.env.DB_URL;

export const PROD_DB_URL = process.env.PROD_DB_URL;

export const JWT_SECRET = process.env.JWT_SECRET;

export const JWT_EXPIRY = process.env.JWT_EXPIRY || '1d';

export const AWS_REGION = process.env.AWS_REGION

export const AWS_ACCESS_KEY_ID=process.env.AWS_ACCESS_KEY_ID

export const AWS_SECRET_ACCESS_KEY=process.env.AWS_SECRET_ACCESS_KEY

export const AWS_BUCKET_NAME=process.env.AWS_BUCKET_NAME