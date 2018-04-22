import React from 'react';

const Info = ({ label, source, yields, totalTime }) => (
    <div className="modalSection">
        <h2 className="modalSection__title">Information</h2>
        <dl>
            <dt>Title: </dt>
            <dd>{label}</dd>

            <dt>Source:</dt>
            <dd>{source}</dd>

            <dt>Servings:</dt>
            <dd>{yields}</dd>

            <dt>Preparation time:</dt>
            <dd>{totalTime} minutes</dd>
        </dl>
    </div>
);

export default Info;
