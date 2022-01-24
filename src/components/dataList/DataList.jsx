import React, {Fragment, useEffect, useState} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

import './DataList.css';

const DataList = () => {
    const [userList, setUserList] = useState([]);

    const columns = [
        {dataField: 'id', text: 'Id', sort: true},
        {dataField: 'nome', text: 'Nome', sort: true, filter: textFilter()},
        {dataField: 'sobrenome', text: 'Sobrenome', sort: true, filter: textFilter()},
        {dataField: 'email', text: 'Email', sort: true, filter: textFilter()},
        {dataField: 'cidade', text: 'Cidade', filter: textFilter()},
    ];

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 10,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: false,
        alwaysShowAllBtns: true,
    });

    useEffect(() => {
        fetch('http://files.cod3r.com.br/curso-js/funcionarios.json')
        .then(response => response.json())
        .then(result => setUserList(result))
        .catch(error => console.log(error));
    }, [])

    return (
        <Fragment>
            <BootstrapTable
                bootstrap4 
                keyField='id' 
                columns={columns} 
                data={userList}
                pagination={pagination}
                filter={filterFactory()} />
        </Fragment>
    )
}

export default DataList;