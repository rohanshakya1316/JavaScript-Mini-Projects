const API_KEY = "275d58779ccf4e22af03e792e8819fff";
const recipeListEl = document.getElementById("recipe-list");

function displayRecipes(recipes) {
  recipeListEl.innerHTML = "";

  recipes.forEach((recipe) => {
    const recipeItemEl = document.createElement("li");

    recipeItemEl.className =
      "bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row";

    recipeItemEl.innerHTML = `
      <img
        src="${recipe.image}"
        alt="${recipe.title}"
        class="w-full md:w-40 h-48 md:h-auto object-cover"
      />

      <div class="flex-1 p-4">
        <h2 class="text-xl font-bold mb-3">
          ${recipe.title}
        </h2>

        <p class="text-gray-600 text-sm">
          <strong>Ingredients:</strong>
          ${recipe.extendedIngredients
            .map((ingredient) => ingredient.original)
            .join(", ")}
        </p>
      </div>

      <a
        href="${recipe.sourceUrl}"
        target="_blank"
        class="bg-blue-900 hover:bg-blue-700 text-white px-6 py-4 flex items-center justify-center transition"
      >
        View Recipe
      </a>
    `;

    recipeListEl.appendChild(recipeItemEl);
  });
}

async function getRecipes() {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    return data.recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    recipeListEl.innerHTML = `
      <p class="text-red-500 text-center">
        Failed to load recipes.
      </p>
    `;
  }
}

async function init() {
  const recipes = await getRecipes();

  if (recipes) {
    displayRecipes(recipes);
  }
}

init();