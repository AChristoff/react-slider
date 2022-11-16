import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

const SliderControls = ({ slides, slideIndex, setSlideIndex, infiniteLoop }) => {

  return (
    <>
      <span
        onClick={() =>
          setSlideIndex((current) =>
            current === 0 ? slides.length - 1 : current - 1
          )
        }
        style={{
          position: 'absolute',
          translate: '0 -50%',
          top: '50%',
          left: '-3rem',
          cursor: 'pointer',
          padding: '0.4rem 0.5rem',
          border: '1px solid #fff',
          borderRadius: '0.5rem',
          lineHeight: '0',
          opacity: !infiniteLoop && slideIndex === 0 ? '0.3' : '1',
          pointerEvents: !infiniteLoop && slideIndex === 0 ? 'none' : 'auto'
        }}
      >
        <FaChevronLeft style={{fontSize: '1.5rem'}}/>
      </span>
      <span
        onClick={() =>
          setSlideIndex((current) =>
            current === slides.length - 1 ? 0 : current + 1
          )
        }
        style={{
          position: 'absolute',
          translate: '0 -50%',
          top: '50%',
          right: '-3rem',
          cursor: 'pointer',
          padding: '0.4rem 0.5rem',
          border: '1px solid #fff',
          borderRadius: '0.5rem',
          lineHeight: '0',
          opacity: !infiniteLoop && slideIndex === slides.length - 1 ? '0.3' : '1',
          pointerEvents: !infiniteLoop && slideIndex === slides.length - 1 ? 'none' : 'auto'
        }}
      >
        <FaChevronRight style={{fontSize: '1.5rem'}}/>
      </span>
    </>
  )
}
export default SliderControls
