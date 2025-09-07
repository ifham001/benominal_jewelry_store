import dotenv from 'dotenv';
import app from '../app';
import connectDB from '../src/config/db';

dotenv.config();

const port: number = 2029;

// Connect to database
connectDB();

// Start server
app.listen(port, (): void => {
    console.log(`Server is running on port ${port}`);
});

export default app; 