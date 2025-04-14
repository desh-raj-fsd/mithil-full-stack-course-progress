//Create two functions fetchUser() and fetchPosts(), both returning promises that resolve in 1 second. Use async-await and Promise.all to fetch both simultaneously and log the results as part of fetchAllData()

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Post One" },
        { id: 2, title: "Post Two" },
      ]);
    }, 1000);
  });
}

async function fetchAllData() {
  try {
    const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
    console.log("User:", user);
    console.log("Posts:", posts);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchAllData();

//Write two functions fetchSuccess() and fetchFailure(), where fetchSuccess() returns a promise that resolves successfully after 1 second, and fetchFailure() returns a promise that rejects with an error after 1 second. Create a function handlePromises() that calls both functions using Promise.all and handles success and failure cases.

function fetchSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success: Data fetched successfully!");
    }, 1000);
  });
}

function fetchFailure() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Failure: Something went wrong!"));
    }, 1000);
  });
}

async function handlePromises() {
  try {
    const results = await Promise.all([fetchSuccess(), fetchFailure()]);
    console.log("All promises resolved:", results);
  } catch (error) {
    console.error("At least one promise failed:", error.message);
  }
}

handlePromises();

//Create a function fetchWithTimeout(promise, timeout) that takes a promise and a timeout value in milliseconds. Use Promise.race() to return the result of the promise if it resolves within the timeout, otherwise return "Timeout exceeded".

function fetchWithTimeout(promise, timeout) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject("Timeout exceeded");
    }, timeout);
  });

  return Promise.race([promise, timeoutPromise]);
}