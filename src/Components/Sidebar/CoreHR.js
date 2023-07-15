import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { Table, Tag } from 'antd';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Calendar, Col, Radio, Row, Select, Typography, theme } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import dayLocaleData from 'dayjs/plugin/localeData';
ChartJS.register(ArcElement, Tooltip, Legend);
// calender
dayjs.extend(dayLocaleData);

const data12 = {
    labels: ['Completed Projects', 'Progress Projects', 'Cancelled', 'Yet to Start'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',

            ],
            borderWidth: 1,
        },
    ],
};


const columns = [
    {
        title: 'Employees ID',
        dataIndex: 'employees',
        key: 'employees',
        render: (text) => <a href='/'>{text}</a>,
    },
    {
        title: 'Employees Name',
        dataIndex: 'employees_name',
        key: 'employees_name',
        render: (text) => <a href='/'>{text}</a>,
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

        email_address: 'jai@gmail.com',
        contact_number: 9737114083,
        gender: 'male',
        location: 'delhi',
        tags: ['active'],
    },
    {
        employees: '1001',
        employees_name: 'John Brown',

        email_address: 'jai@gmail.com',
        contact_number: 9737114083,
        gender: 'male',
        location: 'Bihar',
        tags: ['active'],
    },
    {
        employees: '1001',
        employees_name: 'John Brown',

        email_address: 'jai@gmail.com',
        contact_number: 9737114083,
        gender: 'male',
        location: 'gujarat',
        tags: ['active'],
    },
];
// todo: table 2
const columns1 = [
    {
        title: 'Employees Name',
        dataIndex: 'employees_name',
        key: 'employees_name',
        render: (text) => <a href='/'>{text}</a>,
    },

    {
        title: '1',
        dataIndex: 'attend1',
        key: 'attend1',
    },
    {
        title: '2',
        dataIndex: 'attend2',
        key: 'attend2',
    },
    {
        title: '3',
        dataIndex: 'attend3',
        key: 'attend3',
    },
    {
        title: '4',
        dataIndex: 'attend4',
        key: 'attend4',
    },
    {
        title: '5',
        dataIndex: 'attend5',
        key: 'attend5',
    },
    {
        title: '6',
        dataIndex: 'attend6',
        key: 'attend6',
    },
    {
        title: '7',
        dataIndex: 'attend7',
        key: 'attend7',
    },
    {
        title: '8',
        dataIndex: 'attend8',
        key: 'attend8',
    },
    {
        title: '9',
        dataIndex: 'attend9',
        key: 'attend9',
    },
    {
        title: '10',
        dataIndex: 'attend10',
        key: 'attend10',
    },
    {
        title: '11',
        dataIndex: 'attend11',
        key: 'attend11',
    },
    {
        title: '12',
        dataIndex: 'attend12',
        key: 'attend12',
    },
    {
        title: '13',
        dataIndex: 'attend13',
        key: 'attend13',
    },
    {
        title: '14',
        dataIndex: 'attend14',
        key: 'attend14',
    },
    {
        title: '15',
        dataIndex: 'attend15',
        key: 'attend15',
    },
    {
        title: '16',
        dataIndex: 'attend16',
        key: 'attend16',
    },
    {
        title: '17',
        dataIndex: 'attend17',
        key: 'attend17',
    },
    {
        title: '18',
        dataIndex: 'attend18',
        key: 'attend18',
    },
    {
        title: '19',
        dataIndex: 'attend19',
        key: 'attend19',
    },
    {
        title: '20',
        dataIndex: 'attend20',
        key: 'attend20',
    },
    {
        title: '21',
        dataIndex: 'attend21',
        key: 'attend21',
    },
    {
        title: '22',
        dataIndex: 'attend22',
        key: 'attend22',
    },
    {
        title: '23',
        dataIndex: 'attend23',
        key: 'attend23',
    },
    {
        title: '24',
        dataIndex: 'attend24',
        key: 'attend24',
    },
    {
        title: '25',
        dataIndex: 'attend25',
        key: 'attend25',
    },

    {
        title: '26',
        dataIndex: 'attend26',
        key: 'attend26',
    },
    {
        title: '27',
        dataIndex: 'attend27',
        key: 'attend27',
    },
    {
        title: '28',
        dataIndex: 'attend28',
        key: 'attend28',
    },
    {
        title: '29',
        dataIndex: 'attend29',
        key: 'attend29',
    },
    {
        title: '30',
        dataIndex: 'attend30',
        key: 'attend30',
    },

];
const data1 = [
    {

        employees_name: 'John Brown',
        attend1: 1,
    },
    {
        employees: '1001',
        employees_name: 'John Brown',

        email_address: 'jai@gmail.com',
        contact_number: 9737114083,
        gender: 'male',
        location: 'Bihar',
        tags: ['active'],
    },
    {
        employees: '1001',
        employees_name: 'John Brown',

        email_address: 'jai@gmail.com',
        contact_number: 9737114083,
        gender: 'male',
        location: 'gujarat',
        tags: ['active'],
    },
];


