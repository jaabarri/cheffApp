import React from "react" 
import Recipe from "./Recipe"
import Ingredients from "./Ingredients"

export default function Main() {
    const [ingredients, setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
    const [state, setState] = React.useState(false)
    
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

            {ingredients.length ? 
                <Ingredients 
                    ingredients={ingredients}
                    shownState={shownState}
                /> : null}

            {state ? <Recipe /> : null }


        </main>
    )
}