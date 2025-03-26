// import { useState } from 'react';
// import React from 'react';
// import { Link } from 'react-router-dom';
// const Data = () => {
//     const [inputData, setInputData] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async () => {
//     if (!inputData.trim()) {
//       setMessage(alert('Please enter some data before submitting.'));
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:8000/analyse/social', { // Replace with backend IP
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ data: inputData }),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         setMessage(result.message);
//         setInputData('');
//       } else {
//         setMessage('Failed to submit data.');
//       }
//     } catch (error) {
//       setMessage('Error connecting to server.');
//     }
//   };

//   return (
//     <div className='bg-custom bg-cover h-screen '>
//       <div className='text-white flex pl-7 gap-2 '>
//         <img className='w-[50px] h-auto hover:scale-105 hover:cursor-pointer' src="https://s3-alpha-sig.figma.com/img/3053/29b0/8fd5b335738721719260d5c2e4970ec9?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BwhX06Kzmg2Job-EYf0etBallany571SQpqgb0-4O-1CtyAanFk~1HLnsvEpTa6zNQ8ojhatpQdcBJzY3iH0zw~ObR9j48iCk1mEvKl4cQaEjA4b5kr5-DI3j3FltfOPsU0lQw~0e~rs-vgFMPhzuLpU873ACQI8uiiBD-PVF0s2y6yC7UBJzkr2FKIt~G7Oz6s6pK3vclZBNz2mgTADzh5eWtUtV9mN-UHLyTnM3y1y5Yu0SgISF2OsYYKL7ZxKvcT-CcptL0e~Iek9tADbKfO7honU8uStWiotkPCrSyz1HvMdoPuFXFbG8Bfx3Fn8cko9lxs1afAiKfdsCSK-dQ__ " alt="" /> 
//         <h1 className='mt-1 shadow-md p-3 rounded-lg shadow-gray-100 hover:cursor-pointer hover:shadow-md hover:p-3 hover:rounded-lg hover:scale-105 hover:shadow-slate-300'> 
//         <Link to="/">Back to Home</Link></h1></div>
//         <div className='flex place-content-center mt-16'>
//         <div className='w-[50%] h-[30vh] bg-red-100  rounded-lg shadow-lg border-b-4 border-b-slate-200 shadow-orange-300 '>
//            <div className='text-wrap '>
//            <textarea className='pl-2   w-[100%] h-[30vh] placeholder:text-xl placeholder:text-black placeholder:mt-2 placeholder:font-mono  placeholder:font-bold placehold:text-wrap' type="text" placeholder='Enter your data '
//            value={inputData}
//             onChange={(e) => setInputData(e.target.value)}></textarea>
//            </div>
//           </div>
//         </div>
//         <div className='flex place-content-center text-white mt-8'>
//         <button onClick={handleSubmit} className='p-4 border-b-4 border-t-4 border-t-emerald-200 shadow-lg border-b-emerald-200 m-4 rounded-lg hover:shadow-orange-300 hover:scale-105  text-xl font-mono font-semibold  '>Submit</button>
//       </div>
//       {message && (
//         <div className="text-center mt-4 text-white">
//           {message}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Data;

