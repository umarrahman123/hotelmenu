// chatGpT
export function Recipe({ recipe }) {
    return (
      <div className="container" style={{
        width: '48%',
        backgroundColor: 'lightgray',
        borderRadius: '10px',
        display: 'flex',
      }}>
        <div style={{ width: "150px", height: '150px' }}>
          <img width="100%" src={recipe.image_url} alt="recipe" />
        </div>
        <div style={{ marginLeft: '20px' }}>
          <h1>{recipe.title}</h1>
          <p>{recipe.publisher}</p>
          <p>10</p>
        </div>
      </div>
    );
  }
  

// oregenal code 

// export function Recipe({ recipe }) {
//     console.log(recipe, "==>>recipe")
//     return (
//         <div className="container" style={
//             {
//                 width: '48%',
//                 backgroundColor: 'lightgray',
//                 borderRadius: '10px',
//                 display: 'flex',
//             }
//         }>
//             <div style={{ width: "150px", height: '150px' }}>
//                 <img width="100%" src={recipe.image_url} alt="recipe" />
//             </div>
//             <div style={
//                 {
//                     marginLeft: '20px'
//                 }
//             }>
//                 <h1>{recipe.title}</h1>
//                 <p>{recipe.publisher}</p>
//                 <p>10</p>
//             </div>
//         </div>
// )
// }