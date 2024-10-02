import { viceAndAmount, viceAndDate } from "@/app/types";
import * as SQLite from "expo-sqlite";
import { useState, useEffect } from "react";
import { Platform } from "react-native";

let db: SQLite.SQLiteDatabase;

export async function openDatabase(dbInput: SQLite.SQLiteDatabase) {
  db = dbInput;
  console.log("log");
  if (Platform.OS === "web") {
    return Promise.resolve();
  }
  db.withTransactionSync(() => {
    db.execAsync(
      `
        create table if not exists vices (id integer primary key AUTOINCREMENT, name text);
        create table if not exists uses (id integer primary key AUTOINCREMENT, vice_id integer, amount integer ,time datetime, FOREIGN KEY(vice_id) REFERENCES vices(id));
        `
    )
      .then(() => {
        console.log(db.getAllSync(`SELECT * FROM vices;`));
        console.log(db.getAllSync(`SELECT * FROM uses;`));
      })
      .catch((error) => {
        console.error("Error executing transaction:", error);
      });
  });
}

export function persistUse({ viceId, amount }: viceAndAmount) {
  {
    const statement = db.prepareSync(
      `INSERT INTO uses (vice_id, time, amount) VALUES ($vice_id, datetime(), $amount);`
    );
    //TODO error handling
    let result = statement.executeSync({
      $vice_id: viceId,
      $amount: amount,
    });

    console.log(result);
    console.log(db.getAllSync(`SELECT * FROM vices;`));
    console.log(db.getAllSync(`SELECT * FROM uses;`));

    console.log(
      db.getAllSync(
        `SELECT COUNT(*) FROM uses JOIN vices ON vices.id = uses.vice_id;`
      )
    );
  }
}

export function getCount({ viceId, dateFrom, dateTo }: viceAndDate) {
  let statement;
  let result; //: Iterable<unknown>;
  if (dateFrom == undefined) {
    statement = db.prepareSync(
      `SELECT SUM(amount) FROM uses JOIN vices ON vices.id = uses.vice_id AND vices.id = $vice_id;`
    );
    result = statement.executeSync({
      $vice_id: viceId,
    });
  } else {
    result = db.getAllSync(
      `SELECT SUM(amount) FROM uses JOIN vices ON vices.id = uses.vice_id WHERE vices.id = $vice_id AND uses.time > $date_from;`,
      {
        $vice_id: viceId,
        $date_from: dateFrom,
      }
    );
  }

  let count =
    (Array.from(result)[0] as { "SUM(amount)": number })["SUM(amount)"] ?? 0;

  console.log(count);

  return count;
}
