import cors from 'cors';
import express from 'express';
import 'express-async-errors';

import routes from '@shared/infra/http/routes/index';

// SOLID
// # Single Responsibility Principle
// Open Closed Principle
// # Liskov Substitution Principle
// Interface segregation principle
// # Dependency Inversion Principle

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen('3333', () => {
  console.log('🚀 Server started 3333!');
});
