export interface TableListItem {
    serviceId: string;
    serviceName: string;
    serviceAddress: string;
    serviceType: string;
    loadBanlancer: string;
    createAt: Date;
  }
  
  export interface TableListPagination {
    total: number;
    pageSize: number;
    current: number;
  }
  
  export interface TableListData {
    list: TableListItem[];
    pagination: Partial<TableListPagination>;
  }
  
  export interface TableListParams {
    serviceName?: string;
    serviceAddress?: string;
    serviceType?: string;
    loadBanlancer?: string;
    createAt?: string;
    pageSize?: number;
    currentPage?: number;
    filter?: { [key: string]: any[] };
    sorter?: { [key: string]: any };
  }
  