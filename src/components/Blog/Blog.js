import React from 'react';
import { Container } from 'react-bootstrap';
import Particle from '../Particle';

const Blog = () => {
    return (
        <div>
            <Container fluid className="project-section">
                <Particle />
                <Container>
                    <h1 className="project-heading">
                        Coming <strong className="purple">soon</strong>
                    </h1>
                </Container>
            </Container>
        </div>
    );
};

export default Blog;