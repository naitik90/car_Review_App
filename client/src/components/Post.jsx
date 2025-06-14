import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Post = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://carreviewapp-server-1.onrender.com/posts/getData'); // Replace with your API endpoint
                setData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handlePostClick = (postId) => {
        console.log("hello world");
        console.log(postId);
        navigate(`/${postId}`);
    };


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="container mx-auto p-4">
            <div>
                <div className='flex justify-center mt-[10vw] mb-[5vw]'>
                   <p className='text-3xl font-semibold'>Car Posts</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((item) => (
                    <div key={item.id} onClick={() => handlePostClick(item._id)} className="bg-white p-4 rounded shadow cursor-pointer">
                        <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                        {item.image != "" ?
                            <img src={item.image || "loading-bar.."} alt="" width="500px" />
                            :
                            <div>loading
                                <div className="w-full max-w-lg">
                                    <div className="bg-gray-300 rounded-full h-4 overflow-hidden">
                                        <div className="bg-blue-600 h-4 rounded-full animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        }
                        <p>{item.message}</p>
                        <p className='font-bold'>{item.creator}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Post;
