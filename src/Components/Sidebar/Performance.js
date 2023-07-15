import './Employees.css';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { Rate } from 'antd';
import { Table } from 'antd';
const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        sorter: {
            compare: (a, b) => a.title - b.title,
            multiple: 3,
        },
    },
    {
        title: 'Designation',
        dataIndex: 'designation',
        sorter: {
            compare: (a, b) => a.designation - b.designation,
            multiple: 3,
        },
    },
    {
        title: 'Rating',
        dataIndex: 'rating',
        sorter: {
            compare: (a, b) => a.rating - b.rating,
            multiple: 2,
        },
    },
    {
        title: 'Added by',
        dataIndex: 'added_by',
        sorter: {
            compare: (a, b) => a.added_by - b.added_by,
            multiple: 1,
        },
    },
    {
        title: 'Created Date',
        dataIndex: 'created_dt',
        sorter: {
            compare: (a, b) => a.created_dt - b.created_dt,
            multiple: 1,
        },
    },
];
const data = [
    {
        key: '1',
        title: 'John Brown',
        designation: "Chemical engineer",
        rating: <Rate allowHalf defaultValue={2.5} />,
        added_by: 'Jim Green',
        created_dt: '14 feb 2023'
    },
    {
        key: '2',
        title: 'Jim Green',
        rating: <Rate allowHalf defaultValue={2.5} />,
        designation: "computer engineer",
        added_by: 'Jim Green',
        created_dt: '14 feb 2023'
    },
    {
        key: '3',
        title: 'Joe Black',
        rating: <Rate allowHalf defaultValue={2.5} />,
        designation: "it engineer",
        added_by: 'Jim Green',
        created_dt: '14 feb 2023'
    },
    {
        key: '4',
        title: 'Jim Red',
        rating: <Rate allowHalf defaultValue={2.5} />,
        designation: "plastic engineer",
        added_by: 'Jim Green',
        created_dt: '14 feb 2023'
    },
];
const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};


function Performance() {
    return (
        <>

            <div className="container-fluid mt-4">


                {/* todo: */}
                <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-3">
                        <h4>Performance</h4>
                    </div>
                    <div className="col-xl-4 col-lg-3 col-md-3  col-sm-3 col-3 d-flex justify-content-start align-items-center">
                        <Breadcrumb
                            items={[

                                {
                                    href: '',
                                    title: (
                                        <>
                                            <HomeOutlined />
                                            <span>Home</span>
                                        </>
                                    ),
                                },
                                {
                                    title: 'Performance',
                                },
                            ]}
                        />
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-6 col-sm-6 col-6">
                        <button className='btn btn-primary'>+Add Task</button>
                    </div>
                </div>



                {/* todo:  */}
                <div className="container border rounded m-3">
                    <div className="row p-3">
                        <h3>Performance Indicator</h3>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                            <Table columns={columns} dataSource={data} onChange={onChange} />
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Performance;