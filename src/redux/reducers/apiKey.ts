interface initialState {
  apiKey: string;
}

const initialState: initialState = {
  apiKey: 'teste',
};

export function apiKey(state = initialState, action: any) {
  switch (action.type) {
    case 'ON_CHANGE':
      return {
        ...state,
        apiKey: action.payload,
      };
    default:
      return state;
  }
}
