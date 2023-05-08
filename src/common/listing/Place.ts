class Place {

    readonly NULL_PLACE_ID: string = 'NULL';

    name: string;
    rating: number;
    location: string;
    private id: string;

    constructor(name: string, rating: number, location: string, id?: string){
        this.name = name;
        this.rating = rating;
        this.location = location;
        this.id = id ?? this.NULL_PLACE_ID;
    }

    public getName(): string{
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getRating(): number {
        return this.rating;
    }

    public setRating(rating: number): void {
        this.rating = rating;
    }

    public getLocation(): string {
        return this.location;
    }

    public setLocation(location: string): void {
        this.location = location;
    }

    public getId(): string {
        return this.id ?? this.NULL_PLACE_ID;
    }

    public setId(id: string): void {
        this.id = id;
    }

}

export default Place;