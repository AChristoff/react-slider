const Slide = ({ slides, slideIndex, transitionDuration }) => {
  const slide = slides[slideIndex]
  const position = '50%'

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        paddingTop: '56.25%',
        borderRadius: '0.5rem',
      }}
    >
      {slide?.video ? (
        <video
          key={slideIndex}
          autoPlay
          playsInline
          muted
          loop
          src={slide?.video}
          style={{
            position: 'absolute',
            top: position,
            left: position,
            width: '100%',
            height: 'auto',
            translate: `-${position} -${position}`,
            animation: `transition-animation ${transitionDuration}ms linear`,
          }}
        />
      ) : (
        <img
          key={slideIndex}
          src={slide?.image}
          alt='banner'
          style={{
            position: 'absolute',
            width: '100%',
            height: 'auto',
            top: position,
            left: position,
            translate: `-${position} -${position}`,
            animation: `transition-animation ${transitionDuration}ms linear`,
          }}
        />
      )}
    </div>
  )
}
export default Slide
