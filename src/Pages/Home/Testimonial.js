import React from 'react';
import quote from '../../assets/icons/quote'
const Testimonial = () => {
    return (
        <section>
            <div>
                <div>
                    <h2 className='text-primary font-bold'>Testimonial</h2>
                    <h3 className='text-3xl'>What Our Patients Says</h3>
                </div>
                <div>
                    <img src={quote} alt="" />
                </div>
            </div>
            <div></div>
        </section>
    );
};

export default Testimonial;