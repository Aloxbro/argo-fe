import React, { useState } from 'react';

function Form() {
    const [value, setValue] = useState('');

    return (
        <div className="m-auto mt-10px text-align b-red">
            <h1 style={{ fontSize: '1.5em' }}>Ajouter un(e) Argonaute</h1>
            <form>
                <label htmlFor="name">
                    Nom de l'Argonaute
                </label>
                <input id='name' name={`${value}`} onChange={(v) => { setValue(v); console.log(v); }} type='text' placeholder="Charalampos" />
            </form>
        </div>

    );
}

export default Form;
