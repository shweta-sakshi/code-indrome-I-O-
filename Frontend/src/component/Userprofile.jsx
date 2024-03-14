import React from 'react'
const [profilePicture, setProfilePicture] = useState(null);
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log('Form Data:', formData);
  console.log('Profile Picture:', profilePicture);

const User = () => {
  return (
    <div>
   <label>Profile Picture:</label>
   <input type="file"accept= "image/*" on change={handleFileChange} required/>
            
    </div>
  )
}

export default User
