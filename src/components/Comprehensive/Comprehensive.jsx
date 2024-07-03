import mane from '../../assets/mane.png'
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'
import star from '../../assets/star.png'



const Comprehensive = () => {
    return (
        <div className="py-12 p-12">
            <div className="flex items-center justify-center gap-5">
                {/* first  */}
                <div>
                    <div className="bg-white w-[216px] mt-6 shadow p-5 rounded-3xl">
                        <h3 className="text-[40px] font-semibold text-[#020043]">90%</h3>
                        <p className="mt-2 text-sm text-gray-600">Patient satisfaction rate, reflecting our commitment.</p>
                        <div className='flex mt-6 justify-center'>
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>
                {/* second */}
                <div>
                    <div>
                        <h2 className='text-[#020043] text-5xl font-semibold text-center leading-[56px] w-[532px] mx-auto mb-5'>Comprehensive Care for Every Patient</h2>
                    </div>
                    <div className='flex gap-5'>
                        <div className="bg-white rounded-lg w-[215px]  shadow p-6">
                            <div className='text-left'>
                                <h3 className="text-2xl font-bold text-gray-900">500%</h3>
                                <p className="mt-2 text-sm w-[115px] text-gray-600">Board-certified doctors</p>
                            </div>
                            <div className='w-[77px] h-[77px] float-end'>
                                <img src={img2} alt="" />
                            </div>
                        </div>

                        <div className="bg-white rounded-lg w-[215px] h-[162px] text-left mt-12 shadow p-6">
                            <div className="flex gap-3">
                                <h3 className="text-2xl font-bold text-gray-900">4.8</h3>
                                <img src={star} alt="" />
                            </div>
                            <p className="my-2 text-gray-600">Over 20,000 Patient</p>
                            <img className='w-30 h-9 -ml-2' src={mane} alt="" />
                        </div>

                        <div className="bg-white rounded-lg w-[215px]  shadow p-6">
                            <div className='text-left'>
                                <h3 className="text-2xl font-bold text-gray-900">$5000</h3>
                                <p className="mt-2 text-sm w-[115px] text-gray-600">Money spend for poor patient</p>
                            </div>
                            <div className='w-[77px] h-[77px] float-end'>
                                <img src={img3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* thad */}
                <div>
                    <div className="bg-white w-[216px] mt-8 shadow p-5 rounded-3xl">
                        <h3 className="text-[40px] font-semibold text-[#020043]">50+</h3>
                        <p className="mt-2 text-sm w-40 text-gray-600">Free lession video for patient</p>
                        <div className='flex mt-6 justify-center'>
                            <img src={img4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comprehensive;
