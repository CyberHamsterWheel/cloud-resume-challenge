async function visitorCounter() {
  await fetch(
    "https://c5mhyk9guh.execute-api.us-east-1.amazonaws.com/Stage/put"
  );
  const response = await fetch(
    "https://c5mhyk9guh.execute-api.us-east-1.amazonaws.com/Stage/get"
  );
  const data = await response.json();
  document.getElementById("count").innerText = data.count;
}

window.onload = visitorCounter;
