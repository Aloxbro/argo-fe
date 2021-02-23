import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CrewForm from '../components/CrewForm';

import { Container } from 'react-bootstrap';

const Main = () => {

    return (
        <Container className="d-flex-column align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <Header />
            <div className="w-100 m-auto" style={{ maxWidth: '600px', padding: '6vh 0' }}>
                <CrewForm />
            </div>
            <Footer />
        </Container>
    );
};

export default Main;
