import {
  WS_COMMON_CONNECTING,
  WS_COMMON_OPEN,
  WS_COMMON_ERROR,
  WS_COMMON_MESSAGE,
  WS_COMMON_CLOSE,
} from "../../services/constants/ws-common";
import wsCommonReducer, {
  initialState,
} from "../../services/reducers/ws-common";
import { mockWsMessage } from "../../utils/mock-data";

describe("ws common reducer", () => {
  it("should return the initial state", () => {
    expect(wsCommonReducer(undefined, {} as any)).toEqual(initialState);
  });

  it("should handle WS_COMMON_CONNECTING", () => {
    expect(
      wsCommonReducer(initialState, {
        type: WS_COMMON_CONNECTING,
      })
    ).toEqual({
      ...initialState,
      status: "CONNECTING...",
    });
  });

  it("should handle WS_COMMON_OPEN", () => {
    expect(
      wsCommonReducer(initialState, {
        type: WS_COMMON_OPEN,
      })
    ).toEqual({
      ...initialState,
      status: "ONLINE",
      error: "",
    });
  });

  it("should handle WS_COMMON_CLOSE", () => {
    expect(
      wsCommonReducer(initialState, {
        type: WS_COMMON_CLOSE,
      })
    ).toEqual({
      ...initialState,
      status: "OFFLINE",
    });
  });

  it("should handle WS_COMMON_ERROR", () => {
    expect(
      wsCommonReducer(initialState, {
        type: WS_COMMON_ERROR,
        payload: "error",
      })
    ).toEqual({
      ...initialState,
      error: "error",
    });
  });

  it("should handle WS_COMMON_MESSAGE", () => {
    expect(
      wsCommonReducer(initialState, {
        type: WS_COMMON_MESSAGE,
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
