import Hero from './../components/Banner';
import {Container, Form, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';
const data = {
	title: 'Welcome to the Update Product Page',
	content: 'Update Product on this page',
	cta: "View Products Here"
};

export default function Update () {

	const updateProduct = (event) => {
		event.preventDefault()
		return(
			
			Swal.fire(
					{
						icon:"success",
						title:"Successfully updated product!",
						text: "Changes will be reflected immediately."

					}
				) 
			);
	};

	return(
		<div>
			<Hero bannerData={data}/>
			<Container>
				<h1 className="text-center">Update Product Form</h1>
				<Form onSubmit={e => updateProduct(e)}>
					<Form.Group>
						<Form.Label>Product Name: </Form.Label>
						<Form.Control type="text" placeholder="Enter Course Name" required />
					</Form.Group>
					<Form.Group>
						<Form.Label>Description: </Form.Label>
						<Form.Control type="text" placeholder="Enter Description" required />
					</Form.Group>
					<Form.Group>
						<Form.Label>Price: </Form.Label>
						<Form.Control type="number" placeholder="Enter Price" required />
					</Form.Group>

					{/*isActive Switch*/}
					<Form class='mb-4'>
					  <Form.Check 
					    type="switch"
					    id="custom-switch"
					    label="Active"
					  />
					</Form>

					{/*Update Course Button*/}
					<Button variant="success" className="btn-block" type="submit">Update
					</Button>
				</Form>
			</Container>
		</div>
		);
};