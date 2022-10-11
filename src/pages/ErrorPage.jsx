import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const ErrorPage = () => {
  return (
    <Container>
      <Row>
        <Col className="md-12">
          <div className="error-template">
              <h1>Oops!</h1>
              <h2>Error 404</h2>
              <div className="error-details">Resource not found</div>
              <div className="error-actions">
                  <LinkContainer to="/">
                    <a href="/" className="btn btn-secondary btn-lg">Home</a>
                  </LinkContainer>
              </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ErrorPage;
