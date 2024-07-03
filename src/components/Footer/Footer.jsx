import logo from '../../assets/logo.png';
import social from '../../assets/social.png';


const Footer = () => {
    return (
        <div className='grid grid-cols-4 py-[120px] px-[160px] text-[14px] font-normal bg-[#020043] text-[#FFFFF5] items-center justify-center gap-18'>

            <div className='space-y-8'>
                <img src={logo} alt="" />
                <div>
                    <p>123 Main Street Anytown, USA</p>
                    <p>Postal Code: 12345</p>
                </div>
                <div>
                    <p>Support: support@oyolloo.com</p>
                    <p>(Available : 10:00am to 07:00pm)</p>
                </div>
            </div>

            <div>
                <ul className='space-y-4'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Success Page</li>
                    <li>Terms and condition</li>
                </ul>
            </div>

            <div>
                <ul className='space-y-4'>
                    <li>Services</li>
                    <li>Scheduling</li>
                    <li>Contact Us</li>
                    <li>Patient Portal</li>
                </ul>
            </div>

            <div className='space-y-8'>
                <div className='space-y-2'>
                    <h4>Follow Us</h4>
                    <img src={social} alt="" />
                </div>
                <p>@docplus 2024</p>
            </div>
        </div>
    );
};

export default Footer;