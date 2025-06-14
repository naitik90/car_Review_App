import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CarPost = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            console.log(postId);
            try {
                const response = await axios.get(`https://carreviewapp-server-1.onrender.com/posts/getPost/${postId}`); // Replace with your API endpoint
                setPost(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchPost();
    }, [postId]);

    if (loading) return <div className="text-center mt-10">Loading...</div>;
    if (error) return <div className="text-center mt-10">Error: {error.message}</div>;

    return (
        <div className="container mx-auto p-4">
            {post && (
                <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
                    <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                    {post.image ? (
                        <img src={post.image} alt={post.title} className="w-full mb-4 rounded" />
                    ) : (
                        <div className="w-full max-w-lg mb-4">
                            <div className="bg-gray-300 rounded-full h-4 overflow-hidden">
                                <div className="bg-blue-600 h-4 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    )}
                    <p className="text-lg mb-4">{post.message}</p>
                    <p className="font-bold mb-4">Creator: {post.creator}</p>
                    
                    {/* Additional Details */}
                    <div className="space-y-4 mt-6">
                        <div className="bg-gray-200 border border-gray-300 p-4 rounded">
                            <p className="text-lg font-semibold">Name:</p>
                            <p className="text-lg">{post.name}</p>
                        </div>
                        <div className="bg-gray-200 border border-gray-300 p-4 rounded">
                            <p className="text-lg font-semibold">Model Number:</p>
                            <p className="text-lg">{post.modelNumber}</p>
                        </div>
                        <div className="bg-gray-200 border border-gray-300 p-4 rounded">
                            <p className="text-lg font-semibold">Top Speed:</p>
                            <p className="text-lg">{post.topSpeed}</p>
                        </div>
                        <div className="bg-gray-200 border border-gray-300 p-4 rounded">
                            <p className="text-lg font-semibold">Mileage:</p>
                            <p className="text-lg">{post.mileage}</p>
                        </div>
                        <div className="bg-gray-200 border border-gray-300 p-4 rounded">
                            <p className="text-lg font-semibold">Color:</p>
                            <p className="text-lg">{post.color}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CarPost;
