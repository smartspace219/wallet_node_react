import { call, put } from 'redux-saga/effects';
import { API_BASE, FLIGHT_API_BASE } from 'containers/App/constants';
import { logoutSuccess } from 'containers/Login/actions';
import invalidTokenHelper from 'utils/invalidTokenHelper';
import { push } from 'connected-react-router';
import ObjectToFormData from './objectToFormData';
import { request, requestJSON } from './request';

class API {
  /**
   * Generic api data loader
   */
  static dataLoader(
    apiUri,
    onSuccess,
    onError,
    data,
    token,
    metaData = '',
    ...actionArguments
  ) {
    return function*() {
      // const baseUrl = metaData === 'flight' ? FLIGHT_API_BASE : API_BASE;
      const baseUrl = API_BASE;
      // const requestURL = `${baseUrl}${apiUri}`;
      let requestURL = '';
      if (/^https?:\/\//i.test(apiUri)) {
        requestURL = apiUri;
      } else {
        requestURL = `${baseUrl}${apiUri}`;
      }
      try {
        let options;
        if (data !== undefined) {
          options = {
            method: metaData.toLowerCase() === 'put' ? 'PUT' : 'POST', // PUT requests should have _id in data or should send a string "put" after token
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
              // 'X-Requested-With': 'XMLHttpRequest',
              // 'Access-Control-Allow-Origin': '*',
              Authorization: token, // ? `${usertoken}` : undefined
            },
          };
        } else {
          options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              // 'X-Requested-With': 'XMLHttpRequest',
              // 'Access-Control-Allow-Origin': '*',
              Authorization: token, // ? `${usertoken}` : undefined
            },
          };
        }
        const response = yield call(requestJSON, requestURL, options);
        yield put(onSuccess(response, data, metaData, ...actionArguments));
      } catch (err) {
        let error = null;
        try {
          error = yield call(() => err.response.json());
          const exludeApi = ['login/', 'cms/login/'];
          if (
            (error.status === 401 || error.message === 'Invalid User') &&
            !exludeApi.includes(apiUri)
          ) {
            localStorage.removeItem('token');
            yield put(push('/'));
          }
        } catch (a) {
          // if (Object.keys(a).length === 0) {
          //   error = {
          //     status: 500,
          //     message: "There might be internet problem Can you pls check it."
          //   };
          // } else {
          error = {
            errors: [
              {
                code: a.response.status,
                msg: a.response.statusText,
              },
            ],
          };
          // }
        }
        // check if token expiry
        // const tokenIsNotValid = invalidTokenHelper(error);
        // if (tokenIsNotValid) {
        //   // yield put(showTokenisInvalid());
        //   localStorage.clear();
        //   sessionStorage.removeItem('token');
        //   yield put(logoutSuccess());
        // } else {
        yield put(onError(error, ...actionArguments));
        // }
      }
    };
  }

  /**
   * Generic api data loader for GET method with request body
   */
  static getDataLoader(
    apiUri,
    onSuccess,
    onError,
    data,
    token,
    metaData = '',
    ...actionArguments
  ) {
    return function*() {
      const baseUrl = API_BASE;
      let requestURL = '';
      if (/^https?:\/\//i.test(apiUri)) {
        requestURL = apiUri;
      } else {
        requestURL = `${baseUrl}${apiUri}`;
      }
      try {
        let options;

        options = {
          method: 'GET',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            Authorization: token, // ? `${usertoken}` : undefined
          },
        };
        const response = yield call(requestJSON, requestURL, options);
        yield put(onSuccess(response, data, metaData, ...actionArguments));
      } catch (err) {
        let error = null;
        try {
          error = yield call(() => err.response.json());
        } catch (a) {
          error = {
            errors: [
              {
                code: a.response.status,
                msg: a.response.statusText,
              },
            ],
          };
        }

        yield put(onError(error, ...actionArguments));
      }
    };
  }

  /*
   * Shorthand GET function
   */
  static getDataWithRequestBody(
    apiUri,
    onSuccess,
    onError,
    data,
    token,
    ...actionArguments
  ) {
    return this.getDataLoader(
      apiUri,
      onSuccess,
      onError,
      data,
      token,
      ...actionArguments,
    );
  }

  static multipartPost(
    apiUri,
    onSuccess,
    onError,
    data,
    document,
    token = '',
    metaData = '',
    ...actionArguments
  ) {
    return function*() {
      const requestURL = `${API_BASE}${apiUri}`;
      let multipartData = new FormData();
      multipartData = ObjectToFormData(data, multipartData);
      if (Object.prototype.toString.call(document) === '[object Array]') {
        for (let i = 0; i < document.length; i++) {
          multipartData.append('file', document[i]);
        }
      } else {
        multipartData.append('file', document);
      }
      try {
        const options = {
          method: metaData.toLowerCase() === 'put' ? 'PUT' : 'POST',
          body: multipartData,
          headers: {
            // processData: false,
            // 'Content-Type': 'multipart/form-data',
            // contentType: false,
            // 'X-Requested-With': 'XMLHttpRequest',
            Authorization: token,
          },
        };

        const response = yield call(request, requestURL, options);
        yield put(onSuccess(response, actionArguments));
      } catch (e) {
        let error = null;
        try {
          error = yield call(() => e.response.json());
        } catch (a) {
          error = {
            errors: [
              {
                code: e.response.status,
                msg: e.response.statusText,
              },
            ],
          };
          // }
        }
        // check if token expiry
        yield put(onError(error, ...actionArguments));
        // }
      }
    };
  }

  static multipartPostWithKycDoc(
    apiUri,
    onSuccess,
    onError,
    data,
    document,
    document2,
    document3,
    token = '',
    metaData = '',
    ...actionArguments
  ) {
    return function*() {
      const requestURL = `${API_BASE}${apiUri}`;
      let multipartData = new FormData();
      multipartData = ObjectToFormData(data, multipartData);
      if (Object.prototype.toString.call(document) === '[object Array]') {
        for (let i = 0; i < document.length; i++) {
          multipartData.append(
            'identification_verification_front',
            document[i],
          );
        }
      } else {
        multipartData.append('identification_verification_front', document);
      }
      if (Object.prototype.toString.call(document2) === '[object Array]') {
        for (let i = 0; i < document2.length; i++) {
          multipartData.append(
            'identification_verification_back',
            document2[i],
          );
        }
      } else {
        multipartData.append('identification_verification_back', document2);
      }
      if (Object.prototype.toString.call(document3) === '[object Array]') {
        for (let i = 0; i < document3.length; i++) {
          multipartData.append('hand_held_identification', document3[i]);
        }
      } else {
        multipartData.append('hand_held_identification', document3);
      }
      try {
        const options = {
          method: metaData.toLowerCase() === 'put' ? 'PUT' : 'POST',
          body: multipartData,
          headers: {
            // processData: false,
            // 'Content-Type': 'multipart/form-data',
            // contentType: false,
            // 'X-Requested-With': 'XMLHttpRequest',
            Authorization: token,
          },
        };

        const response = yield call(request, requestURL, options);
        yield put(onSuccess(response, actionArguments));
      } catch (e) {
        let error = null;
        try {
          error = yield call(() => e.response.json());
        } catch (a) {
          error = {
            errors: [
              {
                code: e.response.status,
                msg: e.response.statusText,
              },
            ],
          };
          // }
        }
        // check if token expiry
        yield put(onError(error, ...actionArguments));
        // }
      }
    };
  }

  static multipartPostWithMultipleImageField(
    apiUri,
    onSuccess,
    onError,
    data,
    main_image,
    logo_image,
    token = '',
    metaData = '',
    ...actionArguments
  ) {
    return function*() {
      const requestURL = `${API_BASE}${apiUri}`;
      let multipartData = new FormData();
      multipartData = ObjectToFormData(data, multipartData);
      if (Object.prototype.toString.call(logo_image) === '[object Array]') {
        for (let i = 0; i < logo_image.length; i++) {
          multipartData.append('logo_image', logo_image[i]);
        }
      } else {
        multipartData.append('logo_image', logo_image);
      }
      if (Object.prototype.toString.call(main_image) === '[object Array]') {
        for (let i = 0; i < main_image.length; i++) {
          multipartData.append('main_image', main_image[i]);
        }
      } else {
        multipartData.append('main_image', main_image);
      }
      try {
        const options = {
          method: metaData.toLowerCase() === 'put' ? 'PUT' : 'POST',
          body: multipartData,
          headers: {
            processData: false,
            // 'Content-Type': 'multipart/form-data',
            // contentType: false,
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: token,
          },
        };
        const response = yield call(request, requestURL, options);
        yield put(onSuccess(response, actionArguments));
      } catch (e) {
        let error = null;
        try {
          error = yield call(() => e.response.json());
        } catch (a) {
          // if (Object.keys(a).length === 0) {
          //   error = {
          //     status: 500,
          //     message: "There might be internet problem Can you pls check it."
          //   };
          // } else {
          error = {
            errors: [
              {
                code: e.response.status,
                msg: e.response.statusText,
              },
            ],
          };
          // }
        }
        // check if token expiry
        // const tokenIsNotValid = invalidTokenHelper(error);
        // if (tokenIsNotValid) {
        //   localStorage.clear();
        //   sessionStorage.removeItem('token');
        //   yield put(logoutSuccess());
        // } else {
        yield put(onError(error, ...actionArguments));
        // }
      }
    };
  }

  static multipartPostWithDifferentFileTypes(
    apiUri,
    onSuccess,
    onError,
    data,
    document,
    token = '',
    metaData = '',
    ...actionArguments
  ) {
    return function*() {
      const requestURL = `${API_BASE}${apiUri}`;
      let multipartData = new FormData();
      multipartData = ObjectToFormData(data, multipartData);
      if (Object.prototype.toString.call(document) === '[object Array]') {
        for (let i = 0; i < document.length; i++) {
          if (
            document[i].type === ('image/jpeg' || 'image/jpg' || 'image/png')
          ) {
            multipartData.append('images', document[i]);
          } else {
            multipartData.append('documents', document[i]);
          }
        }
      } else if (
        document.type === ('image/jpeg' || 'image/jpg' || 'image/png')
      ) {
        multipartData.append('image', document);
      } else {
        multipartData.append('document', document);
      }
      try {
        const options = {
          method: metaData.toLowerCase() === 'put' ? 'PUT' : 'POST',
          body: multipartData,
          headers: {
            // processData: false,
            // 'Content-Type': 'multipart/form-data',
            // contentType: false,
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: token,
          },
        };
        const response = yield call(request, requestURL, options);
        yield put(onSuccess(response, actionArguments));
      } catch (e) {
        let error = null;
        try {
          error = yield call(() => e.response.json());
        } catch (a) {
          // if (Object.keys(a).length === 0) {
          //   error = {
          //     status: 500,
          //     message: "There might be internet problem Can you pls check it."
          //   };
          // } else {
          error = {
            errors: [
              {
                code: e.response.status,
                msg: e.response.statusText,
              },
            ],
          };
          // }
        }
        // check if token expiry
        // const tokenIsNotValid = invalidTokenHelper(error);
        // if (tokenIsNotValid) {
        //   localStorage.clear();
        //   sessionStorage.removeItem('token');
        //   yield put(logoutSuccess());
        // } else {
        yield put(onError(error, ...actionArguments));
        // }
      }
    };
  }

  static multipartDirectUpload(apiUri, data, document, token, metaData = '') {
    const requestURL = `${API_BASE}${apiUri}`;
    let multipartData = new FormData();
    multipartData = ObjectToFormData(data, multipartData);
    if (Object.prototype.toString.call(document) === '[object Array]') {
      for (let i = 0; i < document.length; i++) {
        multipartData.append('file', document[i]);
      }
    } else {
      multipartData.append('file', document);
    }
    try {
      const options = {
        method: metaData.toLowerCase() === 'put' ? 'PUT' : 'POST',
        body: multipartData,
        headers: {
          processData: false,
          // contentType: false,
          'X-Requested-With': 'XMLHttpRequest',
          Authorization: token,
        },
      };
      return fetch(requestURL, options);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  /*
   * Shorthand GET function
   */
  static get(apiUri, onSuccess, onError, ...actionArguments) {
    return this.dataLoader(
      apiUri,
      onSuccess,
      onError,
      undefined,
      ...actionArguments,
    );
  }

  /*
   * Shorthand POST function
   */
  static post(
    apiUri,
    onSuccess,
    onError,
    data,
    token,
    metaData,
    ...actionArguments
  ) {
    return this.dataLoader(
      apiUri,
      onSuccess,
      onError,
      data,
      token,
      metaData,
      ...actionArguments,
    );
  }

  /*
   * Shorthand PUT function
   */
  static put(
    apiUri,
    onSuccess,
    onError,
    data,
    token,
    metaData = 'put',
    ...actionArguments
  ) {
    return this.dataLoader(
      apiUri,
      onSuccess,
      onError,
      data,
      token,
      metaData,
      ...actionArguments,
    );
  }

  /*
   * Shorthand PATCH function
   */
  static patch(
    apiUri,
    onSuccess,
    onError,
    data = {},
    token,
    ...actionArguments
  ) {
    return function*() {
      const requestURL = `${API_BASE}${apiUri}`;
      try {
        const options = {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: token, // `${token}`
          },
          body: JSON.stringify(data),
        };
        const response = yield call(request, requestURL, options);
        yield put(onSuccess(response, ...actionArguments));
      } catch (e) {
        let error = null;
        try {
          error = yield call(() => e.response.json());
        } catch (a) {
          // if (Object.keys(a).length === 0) {
          //   error = {
          //     status: 500,
          //     message: "There might be internet problem Can you pls check it."
          //   };
          // } else {
          error = {
            errors: [
              {
                code: e.response.status,
                msg: e.response.statusText,
              },
            ],
          };
          // }
        }
        // check if token expiry
        // const tokenIsNotValid = invalidTokenHelper(error);
        // if (tokenIsNotValid) {
        //   // yield put(showTokenisInvalid());
        //   localStorage.clear();
        //   sessionStorage.removeItem('token');
        //   yield put(logoutSuccess());
        // } else {
        yield put(onError(error, ...actionArguments));
        // }
      }
    };
  }

  /*
   * Shorthand DELETE function
   */
  static delete(
    apiUri,
    onSuccess,
    onError,
    token,
    data = {},
    ...actionArguments
  ) {
    return function*() {
      const requestURL = `${API_BASE}${apiUri}`;
      try {
        // Call our request helper (see 'utils/request')
        const options = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: token,
          },
          body: JSON.stringify(data),
        };
        const response = yield call(request, requestURL, options);
        yield put(onSuccess(response, actionArguments));
      } catch (e) {
        let error = null;
        try {
          error = yield call(() => e.response.json());
        } catch (_) {
          // if (Object.keys(_).length === 0) {
          //   error = {
          //     status: 500,
          //     message: "There might be internet problem Can you pls check it."
          //   };
          // } else {
          error = {
            errors: [
              {
                code: e.response.status,
                msg: e.response.statusText,
              },
            ],
          };
          // }
        }
        // check if token expiry
        // const tokenIsNotValid = invalidTokenHelper(error);
        // if (tokenIsNotValid) {
        //   localStorage.clear();
        //   sessionStorage.removeItem('token');
        //   yield put(logoutSuccess());
        // } else {
        yield put(onError(error, ...actionArguments));
        // }
      }
    };
  }
}

export default API;
