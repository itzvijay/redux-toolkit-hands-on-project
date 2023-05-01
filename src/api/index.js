import Chance from "chance";

const chance = Chance();

//Chance is nothing but the npm package which gives us a random name with middle name

export const fakeUserData = () => {
    console.log(chance.name({middle:true}));
    return chance.name({middle:true});
}