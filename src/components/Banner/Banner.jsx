import bannerImg from '../../assets/banner.png';

const Banner = () => {
    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <img src={bannerImg} alt="" style={{ display: 'block' }} />
            <div style={{
                borderRadius: '48px',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(179deg, rgba(0, 193, 157, 0.00) -25.42%, rgba(2, 0, 67, 0.47) 107.11%)'
            }}></div>
        </div>
    );
};

export default Banner;
