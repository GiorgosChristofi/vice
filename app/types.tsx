import * as SQLite from "expo-sqlite";

export type viceAndAmount = {
  viceId: number;
  amount: number;
};

export type viceAndDate = {
  viceId: number;
  dateFrom?: string;
  dateTo?: string;
};
