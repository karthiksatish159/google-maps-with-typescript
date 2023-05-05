interface Mappable //Instructions to every other class 
                   // On how they can be an argument to `addMarker`
{
    location:
    {
        lat:number,
        lng:number
    };
    markerContent():string
};
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
    addMarker(mappable:Mappable)
    {
       const marker= new google.maps.Marker(
            {
                map:this.googleMaps,
                position:
                {
                    lat:mappable.location.lat,
                    lng:mappable.location.lng
                }
            });
        marker.addListener('click',()=>
        {
            const infoWindow=new google.maps.InfoWindow(
                {
                    content:mappable.markerContent()
                });
            infoWindow.open(this.googleMaps,marker);
        })
    }
}