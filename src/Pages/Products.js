import { productsData } from "../Data/ProductsData";
import '../css/Products.css';
import '../css/App.css';
import { Sidebar } from '../Components/Sidebar';
import { useState, useEffect } from 'react';
import LoaderPage from './Loader-page';

export const Products = () => {

    const [food, setFood] = useState(productsData);
    const [stateLoader, setStateLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setStateLoader(false);
        }, 250);
    }, []);

    if (stateLoader) {
        return <LoaderPage />;
    }

    const categoryFilter = (filterParam) => {
        if (filterParam === 'All') {
            setFood(productsData);
        } else {
            const newCategory = productsData.filter(product => product.category === filterParam);
            setFood(newCategory);
        }
    };

    const seasonFilter = (season) => {
        if (season === 'All months') {
            setFood(productsData);
        } else {
            const newSeason = productsData.filter(product => product.season.includes(season));
            setFood(newSeason);
        }

    };



    return (
        <div>
            <div className="products">
                <aside>
                    <Sidebar categoryFilter={categoryFilter} seasonFilter={seasonFilter} />
                </aside>

                <main className="product">
                    {food.map((element, index) => {
                        const { name, price, newPrice, weight, img, season } = element;
                        return (
                            <div className="product-card" key={index}>
                                <div className={'image-container product-image'}>                            <img src={img} alt={name} /></div>
                                <h2>{name}</h2>
                                <div className="price">
                                    <p className={newPrice ? "new-price" : 'original-price'}>{newPrice ? `$${newPrice}` : null}</p>
                                    <p className={newPrice ? "old-price" : null}> ${price}</p>
                                    <p className="weight">({weight})</p>
                                </div>
                                <p className="season">Harvested in: {season}</p>
                            </div>

                        );
                    })}
                </main>
            </div>
        </div>);
};;
