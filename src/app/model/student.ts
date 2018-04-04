export class IStudent {
    Id: number;
    Name: string;
    Gender: string;
    Country: string;
    City: string;
}

export class Student implements IStudent {
    Id: number = 0;
    Name: string = "";
    Gender: string = "m";
    Country: string = "";
    City: string = "";
}