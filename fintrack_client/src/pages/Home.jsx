import { PieChart } from "react-minimal-pie-chart";
import { Icon } from "@iconify/react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  responsive: true,
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Monthly Spending",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "#3D5AF1",
      backgroundColor: "#fff",
    },
  ],
};

const Home = () => {
  const defaultLabelStyle = {
    fontSize: "10px",
    fontFamily: "sans-serif",
    fill: "white",
  };

  const handleSubmit = () => {
    console.log("Submitted");
  };

  return (
    <div className="home">
      <div className="sec1">
        <div className="budget">
          <h2>Current Budget</h2>
          <h1>Rs. 10145</h1>
          <h4>Aug 2022</h4>
          <br />
          <div className="spend">
            <PieChart
              lineWidth={30}
              style={{ height: "100px" }}
              label={({ dataEntry }) => Math.round(dataEntry.percentage) + "%"}
              labelStyle={{
                ...defaultLabelStyle,
              }}
              labelPosition={30}
              data={[
                { lineWidth: 10, title: "One", value: 10, color: "#7ED957" },
                { lineWidth: 10, title: "Two", value: 15, color: "#FF5757" },
              ]}
            />
            <div className="text">
              <h4>
                {" "}
                <b>Spending</b>{" "}
              </h4>
              <h4>Rs. 70210</h4>
            </div>
          </div>
          <div className="icons">
            <span class="material-symbols-outlined">add</span>
            <span class="material-symbols-outlined">settings</span>
          </div>
        </div>
        <div className="sec1_1">
          <div className="account">
            <div className="button">
              <div className="text">
                {" "}
                <b>Account 1</b> <br /> Rs.11999
              </div>
              <div className="icon">
                <Icon icon="mdi:circle-edit-outline" width="30" height="30" />
              </div>
            </div>
            <div className="button">
              <div className="text">
                {" "}
                <b>Account 2</b> <br /> Rs.15949
              </div>
              <div className="icon">
                <Icon icon="mdi:circle-edit-outline" width="30" height="30" />
              </div>
            </div>
            <div className="button">
              <div className="icon">
                <Icon
                  icon="material-symbols:add-circle-outline"
                  width="30"
                  height="30"
                />
              </div>
            </div>
          </div>
          <div className="charts">
            <div className="rch">
              <Line options={options} data={data} />
            </div>
          </div>
        </div>
      </div>
      <div className="sec2">
        <div className="tTable">
          <tr>
            <th>Amount</th>
            <th>Type</th>
            <th>Date</th>
          </tr>
          <tr>
            <td>103123</td>
            <td>Shopping</td>
            <td>11/2/2022</td>
          </tr>
          <tr>
            <td>6251</td>
            <td>Food</td>
            <td>31/1/2022</td>
          </tr>
        </div>
        <div className="tForm">
          <form className="create" onSubmit={handleSubmit}>
            <h2>Make new Transaction</h2>
            <div className="form1">
              <div className="field">
              <label htmlFor="ammount">Amount :</label>
              <input type="text" />
              </div>
           <div className="field">
           <label htmlFor="type">Type :</label>
            <select>
              <option value="fruit">Fruit</option>
              <option value="vegetable">Vegetable</option>
              <option value="meat">Meat</option>
            </select>
           </div>
            </div>
           <div className="form1">
            <div className="field">
            <label htmlFor="acc">Account :</label>
            <select>
              <option value="fruit">Fruit</option>
              <option value="vegetable">Vegetable</option>
              <option value="meat">Meat</option>
            </select>
            </div>
           
            <button>Submit</button>
           </div>
    
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
