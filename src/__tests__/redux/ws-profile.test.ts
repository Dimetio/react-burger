import {
  WS_PROFILE_CONNECTING,
  WS_PROFILE_OPEN,
  WS_PROFILE_CLOSE,
  WS_PROFILE_ERROR,
  WS_PROFILE_MESSAGE,
} from "../../services/constants/ws-profile";
import wsProfileReducer, {
  initialState,
} from "../../services/reducers/ws-profile";
import { mockWsMessage } from "../../utils/mock-data";

describe("ws common reducer", () => {
  it("should return the initial state", () => {
    expect(wsProfileReducer(undefined, {} as any)).toEqual(initialState);
  });

  it("should handle WS_PROFILE_CONNECTING", () => {
    expect(
      wsProfileReducer(initialState, {
        type: WS_PROFILE_CONNECTING,
      })
    ).toEqual({
      ...initialState,
      status: "CONNECTING...",
    });
  });

  it("should handle WS_PROFILE_OPEN", () => {
    expect(
      wsProfileReducer(initialState, {
        type: WS_PROFILE_OPEN,
      })
    ).toEqual({
      ...initialState,
      status: "ONLINE",
      error: "",
    });
  });

  it("should handle WS_PROFILE_CLOSE", () => {
    expect(
      wsProfileReducer(initialState, {
        type: WS_PROFILE_CLOSE,
      })
    ).toEqual({
      ...initialState,
      status: "OFFLINE",
    });
  });

  it("should handle WS_PROFILE_ERROR", () => {
    expect(
      wsProfileReducer(initialState, {
        type: WS_PROFILE_ERROR,
        payload: "error",
      })
    ).toEqual({
      ...initialState,
      error: "error",
    });
  });

  it("should handle WS_PROFILE_MESSAGE", () => {
    expect(
      wsProfileReducer(initialState, {
        type: WS_PROFILE_MESSAGE,
        payload: mockWsMessage,
      })
    ).toEqual({
      ...initialState,
      orders: mockWsMessage.orders,
      total: mockWsMessage.total,
      totalToday: mockWsMessage.totalToday,
    });
  });
});
