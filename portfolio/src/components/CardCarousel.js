import { useState } from 'react'

export const CardCarousel = (props) => {
  const [startX, setStartX] = useState(null)

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX)
  }

  const handleTouchMove = (event) => {
    if (startX !== null) {
      const diffX = startX - event.touches[0].clientX;
      if (diffX > 50 && props.currentIndex < props.items.length - 1) {
        props.setCurrentIndex((prevIndex) => prevIndex + 1)

        // props.card.style.transition = 'transform 0.3s ease'
        // props.card.style.transform = `translateX(-${100 }%)`
        setStartX(null)
      } else if (diffX < -50 && props.currentIndex > 0) {
        props.setCurrentIndex((prevIndex) => prevIndex - 1)
        setStartX(null)
      }
    }
  }

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {props.children}
    </div>
  )
}
