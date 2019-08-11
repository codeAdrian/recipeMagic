import * as React from 'react';
import { Link } from "react-router-dom";
import hero from "assets/hero-min.png";

export const Homepage = () => <section>
    <article className="home__hero">
        <div className="home__hero--text">
            <h2 className="heading heading--level1">Explore foods from around the globe<span className="gradient--text">.</span></h2>
            <p className="paragraph color--gray--light">
                Whether you're looking for healthy recipes, or ideas on how to use leftovers from your fridge, we've numerous recipes to choose from, so you'll be able to find the perfect dish.
            </p>
            <Link to="/recipes" className="button--cta">Search Recipes</Link></div>
        <div className="home__hero--image">
            <img src={hero} />
        </div>
    </article>

    <article>
        <h2 className="heading heading--level2">How it works</h2>
        <p>It only takes a few simple steps to find the recipe you're looking for.</p>

        <div>
            <div>
                <h3>Search for a recipe</h3>
                <p>Grab a cup of something warm, take some time and search for the recipe. Search by name, ingredients, diet, health labels, etc.</p>
            </div>
            <div>
                <h3>Choose a recipe</h3>
                <p>Found the perfect recipe? Great! Bookmark it, print it or save it.</p>
            </div>
            <div>
                <h3>Cook and enjoy</h3>
                <p>Double check your ingredients and make sure you have everything you need to start cooking.</p>
            </div>
        </div>
    </article>

</section>;
