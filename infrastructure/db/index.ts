import mysql from "mysql2/promise";

type CreateDBConnection = (
  params: mysql.ConnectionOptions
) => Promise<mysql.Connection>;

export const createDbConnection: CreateDBConnection = async (params) => {
  const connection = await mysql.createConnection(params);

  return connection;
};
