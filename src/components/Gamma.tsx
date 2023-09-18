import React from 'react';
import { wineList } from '../constant';
import {calculateMean,calculateMedian,calculateMode, groupBy } from '../utils';

const updatedWineList = wineList.map((ele) => ({
    ...ele,
    Gamma : ((Number(ele.Ash) * ele.Hue) / ele.Magnesium).toFixed(3)
  }));

const wineCategory = groupBy(updatedWineList,i => i.Alcohol);
const classWiseCategory = Object.keys(wineCategory);

const GammaDataClassOne = wineCategory?.[1]?.map((_fla) =>  Number(_fla?.Gamma));
const GammaDataClassTwo = wineCategory?.[2]?.map((_fla) =>  Number(_fla?.Gamma));
const GammaDataClassThree = wineCategory?.[3]?.map((_fla) =>  Number(_fla?.Gamma));

const measuredData = [
    {
        name: "Gamma Mean",
        class1: calculateMean(GammaDataClassOne),
        class2: calculateMean(GammaDataClassTwo),
        class3: calculateMean(GammaDataClassThree),

    },
    {
        name: "Gamma Median",
        class1: calculateMedian(GammaDataClassOne),
        class2: calculateMedian(GammaDataClassTwo),
        class3: calculateMedian(GammaDataClassThree),

    },
    {
        name: "Gamma Mode",
        class1: calculateMode(GammaDataClassOne),
        class2: calculateMode(GammaDataClassTwo),
        class3: calculateMode(GammaDataClassThree),

    },
]

export const Gamma = () => {
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

