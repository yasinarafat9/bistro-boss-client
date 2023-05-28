import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import SectionTitle from "../../../components/SectionTitle";
import { useEffect, useState } from "react";


const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <section>
                <SectionTitle
                    subHeading={"WHat Out Client Say"}
                    heading={"Testimonials"}
                ></SectionTitle>
                {reviews.length}
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}

                        >
                            <div className="mx-auto flex flex-col items-center m-24 w-[70%]">
                                <Rating className="mx-auto"
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                );

                                <p>{review.details}</p>
                                <h3 className="texl-2xl text-orange-400">{review.name}</h3>

                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </section>
        </div>
    );
};

export default Testimonials;