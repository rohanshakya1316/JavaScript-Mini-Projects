const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const API_URL = "https://dummyjson.com/quotes/random";

function setLoading(isLoading) {
  btnEl.disabled = isLoading;
  btnEl.textContent = isLoading ? "Loading..." : "Get a Quote";
}

function showQuote(quote, author) {
  quoteEl.textContent = quote;
  authorEl.textContent = `~ ${author}`;
}

function showError(message) {
  quoteEl.textContent = message;
  authorEl.textContent = "";
}

async function getQuote() {
  setLoading(true);

  try {
    showQuote("Fetching quote...", "");

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const data = await response.json();

    if (!data.quote || !data.author) {
      throw new Error("Invalid API response");
    }

    showQuote(data.quote, data.author);
  } catch (error) {
    console.error("Quote Fetch Error:", error);
    showError("Unable to fetch quote. Please try again.");
  } finally {
    setLoading(false);
  }
}

btnEl.addEventListener("click", getQuote);

// Load first quote automatically
getQuote();
