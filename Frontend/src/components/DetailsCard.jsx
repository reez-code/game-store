function DetailsCard({ image, description, name, price, user, purchases }) {
  return (
    <>
      <div className="col-md-4 ">
        <img src={image} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              Purchases Made : {purchases}
              <br />
              Price: Kshs {price}
              <br />
              Seller: {user.name}
              <br />
              Contact-Info <br />
              Phone-Number: {user.phone_number}
              <br />
              Email: {user.email}
            </small>
          </p>
        </div>
      </div>
    </>
  );
}

export default DetailsCard;
