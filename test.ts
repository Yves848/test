import { iCateg } from "../advalvas/src/app/ads/interfaces/iCategories";
import data from "./categories.json";
var categs: iCateg[] = [];

async function asyncForEach(array: any, callback: any) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}



const getCategs = async (aCategs: iCateg[], parent?: iCateg) => {
  asyncForEach(aCategs, async (categ: iCateg) => {
    categ.parent = parent;
     if (categ.subCategories) {
      //console.log(categ.name);
       await getCategs(categ.subCategories,categ);
     }
     
  });
};

const printCategs = async (aCategs: iCateg[], parent?: iCateg) => {
  asyncForEach(aCategs, async (categ: iCateg) => {
    console.log(categ)
     if (categ.subCategories) {
      //console.log(categ.name);
       await printCategs(categ.subCategories);
     }
     
  });
};
categs = data;

(async () => {
  await getCategs(categs);
  //console.log(categs);
  await printCategs(categs);
})();
