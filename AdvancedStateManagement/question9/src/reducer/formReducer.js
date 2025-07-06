function reducer(state, action) {
    switch (action.type) {
      case 'email':
        return { ...state, email: action.payload };
      case 'password':
        return { ...state, password: action.payload };
      case 'submit':
        return { ...state, isSubmitted: true };
      case 'reset':
        return initialState;
      default:
        throw new Error('invalid action type');
    }
  }
  