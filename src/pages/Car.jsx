import './Car.css'

const Car = () => {
  const divLine = []
   for (let i = 0; i < 10; i++) {
     divLine.push(<div className="line"></div>);
   }
  return (
    <>
      <h1 className='title'>Car</h1>
      <div className='road'>
      <img className='car-icon' src="../src/assets/car.png" alt="Car" />
        { divLine }
      </div>
    </>
  );
};
export default Car;