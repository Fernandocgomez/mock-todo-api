import * as mongoose from "mongoose";

export const databaseProviders = [
  {
    provide: "DATABASE_CONNECTION",
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.mpdw13d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`),
  },
];