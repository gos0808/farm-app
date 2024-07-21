import '../css/Sidebar.css';
import { FormControl, Select, MenuItem } from '@mui/material';


export const Sidebar = ({ categoryFilter, seasonFilter }) => {
    const redirectToReciepesApp = () => {
        window.open('https://recipes-hunt.netlify.app/');
    };
    const redirectToNutritionApp = () => {
        window.open('https://nutritions-analysis.netlify.app/');
    };

    return (
        <div className='sidebar'>
            <div className='category-filter'>
                <button onClick={() =>
                    categoryFilter('All')}>All products</button>
                <button onClick={() => categoryFilter('Vegetables')}>Vegetables</button>
                <button onClick={() => categoryFilter('Fruits')}>Fruits</button>
                <button onClick={() => categoryFilter('Berries')}>Berries</button>
                <button onClick={() => categoryFilter('Greens')}>Greens</button>
                <button onClick={() => categoryFilter('Mushrooms')}>Mushrooms</button>
            </div>

            <div className='dropdown'>
                <p className="dropdown-label">Harvested in:</p>
                <FormControl>
                    <Select
                        className="select" defaultValue="All months" onChange={(e) => seasonFilter(e.target.value)}>
                        <MenuItem
                            value='All months'>All months</MenuItem>
                        <MenuItem value='April'>April</MenuItem>
                        <MenuItem value='May'>May</MenuItem>
                        <MenuItem value='June'>June</MenuItem>
                        <MenuItem value='July'>July</MenuItem>
                        <MenuItem value='August'>August</MenuItem>
                        <MenuItem value='September'>September</MenuItem>
                        <MenuItem value='October'>October</MenuItem>
                        <MenuItem value='November'>November</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div className="references">
                <div>
                    <p>Don't know what to cook? You can find recipes here</p>
                    <button onClick={redirectToReciepesApp}>Find recipes</button>
                </div>
                <div >
                    <p>Stay informed about nutritions</p>
                    <button
                        onClick={redirectToNutritionApp}>
                        Nutrition analysis
                    </button>
                </div>
            </div>
        </div >
    );
};