async function fetchData(url, options = {}) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("fetchData error:", error.message);
    throw error;
  }
}

async function testFetch() {
  try {
    const user = {
      name: "Jiminy Billybob",
      job: "Snake Milker",
    };

    const url = "https://jsonplaceholder.typicode.com/posts";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    const result = await fetchData(url, options);
    console.log("Result:", result);
  } catch (error) {
    console.error("An error occuredd in testFetch:", error.message);
  }
}

testFetch();
