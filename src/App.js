// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Badge } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


function App() {

  const data = [
    {
      item : "Fancy Product",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VQLRhl1iLw12qPb858qsWpNxDsdvBmigxw&usqp=CAU",
      oldrate : "$400.00",
      newrate : "$300.00"
            
    },
    {
      item  : "Sale item",
      image :"https://c8.alamy.com/comp/BAHWNR/group-of-fancy-religious-items-for-sale-BAHWNR.jpg",
      oldrate : "$200.00",
      newrate : "$190.00"
    },
    {
      item  : "Food Product",
      image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHx7v43e2Gw6FxO_OvL-Wp8hjKUvFDp0LaMQKx5EPIg&s",
      oldrate : "$500.00",
      newrate : "$400.00"
    },
    {
      item  : "Furniture Product",
      image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcBCW_5Fxu1nViAW22MnZinV-lrTk3CZkc0IEMQQ9aw&s",
      oldrate : "$4000.00",
      newrate : "$3000.00"
    },
    {
      item  : "Gold Product",
      image :"https://3.imimg.com/data3/WQ/PD/MY-4377462/all-tradation-marriage-fancy-items-250x250.jpg",
      oldrate : "$40000.00",
      newrate : "$38000.00",
    },
    {
      item : "Stationary Product",
      image:"https://fancyproductdesigner.com/wp-content/uploads/2016/04/160410_Features_Products.png",
      oldrate : "$400.00",
      newrate : "$300.00",
    },
    {
      item : "Kids Product",
      image:"https://5.imimg.com/data5/SELLER/Default/2022/2/GP/CY/HY/77852359/fancy-keychains-500x500.jpg",
      oldrate : "$450.00",
      newrate : "$350.00",
    },
    {
      item : "Sale Product",
      image :"https://www.tradekeyindia.com/Pimages/89587Fancy%20items.jpg",
      oldrate : "$400.00",
      newrate : "$300.00",
    }
  ]
  const [count,setCount] = useState(0);

  return (

    <div className="App">
      <div className='top-page'>
      <Button variant="outline-primary">Owerview Page</Button>{' '}

      </div>
      <hr/>
      <div className='nav-bar'>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All product</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">New Arrivals</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Populr items</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className='bg'>
      <Badge bg = "success">
            cart {count}
        </Badge>

      </div>
    </Navbar>
         </div>
         <div className='header'> 
         <header>
          <h1>shop in style</h1>
          <h3>with this shop homepage template</h3>
         </header>
         </div>
         <div className='card-container'>
         {data.map((product,idx)=>(
          <Product
          key={idx}
          prod={product}
          count={count}
          setCount={setCount}
          />

         ))}
         </div>
         <div className='footer'>
          <footer>
            <h5>copy write at your website 2023</h5>
          </footer>

         </div>
      
    </div>

  )
}

export default App;

function Product({ prod,count,setCount }) {
  // state
  const [show, setShow] = useState(false);
   
  function addtocart(){
    setCount(count+1);
    setShow(!show)
  }

  function removefromcart(){
    setCount(count-1);
    setShow(!show)
  }



  return (
    <div className='card-product'>
      <Card style={{ width: '18rem' }}>
        <Card.Img  className='img' variant="top" src={prod.image}/>
        <Card.Body>
          <Card.Title>{prod.item}</Card.Title>
          <Card.Text><s>{prod.oldrate}</s></Card.Text>
          <Card.Text>{prod.newrate}</Card.Text>
          {/* //conditional rendering */}

          {!show ?
          <Button variant="primary"
          onClick={addtocart}
          >Add to cart</Button>
          :
          
            <Button variant="danger"
            onClick={removefromcart}
            >Remove cart</Button>
          }
        </Card.Body>
      </Card>

    </div>
  )
}
