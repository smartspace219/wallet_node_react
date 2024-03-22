import { createSelector } from "reselect";

const selectWalletListInfo = state => state.get("walletsList");

const makeSelectSuccess = () => createSelector(selectWalletListInfo, state => state.get('success'));
const makeSelectWalletAddressesResponse = () => createSelector(selectWalletListInfo, state => state.get('walletAddressesResponse'));
const makeSelectError = () => createSelector(selectWalletListInfo, state => state.get('error'));
const makeSelectGetWalletAddressRequesting = () => createSelector(selectWalletListInfo, state => state.get('getWalletAddressRequesting'));
const makeSelectUser = () => createSelector(selectWalletListInfo, state => state.get('user'));

const makeSelectPostWalletAddressRequesting = () => createSelector(selectWalletListInfo, state => state.get('postWalletAddressRequesting'));
const makeSelectPostWalletAddressResponse = () => createSelector(selectWalletListInfo, state => state.get('postAddressResponse'));
const makeSelectPostWalletAddressError = () => createSelector(selectWalletListInfo, state => state.get('postWalletAddressError'));

const makeSelectDeleteWalletAddressRequesting = () => createSelector(selectWalletListInfo, state => state.get('deleteWalletAddressRequesting'));
const makeSelectDeleteWalletAddressResponse = () => createSelector(selectWalletListInfo, state => state.get('deleteWalletAddressResponse'));
const makeSelectDeleteWalletAddressError = () => createSelector(selectWalletListInfo, state => state.get('deleteWalletAddressError'));

export {
  makeSelectSuccess,
  makeSelectWalletAddressesResponse,
  makeSelectError,
  makeSelectUser,
  makeSelectPostWalletAddressResponse,
  makeSelectPostWalletAddressError,
  makeSelectGetWalletAddressRequesting,
  makeSelectPostWalletAddressRequesting,
  makeSelectDeleteWalletAddressResponse,
  makeSelectDeleteWalletAddressRequesting,
  makeSelectDeleteWalletAddressError,
};
