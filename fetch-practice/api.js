async function getUserdata() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(apiUrl);
    const apiData = await response.json();

    // Pass the data to the showData function
    showData(apiData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function showData(data) {
  const userDataContainer = document.getElementById("userDataContainer");

  const userDataHTML = data.map((user) => {
    return `
        <div>
          <h2>${user.name}</h2>
          <p>Email: ${user.email}</p>
          <p>Phone: ${user.phone}</p>
        </div>
      `;
  });
  console.log(userDataHTML);

  userDataContainer.innerHTML = userDataHTML;
}

getUserdata();
