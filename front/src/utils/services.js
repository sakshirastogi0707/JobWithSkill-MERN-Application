import settings from "../settings";

export async function getFromServer(endPoint) {
  let data = null;
  // console.log("get api request : ", endPoint, authToken)
  try {
    // console.log("called", settings.baseUrl + endPoint);
    const response = await fetch(settings.baseUrl + endPoint, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // 'Authorization': `Bearer ${authToken}`
      },
    });
    if (!response.ok) return Promise.reject(response);
    else {
      // console.log("SUCCCCCCCCCCC", response);

      const contentType = response.headers.get("content-type");
      // console.log("SUCCCCCCCCCCC----", contentType);
      if (contentType && contentType.indexOf("application/json") !== -1) {
        data = await response.json();
      } else {
        data = await response.text();
      }
    }
  } catch (error) {
    console.log("errorrrrr", error);

    return Promise.reject(error);
  }
  // console.log('get api data : ', data)

  return data;
}

export async function postToServer(path, body = {}) {
  let responseData = null;
  console.log(JSON.stringify(body), "=======", settings.baseUrl + path);
  try {
    const response = await fetch(settings.baseUrl + path, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) return Promise.reject(response);
    else {
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
      }
    }
  } catch (error) {
    return Promise.reject(error);
  }
  return responseData;
}

export async function updateToServer(path, body = {}) {
  let responseData = null;
  // console.log(authToken, "--------", JSON.stringify(body), "=======", settings.baseUrl + path,)
  try {
    const response = await fetch(settings.baseUrl + path, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // 'auth_token': authToken
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) return Promise.reject(response);
    else {
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
      }
    }
  } catch (error) {
    return Promise.reject(error);
  }
  return responseData;
}

export async function deleteFromServer(path, body = {}) {
  let responseData = null;
  // console.log(authToken, "--------", settings.baseUrl + path,)
  try {
    const response = await fetch(settings.baseUrl + path, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // 'auth_token': authToken
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) return Promise.reject(response);
    else {
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
      }
    }
  } catch (error) {
    return Promise.reject(error);
  }
  return responseData;
}
