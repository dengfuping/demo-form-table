import React from 'react';
import { Form } from 'antd';
import FormTable from '../components/FormTable';
import styles from './index.css';

const FormItem = Form.Item;

class IndexPage extends React.Component {
  render() {
    const { form: { getFieldDecorator, getFieldValue } } = this.props;
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: 'Age',
      dataIndex: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
    }];
    const dataSource = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    }];
    return (
      <div className={styles.container}>
        <Form>
          <FormItem label="表格作为表单控件">
            {
              getFieldDecorator('selectedRowKeys', {})(<FormTable dataSource={dataSource} columns={columns} />)
            }
          </FormItem>
        </Form>
        <h4>选中项为: {getFieldValue('selectedRowKeys') && getFieldValue('selectedRowKeys').join(', ')}</h4>
      </div>
    );
  }
}

export default Form.create()(IndexPage);
