
import { BookActions, BookActionTypes } from '../actions/book.actions';
import { Book } from '../shared/book';

export interface State {
  book: Book[];
  loading: boolean;
}

export const initialState: State = {
  book: [],
  loading: false
};

export function reducer(state = initialState, action: BookActions): State {
  switch (action.type) {

    case BookActionTypes.LoadBooks:
      return {
        ...state,
        loading: true
      };

    case BookActionTypes.LoadBooksSuccess: {
      const book = action.payload.data;
      return {
        ...state,
        loading: false,
        book
      };
    }

    case BookActionTypes.LoadBooksFailure:
      return {
        ...state,
        loading: false,
        book: []
      };

    default:
      return state;
  }
}
