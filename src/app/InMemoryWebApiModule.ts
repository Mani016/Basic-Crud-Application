import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Car } from './car';

export class CarInMemDataService implements InMemoryDbService {
    createDb() {
      const cars: Car[] = [
        { id: 1, model: 'BMW', price: 40000, color: 'Red'  },
        { id: 2, model: 'Audi', price: 45000, color: 'Blue'  },
        { id: 3, model: 'Tata', price: 20000, color: 'White'  },
        { id: 4, model: 'Honda', price: 30000, color: 'Black' },
        { id: 5, model: 'GM', price: 30000, color: 'Red'  }
       ];
      return { cars};
    }
}

