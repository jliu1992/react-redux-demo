import React, { Component } from 'react';
import {
  List, Skeleton,
} from 'antd';

import { connect } from 'react-redux';
import { deleteRemark } from '../actions/remark';

class RemarkList extends Component {
  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={this.props.remarks}
        renderItem={item => (
          <List.Item actions={[<a onClick={() => this.props.deleteRemark(item)}>delete</a>]}>
            <Skeleton title={false} loading={false} active>
              <div>{item}</div>
            </Skeleton>
          </List.Item>
        )}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    remarks: state.remark
  }
}

export default connect(mapStateToProps, { deleteRemark })(RemarkList);