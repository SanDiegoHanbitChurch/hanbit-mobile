export type Address = {
    
}

export type Member = {
    id: string;
    koreanName: string;
    englishName?: string;
    phoneNumber?: string;
    email?: string;
    birthDate?: Date;
    photoUrl?: string;
    address: Address;
}