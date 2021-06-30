import { iCateg } from "./iCategories"
import data from "./categories.json";
var categs: iCateg[] = [];
var id: number = 0;

async function asyncForEach(array: any, callback: any) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}



const getCategs = async (aCategs: iCateg[], parent?: iCateg) => {
  //console.log('aCategs',aCategs);
  asyncForEach(aCategs, async (categ: iCateg) => {
    categ.id = id;
    console.log('id, name', categ.id, categ.name);
     if (categ.subCategories) {
      //console.log(categ.name);
       await getCategs(categ.subCategories,categ);
     } 
     id++;
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

//categs = data;

(async () => {
  await getCategs(data);
  //console.log(categs);
  //await printCategs(categs);
})();
