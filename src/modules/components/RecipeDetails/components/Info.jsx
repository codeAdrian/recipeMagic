import React from 'react';

const Info = ({ label, source, yields, totalTime }) => (
    <div className="modalSection">
        <h2 className="modalSection__title modalSection__title--main">
            {label}
        </h2>
        <div className="infoWrapper">
            <div className="infoWrapper__section">
                <strong>By: </strong>
                <span>{source}</span>
            </div>

            <div className="infoWrapper__columns">
                <div>
                    <i class="fas fa-utensils" />
                    {yields > 0 ? `${yields} servings` : 'N/A servings'}
                </div>

                <div>
                    <i class="far fa-clock" />
                    {totalTime > 0 ? `${totalTime} minutes` : 'N/A minutes'}
                </div>
            </div>
        </div>
    </div>
);

export default Info;
