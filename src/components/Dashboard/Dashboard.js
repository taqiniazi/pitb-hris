import React from 'react'
import {Row , Col, Container, Card,  Button} from 'react-bootstrap';
// import {Link} from 'react-router-dom';
import FinanceIcon from '../../assets/images/finance_dep_icon.png'; 
import ProcurementIcon from '../../assets/images/procurment_dept_icon.png'; 
import HRIcon from '../../assets/images/hr_dept_icon.png'; 
import FleetIcon from '../../assets/images/fleet_dept_icon.png'; 
import InventoryIcon from '../../assets/images/inventry_dept_icon.png'; 
import AdminIcon from '../../assets/images/admin_dept_icon.png'; 
import "./Dashboard.css";

function Dashboard() {
    let dashboardCards= [
        {
            cardImage: FinanceIcon,
            cardTitle: 'Finance Department',
            cardInfo: "Finance is the process of raising funds"
        },
        {
            cardImage: ProcurementIcon,
            cardTitle: 'Procurement Department',
            cardInfo: "Finance is the process of raising funds"
        },
        {
            cardImage: HRIcon,
            cardTitle: 'HR Department',
            cardInfo: "Finance is the process of raising funds"
        },
        {
            cardImage: FleetIcon,
            cardTitle: 'Fleet Management',
            cardInfo: "Finance is the process of raising funds"
        },
        {
            cardImage: InventoryIcon,
            cardTitle: 'Inventory Management',
            cardInfo: "Finance is the process of raising funds"
        },
        {
            cardImage: AdminIcon,
            cardTitle: 'Admin Department',
            cardInfo: "Finance is the process of raising funds"
        },
    ];
    const [list] = React.useState(dashboardCards);

    return(
        <section className='dashboard'>
            <Container>
                <Row>
                    <Col md="9" className='d-flex align-items-stretch mb-3'>
                        <div className='content_area pb-0'>
                            <div class="section_title">ERP System Dashboard</div>
                            <Row>
                                {list.map((item) => (
                                <Col lg="4" md="6" className='text-center d-flex align-items-stretch'>
                                    <Card className='mb-4 w-100'>
                                        <Card.Body className='py-5 px-4 text-center'>
                                            <div className="image_icon mx-auto mb-3">
                                                <Card.Img src={item.cardImage} className='img-fluid w-100' alt="Card Image" />
                                            </div>
                                            <Card.Title className='img_title'>{item.cardTitle}</Card.Title>
                                            <p className="text-gray">{item.cardInfo}</p>
                                            <Button variant="outline-secondary w-75" href='/Home'>View More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                ))};
                            </Row>
                        </div>
                    </Col>
                    <Col md="3" className='d-flex align-items-stretch mb-3'>
                        <div className='content_area'>

                        </div>
                    </Col>
                </Row>            
            </Container>
        </section>
    )
}
export default Dashboard;