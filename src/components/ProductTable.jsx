import React from 'react';

import ModalBtn from './ModalBtn';

const ProductTable = ({ products }) => {
  return (
    <table className="table table-primary">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">組織</th>
          <th scope="col">用途</th>
          <th scope="col">年齡</th>
          <th scope="col">性別</th>
          <th scope="col" className=" text-center">其他</th>

        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr key={item.id}>
            <th scope="row">{item.num}</th>
            <td>{item.category}</td>
            <td>{item.content}</td>
            <td>{item.description}</td>
            <td>{item.unit}</td>
            <th className="d-grid d-md-block text-center">
              <ModalBtn btnText="編輯" idName={`${item.id}edit`} type="edit" productData={item} />
              <ModalBtn btnText="刪除" outLine="true" idName={`${item.id}delete`} type="delete" />
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
