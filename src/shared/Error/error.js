import Message from 'components/Common/Notification';
const DEFAULT_ERROR_MESSAGE = "Something went wrong!";

function selectErrorMessage = (error) => {
  if (error.response && error.response.data && error.response.data.errors) {
    let errorMsg = "";

    error.response.data.errors.forEach(item => {
      errorMsg += item.messages[0] + "\n";
    });

    return errorMsg;
  }

  if (error.response) {
    return error.response.data.messages;
  }

  return error.message || DEFAULT_ERROR_MESSAGE;
}

async function requestRefreshToken() {
  try {
    let asauth = window.localStorage.getItem("asauth");
    asauth = JSON.parse(asauth);
    if (!asauth) return null;

    let {email, refreshToken} = asauth;
    if (!email || !refreshToken) return null;
    const tokenResponse = await fetchRefreshToken({email, refreshToken});
    return tokenResponse.data;
  } catch(error) {
    return null;
  }
}

function selectErrorCode(error) {
  if (error.response) {
    return error.response.status;
  }

  return 500;
}

export default class Errors {
  static handle(error) {
    if (process.env.NODE_ENV !== "test") {
      console.error(selectErrorMessage(error));
      console.error(error);
    }

    if (selectErrorCode(error) == 401) {
      getHistory().push('/signin');
      window.localStorage.removeItem("asauth");
      return;
    }

    if (selectErrorCode(error) == 403) {
      Message("error", "You don't have permission to access this resource");
      return;
    }

    if (
      selectErrorCode(error) === 400 ||
      selectErrorCode(error) === 409 ||
      selectErrorCode(error) === 404
    ) {
      Message("error", selectErrorMessage(error));
      return;
    }

    Message("error", selectErrorMessage(error));
  }

  static errorCode(error) {
    return selectErrorCode(error);
  }

  static selectMessage(error) {
    return selectErrorMessage(error);
  }

  static showMessage(error) {
    Message("error", selectErrorMessage(error));
  }
}