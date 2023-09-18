import React from 'react';
import { wineList } from '../constant';
import {calculateMean,calculateMedian,calculateMode, groupBy } from '../utils';


const wineCategory = groupBy(wineList,i => i.Alcohol);
const classWiseCategory = Object.keys(wineCategory);

const FlavanoidsDataClassOne = wineCategory?.[1]?.map((_fla) =>  Number(_fla?.Flavanoids));
const FlavanoidsDataClassTwo = wineCategory?.[2]?.map((_fla) =>  Number(_fla?.Flavanoids));
const FlavanoidsDataClassThree = wineCategory?.[3]?.map((_fla) =>  Number(_fla?.Flavanoids));

const measuredData = [
    {
        name: "Flavanoids Mean",
        class1: calculateMean(FlavanoidsDataClassOne),
        class2: calculateMean(FlavanoidsDataClassTwo),
        class3: calculateMean(FlavanoidsDataClassThree),

    },
    {
        name: "Flavanoids Median",
        class1: calculateMedian(FlavanoidsDataClassOne),
        class2: calculateMedian(FlavanoidsDataClassTwo),
        class3: calculateMedian(FlavanoidsDataClassThree),

    },
    {
        name: "Flavanoids Mode",
        class1: calculateMode(FlavanoidsDataClassOne),
        class2: calculateMode(FlavanoidsDataClassTwo),
        class3: calculateMode(FlavanoidsDataClassThree),

    },
]

export const Flavanoids = () => {
  return ( 
    <div>
      <table>
        <tbody>
                <tr>
                    <th>Measure</th>
                    {classWiseCategory?.map((_cat, key) => {
                        return <th key={key}>Class {_cat}</th>
                    })}
                </tr>
                {measuredData.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.class1}</td>
                            <td>{val.class2}</td> 
                            <td>{val.class3}</td>
                        </tr>
                    )
                })}
        </tbody>
      </table>
    </div>
  );
};

