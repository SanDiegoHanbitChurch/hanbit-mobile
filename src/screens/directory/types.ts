export type Address = {
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
}

export type Member = {
    id: string;
    koreanName: string;
    englishName?: string;
    phoneNumber?: string;
    email?: string;
    birthDate?: Date;
    photoUrl?: string;
    address?: Address;
}