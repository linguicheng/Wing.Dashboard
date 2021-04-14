import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { TableListItem } from './data.d';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { query} from './service';

const ServiceList: React.FC<{}> = () => {
    const columns: ProColumns<TableListItem>[] = [
        {
            title: '服务名称',
            dataIndex: 'serviceName'
        },
        {
            title: '服务地址',
            dataIndex: 'serviceAddress',
        },
        {
            title: '服务类别',
            dataIndex: 'serviceType',
            valueEnum:{
                'http':{text:'http'},
                'grpc':{text:'grpc'}
            }
            
        },
        {
            title: '负载均衡',
            dataIndex: 'loadBanlancer',
            valueEnum:{
                'RoundRobin':{text:'轮询'},
                'WeightRoundRobin':{text:'加权轮询'},
                'LeastConnection':{text:'最小连接数'}
            }
        },
        {
            title: '创建时间',
            dataIndex: 'createAt',
            valueType: 'dateRange'
        }
    ];
    return (
        <PageHeaderWrapper>
            <ProTable<TableListItem>
                headerTitle="服务列表"
                rowKey="serviceId"
                request={(params, sorter, filter) => query({ ...params, sorter, filter })}
                columns={columns}
            />
        </PageHeaderWrapper>
    );
};

export default ServiceList;