import { MockResolvedValue, ShallowProperties } from "mgdg"
import { Rocket } from '../../api'
import faker from 'faker'

const rockets = [
  {id: faker.random.uuid(), name: 'Atlas-Agena', type: 'Medium'},
  {id: faker.random.uuid(), name: 'Thor-Ablestar', type: 'Big'},
  {id: faker.random.uuid(), name: 'Thor-Delta', type: 'Small'},
  {id: faker.random.uuid(), name: 'SM-65E Atlas', type: 'Medium'},
  {id: faker.random.uuid(), name: 'Atlas LV-3B', type: 'Big'},
  {id: faker.random.uuid(), name: 'Scout', type: 'Small'},
  {id: faker.random.uuid(), name: 'Rehbar-I', type: 'Medium'},
  { id: faker.random.uuid(), name: 'Saturn I', type: 'Big' }
]

const MockRocket = (
  _parent,
  args,
): MockResolvedValue<ShallowProperties<Rocket>> => {
  return {
    id: () => faker.random.uuid(),
    name: () => faker.random.word(),
    type: () => faker.random.word()
  }
}

export default MockRocket