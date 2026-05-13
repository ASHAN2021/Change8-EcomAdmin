import 'dotenv/config';
import bcrypt from 'bcrypt';
import { sequelize, User } from './src/models/index.js';

async function seed() {
  await sequelize.sync({ alter: true });

  const hash = await bcrypt.hash('admin123', 10);
  await User.findOrCreate({
    where: { email: 'admin@example.com' },
    defaults: { name: 'Super Admin', password: hash, role: 'admin' },
  });

  const userHash = await bcrypt.hash('user123', 10);
  await User.findOrCreate({
    where: { email: 'user@example.com' },
    defaults: { name: 'Regular User', password: userHash, role: 'user' },
  });

  console.log('Seeded: admin@example.com / admin123 and user@example.com / user123');
  process.exit(0);
}
seed();