import './ProductList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { productRows } from '../../data';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 100,
      renderCell: (params) => {
        return <div className="product-l-id">{params.row.id}</div>;
      },
    },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="product-list-user">
            <img
              className="product-list-avatar"
              src={params.row.avatar}
              alt="avatar"
            />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 120,
      renderCell: (params) => {
        return <div className="product-l-stock">{params.row.stock}</div>;
      },
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (params) => {
        return <div className="product-l-status">{params.row.status}</div>;
      },
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 130,
      renderCell: (params) => {
        return <div className="product-l-price">{params.row.price}</div>;
      },
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <button className="product-l-edit">Edit</button>
            </Link>
            <DeleteOutline
              className="product-l-delete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="product-list">
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

export default ProductList;
