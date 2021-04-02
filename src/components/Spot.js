import '../spot.css'

const Spot = ({ spot }) => {
  return (
    <div key={spot.ID}>
      <div className="card">
        {
          spot.Picture.PictureUrl1 ?
            <img
              src={spot.Picture.PictureUrl1}
              className="card-img-top"
              alt={spot.Picture.PictureDescription1}
            /> : 
            <img
              src="https://sa.rosheta.com/upload/911c2f08594657f1f8978c344470af3c9435f9ea5eca681a349a2e2ab0a23494.png"
              className="card-img-top"
              alt={spot.Picture.PictureDescription1}
            />
        }
        <div className="card-body">
          <h5 className="card-title">{spot.Name}</h5>
          {
            spot.Description ?
              <p className="card-text">{spot.Description}</p> :
              <h6 className="card-text">No Description</h6>
          }
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </div>
  );
};

export default Spot;
