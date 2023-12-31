import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"

export default () => {
    const [sliderRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 400px)": {
                slides: { perView: 2, spacing: 5 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 3, spacing: 10 },
            },
        },
        slides: { perView: 1 },
    })

    // in this card slider all styles is implemented in the styles.css file
    // ( to use any css framework all css styles should be removed first )

    return (
        <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
                1
            </div>

            <div className="keen-slider__slide number-slide2">
                2
            </div>

            <div className="keen-slider__slide number-slide3">
                3
            </div>

            <div className="keen-slider__slide number-slide4">
                4
            </div>

            <div className="keen-slider__slide number-slide5">
                5
            </div>

            <div className="keen-slider__slide number-slide6">
                6
            </div>
            
        </div>
    )
}
