import {useEffect,  useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { gridConfig } from './gridConfig';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './styles.css'

export default function UsersList() {
  const [pageSize, setPageSize] = useState(6);

  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  function toNavigate() {
    navigate('/');
  }

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
      id="list-container"
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
        onClick={toNavigate}
        style={{
          marginTop: "1rem"
        }}
      >
        Logout
      </Button>
    </div>
  );
}