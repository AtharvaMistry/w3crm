import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import './Employees.css';
import { Button, Table } from 'antd';
import { useState } from 'react';
const columns = [
    {
        title: '#',
        dataIndex: 'index',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
    {
        title: 'Start Date',
        dataIndex: 's_date',
    },
    {
        title: 'End Date',
        dataIndex: 'e_date',
    },
    {
        title: 'Assigned to',
        dataIndex: 'Assign',
    },
    {
        title: 'Tags',
        dataIndex: 'tags',
    },
];
const data = [];
for (let i = 0; i < 9; i++) {
    data.push({
        key: i,
        index: i,
        name: `Edward King ${i}`,
        status: `${2*i+1}`,
        s_date: "-",
        e_date: "-",
        Assign: "jaimeen",
        tags: `-`
    });
}

function Task() {

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const start = () => {
        setLoading(true);
        // ajax request after empty completing
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;


    return (
        <div className='container-fluid p-2'>
            {/* todo */}
            <div className="row p-2 border-bottom breadCrumb1">
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
                    <h4>Task</h4>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4  col-sm-4 col-4 d-flex justify-content-start align-items-center">
                    <Breadcrumb
                        items={[

                            {
                                href: '',
                                title: (
                                    <>
                                        <HomeOutlined />
                                        <span>Task</span>
                                    </>
                                ),
                            },
                            {
                                title: <p className='text-secondary'>Task</p>,
                            },
                        ]}
                    />
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-7 d-flex justify-content-end">
                    <button className='btn btn-primary'>+Add Task</button>
                </div>
            </div>

            {/* todo */}
            <div className="row mt-3 mb-3">
                <div className="col-xl-12">
                    <h5>Task Summary</h5>
                </div>
            </div>

            {/* todo */}
            <div className="border p-3 rounded">
                <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-3 mb-2 col-sm-4 col-12 ps-1">
                        <div className=" border-end border-secondary tastSummry">
                            <div className='d-flex'>
                                <p className='me-1 m-0 h2 text-danger'>8</p>
                                <h6 className='d-flex justify-content-center align-items-center'>Not started</h6>
                            </div>
                            <p className='m-0 fs-6'>Tasks assigne</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3 mb-2 col-sm-4 col-12 ps-0">
                        <div className=" border-end border-secondary tastSummry">
                            <div className='d-flex'>
                                <p className='me-1 m-0 h2 text-info'>8</p>
                                <h6 className='d-flex justify-content-center align-items-center'>In progress</h6>
                            </div>
                            <p className='m-0 fs-6'>Tasks assigne</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3 mb-2 col-sm-4 col-12 ps-0">
                        <div className="  tastSummry  border-end border-secondary">
                            <div className='d-flex'>
                                <p className='me-1 m-0 h2 text-warning'>8</p>
                                <h6 className='d-flex justify-content-center align-items-center'>Testing</h6>
                            </div>
                            <p className='m-0 fs-6'>Tasks assigne</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3 mb-2 col-sm-4 col-12 ps-0">
                        <div className=" c border-end border-secondary tastSummry">
                            <div className='d-flex'>
                                <p className='me-1 m-0 h2 text-primary'>8</p>
                                <h6 className='d-flex justify-content-center align-items-center'>Awaiting</h6>
                            </div>
                            <p className='m-0 fs-6'>Tasks assigne</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3 mb-2 col-sm-4 col-12 ps-0">
                        <div className=" border-end border-secondary tastSummry">
                            <div className='d-flex'>
                                <p className='me-1 m-0 h2 text-Secondary'>10</p>
                                <h6 className='d-flex justify-content-center align-items-center'>Complete</h6>
                            </div>
                            <p className='m-0 fs-6'>Tasks assigne</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3 mb-2 col-sm-4 col-12 ps-0">
                        <div className="tastSummry  border-end border-secondary">
                            <div className='d-flex'>
                                <p className='me-1 m-0 h2 text-success'>8</p>
                                <h6 className='d-flex justify-content-center align-items-center'>Pending</h6>
                            </div>
                            <p className='m-0 fs-6'>Tasks assigne</p>
                        </div>
                    </div>




                </div>

            </div>
            {/* todo: part 4 */}
            <div className="container-fluid border rounded  mt-3">
                <div className="row p-3 ">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <h3>Finance</h3>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <button type="button" class="btn btn-outline-primary">Export Report</button>
                    </div>
                </div>


                <div className="row">
                    <div className='col-xl-12 col-lg-12 col-sm-12 col-md-12 col-12 tableTask1'>
                        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                    </div>
                </div>


            </div>

        </div>
    )
}
export default Task;