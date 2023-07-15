import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import {
    
    Button,
    Cascader,
    Form,
    Input,
    Select,
} from 'antd';
import { useState } from 'react';


const { Option } = Select;
const residences = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

// todo: table two

const columns = [
    {
        title: 'Account Title',
        dataIndex: 'Account_Title',
    },
    {
        title: 'Amount',
        dataIndex: 'Amount',
        sorter: {
            compare: (a, b) => a - b,
            multiple: 3,
        },
    },
    {
        title: 'Account no.',
        dataIndex: 'Account_no',
        sorter: {
            compare: (a, b) => a - b,
            multiple: 2,
        },
    },
    {
        title: 'Branch code',
        dataIndex: 'Branch_code',
        sorter: {
            compare: (a, b) => a - b,
            multiple: 1,
        },
    },
    {
        title: 'Branch Name',
        dataIndex: 'Branch_Name',
        sorter: {
            compare: (a, b) => a - b,
            multiple: 1,
        },
    },
];
const data = [
    {
        key: '1',
        Account_Title: 'Fixed deposit',
        Amount: "$98",
        Account_no: 608767541243,
        Branch_code: 707652,
        Branch_Name: "SBI"
    },
    {
        key: '2',
        Account_Title: 'Fixed deposit',
        Amount: "$98",
        Account_no: 608767541243,
        Branch_code: 707652,
        Branch_Name: "SBI"
    },
    {
        key: '3',
        Account_Title: 'Fixed deposit',
        Amount: "$98",
        Account_no: 608767541243,
        Branch_code: 707652,
        Branch_Name: "SBI"
    },
    {
        key: '4',
        Account_Title: 'Fixed deposit',
        Amount: "$98",
        Account_no: 608767541243,
        Branch_code: 707652,
        Branch_Name: "SBI"
    },
    {
        key: '5',
        Account_Title: 'Fixed deposit',
        Amount: "$98",
        Account_no: 608767541243,
        Branch_code: 707652,
        Branch_Name: "SBI"
    },

];
const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};



function Finance() {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
    };
    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));




    return (
        <>
            <div className="container-fluid">

                <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                        <h4>Finance</h4>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 d-flex justify-content-start align-items-center">
                        <Breadcrumb
                            items={[

                                {
                                    href: '',
                                    title: (
                                        <>
                                            <HomeOutlined />
                                            <span>Finance</span>
                                        </>
                                    ),
                                },
                                {
                                    title: 'Employees',
                                },
                            ]}
                        />
                    </div>

                </div>

                <div className="row">
                    <div className="col-xl-12 m-3 p-2 border rounded">
                        <h3 className='border-bottom p-2 mb-4'>Add New Account</h3>
                        <Form
                            {...formItemLayout}
                            form={form}
                            name="register"
                            onFinish={onFinish}
                            initialValues={{
                                residence: ['zhejiang', 'hangzhou', 'xihu'],
                                prefix: '86',
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                            scrollToFirstError
                        >
                            <Form.Item
                                name="Account title"
                                label="Account title"
                                rules={[
                                    {
                                        type: 'Account title',
                                        message: 'The input is not valid Account title!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your Account title!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="Amount"
                                label="Amount"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Amount!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password />
                            </Form.Item>


                            <Form.Item
                                name="Account no."
                                label="Account no."
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Account no.!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="Branch code"
                                label="Habitual Branch code"
                                rules={[
                                    {
                                        // type: 'array',
                                        required: true,
                                        message: 'Please select your Branch code!',
                                    },
                                ]}
                            >
                                <Cascader options={residences} />
                            </Form.Item>

                            <Form.Item
                                name="Branch Name"
                                label="Branch Name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Branch Name!',
                                    },
                                ]}
                            >
                                <Input
                                    // addonBefore={prefixSelector}
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            </Form.Item>

                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">
                                    Confirm
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>

                </div>

                <div className="container-fluid  border rounded  m-3">
                    <div className="row p-3 ">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                            <h3>Finance</h3>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                            <button type="button" class="btn btn-outline-primary">Export Report</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <Table columns={columns} dataSource={data} onChange={onChange} />
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Finance;