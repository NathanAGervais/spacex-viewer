import React from 'react';
import { useLaunchesState } from '../contexts/launchesContext';

export function Launches() {
  const { error, launches, loading } = useLaunchesState();
  const launchesOrErrors = () =>
    error ? (
      <div>{error}</div>
    ) : (
      launches.map((l) => (
        <div key={l.flight_number}>
          {l.mission_name}-{l.rocket.rocket_id}-{l.launch_year}
        </div>
      ))
    );
  return loading ? <div>loading</div> : launchesOrErrors();
}

export default Launches;
