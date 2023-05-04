// import { User } from "./User";
// import { Company } from "./Company";
// const user=new User();
// console.log(user);
// const company=new Company();
(()=>
{
    navigator.geolocation.getCurrentPosition(function(data)
    {
        new google.maps.Map(document.getElementById("map") as HTMLElement,
        {
            zoom:20,
            center:
            {
                lat:data.coords.latitude,
                lng:data.coords.longitude
            }
        });
    })
})()
