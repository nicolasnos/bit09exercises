import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

const Exercise3 = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const callingApi = async () => {
    try {
      setLoading(true);
      fetch("https://random-d.uk/api/v2/random")
        .then((resp) => resp.json())
        .then((info) => setImage(info.url));
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-4 text-center d-flex flex-column">
      <Button variant="outline-primary" onClick={callingApi}>
        Pintar Pato
      </Button>
      {error ? (
        <Alert variant="danger">
          <p>ocurrio un error</p>
        </Alert>
      ) : loading ? (
        <Spinner animation="grow" variant="success" />
      ) : image ? (
        <Image
          thumbnail
          src={image}
          width={200}
          height={350}
          alt="imagen de la api"
        />
      ) : (
        false
      )}
    </div>
  );
};

export default Exercise3;
