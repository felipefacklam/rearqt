const mongoose = require('mongoose');
require('dotenv').config(); // Add this line to load environment variables

const connectMongo = async () => {
  await mongoose.connect(process.env.MONGO_URI); // Use process.env.MONGO_URI instead of hardcoded string
};

const createTestUser = async () => {
  await connectMongo();

  const User = mongoose.models.User || mongoose.model('User', {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  });

  const testUser = new User({
    username: 'rearqt',
    password: '080412',
  });

  await testUser.save();
  console.log('Test user created:', testUser);
};

createTestUser().catch((error) => {
  console.error('Error creating test user:', error);
});
