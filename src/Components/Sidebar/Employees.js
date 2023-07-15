import './Employees.css';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { Table, Tag } from 'antd';

const columns = [
    {
        title: 'Employees ID',
        dataIndex: 'employees',
        key: 'employees',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Employees Name',
        dataIndex: 'employees_name',
        key: 'employees_name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Department',
        dataIndex: 'department',
        key: 'department',
    },
    {
        title: 'Email Address',
        dataIndex: 'email_address',
        key: 'email address',
    },
    {
        title: 'Contact number',
        dataIndex: 'contact_number',
        key: 'contact number',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
    {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
];
const data = [
    {
        employees: '1001',
        employees_name: 'John Brown',
        department: 'computer',
        email_address: 'jai@gmail.com',
        contact_number: 9737114083,
        gender: 'male',
        location: 'delhi',
        tags: ['active'],
    },
    {
        employees: '1001',
        employees_name: 'John Brown',
        department: 'computer',
        email_address: 'jai@gmail.com',
        contact_number: 9737114083,
        gender: 'male',
        location: 'Bihar',
        tags: ['active'],
    },
    {
        employees: '1001',
        employees_name: 'John Brown',
        department: 'computer',
        email_address: 'jai@gmail.com',
        contact_number: 9737114083,
        gender: 'male',
        location: 'gujarat',
        tags: ['active'],
    },
];

function Employees() {
    return (
        <>
            <div className="container-fluid">



                <div className="row border-bottom breadCrumb">
                    <div className="col-xl-3 col-lg-3 col-md-3 p-2">
                        <h4>Employees</h4>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 d-flex align-items-center">
                        <Breadcrumb
                            items={[

                                {
                                    href: '',
                                    title: (
                                        <div className=''>
                                            <HomeOutlined />
                                            <span>Employees</span>
                                        </div>
                                    ),
                                },
                                {
                                    title: <p className='text-primary'>Employees</p>,
                                },
                            ]}
                        />
                    </div>

                </div>
                <div className="container-fluid mt-5 mb-3 border rounded-3 py-2">
                    <div className='row mb-3'>
                        <div className="col-xl-4 col-lg-4 col-md-3 col-sm-2 col-2">
                            <h6>Employees</h6>

                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-9 col-sm-10 col-10  d-flex justify-content-evenly align-items-center">
                            <button type="button" class="btn btn-outline-primary">Export Report</button>
                            <button type="button" class="btn btn-primary">+Add Employee</button>
                            <button type="button" class="btn btn-dark">+Invite Employee</button>
                        </div>
                    </div>
                    <Table columns={columns} dataSource={data} className='tableEmp'/>
                </div>
            </div>
        </>
    )
}
export default Employees;