import './Products.css';
import '../../App.css';

import { productsData } from "../../Data/products";
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import Product from './Product';

import { useSelector } from 'react-redux';
import { getSelectedProductCategory, getSelectedMonthCategory } from '../../redux/productsSlice';


export const Products = () => {

    const selectedProductCategory = useSelector(getSelectedProductCategory);

    const selectedMonthCategory = useSelector(getSelectedMonthCategory);


    return (
        <div className='products'>
            < Sidebar />
            <div className='product'>
                {productsData
                    .filter(product => {
                        if (selectedProductCategory === 'All products')
                            return true;
                        else {
                            return selectedProductCategory === product.category;
                        }
                    }
                    )
                    .filter(product => {
                        if (selectedMonthCategory === 'All months') return true;
                        else return product.season.includes(selectedMonthCategory);
                    })

                    .map((element, index) => (
                        <Product element={element} key={index} />
                    ))}
            </div>
        </div>
    );
};;
