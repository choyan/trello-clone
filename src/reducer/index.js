import upsert from '../utils/upsert';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'columnAdd':
      return { ...state, columns: [...state.columns, action.data] };
    case 'columnDelete':
      return {
        ...state,
        columns: state.columns.filter((column) => column.id !== action.id),
        cards: state.cards.filter((card) => card.column !== action.id),
      };
    case 'columnEdit':
      upsert(state.columns, action.data);
      return {
        ...state,
      };
    case 'cardAdd':
      return { ...state, cards: [...state.cards, action.data] };
    case 'cardDelete':
      return { ...state, cards: state.cards.filter((card) => card.id !== action.id) };
    case 'cardEdit':
      upsert(state.cards, action.data);
      return {
        ...state,
      };
    case 'changeSelectedCard':
      return {
        ...state,
        selectedCard: action.data,
      };
    default:
      return state;
  }
};
