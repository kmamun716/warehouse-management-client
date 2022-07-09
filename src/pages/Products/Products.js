import React from 'react';
import VegitableItems from '../../components/Home/VegitableItems';
import useVegitables from '../../customHooks/useVegitables';

const Products = () => {
    const [vegetables] = useVegitables();
    return (
        <div>
            <VegitableItems vegetables={vegetables}/>
        </div>
    );
};

export default Products;