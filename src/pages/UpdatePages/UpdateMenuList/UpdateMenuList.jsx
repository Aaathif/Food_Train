import "./UpdateMenuList.scss";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useState } from "react";
import { useLocation, useParams } from 'react-router-dom'
import useFetch from "../../../hooks/useFetch";
import { useEffect } from "react";


const UpdateMenuList = ({ inputs, title }) => {

  const [getblogData, setGetBlogData] = useState({});

  const [MenuListData, setMenuListData] = useState({})


  const location = useLocation()
  console.log(location)
  const ids = location.pathname.split("/")[3]
  console.log(ids)
  //   const data = location.state.data
  //   console.log(data)

  useEffect (() => {
    axios
      .get(`http://localhost:8000/api/menuList/find/${ids}`)
      .then((res) => {
        setGetBlogData(res.data);
        // alert(res.data.TextH)
      })
      .catch((err) => {
        console.log(err.data);
      });
  }, [ids]);

  const mergedData = inputs.map((item) => ({
    ...item,
    value: getblogData[item.id] || "",
  }));



  const updateMenuList = async () => {
    // const { id } = MenuList;

    console.log(MenuListData)
    try {
      const updatedMenuList = await axios.put(`http://localhost:8000/api/menuList/${ids}`, MenuListData);
      if(updatedMenuList){
        alert("Your data has been successfully updated")
      }
      console.log('Updated MenuList:', updatedMenuList.data);
    } catch (err) {
      console.log(err);
    }
  };

  // const update = () => {
  //   alert("Update sucessful")
  // }

  const handleChange = (e) => {
    setMenuListData({ ...MenuListData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMenuList();
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              {mergedData?.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                </div>
              ))}
              <button type="submit">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMenuList;
