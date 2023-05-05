import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { Company } from "./Company";
//* so here the customMap intention to create is to hide the functionalities what we are using for developers they dont wann 
//* mess with this i.e reason while creating the google map properties in class i made private to restrict the access
/**
 ** So what ever instance varible you created that should not access the google.maps.Map functionalites , 
 ** So now that map instance cannot access the google.map.Map object and the next user cannot mess the code 
 */
const map=new CustomMap("map");
const user=new User();
const company=new Company();
map.addUserMarker(user);
map.addCompanyMarker(company);
