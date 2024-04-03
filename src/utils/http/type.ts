
export interface Headers {
    [key: string]: any
}


export interface Option extends Omit<RequestInit, 'Headers'> {
    
}