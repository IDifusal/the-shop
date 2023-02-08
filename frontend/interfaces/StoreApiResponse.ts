export interface StoreAPIResponse {
    data: Store[];
}

export interface Store {
    id:       number;
    name:     string;
    category: string;
    links:    Link[];
}

export interface Link {
    rel: string;
    uri: string;
}
