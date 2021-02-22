import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import { Form, Button, Card } from 'react-bootstrap';

import APIUrl from '../actions/APIUrl';
import CrewList from './CrewList';


const CrewForm = () => {
    const [crewMember, setCrewMember] = useState('');
    const [resData, setResData] = useState([]);
    const [loading, setLoading] = useState(false);

    const nameRef = useRef();

    const fetchData = useCallback(() => {
        axios.get(APIUrl.get)
            .then((response) => {
                console.log('response', response);
                setResData(response.data);
            })
            .catch((err) => {
                console.log('err', err);
            });
    }, []);

    const handleSubmit = async event => {
        event.preventDefault();
        setLoading(true);
        await axios.post(APIUrl.post, { name: crewMember });
        fetchData();
        setLoading(false);
    };


    useEffect(() => {
        fetchData();
    }, [fetchData]
    );


    return (
        <div className="m-auto mt-10px text-align">
            <h1 style={{ fontSize: '1.5em', margin: '0.5em 0.2wh' }}>Ajouter un(e) Argonaute</h1>
            <Form className="custom-margin text-align" onSubmit={handleSubmit}>
                <Form.Label id="name">
                    Nom de l'Argonaute :
                </Form.Label>
                <Form.Control type='name' ref={nameRef} onChange={(e) => setCrewMember(e.target.value)} placeholder="Charalampos" />
                {!loading &&
                    <Button type='submit' className='btn btn-primary'> Envoyer</Button>
                }
            </Form>
            <CrewList crew={resData} />
        </div>
    );
};

export default CrewForm;
