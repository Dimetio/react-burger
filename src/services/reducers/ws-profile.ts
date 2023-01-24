import { TWSProfileActions } from "../actions/ws-profile";
import { TWSState, WebsocketStatus } from "../types/ws";
import {
  WS_PROFILE_CONNECTING,
  WS_PROFILE_OPEN,
  WS_PROFILE_CLOSE,
  WS_PROFILE_ERROR,
  WS_PROFILE_MESSAGE,
} from "../constants/ws-profile";

const { CONNECTING, ONLINE, OFFLINE } = WebsocketStatus;

export const initialState: TWSState = {
  status: OFFLINE,
  orders: null,
  total: null,
  totalToday: null,
  error: "",
};

export default function wsProfileReducer(
  state = initialState,
  action: TWSProfileActions
) {
  switch (action.type) {
    case WS_PROFILE_CONNECTING:
      return {
        ...state,
        status: CONNECTING,
      };

    case WS_PROFILE_OPEN:
      return {
        ...state,
        status: ONLINE,
        error: "",
      };

    case WS_PROFILE_CLOSE:
      return {
        ...state,
        status: OFFLINE,
      };

    case WS_PROFILE_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case WS_PROFILE_MESSAGE:
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };

    default:
      return state;
  }
}
