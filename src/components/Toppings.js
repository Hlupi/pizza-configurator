import React, {PureComponent} from 'react';

const toppingTypes = [
  "Pineapple",
  "Corn",
  "Olives (green)",
  "Red union",
  "Spinach",
  "Cherry tomatoes",
  "Chicken"
]

class Toppings extends PureComponent {
  render() {
    return (<div>
      {/* <form>
          <label>
            Pick up to 3 toppings:
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
        </form> */
      }

      <div>
        <label className="form-label">Pick up to 3 toppings:</label>
        <div className="checkbox-group">
          {
            toppingTypes.map(toppingType => {
              return (<label key={toppingType} className="form-label capitalize">
                <input className="form-checkbox" name={toppingType} value={toppingType} type="checkbox"/> {toppingType}
              </label>);
            })
          }
        </div>
      </div>

    </div>);
  }
}

export default Toppings;
