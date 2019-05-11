import { createModule } from 'typeless';

/* == Module Interface == */

export const [useGeolocationModule, GeolocationActions, getGeolocationState] = createModule(
  Symbol('geolocation')
)
  // Create Actions Creators
  .withActions({
    getPosition: ({ coords: { latitude, longitude } }) => ({ payload: { latitude, longitude } })
  })
  .withState<GeolocationState>();

export interface GeolocationState {
  latitude: string;
  longitude: string;
}
