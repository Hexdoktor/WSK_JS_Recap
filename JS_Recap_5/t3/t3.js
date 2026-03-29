const url = "https://jsonplaceholder.typicode.com/unknown/99999";

async function getInvalidData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("An error occurred while fetching data:", error.message);
  }
}

getInvalidData();
