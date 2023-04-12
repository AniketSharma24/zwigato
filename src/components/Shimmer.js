const Shimmer = () => {
  let shimmerCard = Array(12)
    .fill()
    .map((_, i) => i);

  return (
    <div className='shimmer-container'>
      {shimmerCard.map((_, i) => (
        <div key={i} className='shimmer-card'>
          <div></div>
          <p></p>
          <p></p>
          <p className='box'>
            <span></span>
            <span></span>
            <span></span>
          </p>
          <p className='box'>
            <span></span>
            <span></span>
            <span></span>
          </p>
          <p></p>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
