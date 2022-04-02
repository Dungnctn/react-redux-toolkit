import React from 'react'
import { getAllUser } from '../../api/user';
import { UserType } from '../../type/userType';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const UserManager = () => {

    // const Users = useSelector(state => state.)

    const columns = [
        {
            title: '#',
            dataIndex: 'key',
            width: 150,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            width: 150,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            width: 150,
        },
        {
            title: 'Role',
            dataIndex: 'role',
            width: 150
        },
        {
            title: 'Edit',
            dataIndex: 'edit',
            width: 150
        },
        ];

    const dataSource = Users.map((item, index) => {
        return {
            key: index + 1,
            name: item.username,
            email: item.email,
            role: item.role,
            edit: <NavLink to={`${item._id}`} >Cạp nhat</NavLink>
        }
    })
    return (
        <div>
            <Table columns={columns} dataSource={dataSource} />
        </div>
    )
}

export default UserManager