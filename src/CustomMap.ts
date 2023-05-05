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
}