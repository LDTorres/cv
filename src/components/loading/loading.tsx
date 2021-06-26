import { Container, Row, Spinner } from 'react-bootstrap';

function Loading() {
    return (
        <Container fluid className='vh-100'>
            <Row className='vh-100 justify-content-center align-items-center'>
                <div className='text-center'>
                    <p className="d-block">Loading</p>
                    <Spinner animation="border" role="status">
                    </Spinner>
                </div>
            </Row>
        </Container>
    )
}

export default Loading
