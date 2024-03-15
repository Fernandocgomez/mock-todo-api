import * as mongoose from "mongoose";

export const databaseProviders = [
  {
    provide: "DATABASE_CONNECTION",
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect("mongodb+srv://fernandocgomez:WUeghL4mho0VNhwS@cluster0.mpdw13d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"),
  },
];