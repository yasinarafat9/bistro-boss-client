
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const SignUp = () => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('user profile info updated')
                        reset();
                        Swal.fire({
                            title: 'User Created successfully Successful',
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        });
                        navigate('/');
                    })


            })
    }
    console.log(watch("example"));

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Sign Up</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-500'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} name='photoURL' placeholder="photoURL" className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-500'>PhotoURL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-500'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20
                                })} name='password' placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-500'>Password must be less than 20 characters</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='btn btn-primary' value="Sign Up" />
                            </div>
                        </form>
                        <p><small>New Here?<Link to='/login'>Create an Account</Link></small></p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SignUp;