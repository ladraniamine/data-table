import { Trow } from "../Context/Types/TableTypes"

export function calculatePower (row: Trow){
    const { hp,attack,defense,special_attack,special_defense,speed} = row
    return hp + attack + defense + special_attack + special_defense + speed
}

export function calculatAllPowers(rows: Trow[]){
   return rows.map((row) => calculatePower(row))
}

export function calculateMaximumNumber(arrayOfNumbers:number[]){
   return Math.max(...arrayOfNumbers)
}

export function calculateMinimumNumber(arrayOfNumbers:number[]){
    return Math.min(...arrayOfNumbers)
 }

export function displayPerPage(rows:Trow[],page:number,rowsPerPage:number ){
   return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
} 

export function filterByName(rows:Trow[],searchByName: string){
   return rows.filter(({ name }) =>
      name.toLocaleLowerCase().includes(searchByName.toLocaleLowerCase()),
    );
}

export function filterByPowerThreshold(rows:Trow[],PowerThreshold: number){
   return rows.filter((row) => calculatePower(row) >= PowerThreshold,)
}