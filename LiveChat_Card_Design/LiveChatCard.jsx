import React, { useState } from 'react';

const LiveChat = () => {

    // const [menimise,SetMenimise] = useState(false);

    // if click on the menimize icon (make usestate true) body of the card will be hidden

    return (
        <div className='fixed right-0 lg:right-5 top-96 lg:top-48 z-10 mb-20'>
            <div className="rounded-xl w-auto lg:w-80  h-96 relative  text-black bg-base-100 shadow-xl my-auto">
                {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}

                <div className='flex flex-row bg-blue-500 py-2 rounded-t-lg  justify-between my-auto'>
                    <div className='flex  gap-2 ms-3'>
                        {/* <h1 className='my-auto rounded-full'>img</h1> */}
                        <img className='my-auto h-8 w-9 rounded-full' src="data:image/jpeg;base64,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" alt="" />
                        <div className=''>
                            <h1 className='font-bold text-sm'>Mykhalo Isalev </h1>
                            <h1 className='text-green-400 font-bold text-sm'>Available</h1>
                        </div>
                    </div>

                    <div className='flex  gap-5 me-3 my-auto'>
                        <h1>icon</h1>
                        <h1>icon</h1>
                        <h1>icon</h1>
                    </div>

                </div>


                <div className="card-body border">
                    <div className="chat chat-start">
                        <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-bubble">It was you who would bring balance to the Force</div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-bubble">Not leave it in Darkness</div>
                    </div>
                </div>


                <div className='absolute bottom-0 mb-3 w-full flex justify-between'>
                    <input className='w-full rounded-xl mx-2 border-0 decoration-none ps-2 bg-slate-100' type="text" placeholder='What can we help you with' name="" id=""></input>
                    <button className='btn btn-sm'>Send Icon</button>
                </div>
            </div>
        </div>
    );
};

export default LiveChat;