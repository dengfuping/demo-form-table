import React from 'react';
import { Table } from 'antd';

class FormTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [],
    };
  }

  static getDerivedStateFromProps(props) {
    const newState = {
      prevProps: props,
    };
    const { value } = props;
    if ('value' in props) {
      // 将下发的 value 赋值给 FormTable，这里将 selectedRowKeys 作为 FormTable 的值
      newState.selectedRowKeys = value;
    }
    return newState;
  }

  handleSelectChange = (selectedRowKeys) => {
    const { onChange } = this.props;
    if (onChange) {
      // 通过 rowSelection.onChange 函数获取 selectedRowKeys
      // 并通过下发的 onChange 属性函数收集 FormTable 的值
      onChange(selectedRowKeys);
    }
  }

  render () {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.handleSelectChange,
    };
    const newProps = {
      ...this.props,
      rowSelection,
    }
    return (
      <Table { ...newProps }/>
    );
  }
}

export default FormTable;