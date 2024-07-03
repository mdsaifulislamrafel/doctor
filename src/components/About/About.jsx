/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../sheard/SectionTitle';
import man1 from '../../assets/man1.png';
import { FaStar } from "react-icons/fa";
import man2 from '../../assets/man2.png';
import man3 from '../../assets/man3.png';
import './About.css'


const About = () => {
    return (
        <div className='my-40'>
            <div className='text-start mb-8'>
                <SectionTitle btn={'Testimonial'} title={'What they say about us'} />
            </div>

            <div>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}

                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='grid grid-cols-3 gap-6'>
                            <div className='bg-[#FFFFF5] p-5 text-left space-y-5'>
                                <h2 className='w-[331px] text-[#020043] text-[19px] font-semibold leading-7'>Expertise and Compassion Combined</h2>
                                <p className='text-[#4D4C7B] font-normal leading-[18px] text-[12px]'>I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                                <div className='flex gap-3 items-center'>
                                    <img src={man1} alt="" />
                                    <div className='mt-2'>
                                        <p className='text-[#020043] font-medium text-[12px] leading-4'>Sarah D, <span className='text-[#4D4C7B] font-normal'>IT Professional</span></p>
                                        <div className='inline-flex'>
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#FFFFF5] p-5 text-left space-y-5'>
                                <h2 className='w-[331px] text-[#020043] text-[19px] font-semibold leading-7'>Life-Saving Care, Life-Changing Experience</h2>
                                <p className='text-[#4D4C7B] font-normal leading-[18px] text-[12px]'>My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
                                <div className='flex gap-3 items-center'>
                                    <img src={man2} alt="" />
                                    <div className='mt-2'>
                                        <p className='text-[#020043] font-medium text-[12px] leading-4'>Michael R, <span className='text-[#4D4C7B] font-normal'>Business Executive</span></p>
                                        <div className='inline-flex'>
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#FFFFF5] p-5 text-left space-y-5'>
                                <h2 className='w-[331px] text-[#020043] text-[19px] font-semibold leading-7'>A Partner in Health and
                                    Wellness</h2>
                                <p className='text-[#4D4C7B] font-normal leading-[18px] text-[12px]'>As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>
                                <div className='flex gap-3 items-center'>
                                    <img src={man3} alt="" />
                                    <div className='mt-2'>
                                        <p className='text-[#020043] font-medium text-[12px] leading-4'>David S, <span className='text-[#4D4C7B] font-normal'>Lawyer</span></p>
                                        <div className='inline-flex'>
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='grid grid-cols-3 gap-6'>
                            <div className='bg-[#FFFFF5] p-5 text-left space-y-5'>
                                <h2 className='w-[331px] text-[#020043] text-[19px] font-semibold leading-7'>Expertise and Compassion Combined</h2>
                                <p className='text-[#4D4C7B] font-normal leading-[18px] text-[12px]'>I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                                <div className='flex gap-3 items-center'>
                                    <img src={man1} alt="" />
                                    <div className='mt-2'>
                                        <p className='text-[#020043] font-medium text-[12px] leading-4'>Sarah D, <span className='text-[#4D4C7B] font-normal'>IT Professional</span></p>
                                        <div className='inline-flex'>
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#FFFFF5] p-5 text-left space-y-5'>
                                <h2 className='w-[331px] text-[#020043] text-[19px] font-semibold leading-7'>Life-Saving Care, Life-Changing Experience</h2>
                                <p className='text-[#4D4C7B] font-normal leading-[18px] text-[12px]'>My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
                                <div className='flex gap-3 items-center'>
                                    <img src={man2} alt="" />
                                    <div className='mt-2'>
                                        <p className='text-[#020043] font-medium text-[12px] leading-4'>Michael R, <span className='text-[#4D4C7B] font-normal'>Business Executive</span></p>
                                        <div className='inline-flex'>
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#FFFFF5] p-5 text-left space-y-5'>
                                <h2 className='w-[331px] text-[#020043] text-[19px] font-semibold leading-7'>A Partner in Health and
                                    Wellness</h2>
                                <p className='text-[#4D4C7B] font-normal leading-[18px] text-[12px]'>As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>
                                <div className='flex gap-3 items-center'>
                                    <img src={man3} alt="" />
                                    <div className='mt-2'>
                                        <p className='text-[#020043] font-medium text-[12px] leading-4'>David S, <span className='text-[#4D4C7B] font-normal'>Lawyer</span></p>
                                        <div className='inline-flex'>
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='grid grid-cols-3 gap-6'>
                            <div className='bg-[#FFFFF5] p-5 text-left space-y-5'>
                                <h2 className='w-[331px] text-[#020043] text-[19px] font-semibold leading-7'>Expertise and Compassion Combined</h2>
                                <p className='text-[#4D4C7B] font-normal leading-[18px] text-[12px]'>I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                                <div className='flex gap-3 items-center'>
                                    <img src={man1} alt="" />
                                    <div className='mt-2'>
                                        <p className='text-[#020043] font-medium text-[12px] leading-4'>Sarah D, <span className='text-[#4D4C7B] font-normal'>IT Professional</span></p>
                                        <div className='inline-flex'>
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#FFFFF5] p-5 text-left space-y-5'>
                                <h2 className='w-[331px] text-[#020043] text-[19px] font-semibold leading-7'>Life-Saving Care, Life-Changing Experience</h2>
                                <p className='text-[#4D4C7B] font-normal leading-[18px] text-[12px]'>My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
                                <div className='flex gap-3 items-center'>
                                    <img src={man2} alt="" />
                                    <div className='mt-2'>
                                        <p className='text-[#020043] font-medium text-[12px] leading-4'>Michael R, <span className='text-[#4D4C7B] font-normal'>Business Executive</span></p>
                                        <div className='inline-flex'>
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#FFFFF5] p-5 text-left space-y-5'>
                                <h2 className='w-[331px] text-[#020043] text-[19px] font-semibold leading-7'>A Partner in Health and
                                    Wellness</h2>
                                <p className='text-[#4D4C7B] font-normal leading-[18px] text-[12px]'>As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>
                                <div className='flex gap-3 items-center'>
                                    <img src={man3} alt="" />
                                    <div className='mt-2'>
                                        <p className='text-[#020043] font-medium text-[12px] leading-4'>David S, <span className='text-[#4D4C7B] font-normal'>Lawyer</span></p>
                                        <div className='inline-flex'>
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                            <FaStar className='text-[#FFE03D] w-[14px]' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default About;