import axios from "axios";
import Trade from "../Models/TradeModel.js";
export const sendData = async (req, res, next) => {
  try {
    const url = "https://api.wazirx.com/api/v2/tickers";
    const response = await axios.get(url);
    const top_data = Object.values(response.data);
    const top10data = top_data.slice(0, 10);
    let id = 1;
    for (const data of top10data) {
      const newData = {
        id: id,
        name: data.name,
        last: data.last,
        buy: data.buy,
        sell: data.sell,
        volume: data.volume,
        base_unit: data.base_unit,
      };
      const newTrade = new Trade(newData);
      await newTrade.save();
      id = id + 1;
    }
    res.status(200).send("Successfull");
  } catch (error) {
    next(error);
  }
};
export const getData = async (req, res, next) => {
  try {
    const data = await Trade.find();
    if (!data) {
      return res.status(200).send("No data to display");
    }
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};
