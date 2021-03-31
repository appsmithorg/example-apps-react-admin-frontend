import React from 'react';
import {List, Datagrid, TextField, EditButton } from 'react-admin';

const ProductList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='product_category_name' />
        <TextField source='product_name_lenght' />
        <TextField source='product_height_cm' />
        <TextField source='product_length_cm' />
        <TextField source='product_width_cm' />
        <TextField source='product_weight_g' />
        <TextField source='product_photos_qty' />
        <TextField source='product_description_lenght' />

        <EditButton basePath='/products' />
      </Datagrid>
    </List>
  );
}

export default ProductList;
