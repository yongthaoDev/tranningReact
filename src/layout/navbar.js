export default function navbar() {
  return (
    <>
      <div className="row" style={{backgroundColor:'teal' , color:'white',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
        <div className="d-flex py-2 px-2">
          <div className="mx-2">home</div>
          <div className=" mx-2">component</div>
          <div>other</div>
        </div>
      </div>
    </>
  );
}
