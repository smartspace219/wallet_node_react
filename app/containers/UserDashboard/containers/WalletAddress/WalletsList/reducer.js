import { fromJS } from "immutable";
import * as types from "./constants";

const initialState = fromJS({
  requesting: false,
  success: false,
  walletAddressesResponse: null,
  getWalletAddressRequesting: false,
  postWalletAddressRequesting: false,
  postAddressResponse: null,
  postWalletAddressError: {},
  deleteWalletAddressRequesting: false,
  deleteWalletAddressError: null,
  deleteWalletAddressResponse: {},
  error: null
});

function walletsListReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ADDRESS_REQUEST:
      return state.merge({
        getWalletAddressRequesting: true,
        error: null,
        walletAddressesResponse: null,
        success: false
      });
    case types.GET_ADDRESS_SUCCESS:
      return state.merge({
        getWalletAddressRequesting: false,
        error: null,
        walletAddressesResponse: action.response,
        success: true
      });
      
    case types.GET_ADDRESS_FAILURE:
      return state.merge({
        getWalletAddressRequesting: false,
        walletAddressesResponse: null,
        error: action.error.message,
        success: false
      });
    case types.POST_WALLET_ADDRESS_REQUEST:
      return state.merge({
        postWalletAddressRequesting: true,
        postWalletAddressError: null,
        error: null,
        postAddressResponse: null,
        success: false
      });
    case types.POST_WALLET_ADDRESS_SUCCESS:
      return state.merge({
        postWalletAddressRequesting: false,
        postWalletAddressError: null,
        error: null,
        postAddressResponse: action.response,
        success: true
      });
      
    case types.POST_WALLET_ADDRESS_FAILURE:
      return state.merge({
        postWalletAddressRequesting: false,
        postAddressResponse: null,
        error: action.error.message,
        postWalletAddressError: action.error,
        success: false
      });  

    case types.DELETE_WALLET_ADDRESS_REQUEST:
      return state.merge({
        deleteWalletAddressRequesting: true,
        deleteWalletAddressError: null,
        deleteWalletAddressResponse: null,
        success: false
      });
    case types.DELETE_WALLET_ADDRESS_SUCCESS:
      return state.merge({
        deleteWalletAddressRequesting: false,
        deleteWalletAddressError: null,
        deleteWalletAddressResponse: action.response,
        success: true
      });
      
    case types.DELETE_WALLET_ADDRESS_FAILURE:
      return state.merge({
        deleteWalletAddressRequesting: false,
        deleteAddressResponse: null,
        deleteWalletAddressError: action.error,
        success: false
      });   
    case types.CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
}

export default walletsListReducer;
