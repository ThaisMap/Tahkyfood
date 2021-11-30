import { Option } from '../../types/option';

const INITIAL_STATE: Option[] = [
  {
    id: 0,
    title: 'Miojo',
  },
  {
    id: 1,
    title: 'Pão com ovo',
  },
  {
    id: 2,
    title: 'Mingau de aveia',
  },
  {
    id: 3,
    title: 'Mexido',
  },
  {
    id: 4,
    title: 'Pipoca',
  },
  {
    id: 5,
    title: 'Capuccino e biscoitos',
  },
];

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'ADD_ITEM') {
    return [...state, { id: state.length, title: action.item }];
  }
  return state;
}

export const addItem = (item: string) => {
  return {
    type: 'ADD_ITEM',
    item,
  };
};
