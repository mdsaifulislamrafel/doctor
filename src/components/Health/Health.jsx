import Health1 from '../../assets/Health1.png';
import Health2 from '../../assets/Health2.png';
import Health3 from '../../assets/Health3.png';

const Health = () => {
    return (
        <div className='p-10 bg-[#FFFFF5] rounded-2xl'>
            <div className='flex flex-wrap justify-center gap-5 items-center'>
                <div className='text-left w-[520px]  space-y-5'>
                    <button className="btn btn-outline py-3 px-6 rounded-full text-sm font-normal text-[#020043] bg-white">Service</button>
                    <h2 className='text-4xl font-semibold text-[#020043] w-[396px] leading-[54px]'>Empowering Health, Enriching Lives</h2>
                    <p className='text-[#4D4C7B] font-normal text-sm leading-[24px]'>We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
                    </p>
                    <button className="btn btn-warning">Appointment <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M13.3137 1.00001C13.3137 0.447727 12.866 1.2137e-05 12.3137 1.18841e-05L3.31371 1.26849e-05C2.76142 1.23477e-05 2.31371 0.447728 2.31371 1.00001C2.31371 1.5523 2.76142 2.00001 3.31371 2.00001L11.3137 2.00001L11.3137 10C11.3137 10.5523 11.7614 11 12.3137 11C12.866 11 13.3137 10.5523 13.3137 10L13.3137 1.00001ZM1.70711 13.0208L13.0208 1.70712L11.6066 0.292906L0.292893 11.6066L1.70711 13.0208Z" fill="#020043" />
                    </svg></button>
                </div>


                <div className='relative'>
                    <img src={Health1} alt="" />
                    <div className='bg-[#020043b3] w-[321px] h-[144px] text-white rounded-[32px] absolute bottom-5 left-5 pt-[18px] space-y-3 px-[18px] pb-[33px] text-left'>
                        <h4 className='text-xl font-semibold leading-[24px]'>Advanced Technology</h4>
                        <div className='flex gap-5'>
                            <p className='text-[#ffffffcc] w-[219px] text-[12px] font-normal leading-[18px] mb-8'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                            <button><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <circle cx="24" cy="24" r="24" fill="#FFC637" />
                                <path d="M32.1421 16.8579C32.1421 16.3056 31.6944 15.8579 31.1421 15.8579L22.1421 15.8579C21.5899 15.8579 21.1421 16.3056 21.1421 16.8579C21.1421 17.4101 21.5899 17.8579 22.1421 17.8579L30.1421 17.8579L30.1421 25.8579C30.1421 26.4101 30.5899 26.8579 31.1421 26.8579C31.6944 26.8579 32.1421 26.4101 32.1421 25.8579L32.1421 16.8579ZM17.7071 31.7071L31.8492 17.565L30.435 16.1508L16.2929 30.2929L17.7071 31.7071Z" fill="#FFFFF5" />
                            </svg></button>
                        </div>
                    </div>
                </div>

                <div className='relative'>
                    <img src={Health2} alt="" />
                    <div className='bg-[#020043b3] w-[321px] h-[144px] text-white rounded-[32px] absolute bottom-5 left-5 pt-[18px] space-y-3 px-[18px] pb-[33px] text-left'>
                        <h4 className='text-xl font-semibold leading-[24px]'>Online Doctor Meet</h4>
                        <div className='flex gap-5'>
                            <p className='text-[#ffffffcc] w-[219px] text-[12px] font-normal leading-[18px] mb-8'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                            <button><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <circle cx="24" cy="24" r="24" fill="#FFC637" />
                                <path d="M32.1421 16.8579C32.1421 16.3056 31.6944 15.8579 31.1421 15.8579L22.1421 15.8579C21.5899 15.8579 21.1421 16.3056 21.1421 16.8579C21.1421 17.4101 21.5899 17.8579 22.1421 17.8579L30.1421 17.8579L30.1421 25.8579C30.1421 26.4101 30.5899 26.8579 31.1421 26.8579C31.6944 26.8579 32.1421 26.4101 32.1421 25.8579L32.1421 16.8579ZM17.7071 31.7071L31.8492 17.565L30.435 16.1508L16.2929 30.2929L17.7071 31.7071Z" fill="#FFFFF5" />
                            </svg></button>
                        </div>
                    </div>
                </div>

                <div className='relative'>
                    <img src={Health3} alt="" />
                    <div className='bg-[#020043b3] w-[321px] h-[144px] text-white rounded-[32px] absolute bottom-5 left-5 pt-[18px] space-y-3 px-[18px] pb-[33px] text-left'>
                        <h4 className='text-xl font-semibold leading-[24px]'>Consultancy your health</h4>
                        <div className='flex gap-5'>
                            <p className='text-[#ffffffcc] w-[219px] text-[12px] font-normal leading-[18px] mb-8'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                            <button><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <circle cx="24" cy="24" r="24" fill="#FFC637" />
                                <path d="M32.1421 16.8579C32.1421 16.3056 31.6944 15.8579 31.1421 15.8579L22.1421 15.8579C21.5899 15.8579 21.1421 16.3056 21.1421 16.8579C21.1421 17.4101 21.5899 17.8579 22.1421 17.8579L30.1421 17.8579L30.1421 25.8579C30.1421 26.4101 30.5899 26.8579 31.1421 26.8579C31.6944 26.8579 32.1421 26.4101 32.1421 25.8579L32.1421 16.8579ZM17.7071 31.7071L31.8492 17.565L30.435 16.1508L16.2929 30.2929L17.7071 31.7071Z" fill="#FFFFF5" />
                            </svg></button>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Health;
