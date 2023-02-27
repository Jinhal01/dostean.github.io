import React from 'react'
import Layout from '../components/Layout/Layout'
import { useState } from 'react';
import Mocktails from '../components/mocktails';


const Menu = () => {
  // const [isShown, setIsShown] = useState(false);

  // const handleClick = event => {
  //   // 👇️ toggle shown state
  //   setIsShown(isShown => !isShown);

  //   // 👇️ or simply set it to true
  //   // setIsShown(true);
  // };

  return (
    <Layout> <h3>
      <section id="menu" className="menu">
        <div className="container background">


          <div className="section-title justify-content-center" >
            <h2>Check our tasty <span>Menu</span></h2>
          </div>

          {/* <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="menu-flters">
                // <li data-filter="*" className="filter-active">Show All</li>
                // <li data-filter=".filter-bevarages" onClick={handleClick} >Bevarages</li>
                // <li data-filter=".filter-continental">Continental</li>
                // <li data-filter=".filter-chinese">Chinese</li>
                // <li data-filter=".filter-soups">Soups</li>
                // <li data-filter=".filter-breads">Breads</li>
                // <li data-filter=".filter-Lebanese">Lebanese</li>
                // <li data-filter=".filter-Wrap">Wraps</li>
                // <li data-filter=".filter-Sandwiches and Buns">Sandwiches and Buns</li>
                // <li data-filter=".filter-Pizza and Pasta">Pizza and Pasta</li>
                // <li data-filter=".filter-Baked dish">Baked Dish</li>
                // <li data-filter=".filter-noodles">Noodlees and Maggie</li>
                // <li data-filter=".filter-indian">Indian</li>
                // <li data-filter=".filter-Sizzler">Sizzler</li>
                // <li data-filter=".filter-salad">Salad</li>
                // <li data-filter=".filter-dessert">Dessert</li>
                // <li data-filter=".filter-accomplishment">Accomplishment</li>

              </ul>
            </div>
          </div> */}

          <div className="row menu-container">


            <div className="col-lg-6 menu-item filter-bevarages">
              <h3 className='Cmn '>Mocktails</h3>
              <div className="menu-content">
                <a href="#Bevarages">Classic Mojito</a><span>Rs. 119</span>
              </div>
              <div className="menu-ingredients">
                All time favourite refreshment drink.
              </div>


              <div className="col-lg-6 menu-item filter-bevarages">
                <div className="menu-content">
                  <a href="#">WaterMelon Mojito</a><span>Rs. 119</span>
                </div>
                <div className="menu-ingredients">
                  Refreshment and Tummy Cooler comes together.
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-bevarages">
                <div className="menu-content">
                  <a href="#">Orange Mojito</a><span>Rs. 119</span>
                </div>
                <div className="menu-ingredients">
                  Tangy Flavour of Orange along with Mint.
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-bevarages">
                <div className="menu-content">
                  <a href="#">Berry Lemonade</a><span>Rs. 159</span>
                </div>
                <div className="menu-ingredients">
                  Craneberry flavour and lemonade combo.
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-bevarages">
                <div className="menu-content">
                  <a href="#">Chilli Orange</a><span>Rs. 159</span>
                </div>
                <div className="menu-ingredients">
                  Needs Spicy Touch lets try it.
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-bevarages">
                <div className="menu-content">
                  <a href="#">Beer Mocktail</a><span>Rs. 209</span>
                </div>
                <div className="menu-ingredients">
                  Non-Alcoholic drink beer flavoured.
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-bevarages">
                <div className="menu-content">
                  <a href="#">Kala Khatta</a><span>Rs. 119</span>
                </div>
                <div className="menu-ingredients">
                  Original kala khatta with a twist of mocktail.
                </div>
              </div>
              <div className="col-lg-6 menu-item filter-bevarages">
                <div className="menu-content">
                  <a href="#">Masala Lemonade</a><span>Rs. 119</span>
                </div>
                <div className="menu-ingredients">
                  Refreshing lemonade.
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-bevarages">
                <div className="menu-content">
                  <a href="#">Kaccha Aam</a><span>Rs. 119</span>
                </div>
                <div className="menu-ingredients">
                  Raw mango flavor on cool mocktail.
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-bevarages">
                <div className="menu-content">
                  <a href="#">Imli</a><span>Rs. 119</span>
                </div>
                <div className="menu-ingredients">
                  Bacpan ki yaado ke saath.
                </div>
              </div> </div>


            <br />

            <h3 className='Cmn' >Shakes</h3>

            <div className="col-lg-6 menu-item filter-bevarages">
              <div className="menu-content">
                <a href="#">Nutella Shake</a><span>Rs. 249</span>
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-bevarages">
              <div className="menu-content">
                <a href="#">Nutella Shake</a><span>Rs. 249</span>
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-bevarages">
              <div className="menu-content">
                <a href="#">Oreo Shake</a><span>Rs. 219</span>
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-bevarages">
              <div className="menu-content">
                <a href="#">Kitket Shake</a><span>Rs. 239</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-bevarages">
              <div className="menu-content">
                <a href="#">Chocolate Chip Shake</a><span>Rs. 219</span>
              </div>
            </div>


            <div className="col-lg-6 menu-item filter-bevarages">
              <div className="menu-content">
                <a href="#">Rose Faluda</a><span>Rs. 199</span>
              </div>
            </div>
            <br />

            <div className="col-lg-6 menu-item filter-bevarages">

              <h3 className='Cmn'>Tea</h3>
              <div className="menu-content">
                <a href="#">Make your own tea</a><span>Rs. 30/45</span>
              </div>



              <div className="col-lg-6 menu-item filter-bevarages">
                <div className="menu-content">
                  <a href="#">Sukun Wali Chai</a><span>Rs. 30/45</span>
                </div>
              </div>


              <div className="col-lg-6 menu-item filter-bevarages">
                <div className="menu-content">
                  <a href="#">Chocolate Chai</a><span>Rs. 50</span>
                </div>
              </div>


              <div className="col-lg-6 menu-item filter-bevarages">
                <div className="menu-content">
                  <a href="#">Green Tea</a><span>Rs. 65</span>
                </div>
              </div>
            </div>


            <br />

            <div className="col-lg-6 menu-item filter-bevarages">
              <h3 className='coffee headings'>Hot Coffee</h3>
              <div className="menu-content">
                <a href="#">Black Coffee</a><span>Rs. 35</span>
              </div>
            </div>


            <div className="col-lg-6 menu-item filter-bevarages">
              <div className="menu-content">
                <a href="#">Milk Coffee</a><span>Rs. 36</span>
              </div>
            </div>


            <div className="col-lg-6 menu-item filter-bevarages">
              <div className="menu-content">
                <a href="#">Chocolate Coffee</a><span>Rs. 65</span>
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-bevarages">
              <div className="menu-content">
                <a href="#">Hot Chocolate with Biscuit Cup</a><span>Rs. 60</span>
              </div>
            </div>


            <div className="col-lg-6 menu-item filter-bevarages">
              <div className="menu-content">
                <a href="#">Classic Hot Chocolate</a><span>Rs. 70</span>
              </div>
            </div>

            <br />
            <div className="col-lg-6 menu-item filter-bevarages">
              <h3 className='Cmn' >Beverages</h3>
              <div className="menu-content">
                <a href="#">Cold Drink</a><span>Rs. 38</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-bevarages">
              <div className="menu-content">
                <a href="#">Lemon ice Tea</a><span>Rs. 129</span>
              </div>
            </div>


            <div className="col-lg-6 menu-item filter-bevarages">
              <div className="menu-content">
                <a href="#">Peach Ice Tea</a><span>Rs. 138</span>
              </div>
            </div>


            <div className="col-lg-6 menu-item filter-bevarages">
              <div className="menu-content">
                <a href="#">Butter Milk</a><span>Rs. 38</span>
              </div>
            </div>

            <br />
            <div className="col-lg-6 menu-item filter-Continental">
              <h3 className='Cmn' >Continental</h3>
              <div className="menu-content">

                <a href="#">Mexican Chilly Beans</a><span>Rs. 119</span>
              </div>
            </div>


            <div className="col-lg-6 menu-item filter- Continental ">
              <div className="menu-content">
                <a href="#">Cream of Tomato</a><span>Rs. 99</span>
              </div>
            </div>


            <div className="col-lg-6 menu-item filter- Continental ">
              <div className="menu-content">
                <a href="#">Corn Cheese Balls</a><span>Rs. 229</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter- Continental ">
              <div className="menu-content">
                <a href="#">Veg Croquettes</a><span>Rs. 209</span>
              </div>
            </div>



            <div className="col-lg-6 menu-item filter- Continental ">
              <div className="menu-content">
                <a href="#">Aranchini Balls</a><span>Rs. 249</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter- Continental ">
              <div className="menu-content">
                <a href="#">Baffalo Cottage Cheese</a><span>Rs. 279</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter- Continental ">
              <div className="menu-content">
                <a href="#">Paneer Satay</a><span>Rs. 279</span>
              </div>
            </div>


            <div className="col-lg-6 menu-item filter- Continental ">
              <div className="menu-content">
                <a href="#">Masala Khichiya</a><span>Rs. 99</span>
              </div>
            </div>


            <div className="col-lg-6 menu-item filter- Continental ">
              <div className="menu-content">
                <a href="#">Mexican Masala Kurkuri bites</a><span>Rs. 159</span>
              </div>
            </div>
            <div className="col-lg-6 menu-item filter- Continental ">
              <div className="menu-content">
                <a href="#">Beans Nachos</a><span>Rs. 249</span>
              </div>
            </div>


            <div className="col-lg-6 menu-item filter- Continental ">
              <div className="menu-content">
                <a href="#">Cheese Nachos</a><span>Rs. 239</span>
              </div>
            </div>


            <div className="col-lg-6 menu-item filter- Continental ">
              <div className="menu-content">
                <a href="#">Quesadilla</a><span>Rs. 219</span>
              </div>
            </div>



            <div className="col-lg-6 menu-item filter- Continental ">
              <div className="menu-content">
                <a href="#">Mexican Burrito Bowl</a><span>Rs. 259</span>
              </div>
            </div>


            <div className="col-lg-6 menu-item filter- Continental ">
              <div className="menu-content">
                <a href="#">Cilantro Rice with Garlic Sauce</a><span>Rs. 249</span>
              </div>
            </div>


            <div className="col-lg-6 menu-item filter- Continental ">
              <div className="menu-content">
                <a href="#">Herb rice with Cheese Sauce</a><span>Rs. 249</span>
              </div>
            </div>
            <br />
            <h3 className='Cmn' >Soup</h3>
            <div className="col-lg-6 menu-item filter- Soup ">
              <div className="menu-content">
                <a href="#">Manchow</a><span>Rs. 99</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter- Soup ">
              <div className="menu-content">
                <a href="#">Hot N Sour</a><span>Rs. 99</span>
              </div>
            </div>


            <div className="col-lg-6 menu-item filter- Soup ">
              <div className="menu-content">
                <a href="#">Lemon Coriander</a><span>Rs. 99</span>
              </div>
            </div>


            <div className="col-lg-6 menu-item filter- Soup ">
              <div className="menu-content">
                <a href="#">Burnt Garlic Soup</a><span>Rs. 119</span>
              </div>
            </div>
            <br />
            <h3 className='Cmn' >Breads</h3>
            <div className="col-lg-6 menu-item filter- Breads ">
              <div className="menu-content">
                <a href="#">Paneer Makhni Garlic Bread</a><span>Rs. 189</span>
              </div>
            </div>



            <div className="col-lg-6 menu-item filter- Breads ">
              <div className="menu-content">
                <a href="#">Crostini-Two Flavors</a><span>Rs. 199</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter- Breads ">
              <div className="menu-content">
                <a href="#">Spicy Garlic Bread</a><span>Rs. 169</span>
              </div>
            </div>


            <div className="col-lg-6 menu-item filter- Breads ">
              <div className="menu-content">
                <a href="#">Cheese Garlic Bread</a><span>Rs. 149</span>
              </div>
            </div>


            <div className="col-lg-6 menu-item filter- Breads ">
              <div className="menu-content">
                <a href="#">OTC Garlic Bread</a><span>Rs. 179</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-chinese">
              <div className="menu-content">
                <a href="#">Veg Manchurian</a><span>Rs. 169</span>
              </div>
              <div className="menu-ingredients">
                Vegetable balls toasted in classic sause.
              </div>
            </div>
            <br />
            <h3 className='Cmn' >Chinese</h3>
            <div className="col-lg-6 menu-item filter-chinese">
              <div className="menu-content">
                <a href="#">Green Manchurian</a><span>Rs. 189</span>
              </div>
              <div className="menu-ingredients">
                Vegetable balls toasted with cheese spinach sauce.
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-chinese">
              <div className="menu-content">
                <a href="#">Paneer Chilly</a><span>Rs. 229</span>
              </div>
              <div className="menu-ingredients">
                Coated Fried Paneer toasted in classic chilly sause.
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-chinese">
              <div className="menu-content">
                <a href="#">BBQ Paneer</a><span>Rs. 229</span>
              </div>
              <div className="menu-ingredients">
                Smoky flavor oriental style Paneer.
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-chinese">
              <div className="menu-content">
                <a href="#">Paneer Red Pepper</a><span>Rs. 249</span>
              </div>
              <div className="menu-ingredients">
                Spicy flavor sause toasted with Paneer and red paprika.
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-chinese">
              <div className="menu-content">
                <a href="#">Veg Crispy</a><span>Rs. 209</span>
              </div>
              <div className="menu-ingredients">
                Crunchy vegetables toasted with mid spicy sauce.
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-chinese">
              <div className="menu-content">
                <a href="#">Fried Rice</a><span>Rs. 189</span>
              </div>
              <div className="menu-ingredients">
                Classic aromatic Chinese rice.
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-chinese">
              <div className="menu-content">
                <a href="#">Schezwan Rice</a><span>Rs. 199</span>
              </div>
              <div className="menu-ingredients">
                Oriental spicy rice with vegetables.
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-chinese">
              <div className="menu-content">
                <a href="#">Burnt Garlic</a><span>Rs. 229</span>
              </div>
              <div className="menu-ingredients">
                Aroma and taste of burnt garlic in oriental rice.
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-chinese">
              <div className="menu-content">
                <a href="#">Triple Rice</a><span>Rs. 279</span>
              </div>
              <div className="menu-ingredients">
                Three type of rice along with veg exotic gravy.
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-chinese">
              <div className="menu-content">
                <a href="#">Gravy Manchurian</a><span>Rs. 199</span>
              </div>
              <div className="menu-ingredients">
                Vegetables balls served with classic Manchurian gravy
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-chinese">
              <div className="menu-content">
                <a href="#">Exotic Veg in Garlic Sauce</a><span>Rs. 239</span>
              </div>
              <div className="menu-ingredients">
                Roasted Veg served with Garlic sauce gravy,
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-chinese">
              <div className="menu-content">
                <a href="#">Panner Chilly Gravy</a><span>Rs. 249</span>
              </div>
              <div className="menu-ingredients">
                Coated Fried Paneer floated in rich gravy,
              </div>
            </div>
            <br />
            <h3 className='Cmn' >Noodles</h3>
            <div className="col-lg-6 menu-item filter-noodles">
              <div className="menu-content">
                <a href="#">Hakka Noodles</a><span>Rs. 169</span>
              </div>
              <div className="menu-ingredients">
                Crunchy vegetables toasted with mid spicy sauce.
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-noodles">
              <div className="menu-content">
                <a href="#">Burnt Garlic Noodles</a><span>Rs. 189</span>
              </div>
              <div className="menu-ingredients">
                Noodles toasted Vegetables with burnt garlic.
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-noodles">
              <div className="menu-content">
                <a href="#">Schezwan Noodles</a><span>Rs. 179</span>
              </div>
              <div className="menu-ingredients">
                Spicy aromatic noodles.
              </div>
            </div>
            <br />
            <div className="col-lg-6 menu-item filter-Lebanese">
              <h3 className='lebanese'>Lebanese</h3>
              <div className="menu-content">
                <a href="#">Hummus Platter</a><span>Rs. 319</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-Lebanese">
              <div className="menu-content">
                <a href="#">Falafel Platter</a><span>Rs. 339</span>
              </div>
            </div>
            <br />
            <div className="col-lg-6 menu-item filter-Wrap">
              <h3 className='wrap'>Wrap</h3>
              <div className="menu-content">
                <a href="#">Healthy Veg Wrap</a><span>Rs. 179</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-Wrap">
              <div className="menu-content">
                <a href="#">Mexican Burrito Wrap</a><span>Rs. 199</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-Wrap">
              <div className="menu-content">
                <a href="#">Tandoori Paneer Shawarma Wrap</a><span>Rs. 199</span>
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-Wrap">
              <div className="menu-content">
                <a href="#">Mushroom Wrap</a><span>Rs. 179</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-Wrap">
              <div className="menu-content">
                <a href="#">Falafel Wrap</a><span>Rs. 219</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-Wrap">
              <div className="menu-content">
                <a href="#">Falafel Pocket</a><span>Rs. 239</span>
              </div>
            </div>
            <br />
            <h3 className='Cmn' >Sandwiches and Buns</h3>
            <div className="col-lg-6 menu-item filter-Sandwiches and Buns">
              <div className="menu-content">
                <a href="#">Classic Veg</a><span>Rs. 69</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-Sandwiches and Buns">
              <div className="menu-content">
                <a href="#">Veg Chesse</a><span>Rs. 89</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-Sandwiches and Buns">
              <div className="menu-content">
                <a href="#">Masala Grill</a><span>Rs.189</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-Sandwiches and Buns">
              <div className="menu-content">
                <a href="#">Bread Butter- Jam,Chatni</a><span>Rs. 48</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-Sandwiches and Buns">
              <div className="menu-content">
                <a href="#">Peri Peri Toast</a><span>Rs. 149</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-Sandwiches and Buns">
              <div className="menu-content">
                <a href="#">Paneer Toast</a><span>Rs. 159</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-Sandwiches and Buns">
              <div className="menu-content">
                <a href="#">Dostea Special Toast Sandwich</a><span>Rs. 179</span>
              </div>
            </div>


            <div className="col-lg-6 menu-item filter-Sandwiches and Buns">
              <div className="menu-content">
                <a href="#">Plain Maska Bun</a><span>Rs. 29</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-Sandwiches and Buns">
              <div className="menu-content">
                <a href="#">Masala Maska Bun</a><span>Rs. 48</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-Sandwiches and Buns">
              <div className="menu-content">
                <a href="#">Peri Peri Maska Bun</a><span>Rs. 48</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-Sandwiches and Buns">
              <div className="menu-content">
                <a href="#">Tandoori Maska Bun</a><span>Rs. 48</span>
              </div>
            </div>
            <br />
            <h3 className='Cmn' >Pizza and Pasta</h3>
            <div className="col-lg-6 menu-item filter-Pizza and Pasta">

              <div className="menu-content">
                <a href="#">Margarita</a><span>Rs. 259</span>
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-Pizza and Pasta">
              <div className="menu-content">
                <a href="#">Pepper Pizza</a><span>Rs. 269</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-Pizza and Pasta">
              <div className="menu-content">
                <a href="#">Garden Fresh</a><span>Rs. 269</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-Pizza and Pasta">
              <div className="menu-content">
                <a href="#">Peri Peri Paneer Pizza</a><span>Rs. 319</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-Pizza and Pasta">
              <div className="menu-content">
                <a href="#">Paneer Tikka Pizza</a><span>Rs. 319</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-Pizza and Pasta">
              <div className="menu-content">
                <a href="#">Hawaiian Pizza</a><span>Rs. 269</span>
              </div>
            </div>


            <div className="col-lg-6 menu-item filter-Pizza and Pasta">
              <div className="menu-content">
                <a href="#">Mexican</a><span>Rs. 319</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-Pizza and Pasta">
              <div className="menu-content">
                <a href="#">Creamy Cheese</a><span>Rs. 259</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-Pizza and Pasta">
              <div className="menu-content">
                <a href="#">Pica to Redasto</a><span>Rs. 259</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-Pizza and Pasta">
              <div className="menu-content">
                <a href="#">Tomatino Basil</a><span>Rs. 249</span>
              </div>
            </div>
            <br />
            <h3 className='Cmn' >Baked Dish</h3>
            <div className="col-lg-6 menu-item filter-Baked Dish">
              <div className="menu-content">
                <a href="#">Corn Spinach Lasagna</a><span>Rs. 269</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-Baked Dish">
              <div className="menu-content">
                <a href="#">Paneer Makhni Lasagna</a><span>Rs. 289</span>
              </div>
            </div>

            <div className="col-lg-6 menu-item filter-Baked Dish">
              <div className="menu-content">
                <a href="#">Enchiladas</a><span>Rs. 239</span>
              </div>
            </div>
            <br />
            <h3 className='Cmn' >Continental Rice</h3>
            <div className="col-lg-6 menu-item filter-Continental Rice">
              <div className="menu-content">
                <a href="#">Mexican Burrito Rice</a><span>Rs. 259</span>
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-Continental Rice">
              <div className="menu-content">
                <a href="#">Cilantro Rice With Garlic Sauce</a><span>Rs. 249</span>
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-Continental Rice">
              <div className="menu-content">
                <a href="#">Herb Rice with Cheese Sauce</a><span>Rs. 249</span>
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-Continental Rice">
              <div className="menu-content">
                <a href="#">Fried Rice</a><span>Rs. 189</span>
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-Continental Rice">
              <div className="menu-content">
                <a href="#">Schezwan Rice</a><span>Rs. 199</span>
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-Continental Rice">
              <div className="menu-content">
                <a href="#">Burnt Rice</a><span>Rs. 229</span>
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-Continental Rice">
              <div className="menu-content">
                <a href="#">Triple Rice</a><span>Rs. 279</span>
              </div>
            </div>
            <br />
            <h3 className='Cmn' >Chinese Gravy</h3>
            <div className="col-lg-6 menu-item filter-Chinese Gravy">
              <div className="menu-content">
                <a href="#">Gravy Manchurian</a><span>Rs. 199</span>
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-Chinese Gravy">
              <div className="menu-content">
                <a href="#">Exotic Veg in Garlic Sauce</a><span>Rs. 239</span>
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-Chinese Gravy">
              <div className="menu-content">
                <a href="#">Paneer Chilly gravy</a><span>Rs. 249</span>
              </div>
            </div>
            <div className="col-lg-6 menu-item filter-Chinese Gravy">
              <div className="menu-content">
                <a href="#">Gravy Manchurian</a><span>Rs. 199</span>
              </div>
            </div>




          </div>

        </div>
      </section>


    </h3>
    </Layout>
  )
}

export default Menu