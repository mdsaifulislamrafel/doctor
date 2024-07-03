import solutionsImg from '../../assets/Solutions.png';

const Solutions = () => {
    return (
        <div className='flex justify-between items-center gap-7 my-40'>
            <div className='text-left w-[470px] space-y-5'>
                <button className="btn btn-outline py-3 px-6 rounded-full text-sm font-normal text-[#020043] bg-white">Who we are</button>
                <h2 className='text-4xl font-semibold text-[#020043] w-[396px] leading-[54px]'>We Help To Get Soultions</h2>
                <p className='text-[#4D4C7B] font-normal text-sm leading-[24px]'>We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                </p>
                <button className="btn btn-warning">Learn more <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M13.3137 1.00001C13.3137 0.447727 12.866 1.2137e-05 12.3137 1.18841e-05L3.31371 1.26849e-05C2.76142 1.23477e-05 2.31371 0.447728 2.31371 1.00001C2.31371 1.5523 2.76142 2.00001 3.31371 2.00001L11.3137 2.00001L11.3137 10C11.3137 10.5523 11.7614 11 12.3137 11C12.866 11 13.3137 10.5523 13.3137 10L13.3137 1.00001ZM1.70711 13.0208L13.0208 1.70712L11.6066 0.292906L0.292893 11.6066L1.70711 13.0208Z" fill="#020043" />
                </svg></button>
            </div>


            <div>
                <div className='relative'>
                    <img src={solutionsImg} alt="" />
                    <div className='bg-[#343268] w-[395px] h-[210px] text-white rounded-[32px] absolute -bottom-14 -left-24 px-[30px] py-[47px] text-left space-y-5'>
                        <h4 className='text-[26px] font-medium leading-[24px    ]'>Our mission is simple</h4>
                        <p className='text-[#ffffffcc] font-normal leading-[24px]'>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solutions;