
import AppointmentImg from '../../assets/Appointment.png';
import logo from '../../assets/logo.png';

const Appointment = () => {
    return (
        <div className='relative min-h-screen mt-20'>
            <div className='relative'>
                <img src={AppointmentImg} alt="Background" className='w-full object-cover' />
                <div className='absolute inset-0 rounded-3xl bg-gradient-to-r from-[#020043] to-[rgba(2, 0, 67, 0.30)]'></div>
            </div>
            <div className='absolute inset-0 flex flex-col justify-center items-start bottom-2/4 left-16'>
                <h2 className='text-white text-[40px] font-semibold leading-[60px] mb-4 text-left'>Get Your<br />First Appointment<br />at 50% Off!</h2>
                <div className='flex space-x-4'>
                    <button className="btn btn-warning">Appointment <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M13.3137 1.00001C13.3137 0.447727 12.866 1.2137e-05 12.3137 1.18841e-05L3.31371 1.26849e-05C2.76142 1.23477e-05 2.31371 0.447728 2.31371 1.00001C2.31371 1.5523 2.76142 2.00001 3.31371 2.00001L11.3137 2.00001L11.3137 10C11.3137 10.5523 11.7614 11 12.3137 11C12.866 11 13.3137 10.5523 13.3137 10L13.3137 1.00001ZM1.70711 13.0208L13.0208 1.70712L11.6066 0.292906L0.292893 11.6066L1.70711 13.0208Z" fill="#020043" />
                    </svg></button>


                    <button className="btn btn-outline text-white px-8 py-4">Learn More <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M13.6272 0.999768C13.6272 0.447483 13.1795 -0.000232004 12.6272 -0.000232257L3.62718 -0.000231456C3.0749 -0.000231793 2.62718 0.447484 2.62719 0.999768C2.62719 1.55205 3.0749 1.99977 3.62719 1.99977L11.6272 1.99977L11.6272 9.99977C11.6272 10.5521 12.0749 10.9998 12.6272 10.9998C13.1795 10.9998 13.6272 10.5521 13.6272 9.99977L13.6272 0.999768ZM2.02058 13.0206L13.3343 1.70688L11.9201 0.292661L0.60637 11.6064L2.02058 13.0206Z" fill="#FFFFF5" />
                    </svg></button>
                </div>
                <div className='absolute top-16 right-16'>
                    <img src={logo} alt="Logo" className='w-24' />
                </div>
            </div>
        </div>
    );
};

export default Appointment;
