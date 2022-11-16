import React from 'react'

const Slider = () => {
  const position = '50%'

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        paddingTop: '56.25%',
      }}
    >
      {/* {type === 'video' ? ( */}
      <p>12312312</p>
      {true ? (
        <video
          autoPlay
          playsInline
          muted
          loop
          src={''}
          style={{
            position: 'absolute',
            top: position,
            left: position,
            width: '100%',
            height: 'auto',
            translate: `-${position} -${position}`,
          }}
        />
      ) : (
        <img
          src={''}
          alt='banner'
          style={{
            position: 'absolute',
            width: 'auto',
            height: '100%',
            top: position,
            left: position,
            translate: `-${position} -${position}`,
          }}
        />
      )}
    </section>
  )
}

export default Slider