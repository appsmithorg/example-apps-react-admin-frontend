import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
} from 'react-admin';

const ProductListEdit = (props) => {
  return (
    <Edit title='Update shipping limit date' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput  title='Name' source='product_category_name' />
        <NumberInput title='Height'  source='product_height_cm' />
        <NumberInput title='Length'  source='product_length_cm' />
        <NumberInput title='Width'  source='product_width_cm' />
      </SimpleForm>
    </Edit>
  );
};

export default ProductListEdit;
