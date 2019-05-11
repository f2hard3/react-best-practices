// import * as Rx from 'typeless/rx';
import { useGeolocationModule, GeolocationActions, GeolocationState } from "./interface"

const initialState: GeolocationState = {
  latitude: "",
  longitude: ""
};

// useGeolocationModule
//   .epic()
//   // Listen for `count` and dispatch `countDone` with 500ms delay
//   .on(GeolocationActions.startCount, () =>
//     Rx.of(GeolocationActions.countDone(1)).pipe(Rx.delay(500))
//   );

// Create a reducer
// Under the hood it uses `immer` and state mutations are allowed
useGeolocationModule
  .reducer(initialState)
  .on(GeolocationActions.getPosition, (state, { latitude, longitude }) => {
    state.latitude = latitude;
    state.longitude += longitude;
  });