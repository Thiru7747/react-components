import { Recipes } from './Recipes';

export default function RecipesList() {
    return (
        <div>
            <h1>Recipes</h1>
            {Recipes.map(recipe =>
                <div key={recipe.id}>
                    <h2>{recipe.name}</h2>
                    <ul>
                        {recipe.ingredients.map(ingredient =>
                            <li key={ingredient}>
                                {ingredient}
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}