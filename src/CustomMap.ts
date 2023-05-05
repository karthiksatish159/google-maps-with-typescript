import {User} from "./User";
import {Company} from "./Company";
export class CustomMap
{
    private googleMaps:google.maps.Map;
    constructor(htmlElementId:string)
    {
        this.googleMaps=new google.maps.Map(document.getElementById(htmlElementId) as HTMLElement,
        {
            zoom:1,
            center:
            {
                lat:0,
                lng:0
            }
        });
    }
    addMarker(mappable:User|Company)
    {
        new google.maps.Marker(
            {
                map:this.googleMaps,
                position:
                {
                    lat:mappable.location.lat,
                    lng:mappable.location.lng
                }
            })
    }

}