import { useState } from "react"
import FormPreview from "../../components/Form/FormPreview"

function CreateForm() {

  const [preview, setPreview] = useState(false)
  const [create,setCreate] = useState({
    email:"",
    file:""
  })
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setCreate({ ...create, [property]: value }); 
    
  }

  // const fileUpload = async (file) => {
     
  //   const formData = new FormData();
  //   formData.append('upload_preset','ml_default')
  //   formData.append('file', file);
    
  //   try {
  //       const res = await fetch(cloudinaryUrl, {
  //           method: 'POST',
  //           body: formData
  //       });
        
  //       if (!res.ok) return null;

  //       const data = await res.json();
  //       return data.secure_url;

  //   } catch (error) {
  //       throw error;
  //   }

  const handleCharge = (event) => {
   const file = event.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (event) =>{
        try {
          const parsedJson = JSON.parse(event.target.result);
          setCreate({ ...create, file: parsedJson })
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      }
      reader.readAsText(file);
  }

  const handlePreview =() =>{
    setPreview(true)
  }

  const handleSubmit =() =>{
    
  }


  console.log(create);
  console.log(create.file);

  return (
    <div className='flex justify-center align-middle items-center h-screen'>
      {!preview? 
    <form className='border shadow-md rounded-xl flex flex-col gap-8 p-10'>
        
    <h1 className=' text-5xl font-extrabold'>Form creation</h1>

    <div className='flex flex-col gap-1'>
    <label htmlFor="email">Please type an email  </label>
    <input className='border' onChange={handleChange}type="text" value={create.email} name="email" />
    </div>

    <div className='flex flex-col gap-1'>
    <label htmlFor="jsonFile">Upload your JSON file </label>
    <input className='border' onChange={handleCharge}   type="file" name="jsonFile" />
    </div>
        <button onClick={handlePreview} className='py-2 px-5 bg-slate-700 text-cyan-50 rounded-md font-semibold'>Preview</button>
    </form>
    :
    <div className=" z-0 absolute border flex flex-col gap-5 px-20 pb-10 pt-8 top-20 items-center shadow-xl">
      <h1 className=" text-center mb-10 text-4xl">This is a preview</h1>
      <FormPreview jsonForm={create.file}/>
      <button onClick={handleSubmit} className='py-2 px-5 bg-slate-700 text-cyan-50 rounded-md font-semibold'>Upload</button>
    </div>  
    }
      
      </div>
  )
}

export default CreateForm