// todo: start
function CoreHr() {
    const { token } = theme.useToken();
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };
    const wrapperStyle = {
        width: 400,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row border-bottom ">
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                        <h4>Core HR</h4>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 d-flex justify-content-start align-items-center">
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
                                    title: 'Employees',
                                },
                            ]}
                        />
                    </div>

                    <div className="container-fluid mt-5 col-md-12">
                        <div className='d-flex justify-content-between align-items-center mb-3'>
                            <h6>Attendance</h6>

                            <button type="button" class="btn btn-outline-primary">Export Report</button>
                            <button type="button" class="btn btn-dark">+Mark Attendance</button>

                        </div>
                        <Table columns={columns} dataSource={data} />
                    </div>
                    {/* todo:    table 2 */}


                </div>
                <div className="container-fluid mt-5">
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <h6>Employees</h6>

                        <button type="button" class="btn btn-outline-primary">Export Report</button>

                        <button type="button" class="btn btn-primary">+Add Employee</button>


                        <button type="button" class="btn btn-dark">+Invite Employee</button>

                    </div>
                    <Table columns={columns1} dataSource={data1} />
                </div>


                {/* todo: */}

                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center mb-5">
                            <Doughnut data={data12} className='doughNut' />
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 calender">
                            <div style={wrapperStyle}>
                                <Calendar
                                    fullscreen={false}
                                    headerRender={({ value, type, onChange, onTypeChange }) => {
                                        const start = 0;
                                        const end = 12;
                                        const monthOptions = [];
                                        let current = value.clone();
                                        const localeData = value.localeData();
                                        const months = [];
                                        for (let i = 0; i < 12; i++) {
                                            current = current.month(i);
                                            months.push(localeData.monthsShort(current));
                                        }
                                        for (let i = start; i < end; i++) {
                                            monthOptions.push(
                                                <Select.Option key={i} value={i} className="month-item">
                                                    {months[i]}
                                                </Select.Option>,
                                            );
                                        }
                                        const year = value.year();
                                        const month = value.month();
                                        const options = [];
                                        for (let i = year - 10; i < year + 10; i += 1) {
                                            options.push(
                                                <Select.Option key={i} value={i} className="year-item">
                                                    {i}
                                                </Select.Option>,
                                            );
                                        }
                                        return (
                                            <div
                                                style={{
                                                    padding: 8,
                                                }}
                                            >
                                                <Typography.Title level={4}>Upcoming holidays</Typography.Title>
                                                <Row gutter={8}>
                                                    <Col>
                                                        <Radio.Group
                                                            size="small"
                                                            onChange={(e) => onTypeChange(e.target.value)}
                                                            value={type}
                                                        >
                                                            <Radio.Button value="month">Month</Radio.Button>
                                                            <Radio.Button value="year">Year</Radio.Button>
                                                        </Radio.Group>
                                                    </Col>
                                                    <Col>
                                                        <Select
                                                            size="small"
                                                            dropdownMatchSelectWidth={false}
                                                            className="my-year-select"
                                                            value={year}
                                                            onChange={(newYear) => {
                                                                const now = value.clone().year(newYear);
                                                                onChange(now);
                                                            }}
                                                        >
                                                            {options}
                                                        </Select>
                                                    </Col>
                                                    <Col>
                                                        <Select
                                                            size="small"
                                                            dropdownMatchSelectWidth={false}
                                                            value={month}
                                                            onChange={(newMonth) => {
                                                                const now = value.clone().month(newMonth);
                                                                onChange(now);
                                                            }}
                                                        >
                                                            {monthOptions}
                                                        </Select>
                                                    </Col>
                                                </Row>
                                            </div>
                                        );
                                    }}
                                    onPanelChange={onPanelChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default CoreHr;