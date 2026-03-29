/*REQRES IS DOWN SO I USED THIS TO SEE THAT THE CODE WORKS */
const url = "https://jsonplaceholder.typicode.com/users/1";

async function getUser() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log("User data:", data);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

getUser();
