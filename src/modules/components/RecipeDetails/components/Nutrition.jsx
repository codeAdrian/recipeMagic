import React from 'react';

const Nutrition = ({ totalDaily }) => (
    <div className="modalSection">
        <h2 className="modalSection__title">Nutrition Values</h2>
        <table className="recipeModal__table">
            <thead>
                <tr>
                    <th>Nutrient</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(totalDaily).map(key => (
                    <tr>
                        <td>{totalDaily[key].label}</td>
                        <td>
                            {totalDaily[key].quantity.toFixed(0)}
                            {totalDaily[key].unit}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default Nutrition;
