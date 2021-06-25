import "./setting.css"
import Sidebar from "../../components/sidebar/Sidebar"
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios"

const PF = "http://localhost:5000/images/";

function Setting() {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const {user, dispatch} = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "UPDATE_START"});
        const updateUser = {
            userId: user._id,
            username,email, password,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updateUser.profilePic = filename;
            try {
                await axios.post("/upload", data)
                setSuccess(true);
            } catch (err) {}
        }
        try {
            const res = await axios.put("/users/"+ user._id, updateUser);
            setSuccess(true);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" });
        }
    };


    return (
      <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle" >Delete Your Account</span>
            </div>
            <form className="settingsForm" onSubmit={handleSubmit}>
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} alt="" />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}} onChange={(e)=>setFile(e.target.files[0])}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder={user.username} onChange={(e)=>setUsername(e.target.value)}/>
                <label>E-mail</label>
                <input type="email" placeholder={user.email} 
                onChange={(e)=>setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="settingsSubmit" type="submit">Update</button>
                {success && <span style={{color: "green",alignSelf:"center",marginTop:"20px"}}>Profile has been Updated...</span>}
            </form>
        </div>
        <Sidebar />
      </div>
    );
}

export default Setting
