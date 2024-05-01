const app = require('.');
const { connectDB } = require('./config/db');

const PORT = process.env.PORT || 5454;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});