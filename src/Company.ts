import faker from "faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable
{
    companyName:string;
    catchPharse:string;
    location:
    {
        lat:number,
        lng:number
    };
    color:string="red";
    constructor()
    {
        this.companyName=faker.company.companyName();
        this.catchPharse=faker.company.catchPhrase();
        this.location=
        {
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }
    }
    markerContent():string
    {
        return `
                <div>
                <h1>CompanyName: ${this.companyName}</h1>
                <h3>Catch Pharse: ${this.catchPharse}</h3>
                </div>
            `;
    }
}
