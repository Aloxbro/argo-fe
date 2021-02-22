import React from 'react';

const CrewList = (props) => {
    return (
        <div>
            <h2>Membres de l'équipage :</h2>
            <br />
            <div className="d-flex">
                <ul className="d-flex flex-wrap justify-content">
                    {props.crew.length > 0
                        ? props.crew.map(c =>
                            <li key={c._id} className="w-30p list-unstyled list-inline">
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
