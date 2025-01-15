import React from "react" 
import Recipe from "./Recipe"

export default function Main() {
    const [ingredients, setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
    const [state, setState] = React.useState(false)
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function ingredientList(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients=> [...prevIngredients, newIngredient])
    }

    function shownState() {
        setState(prevState => !prevState)
    }
    
    return (
        <main>
            <form action={ingredientList} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length ? <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                {ingredients.length > 3 ? <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={shownState}>Get a recipe</button>
                </div> : null}
            </section> : null}

            {state ? <Recipe /> : null }


        </main>
    )
}