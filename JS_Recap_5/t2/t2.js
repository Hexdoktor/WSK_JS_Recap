const url = "https://jsonplaceholder.typicode.com/posts";

async function createUser() {
  try {
    const user = {
      name: "Dwight",
      job: "Assistant to the Regional Manager",
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log("Created user:", data);
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

createUser();
