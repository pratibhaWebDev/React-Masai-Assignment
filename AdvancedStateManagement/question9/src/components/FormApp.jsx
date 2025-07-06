export default function FormApp() {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (state.email && state.password) {
        dispatch({ type: 'submit' });
      }
    };
  
    const handleReset = () => dispatch({ type: 'reset' });
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={state.email}
            onChange={(e) => dispatch({ type: 'email', payload: e.target.value })}
            placeholder="Enter email"
          />
          <input
            type="password"
            value={state.password}
            onChange={(e) => dispatch({ type: 'password', payload: e.target.value })}
            placeholder="Enter password"
          />
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </form>
  
        <div style={{ marginTop: "1rem" }}>
          {!state.isSubmitted ? (
            <div>No details found</div>
          ) : (
            <div>
              <div>User Email: {state.email}</div>
              <div>User Password: {state.password}</div>
            </div>
          )}
        </div>
      </div>
    );
  }
  