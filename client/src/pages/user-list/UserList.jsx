import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { userRows } from '../../data';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 100,
      renderCell: (params) => {
        return <div className="user-l-id">{params.row.id}</div>;
      },
    },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="user-list-user">
            <img
              className="user-list-avatar"
              src={params.row.avatar}
              alt="avatar"
            />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      renderCell: (params) => {
        return <div className="user-l-email">{params.row.email}</div>;
      },
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 130,
      renderCell: (params) => {
        return <div className="user-l-status">{params.row.status}</div>;
      },
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160,
      renderCell: (params) => {
        return (
          <div className="user-l-transaction">{params.row.transaction}</div>
        );
      },
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <button className="user-l-edit">Edit</button>
            </Link>
            <DeleteOutline
              className="user-l-delete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="user-list">
      <DataGrid
        className="grid"
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[2]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default UserList;
