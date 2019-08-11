import * as React from 'react';

export const DietGraph = ({ digest }: any) => {
    digest.length = 3;

    let sum: number = digest.reduce((sum: number, { total }: any) => sum + total, 0);

    console.log("SUM", digest);

    return (
        <ul className="dietGraph">
            {digest.map(({ total, unit, daily, label, schemaOrgTag }: any, index: number) =>
                <li className={`dietGraph__item dietGraph__item--${index}`}>
                    <div className={`dietGraph__graph dietGraph__graph--${index}`} key={schemaOrgTag} style={{ height: `${(total / sum) * 150}px` }}>
                    </div>
                    <small className="dietGraph__label">
                        {label}
                    </small>

                    <small className="dietGraph__info">
                        {`${total.toFixed(2)}${unit} (${daily.toFixed(2)}%)`}
                    </small>
                </li>
            )}
        </ul>
    )
}