import React, {useEffect,  useState } from 'react';
import { useNavigate } from "react-router-dom";
import { logout } from '../../services/authentication';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { gridConfig } from './gridConfig';
import './styles.css'

export default function UserListPage() {
  const [pageSize, setPageSize] = useState(6);

  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://63a1c51eba35b96522e7a1b1.mockapi.io/vdm/Users')
      .then(response => {
        const { data } = response;
        setUsers(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div 
      className="list-container"
      style={{ height: 400, width: '100vw' }}
    >
      <h2>
        Registered users:
      </h2>
      <DataGrid
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10]}
        pagination
        autoHeight
        columns={gridConfig}
        rows={users}
      />
      <Button
        color="secondary"
        variant="contained"
        margin="dense"
        fullWidth={true}
        onClick={() => {
          logout();
          navigate('/');
        }}
        style={{
          marginTop: "1rem",
          color: "#FAF9F5"
        }}
      >
        Logout
      </Button>
    </div>
  );
}
