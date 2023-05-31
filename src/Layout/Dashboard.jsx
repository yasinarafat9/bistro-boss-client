import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCallendarAlt, FaHome, FaCalendar } from 'react-icons/fa'


const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side bg-[#D1A054">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to='/dashboard/home'><FaHome />User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><FaCalendar />Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/history'><FaWallet />Payment History</NavLink></li>
                    <li><NavLink to='/dashboard/mycart'><FaShoppingCart />My Cart</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome />Home</NavLink></li>
                    <li><NavLink to='/menu'>Our Menu</NavLink></li>
                    <li><NavLink to='/order/salad'>Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;