import './Featured.css'
import SectionTitle from '../../../components/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
const Featured = () => {
    return (
        <div className='featured-item bg-fixed'>
            <SectionTitle
                subHeading="Check it Out"
                heading="Featured Item"
            >
            </SectionTitle>
            <div className=' md:flex justify-center items-center py-8 px-16 bg-slate-500 bg-opacity-40'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='px-10 text-white bg--500'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase text-white'>Where can i get some?</p>
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, magnam tenetur deleniti odit inventore illum fugit delectus, sapiente iste vero, aperiam porro a officiis totam perspiciatis error officia. Sit molestiae, sequi at rerum fugit totam exercitationem fugiat autem! Fugit, in.</p>
                    <button className='btn btn-outline border-0 border-b-4'>Order Now!!</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;