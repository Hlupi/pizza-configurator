import React, { PureComponent } from 'react';


class Toppings extends PureComponent {
  render() {
    return (
      <div>
        <form>
          <label>
            Pick a sauce:
            <select>
              <option value ="Pineapple">Pineapple</option>
              <option value ="Corn">Corn</option>
              <option value ="Olives (green)">Olives (green)</option>
              <option value ="Red union">Red union</option>
              <option value="Spinach">Spinach</option>
              <option value="Cherry tomatoes">Cherry tomatoes</option>
              <option value="Chicken">Chicken</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Toppings;