// import { useState } from 'react';
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Data = () => {
//     const [inputData, setInputData] = useState('');
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [message, setMessage] = useState('');

//     const handleSubmit = async () => {
//         if (!inputData.trim()) {
//             alert('Please enter some data before submitting.');
//             return;
//         }

//         try {
//             const formdata = new FormData();
//             formdata.append('text', inputData);

//             if (selectedImage) {
//                 formdata.append('image', selectedImage);
//             }

//             const response = await fetch('http://localhost:8000/analyse/social', {
//                 method: 'POST',
//                 body: formdata,
//             });

//             const result = await response.json();

//             if (response.ok) {
//               console.log("Tag:",result.tag, "Category:",result.category,"Desc:", result.description);
//                 setMessage(result.message || 'Data submitted successfully!');
//                 setInputData('');
//                 setSelectedImage(null);
//             } else {
//                 setMessage(result.error || 'Failed to submit data.');
//             }
//         } catch (error) {
//             setMessage('Error connecting to server: ' + error.message);
//         }
//     };

//     return (
//         <div className='bg-custom bg-cover h-screen'>
//             <div className='text-white flex pl-7 gap-2 '>
//                 <img className='w-[50px] h-auto hover:scale-105 hover:cursor-pointer' src="https://s3-alpha-sig.figma.com/img/3053/29b0/8fd5b335738721719260d5c2e4970ec9?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BwhX06Kzmg2Job-EYf0etBallany571SQpqgb0-4O-1CtyAanFk~1HLnsvEpTa6zNQ8ojhatpQdcBJzY3iH0zw~ObR9j48iCk1mEvKl4cQaEjA4b5kr5-DI3j3FltfOPsU0lQw~0e~rs-vgFMPhzuLpU873ACQI8uiiBD-PVF0s2y6yC7UBJzkr2FKIt~G7Oz6s6pK3vclZBNz2mgTADzh5eWtUtV9mN-UHLyTnM3y1y5Yu0SgISF2OsYYKL7ZxKvcT-CcptL0e~Iek9tADbKfO7honU8uStWiotkPCrSyz1HvMdoPuFXFbG8Bfx3Fn8cko9lxs1afAiKfdsCSK-dQ__ " alt="" /> 
//                 <h1 className='mt-1 shadow-md p-3 rounded-lg shadow-gray-100 hover:cursor-pointer hover:shadow-md hover:p-3 hover:rounded-lg hover:scale-105 hover:shadow-slate-300'> 
//                 <Link to="/">Back to Home</Link></h1>
//             </div>
//             <div className='flex flex-col items-center mt-16'>
//                 <div className='w-[50%] h-[30vh] bg-red-100 rounded-lg shadow-lg border-b-4 border-b-slate-200 shadow-orange-300 '>
//                     <textarea 
//                         className='pl-2 w-[100%] h-[30vh] placeholder:text-xl placeholder:text-black placeholder:mt-2 placeholder:font-mono placeholder:font-bold' 
//                         type="text" 
//                         placeholder='Enter your data '
//                         value={inputData}
//                         onChange={(e) => setInputData(e.target.value)}>
//                     </textarea>
//                 </div>
                
//                 {/* Image upload field */}
//                 <div className='w-[50%] mt-4'>
//                     <input 
//                         type="file" 
//                         accept="image/*"
//                         className="text-white"
//                         onChange={(e) => setSelectedImage(e.target.files[0])} 
//                     />
//                 </div>
                
//                 <div className='text-white mt-8'>
//                     <button 
//                         onClick={handleSubmit} 
//                         className='p-4 border-b-4 border-t-4 border-t-emerald-200 shadow-lg border-b-emerald-200 m-4 rounded-lg hover:shadow-orange-300 hover:scale-105 text-xl font-mono font-semibold'>
//                         Submit
//                     </button>
//                 </div>
//             </div>
            
//             {message && (
//                 <div className="text-center mt-4 text-white">
//                     {message}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Data;

import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const Data = () => {
    const [inputData, setInputData] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [message, setMessage] = useState('');
    const [tag,setTag] = useState('');
    const [description,setDescription] = useState('');
    const [ category , setCategory] = useState('')

    const handleSubmit = async () => {
        if (!inputData.trim()) {
            alert('Please enter some data before submitting.');
            return;
        }

        try {
            const formdata = new FormData();
            formdata.append('text', inputData);

            if (selectedImage) {
                formdata.append('image', selectedImage);
            }

            const response = await fetch('http://localhost:8000/analyse/social', {
                method: 'POST',
                body: formdata,
            });

            const result = await response.json();

            if (response.ok) {
              console.log("Tag:",result.tag, "Category:",result.category,"Desc:", result.description);
                setMessage( console.log('Data submitted successfully!'));
                setTag( result.tag);
                setCategory(result.category);
                setDescription(result.description);
                setInputData('');
                setSelectedImage(null);
            } else {
                setMessage(result.error || 'Failed to submit data.');
            }
        } catch (error) {
            setMessage('Error connecting to server: ' + error.message);
        }
    };

    return (
        <div className='bg-custom bg-cover h-[800px]'>
            <div className='text-white flex pl-7 gap-2 '>
                <img className='w-[50px] h-auto hover:scale-105 hover:cursor-pointer' src="https://s3-alpha-sig.figma.com/img/3053/29b0/8fd5b335738721719260d5c2e4970ec9?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BwhX06Kzmg2Job-EYf0etBallany571SQpqgb0-4O-1CtyAanFk~1HLnsvEpTa6zNQ8ojhatpQdcBJzY3iH0zw~ObR9j48iCk1mEvKl4cQaEjA4b5kr5-DI3j3FltfOPsU0lQw~0e~rs-vgFMPhzuLpU873ACQI8uiiBD-PVF0s2y6yC7UBJzkr2FKIt~G7Oz6s6pK3vclZBNz2mgTADzh5eWtUtV9mN-UHLyTnM3y1y5Yu0SgISF2OsYYKL7ZxKvcT-CcptL0e~Iek9tADbKfO7honU8uStWiotkPCrSyz1HvMdoPuFXFbG8Bfx3Fn8cko9lxs1afAiKfdsCSK-dQ__ " alt="" /> 
                <h1 className='mt-1 shadow-md p-3 rounded-lg shadow-gray-100 hover:cursor-pointer hover:shadow-md hover:p-3 hover:rounded-lg hover:scale-105 hover:shadow-slate-300'> 
                <Link to="/">Back to Home</Link></h1>
            </div>
            <div className='flex flex-col items-center mt-16'>
                <div className='w-[50%] h-[30vh] bg-red-100 rounded-lg shadow-lg border-b-4 border-b-slate-200 shadow-orange-300 '>
                    <textarea
                        className='pl-2 w-[100%] h-[30vh] placeholder:text-xl placeholder:text-black placeholder:mt-2 placeholder:font-mono placeholder:font-bold' 
                        type="text" 
                        placeholder='Enter your data '
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}>
                    </textarea>
                </div>
                
                {/* Image upload field */}
                <div className='w-[50%] mt-4'>
                    <input 
                        type="file" 
                        accept="image/*"
                        className="text-white"
                        onChange={(e) => setSelectedImage(e.target.files[0])} 
                    />
                </div>
                
                <div className='text-white mt-6'>
                    <button 
                        onClick={handleSubmit} 
                        className='p-4 border-b-4 border-t-4 border-t-emerald-200 shadow-lg border-b-emerald-200 m-4 rounded-lg hover:shadow-orange-300 hover:scale-105 text-xl font-mono font-semibold'>
                        Submit
                    </button>
                </div>
            </div>
            
            <div className='flex place-content-center mt-6 '>
                <div className='bg-[#2d1f1fae] text-white rounded-md  shadow-inner shadow-red-300  hover:shadow-stone-300  hover:shadow-lg   hover:scale-105' > 
                {tag && (
                <div className="text-center mt-4   font-mono ">
                    <div className='border-b-2 text-md  border-b-slate-300 shadow-md shadow-gray-300 '>
                    Tag: {tag}
                    </div>
                </div>
            )}
            {category && (
                <div className="text-center text-md mt-4 font-mono border-b-2 shadow-md shadow-gray-300 border-b-slate-300">
                    Category: {category}
                </div>
            )}
            {description && (
                <div className="text-center text-md mt-4 font-mono mb-4 px-2 ">
                    Description: {description}
                </div>
            )}
                </div>
            </div>

        </div>
    );
}

export default Data;
