import { useMemo } from "react";
import { Trow } from "../../../../Types/Types";
import { calculatePower } from "../../../../Utils/Helpers";

export function BodyCellData(row: Trow) {
  const dataRow = useMemo(() => {
    return [
      {
        lable: "ID",
        data: row.id,
      },
      {
        lable: "name",
        data: row.name,
      },
      {
        lable: "type",
        data: row.type.join(","),
      },
      {
        lable: "health",
        data: row.hp,
      },
      {
        lable: "attack",
        data: row.attack,
      },
      {
        lable: "defense",
        data: row.defense,
      },
      {
        lable: "special_attack",
        data: row.special_attack,
      },
      {
        lable: "special_defense",
        data: row.special_defense,
      },
      {
        lable: "speed",
        data: row.speed,
      },
      {
        lable: "power",
        data: calculatePower(row),
      },
    ];
  }, [row]);

  return dataRow;
}
