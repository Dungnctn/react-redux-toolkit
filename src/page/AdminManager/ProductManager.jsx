import { DeleteOutlined, DownloadOutlined } from '@ant-design/icons';
import { Button, Table, Image } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllCategory } from '../../api/category';
import { removeProduct } from '../../api/product';
import { deleteProduct, getProduct } from '../../slice/productSlice';

const ProductManager = () => {
  const [cate, setCate] = useState();
  const products = useSelector((state) => state.product.value)
  const dispatch = useDispatch();
  useEffect(() => {
    const sendCate = async () => {
      const {data} = await getAllCategory();
      setCate(data)
    }
    sendCate()
  }, [])
  // const filterCate = (id) => {
  //   const data = cate?.filter(it => it._id === id);
  //   return data

  // }
  // console.log(filterCate('6239833cd76dbb62d0a0bf81'));
  useEffect(() => {
    dispatch(getProduct());
  }, [])
  const colums = [
    {
        title: '#',
        dataIndex: 'key',
        width: 50,
      },
      {
        title: 'Name',
        dataIndex: 'name',
        width: 150,
      },
      {
        title: 'Image',
        dataIndex: 'image',
        width: 150,
      },
      {
        title: 'Price',
        dataIndex: 'price',
        width: 150,
      },
      {
        title: 'Category',
        dataIndex: 'category',
        width: 150
      },
      {
        title: 'Edit',
        dataIndex: 'edit',
        width: 150
      },
      {
        title: 'Remove',
        dataIndex: 'remove',
        width: 100
      }
  ]
  const dataSource = products.map((item, index) => {
    return {
        key: index + 1,
        name: item.name,
        image: <Image width={150} src={item.image}  />,
        price: item.price.toLocaleString('vi-VN'),
        category: item.category,
        edit: <NavLink to={`${item._id}/edit`}><Button type="primary" shape="round" icon={<DownloadOutlined />}> Update </Button></NavLink>,
        remove: <Button type="primary"  onClick={() => dispatch(deleteProduct(item._id))} danger shape="round" icon={<DeleteOutlined />} > Remove </Button>
    }
  })

  return (
    <div>
        <button className="btn btn-info float-left">
            <NavLink to="/admin/product/add" className='text-[#fff]'>Add Product ++</NavLink>
        </button>
        <Table columns={colums} dataSource={dataSource} />
    </div>
  )
}

export default ProductManager