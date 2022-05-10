import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonial = () => {
    const reviews = [
        {
            _id:1,
            name: 'William Joy',
            review: '',
            location: 'Los-Angels',
            img:people1
        },
        {
            _id:2,
            name: 'Jillian Margaret',
            review: '',
            location: 'California',
            img:people2
        },
        {
            _id:3,
            name: 'Lee Bernicut',
            review: '',
            location: 'Los-Angels',
            img:people3
        },
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-primary font-bold'>Testimonial</h2>
                    <h3 className='text-xl font-bold lg:text-3xl'>What Our Patients Says</h3>
                </div>
                <div className='w-16 lg:w-48'>
                    <img src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
}
            </div>
        </section>
    );
};

export default Testimonial;