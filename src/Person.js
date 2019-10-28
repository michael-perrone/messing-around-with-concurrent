function fetchPerson() {
  return fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(response => response.results[0]);
}
const wrapPromise = promise => {
  let status = "pending";
  // keep track if promise is complete error or loading
  let result = "";
  // any extra data... data we get from promise or result
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    error => {
      status = "error";
      result = error;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      }
      return result;
    }
  };
  // in suspender we just wait for the promise
};

export const createResource = () => {
  return {
    person: wrapPromise(fetchPerson())
  };
};
