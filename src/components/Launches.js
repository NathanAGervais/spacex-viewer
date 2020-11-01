import axios from 'axios';
import React, { useReducer, useEffect } from 'react';

const initialState = { loading: true, error: '', launches: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: '',
        launches: [...action.payload],
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        error: 'Something went wrong',
        launches: [],
      };
    default:
      return state;
  }
};

export function Launches() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get('https://api.spacexdata.com/v3/launches')
      .then((response) => dispatch({ type: 'FETCH_SUCCESS', payload: response.data }))
      .catch(() => dispatch({ type: 'FETCH_ERROR' }));
  }, []);

  const launchesOrErrors = () =>
    state.error ? (
      <div>{state.error}</div>
    ) : (
      state.launches.map((l) => (
        <div key={l.flight_number}>
          {l.mission_name}-{l.rocket.rocket_id}-{l.launch_year}
        </div>
      ))
    );
  return state.loading ? <div>loading</div> : launchesOrErrors();
}

export default Launches;
