import SectionTitle from "../../sheard/SectionTitle";

const Frequently = () => {
    return (
        <div className="text-start w-full">
            <div className='mb-8'>
                <SectionTitle btn={'Faq'} title={'Frequntly Asked Question'} />
            </div>

            <div className="space-y-[12px]">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium bg-[#FFFFF5] border-b-2 border-[#4D4C7B] border-opacity-5"> What are your office hours?</div>
                    <div className="collapse-content bg-white">
                        <p className="text-[#343268] text-[14px] py-4 px-[46px]">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium bg-[#FFFFF5] border-b-2 border-[#4D4C7B] border-opacity-5">How can I schedule an appointment?</div>
                    <div className="collapse-content bg-white">
                        <p className="text-[#343268] text-[14px] py-4 px-[46px]">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium bg-[#FFFFF5] border-b-2 border-[#4D4C7B] border-opacity-5">Do you accept insurance?</div>
                    <div className="collapse-content bg-white">
                        <p className="text-[#343268] text-[14px] py-4 px-[46px]">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium bg-[#FFFFF5] border-b-2 border-[#4D4C7B] border-opacity-5">What should I bring to my appointment?</div>
                    <div className="collapse-content bg-white">
                        <p className="text-[#343268] text-[14px] py-4 px-[46px]">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium bg-[#FFFFF5] border-b-2 border-[#4D4C7B] border-opacity-5">Do you offer telemedicine appointments?</div>
                    <div className="collapse-content bg-white">
                        <p className="text-[#343268] text-[14px] py-4 px-[46px]">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Frequently;