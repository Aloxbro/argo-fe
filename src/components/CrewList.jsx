import React from 'react';

const CrewList = (props) => {
    return (
        <div>
            <h2>Membres de l'équipage :</h2>
            <br />
            <div className="d-flex">
                <ul className="d-flex flex-wrap w-100p p-0 center">
                    {props.crew.length > 0
                        ? props.crew.map(c =>
                            <li key={c._id} className="b-red w-30p mx-1 list-unstyled">
                                {c.name}
                            </li>
                        )
                        : null
                    }
                </ul>
            </div>
        </div>
    );
};

export default CrewList;
