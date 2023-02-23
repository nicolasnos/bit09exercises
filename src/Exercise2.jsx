import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

const Exercise2 = () => {
  const [contact, setContact] = useState(null);
  const [load, setLoad] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    showApi();
  }, []);

  const showApi = async () => {
    try {
      setLoad(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      setContact(await res.json());
    } catch (error) {
      setError(true);
    } finally {
      setLoad(false);
    }
  };

  return (
    <>
      <h1>Directorio Telefonico</h1>
      {error && (
        <Alert variant="danger">
          <p>ocurrio un error</p>
        </Alert>
      )}
      {load && <Spinner animation="grow" variant="success" />}
      {contact && (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Phone number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {contact.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name} </td>
                <td>{item.phone} </td>
                <td>{item.email} </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default Exercise2;
