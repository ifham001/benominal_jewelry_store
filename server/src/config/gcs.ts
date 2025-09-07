import { Storage, Bucket } from '@google-cloud/storage';
// import path from 'path';
// import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv'
dotenv.config()

// Get __dirname equivalent in ES Modules
// const __filename: string = fileURLToPath(import.meta.url);
// const __dirname: string = path.dirname(__filename);

// Use relative path from current file to JSON key
const credentials = JSON.parse(process.env.GOOGLE_KEY!);
// const keyPath: string = path.resolve(__dirname, '../../google_keys.json');

const storage: Storage = new Storage({
  keyFilename: credentials,
  projectId: 'deploy-4abde',
});

const bucket: Bucket = storage.bucket('benominal');

export { storage, bucket }; 