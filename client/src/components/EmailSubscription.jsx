import axios from 'axios';
import { useState } from 'react';

export default function EmailSubscription() {
    const [email, setEmail] = useState('');

    const handleChange = (event) => {
        setEmail(event.target.value);
    }
    async function handleSubmit(event) {
        event.preventDefault();
        console.log(email);
        try {
            console.log("hello");
            // const form = event.currentTarget;
            // const data = new FormData();
            // data.append("email", form.email.value);
            try {
                console.log("hello");
                const res = await axios.post("/api/subscribe", { email: email });
                console.log(res);
            } catch (error) {
                console.log(error);
                console.log("hello")
            }
        } catch (error) {
            console.log(error);
            console.log("hello")
        }
    }
    return (
        <>
            <div className='bg-black'>
                <div className='container mx-auto py-8 text-white'>
                    <h2 className='text-3xl font-bold text-center mb-4'>Subscribe to our newsletter</h2>
                    <p className='text-center mb-4'>Get the latest news and updates from our team.</p>
                    <div className='flex justify-center'>
                        <form onSubmit={handleSubmit}>
                            <input type='text' value={email} onChange={handleChange} name="email" className="p-2 mr-2 w-96 border-slate-700 border-[1px]" placeholder='Enter your email address'
                                style={{
                                    background:
                                        "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                                }} />
                            <button type="submit" className='hover:text-[#C084FC] bg-[#71D9D3] hover:bg-white hover:transition-colors hover:ease-in-out hover:duration-700 text-black font-bold p-2'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
