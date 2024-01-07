import Mock from 'mockjs'
import {Form} from "ant-design-vue";

Mock.setup({
    timeout: '1000-2000'
})

const columns = [
    {
        title: 'Full Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Column 1',
        dataIndex: 'address',
    },
    {
        title: 'Column 2',
        dataIndex: 'address',
    },
    {
        title: 'Column 3',
        dataIndex: 'address',
    },
    {
        title: 'Column 4',
        dataIndex: 'address',
    },
    { title: 'Column 5', dataIndex: 'address' },
];

let formData = new FormData();
formData.append('a', 'aaaaaaa')

Mock.mock('/api/ping', 'get', function() {
    // console.log('get');
    return formData;
})

Mock.mock('/api/info', 'post', function(data) {
    console.log(data)
    return {
    }
})