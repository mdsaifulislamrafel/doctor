const SectionTitle = ({ btn, title }) => {
    return (
        <div className="space-y-4">
            <button className='btn btn-outline bg-white py-[10px] px-6 rounded-full'>{btn}</button>
            <h2 className='text-[#020043] text-4xl font-semibold  leading-[54px]'>{title}</h2>
        </div>
    );
};

export default SectionTitle;