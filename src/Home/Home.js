import '../css/Home.css';

export const Home = () => {
    return (
        <div className='farm-container'>
            <img className="farm-image" src='https://images.unsplash.com/photo-1467740100611-36858db27485?q=80&w=2346&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Farm Icon" />
            <div className='farm-text'>
                <p >
                    Blue Sky Farm is a 100-acre, fifth-generation family-owned and operated farm located in the picturesque plains of Saskatchewan, renowned for its breathtaking "living skies." The expansive skies of Saskatchewan provide a stunning backdrop to our fields, offering a daily display of vibrant sunsets.
                </p>
                <p>
                    We grow various vegetables, fruits, berries,  mushrooms and flowers, and sell our produce on the farm.
                </p>
            </div>
        </div>

    );
};;;