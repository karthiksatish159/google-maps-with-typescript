// import { User } from "./User";
// import { Company } from "./Company";
// const user=new User();
// console.log(user);
// const company=new Company();
new google.maps.Map(document.getElementById("map") as HTMLElement,
{
    zoom:8,
    center:
    {
        lat:0,
        lng:0
    }
});