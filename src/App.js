import './App.css';
import bag_1 from './assets/bag_1.png'
import bag_2 from './assets/bag_2.png'
import bag_3 from './assets/bag_3.png'
import bag_4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import our_story from './assets/our_story.png'
import Products from './components/Products'
import Button from "./components/Button";
import Tiles from "./components/Tiles"

function App() {
  return (
      <>
      <h1>Pursuit of Happiness</h1>

        <nav>

            <Button isDisabled={false} clickHandler={() => console.log("To the collection")}>
                To the collection
            </Button>
            <Button isDisabled={false} clickHandler={() => console.log("Shop all bags")}>
                Shop all bags
            </Button>
            <Button isDisabled={true} clickHandler={() => console.log("To the pre-orders")}>
                Pre-orders
            </Button>

        </nav>

        <main>
            <Products
                button="Best Seller"
                image={bag_1}
                name="The Handy Bag"
                price="400"
            />

            <Products
                button="Best Seller"
                image={bag_2}
                name="The Stylish Bag"
                price="250"
            />

            <Products
                button="New Collection"
                image={bag_3}
                name="The Simple Bag"
                price="300"
            />

            <Products
                button="Best Seller"
                image={bag_4}
                name="The Trendy Bag"
                price="150"
            />

        </main>

        <footer>

            <Tiles title="The brand">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolores eveniet explicabo inventore libero, nemo nobis non optio quis rem saepe similique soluta, totam voluptate?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolores eveniet explicabo inventore libero, nemo nobis non optio quis rem saepe similique soluta, totam voluptate?</p>
            </Tiles>
            <Tiles img={brand} imgDescription="The brand logo" />
            <Tiles img={our_story} imgDescription="The designers" />
            <Tiles title="Our story">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur culpa eum facilis, harum ipsam, magnam natus numquam obcaecati pariatur perspiciatis qui quibusdam quidem quo rerum sapiente tempora tempore, velit! Eaque enim eum, excepturi explicabo iure labore laudantium mollitia qui?</p>
            </Tiles>

        </footer>
      </>
  );
}

export default App;
