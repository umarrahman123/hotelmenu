// chatcpt code
import './App.css';
import { Recipe } from './components/HotelMenu';
import Menubar from './components/HutelMenuBar';
import { useEffect, useState } from 'react';

const allCategories = ['all', 'breakfast', 'lunch', 'dinner'];

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [recipesData, setRecipesData] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [categories] = useState(allCategories);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState(''); // New state for search query

  function themeHandler() {
    setDarkTheme(!darkTheme);
  }

  async function apiCall() {
    const recipeApi = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza');
    const recipeData = await recipeApi.json();
    const recipes = recipeData.data.recipes;

    // Assign categories
    const categorizedRecipes = recipes.map((recipe, index) => {
      if (index % 3 === 0) return { ...recipe, category: 'breakfast' };
      if (index % 3 === 1) return { ...recipe, category: 'lunch' };
      return { ...recipe, category: 'dinner' };
    });

    setRecipesData(categorizedRecipes);
    setFilteredRecipes(categorizedRecipes);
  }

  useEffect(() => {
    apiCall();
  }, []);

  // Filter by both category and search query
  const filterItems = (category, query = '') => {
    setSelectedCategory(category);

    let filtered = recipesData;
    if (category !== 'all') {
      filtered = recipesData.filter((recipe) => recipe.category === category);
    }

    if (query) {
      filtered = filtered.filter((recipe) =>
        recipe.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredRecipes(filtered);
  };

  // Search function for navbar search input
  const handleSearch = (query) => {
    setSearchQuery(query);
    filterItems(selectedCategory, query);
  };

  return (
    <>
      {/* Pass the handleSearch function to Menubar */}
      <Menubar title="Umar Store" handleSearch={handleSearch} />
      <div style={{
        backgroundColor: darkTheme ? 'black' : 'lightblue',
        marginLeft: '10px',
      }}>
        <button onClick={themeHandler}>Change Color</button>
        <h1 style={{ textAlign: 'center', color: 'white' }}>- Fast React Pizza Co -</h1>
        <h3 style={{ textAlign: 'center', color: 'white' }}>Our Menu</h3>
        <p style={{ textAlign: 'center', color: 'white' }}>
          Authentic Italian cuisine, made with love and care.
        </p>

        {/* Sticky Category Buttons */}
        <div className="sticky-menu-buttons" style={{ textAlign: 'center', margin: '20px' }}>
          {categories.map((category, index) => (
            <button 
              key={index} 
              style={{
                marginRight: '10px',
                padding: '10px',
                backgroundColor: selectedCategory === category ? 'green' : 'gray',
                color: 'white',
                border: 'none',
                borderRadius: '5px'
              }} 
              onClick={() => filterItems(category, searchQuery)}>
              {category}
            </button>
          ))}
        </div>

        <div style={{
          display: 'flex',
          width: '100%',
          flexWrap: 'wrap',
          gap: '10px',
        }}>
          {filteredRecipes.map((recipe, index) => (
            <Recipe key={index} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
}





// oregnal code

// import './App.css';
// import { Recipe } from './components/HotelMenu';
// import Menubar from './components/HutelMenuBar';

// import { useEffect, useState } from 'react';




// export default function App() {
 
//   // <Menubar/>
//   const [darkTheme, setDarkTheme] = useState(false)    // [state, setState] = useState(initialValue)
//   const [recipesData, setRecipesData] = useState([])

//   function themeHandler() {
//     console.log("==>> function chala")
//     setDarkTheme(!darkTheme)
//     // console.log(darkTheme, "==>>darkTheme")
//   }


//   async function apiCall() {
//     const recipeApi = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza');
//     const recipeData = await recipeApi.json();
//     // const { data: { recipes } } = recipeData
//     const recipes = recipeData.data.recipes
//     console.log(recipes, "==>>recipes")
//     setRecipesData(recipes)
//   }


//   // useEffect

//   useEffect(() => {
//     apiCall()
//   }, [])



//   return (
//     <>
//     <Menubar title="Umar Store" />
//     <div style={{
//       backgroundColor: darkTheme ? 'black' : 'lightblue',
//       marginLeft: '10px',
//     }}>
//       <button onClick={themeHandler}>Change Color</button>
//       <h1 style={
//         {
//           textAlign: 'center',
//           color: 'white'
//         }
//       }>- Fast React Pizza Co -</h1>
//       <h3 style={
//         {
//           textAlign: 'center',
//           color: 'white'
//         }
//       }>Our Menu</h3>
//       <p style={
//         {
//           textAlign: 'center',
//           color: 'white'
//         }
//       }>
//         Authentic Italian cuisine, made with love and care.
//       </p>
//       <div style={
//         {
//           display: 'flex',
//           width: '100%',
//           flexWrap: 'wrap',
//           gap: '10px',
          
//         }
//       }>
//         {
//           recipesData?.map((recipe) => <Recipe recipe={recipe} />)
//         }

//       </div>
//     </div>
//     </>
//   )
// }

// // export default App;

// {/* <Navbar/> */}





// // how to call an api

// async function apiCall() {
//   const recipeApi = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza');
//   const recipeData = await recipeApi.json();
//   // const { data: { recipes } } = recipeData
//   const recipes = recipeData.data.recipes
//   console.log(recipes, "==>>recipes")
// }
// apiCall()

