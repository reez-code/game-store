function DetailsCard({ image, description, name }) {
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
              Last updated 3 mins ago
            </small>
          </p>
        </div>
      </div>
    </>
  );
}

export default DetailsCard;
