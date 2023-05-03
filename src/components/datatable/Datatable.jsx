import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
// import userInputs from '../../formSource'
import { useReactToPrint } from 'react-to-print'




const Datatable = ({columns}) => {

  const componentPDF = useRef()

  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState();  //this is need when we need to delete
  const { data, loading, error } = useFetch(`/${path}`);  //this is fetch user/product pages when we needed 

  useEffect(() => {
    setList(data);
  }, [data]);

  const generatePDF = useReactToPrint({
    content: ()=>componentPDF.current,
    documentTitle: "Summary Data",
    // onAfterPrint: ()=>alert("Data saved in PDF")
  })

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (err) {}
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link> */}
            <Link to={`/${path}/update/${params.row._id}`} state={data} style={{ textDecoration: "none" }}>
              <div className="viewButton">Update</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable" ref={componentPDF}>
      <div className="datatableTitle">
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>

      <button className="pdf" onClick={generatePDF}>PDF</button>
      <DataGrid 
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
      
    </div>
  );
};

export default Datatable;
