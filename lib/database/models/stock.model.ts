import { Document, Schema, model, models } from "mongoose";

export interface IStock extends Document {
  _id: string;
  symbol: string;
    name: string;
    closingPrice: number;
    highPrice: number;
    lowPrice: number;
    openPrice: number;
    previousClose: number;
    change: number;
    changePercent: number;
    volume: number;
    avgVolume: number;
    marketCap: number;
    peRatio: number;
    week52High: number;
    week52Low: number;
    ytdChange: number;
    
    exchange: string;
    industry: string;
    website: string;
    description: string;
    CEO: string;

  
}

const StockSchema = new Schema({
    symbol: { type: String, required: true },
        name: { type: String, required: true },
        closingPrice: { type: Number, required: true },
        highPrice: { type: Number, required: true },
        lowPrice: { type: Number, required: true },
        openPrice: { type: Number, required: true },
        previousClose: { type: Number, required: true },
        change: { type: Number, required: true },
        changePercent: { type: Number, required: true },
        volume: { type: Number, required: true },
        avgVolume: { type: Number, required: true },
        marketCap: { type: Number, required: true },
        peRatio: { type: Number, required: true },
        week52High: { type: Number, required: true },
        week52Low: { type: Number, required: true },
        ytdChange: { type: Number, required: true },
        
        exchange: { type: String, required: true },
        industry: { type: String, required: true },
        website: { type: String, required: true },
        description: { type: String, required: true },
        CEO: { type: String, required: true },
    
    })
  


const Stock = models.Stock || model('Stock', StockSchema);

export default Stock;

