import { BiRadioCircle, BiRadioCircleMarked } from 'react-icons/bi'

const SliderNav = ({ slides, slideIndex, setSlideIndex }) => {
  const handleClick = (index) => setSlideIndex(index)

  return (
    <div style={{ marginTop: '1rem', position: 'absolute', bottom: '-3rem', left: '50%', translate: '-50% 0' }}>
      {slides.length > 0 &&
        slides.map((slide, i) =>
          slideIndex === i ? (
            <BiRadioCircleMarked
              key={i}
              onClick={() => handleClick(i)}
              style={{ fontSize: '2.1rem', cursor: 'pointer' }}
            />
          ) : (
            <BiRadioCircle
              key={i}
              onClick={() => handleClick(i)}
              style={{ fontSize: '2rem', cursor: 'pointer' }}
            />
          )
        )}
    </div>
  )
}
export default SliderNav
