import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";

import img1 from "../assets/images/img1.jpg";

export default function AppAbout() {
    const html = 90;
    const ng = 80;
    const boot = 85;

    return (
        <section id="about" className="block about-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>About Us</h2>
                    <div className="subtitle">learn more about us</div>
                </div>
                <Row>
                    <Col sm={6}>
                        <Image src={img1} />
                    </Col>
                    <Col sm={6}>
                        <p>
                            Aliquam rhoncus nec mauris id pretium. Maecenas
                            condimentum elit in tincidunt vulputate. Mauris id
                            metus turpis. Phasellus commodo est ut libero congue
                            volutpat. Nullam non nunc egestas, consequat nisi
                            ut, vulputate felis.
                        </p>
                        <p>
                            Phasellus commodo est ut libero congue volutpat.
                            Nullam non nunc egestas, consequat nisi ut,
                            vulputate felis. Phasellus commodo est ut libero
                            congue volutpat. Nullam non nunc egestas, consequat
                            nisi ut, vulputate felis.
                        </p>

                        <div className="progress-block">
                            <h4>HTML / CSS / JAVASCRIPT</h4>
                            <ProgressBar now={html} label={`${html}%`} />
                        </div>
                        <div className="progress-block">
                            <h4>ANGULAR / REACT</h4>
                            <ProgressBar now={ng} label={`${ng}%`} />
                        </div>
                        <div className="progress-block">
                            <h4>BOOTSTRAP / TAILWIND </h4>
                            <ProgressBar now={boot} label={`${boot}%`} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
